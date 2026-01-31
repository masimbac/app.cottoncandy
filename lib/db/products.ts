import { PutCommand, GetCommand, ScanCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { docClient, PRODUCTS_TABLE_NAME } from "./client";
import type { Product } from "../products";

/**
 * Check if database is available
 */
function isDatabaseAvailable(): boolean {
  return !!PRODUCTS_TABLE_NAME && PRODUCTS_TABLE_NAME !== "";
}

/**
 * Get all products from the database
 */
export async function getAllProductsFromDB(): Promise<Product[]> {
  if (!isDatabaseAvailable()) {
    throw new Error("Products table not configured");
  }

  try {
    const result = await docClient.send(
      new ScanCommand({
        TableName: PRODUCTS_TABLE_NAME,
      })
    );

    return (result.Items || []) as Product[];
  } catch (error) {
    console.error("Failed to get all products:", error);
    throw new Error("Failed to fetch products from database");
  }
}

/**
 * Get featured products from the database
 */
export async function getFeaturedProductsFromDB(): Promise<Product[]> {
  if (!isDatabaseAvailable()) {
    throw new Error("Products table not configured");
  }

  try {
    const result = await docClient.send(
      new QueryCommand({
        TableName: PRODUCTS_TABLE_NAME,
        IndexName: "featuredIndex",
        KeyConditionExpression: "featured = :featured",
        ExpressionAttributeValues: {
          ":featured": 1,
        },
      })
    );

    return (result.Items || []) as Product[];
  } catch (error) {
    console.error("Failed to get featured products:", error);
    throw new Error("Failed to fetch featured products from database");
  }
}

/**
 * Get a product by slug from the database
 */
export async function getProductBySlugFromDB(slug: string): Promise<Product | null> {
  if (!isDatabaseAvailable()) {
    throw new Error("Products table not configured");
  }

  try {
    const result = await docClient.send(
      new QueryCommand({
        TableName: PRODUCTS_TABLE_NAME,
        IndexName: "slugIndex",
        KeyConditionExpression: "slug = :slug",
        ExpressionAttributeValues: {
          ":slug": slug,
        },
      })
    );

    const items = result.Items || [];
    return items.length > 0 ? (items[0] as Product) : null;
  } catch (error) {
    console.error("Failed to get product by slug:", error);
    throw new Error("Failed to fetch product from database");
  }
}

/**
 * Get a product by ID from the database
 */
export async function getProductByIdFromDB(id: string): Promise<Product | null> {
  if (!isDatabaseAvailable()) {
    throw new Error("Products table not configured");
  }

  try {
    const result = await docClient.send(
      new GetCommand({
        TableName: PRODUCTS_TABLE_NAME,
        Key: {
          id,
        },
      })
    );

    return result.Item ? (result.Item as Product) : null;
  } catch (error) {
    console.error("Failed to get product by ID:", error);
    throw new Error("Failed to fetch product from database");
  }
}

/**
 * Create or update a product in the database
 */
export async function upsertProduct(product: Product): Promise<void> {
  if (!isDatabaseAvailable()) {
    throw new Error("Products table not configured");
  }

  try {
    await docClient.send(
      new PutCommand({
        TableName: PRODUCTS_TABLE_NAME,
        Item: {
          ...product,
          featured: product.featured ? 1 : 0, // Convert boolean to number for GSI
        },
      })
    );
  } catch (error) {
    console.error("Failed to upsert product:", error);
    throw new Error("Failed to save product to database");
  }
}

/**
 * Seed products to the database (for initial setup or migration)
 */
export async function seedProducts(products: Product[]): Promise<void> {
  if (!isDatabaseAvailable()) {
    throw new Error("Products table not configured");
  }

  try {
    const promises = products.map((product) => upsertProduct(product));
    await Promise.all(promises);
    console.log(`Successfully seeded ${products.length} products to database`);
  } catch (error) {
    console.error("Failed to seed products:", error);
    throw new Error("Failed to seed products to database");
  }
}
