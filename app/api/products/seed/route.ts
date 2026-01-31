import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/products";
import { seedProducts } from "@/lib/db/products";

/**
 * Seed products endpoint
 * POST /api/products/seed
 *
 * This endpoint seeds the database with products from the products.ts file.
 * It should only be used during initial setup or migration.
 */
export async function POST(request: NextRequest) {
  try {
    // Optional: Add authentication/authorization here
    // For production, you should add proper authentication
    // For now, we check if a SEED_API_KEY is set
    const expectedKey = process.env.SEED_API_KEY;

    if (expectedKey) {
      const authHeader = request.headers.get("authorization");
      if (authHeader !== `Bearer ${expectedKey}`) {
        return NextResponse.json(
          {
            success: false,
            error: "Unauthorized",
            code: "UNAUTHORIZED",
          },
          { status: 401 }
        );
      }
    }

    // Seed the database
    await seedProducts(products);

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${products.length} products`,
      count: products.length,
    });
  } catch (error) {
    console.error("Failed to seed products:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to seed products",
        code: "SEED_ERROR",
      },
      { status: 500 }
    );
  }
}
