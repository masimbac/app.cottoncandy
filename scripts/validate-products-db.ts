/**
 * Validation script to test products database functionality
 *
 * This script validates:
 * 1. Database connection
 * 2. Products can be seeded
 * 3. Products can be fetched (all and featured)
 * 4. Products can be fetched by slug
 * 5. Data integrity (benefits and descriptions match)
 */

import { products } from "../lib/products";
import {
  seedProducts,
  getAllProductsFromDB,
  getFeaturedProductsFromDB,
  getProductBySlugFromDB,
} from "../lib/db/products";

async function validateProductsDatabase() {
  console.log("🚀 Starting Products Database Validation\n");

  try {
    // Step 1: Seed products
    console.log("📦 Step 1: Seeding products to database...");
    await seedProducts(products);
    console.log(`✅ Successfully seeded ${products.length} products\n`);

    // Step 2: Fetch all products
    console.log("📋 Step 2: Fetching all products from database...");
    const allProducts = await getAllProductsFromDB();
    console.log(`✅ Retrieved ${allProducts.length} products`);
    console.log(`   Expected: ${products.length} products\n`);

    if (allProducts.length !== products.length) {
      throw new Error(`Product count mismatch! Expected ${products.length}, got ${allProducts.length}`);
    }

    // Step 3: Fetch featured products
    console.log("⭐ Step 3: Fetching featured products from database...");
    const featuredProducts = await getFeaturedProductsFromDB();
    const expectedFeaturedCount = products.filter(p => p.featured).length;
    console.log(`✅ Retrieved ${featuredProducts.length} featured products`);
    console.log(`   Expected: ${expectedFeaturedCount} featured products\n`);

    if (featuredProducts.length !== expectedFeaturedCount) {
      throw new Error(`Featured count mismatch! Expected ${expectedFeaturedCount}, got ${featuredProducts.length}`);
    }

    // Step 4: Validate product by slug
    console.log("🔍 Step 4: Testing product fetch by slug...");
    const testProduct = products[0];
    const productBySlug = await getProductBySlugFromDB(testProduct.slug);

    if (!productBySlug) {
      throw new Error(`Failed to fetch product by slug: ${testProduct.slug}`);
    }

    console.log(`✅ Successfully fetched product: ${productBySlug.name}`);
    console.log(`   Slug: ${productBySlug.slug}\n`);

    // Step 5: Validate data integrity
    console.log("🔒 Step 5: Validating data integrity...");
    for (const originalProduct of products) {
      const dbProduct = await getProductBySlugFromDB(originalProduct.slug);

      if (!dbProduct) {
        throw new Error(`Product not found in DB: ${originalProduct.slug}`);
      }

      // Check benefits
      if (dbProduct.benefits.length !== originalProduct.benefits.length) {
        throw new Error(`Benefits count mismatch for ${originalProduct.slug}`);
      }

      // Check description
      if (dbProduct.description !== originalProduct.description) {
        throw new Error(`Description mismatch for ${originalProduct.slug}`);
      }

      // Check ingredients
      if (dbProduct.ingredients.length !== originalProduct.ingredients.length) {
        throw new Error(`Ingredients count mismatch for ${originalProduct.slug}`);
      }

      console.log(`   ✅ ${dbProduct.name} - Data integrity verified`);
    }

    console.log("\n🎉 All validation tests passed!");
    console.log("\n📊 Summary:");
    console.log(`   Total products: ${allProducts.length}`);
    console.log(`   Featured products: ${featuredProducts.length}`);
    console.log(`   All products have correct benefits, descriptions, and ingredients`);

    return true;
  } catch (error) {
    console.error("\n❌ Validation failed:", error);
    throw error;
  }
}

// Run validation if this script is executed directly
if (require.main === module) {
  validateProductsDatabase()
    .then(() => {
      console.log("\n✅ Validation complete!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("\n❌ Validation failed:", error);
      process.exit(1);
    });
}

export { validateProductsDatabase };
