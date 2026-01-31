import { NextRequest, NextResponse } from "next/server";
import { getOrder, updateOrderStatus, OrderNotFoundError } from "@/lib/db/orders";
import type { OrderStatus } from "@/lib/types/order";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;
    const order = await getOrder(orderId);

    if (!order) {
      return NextResponse.json(
        {
          success: false,
          error: "Order not found",
          code: "NOT_FOUND",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Failed to fetch order:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch order",
        code: "DATABASE_ERROR",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;
    const body = await request.json();

    if (!body.status) {
      return NextResponse.json(
        {
          success: false,
          error: "Status is required",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    const validStatuses: OrderStatus[] = ["Pending", "Paid", "Shipped", "Delivered"];
    if (!validStatuses.includes(body.status)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid status. Must be one of: Pending, Paid, Shipped, Delivered",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    const updatedOrder = await updateOrderStatus(orderId, body.status, body.notes);

    return NextResponse.json({
      success: true,
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Failed to update order:", error);

    if (error instanceof OrderNotFoundError) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          code: "NOT_FOUND",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to update order",
        code: "DATABASE_ERROR",
      },
      { status: 500 }
    );
  }
}
