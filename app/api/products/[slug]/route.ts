import { NextRequest, NextResponse } from "next/server";
import { getProductBySlugFromDB } from "@/lib/db/products";
import { getProductBySlug } from "@/lib/products";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const useDb = searchParams.get("useDb") !== "false"; // Use DB by default

    let product;

    if (useDb) {
      // Fetch from database
      try {
        product = await getProductBySlugFromDB(slug);

        // If not found in DB, fall back to products.ts
        if (!product) {
          console.warn(`Product ${slug} not found in database, falling back to products.ts`);
          product = getProductBySlug(slug);
        }
      } catch (dbError) {
        console.error("Database error, falling back to products.ts:", dbError);
        product = getProductBySlug(slug);
      }
    } else {
      // Fetch from products.ts (for testing/development)
      product = getProductBySlug(slug);
    }

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
      source: useDb ? "database" : "static",
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
