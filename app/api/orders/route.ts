import { NextRequest, NextResponse } from "next/server";
import { createOrder, listOrders, markEmailSent, OrderValidationError } from "@/lib/db/orders";
import { sendOrderConfirmationEmail } from "@/lib/email/ses";
import type { CreateOrderRequest, OrderStatus } from "@/lib/types/order";

export async function POST(request: NextRequest) {
  try {
    const body: CreateOrderRequest = await request.json();

    // Validate request
    if (!body.customer || !body.shipping || !body.items) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request: missing customer, shipping, or items data",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    // Create order in DynamoDB
    const order = await createOrder(body);

    // Send confirmation email
    try {
      await sendOrderConfirmationEmail(order);
      await markEmailSent(order.orderId);
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Don't fail the order creation if email fails
    }

    // Return success response with payment details
    return NextResponse.json({
      success: true,
      order,
      paymentDetails: {
        method: "EFT",
        bank: "FNB/RMB",
        accountHolder: "Candy.Coat",
        accountType: "FNB Private Clients Current Account",
        accountNumber: "62434208709",
        branchCode: "250655",
        reference: order.orderId,
        amount: (order.total / 100).toFixed(2),
      },
    });
  } catch (error) {
    console.error("Order creation error:", error);

    if (error instanceof OrderValidationError) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create order. Please try again.",
        code: "DATABASE_ERROR",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") as OrderStatus | null;

    const orders = await listOrders(status || undefined);

    return NextResponse.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Failed to fetch orders:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch orders",
        code: "DATABASE_ERROR",
      },
      { status: 500 }
    );
  }
}
