export type OrderStatus = "Pending" | "Paid" | "Shipped" | "Delivered";

export interface OrderItem {
  productId: string;
  name: string;
  size: string;
  sizeLabel: string;
  quantity: number;
  unitPrice: number;  // in cents
  subtotal: number;   // in cents
  image: string;
}

export interface Order {
  orderId: string;
  createdAt: string;
  updatedAt: string;
  status: OrderStatus;

  // Customer
  customerEmail: string;
  customerFirstName: string;
  customerLastName: string;
  customerPhone?: string;

  // Shipping
  shippingAddress: string;
  shippingAddress2?: string;
  shippingCity: string;
  shippingProvince: string;
  shippingPostalCode: string;
  shippingCountry: string;

  // Totals (in cents)
  subtotal: number;
  shippingCost: number;
  total: number;

  // Items (denormalized)
  items: OrderItem[];
  itemCount: number;
  paymentMethod: "EFT";
  emailSent: boolean;
  notes?: string;
}

export interface CreateOrderRequest {
  customer: {
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
  };
  shipping: {
    address: string;
    address2?: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  total: number;
}

export interface UpdateOrderStatusRequest {
  orderId: string;
  status: OrderStatus;
  notes?: string;
}
