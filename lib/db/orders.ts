import { PutCommand, GetCommand, QueryCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { docClient, ORDERS_TABLE_NAME } from "./client";
import type { Order, OrderStatus, CreateOrderRequest } from "@/lib/types/order";

export class OrderNotFoundError extends Error {
  constructor(orderId: string) {
    super(`Order not found: ${orderId}`);
    this.name = "OrderNotFoundError";
  }
}

export class OrderValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "OrderValidationError";
  }
}

function generateOrderId(): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `ORD-${timestamp}-${random}`;
}

export async function createOrder(data: CreateOrderRequest): Promise<Order> {
  // Validation
  if (!data.customer.email || !data.customer.firstName || !data.customer.lastName) {
    throw new OrderValidationError("Customer email, first name, and last name are required");
  }

  if (!data.shipping.address || !data.shipping.city || !data.shipping.province || !data.shipping.postalCode) {
    throw new OrderValidationError("Complete shipping address is required");
  }

  if (!data.items || data.items.length === 0) {
    throw new OrderValidationError("Order must contain at least one item");
  }

  if (data.total !== data.subtotal + data.shippingCost) {
    throw new OrderValidationError("Order total must equal subtotal plus shipping cost");
  }

  const now = new Date().toISOString();
  const order: Order = {
    orderId: generateOrderId(),
    createdAt: now,
    updatedAt: now,
    status: "Pending",

    customerEmail: data.customer.email,
    customerFirstName: data.customer.firstName,
    customerLastName: data.customer.lastName,
    customerPhone: data.customer.phone,

    shippingAddress: data.shipping.address,
    shippingAddress2: data.shipping.address2,
    shippingCity: data.shipping.city,
    shippingProvince: data.shipping.province,
    shippingPostalCode: data.shipping.postalCode,
    shippingCountry: data.shipping.country,

    subtotal: data.subtotal,
    shippingCost: data.shippingCost,
    total: data.total,

    items: data.items,
    itemCount: data.items.reduce((sum, item) => sum + item.quantity, 0),
    paymentMethod: "EFT",
    emailSent: false,
  };

  await docClient.send(
    new PutCommand({
      TableName: ORDERS_TABLE_NAME,
      Item: order,
    })
  );

  return order;
}

export async function getOrder(orderId: string): Promise<Order | null> {
  const result = await docClient.send(
    new GetCommand({
      TableName: ORDERS_TABLE_NAME,
      Key: { orderId },
    })
  );

  return result.Item as Order || null;
}

export async function listOrders(status?: OrderStatus, limit: number = 100): Promise<Order[]> {
  if (status) {
    // Query using status GSI
    const result = await docClient.send(
      new QueryCommand({
        TableName: ORDERS_TABLE_NAME,
        IndexName: "statusIndex",
        KeyConditionExpression: "#status = :status",
        ExpressionAttributeNames: {
          "#status": "status",
        },
        ExpressionAttributeValues: {
          ":status": status,
        },
        ScanIndexForward: false, // Sort descending by createdAt
        Limit: limit,
      })
    );

    return (result.Items || []) as Order[];
  } else {
    // Scan all orders (less efficient, but needed for "All" filter)
    const result = await docClient.send(
      new QueryCommand({
        TableName: ORDERS_TABLE_NAME,
        IndexName: "statusIndex",
        KeyConditionExpression: "#status IN (:pending, :paid, :shipped, :delivered)",
        ExpressionAttributeNames: {
          "#status": "status",
        },
        ExpressionAttributeValues: {
          ":pending": "Pending",
          ":paid": "Paid",
          ":shipped": "Shipped",
          ":delivered": "Delivered",
        },
        ScanIndexForward: false,
        Limit: limit,
      })
    );

    // Better approach: query each status and merge
    const statuses: OrderStatus[] = ["Pending", "Paid", "Shipped", "Delivered"];
    const allOrders: Order[] = [];

    for (const orderStatus of statuses) {
      const result = await docClient.send(
        new QueryCommand({
          TableName: ORDERS_TABLE_NAME,
          IndexName: "statusIndex",
          KeyConditionExpression: "#status = :status",
          ExpressionAttributeNames: {
            "#status": "status",
          },
          ExpressionAttributeValues: {
            ":status": orderStatus,
          },
          ScanIndexForward: false,
          Limit: Math.ceil(limit / statuses.length),
        })
      );

      if (result.Items) {
        allOrders.push(...(result.Items as Order[]));
      }
    }

    // Sort by createdAt descending
    allOrders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return allOrders.slice(0, limit);
  }
}

export async function updateOrderStatus(
  orderId: string,
  status: OrderStatus,
  notes?: string
): Promise<Order> {
  const now = new Date().toISOString();

  const updateExpression = notes
    ? "SET #status = :status, updatedAt = :updatedAt, notes = :notes"
    : "SET #status = :status, updatedAt = :updatedAt";

  const expressionAttributeValues: any = {
    ":status": status,
    ":updatedAt": now,
  };

  if (notes) {
    expressionAttributeValues[":notes"] = notes;
  }

  const result = await docClient.send(
    new UpdateCommand({
      TableName: ORDERS_TABLE_NAME,
      Key: { orderId },
      UpdateExpression: updateExpression,
      ExpressionAttributeNames: {
        "#status": "status",
      },
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: "ALL_NEW",
    })
  );

  if (!result.Attributes) {
    throw new OrderNotFoundError(orderId);
  }

  return result.Attributes as Order;
}

export async function getOrdersByEmail(email: string): Promise<Order[]> {
  const result = await docClient.send(
    new QueryCommand({
      TableName: ORDERS_TABLE_NAME,
      IndexName: "emailIndex",
      KeyConditionExpression: "customerEmail = :email",
      ExpressionAttributeValues: {
        ":email": email,
      },
      ScanIndexForward: false, // Sort descending by createdAt
    })
  );

  return (result.Items || []) as Order[];
}

export async function markEmailSent(orderId: string): Promise<void> {
  await docClient.send(
    new UpdateCommand({
      TableName: ORDERS_TABLE_NAME,
      Key: { orderId },
      UpdateExpression: "SET emailSent = :emailSent",
      ExpressionAttributeValues: {
        ":emailSent": true,
      },
    })
  );
}
