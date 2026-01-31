import { NextRequest, NextResponse } from "next/server";
import { getAllProductsFromDB, getFeaturedProductsFromDB, upsertProduct } from "@/lib/db/products";
import { getAllProducts, getFeaturedProducts } from "@/lib/products";
import type { Product } from "@/lib/products";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured");
    const useDb = searchParams.get("useDb") !== "false"; // Use DB by default

    let products;

    if (useDb) {
      // Fetch from database
      try {
        products = featured === "true"
          ? await getFeaturedProductsFromDB()
          : await getAllProductsFromDB();

        // If no products in DB, fall back to products.ts
        if (products.length === 0) {
          console.warn("No products found in database, falling back to products.ts");
          products = featured === "true" ? getFeaturedProducts() : getAllProducts();
        }
      } catch (dbError) {
        console.error("Database error, falling back to products.ts:", dbError);
        products = featured === "true" ? getFeaturedProducts() : getAllProducts();
      }
    } else {
      // Fetch from products.ts (for testing/development)
      products = featured === "true" ? getFeaturedProducts() : getAllProducts();
    }

    return NextResponse.json({
      success: true,
      products,
      source: useDb ? "database" : "static",
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

export async function PUT(request: NextRequest) {
  try {
    const product: Product = await request.json();

    // Validate required fields
    if (!product.id || !product.slug || !product.name) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: id, slug, or name",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    // Update product in database
    await upsertProduct(product);

    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Failed to update product:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to update product",
        code: "SERVER_ERROR",
      },
      { status: 500 }
    );
  }
}
