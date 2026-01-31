import { NextRequest, NextResponse } from "next/server";
import { getAllProducts, getFeaturedProducts } from "@/lib/products";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured");

    const products = featured === "true" ? getFeaturedProducts() : getAllProducts();

    return NextResponse.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch products",
        code: "SERVER_ERROR",
      },
      { status: 500 }
    );
  }
}
