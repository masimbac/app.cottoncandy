import { NextRequest, NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/products";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          error: "Product not found",
          code: "NOT_FOUND",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Failed to fetch product:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch product",
        code: "SERVER_ERROR",
      },
      { status: 500 }
    );
  }
}
