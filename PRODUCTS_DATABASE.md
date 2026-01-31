# Products Database Implementation

This document explains the products database architecture and how to use it.

## Overview

Products are now stored in a DynamoDB table instead of just the TypeScript file. This allows for:
- Dynamic product management without code deployments
- Better performance at scale
- Separation of data from code
- Easy product updates via API

## Architecture

### Database Schema

**Table: ProductsTable**
- Primary Key: `id` (string)
- Global Secondary Indexes:
  - `slugIndex`: Query by slug
  - `featuredIndex`: Query featured products

**Fields:**
- `id`: Unique product identifier
- `slug`: URL-friendly product identifier
- `name`: Product name
- `tagline`: Product tagline
- `price`: Default price (125ml)
- `description`: Short description
- `longDescription`: Detailed description
- `image`: Main product image path
- `images`: Array of image paths
- `badge`: Product badge text
- `badgeColor`: Badge color classes
- `gradient`: Background gradient classes
- `benefits`: Array of product benefits (standardized)
- `ingredients`: Array of product ingredients
- `sizes`: Array of size options with prices
- `inStock`: Boolean availability flag
- `featured`: Number (1 or 0) for featured status

## How It Works

### 1. Infrastructure (sst.config.ts)

The DynamoDB table is defined in the SST configuration:

```typescript
const productsTable = new sst.aws.Dynamo("ProductsTable", {
  fields: {
    id: "string",
    slug: "string",
    featured: "number",
  },
  primaryIndex: { hashKey: "id" },
  globalIndexes: {
    slugIndex: { hashKey: "slug" },
    featuredIndex: { hashKey: "featured", rangeKey: "id" },
  },
});
```

### 2. Database Operations (lib/db/products.ts)

Core functions for interacting with the products table:

- `getAllProductsFromDB()`: Fetch all products
- `getFeaturedProductsFromDB()`: Fetch featured products only
- `getProductBySlugFromDB(slug)`: Fetch a specific product by slug
- `getProductByIdFromDB(id)`: Fetch a specific product by ID
- `upsertProduct(product)`: Create or update a product
- `seedProducts(products)`: Bulk insert/update products

### 3. API Endpoints

#### GET /api/products
Fetches all or featured products.

**Query Parameters:**
- `featured=true`: Get only featured products
- `useDb=false`: Use static products.ts instead of database (for testing)

**Response:**
```json
{
  "success": true,
  "products": [...],
  "source": "database" | "static"
}
```

#### GET /api/products/[slug]
Fetches a specific product by slug.

**Query Parameters:**
- `useDb=false`: Use static products.ts instead of database (for testing)

**Response:**
```json
{
  "success": true,
  "product": {...},
  "source": "database" | "static"
}
```

#### POST /api/products/seed
Seeds the database with products from products.ts.

**Headers:**
- `Authorization: Bearer <SEED_API_KEY>` (optional, set in environment)

**Response:**
```json
{
  "success": true,
  "message": "Successfully seeded 6 products",
  "count": 6
}
```

### 4. Fallback Mechanism

The API endpoints include automatic fallback:
1. Try to fetch from database
2. If database is empty or error occurs, fall back to products.ts
3. Log warning for investigation

This ensures the app always works, even if the database is not yet populated.

## Setup Instructions

### 1. Deploy Infrastructure

Deploy the SST stack to create the DynamoDB table:

```bash
npm run deploy
# or
sst deploy
```

This creates the ProductsTable in AWS and generates the SST types.

**Important Note About Building:**
- Use `sst deploy` for production deployments (builds and deploys)
- For local development, use `npm run dev:sst` instead of `npm run dev`
- Regular `npm run build` will fail without SST context - this is expected
- The app includes fallback to static products.ts when database is not available

### 2. Seed the Database

After deployment, seed the database with initial products:

**Option A: Via API (Recommended)**
```bash
curl -X POST https://your-app-url.com/api/products/seed \
  -H "Authorization: Bearer your-secret-key"
```

**Option B: Via Script**
```bash
npm run validate:products
```

### 3. Verify Setup

Check that products are being served from the database:

```bash
curl https://your-app-url.com/api/products
```

Look for `"source": "database"` in the response.

## Data Management

### Adding New Products

1. Add the product to `lib/products.ts`
2. Call the seed endpoint to sync to database:
   ```bash
   curl -X POST https://your-app-url.com/api/products/seed
   ```

### Updating Products

1. Update the product in `lib/products.ts`
2. Re-run the seed endpoint (it performs upsert)

### Benefits and Descriptions

All products include:
- **Benefits**: Standardized list from the printing document
  - 24 hours of nourishing moisture
  - Tightens and tones
  - Anti-inflammatory
  - Scar & stretch mark care
  - Alleviates eczema
  - Helps with acne
  - Glowing, healthy skin

- **Ingredients**: Base ingredients only (displayed on home page)
  - Shea Butter, Mango Butter, Coconut Oil, Jojoba Oil, etc.
  - Fragrances and preservatives are filtered out for display

## Validation

Run the validation script to ensure database integrity:

```bash
npx ts-node scripts/validate-products-db.ts
```

This script:
1. Seeds products to database
2. Fetches all products
3. Fetches featured products
4. Tests product fetch by slug
5. Validates data integrity (benefits, descriptions, ingredients)

## Testing

### Test with Database
```bash
curl https://your-app-url.com/api/products?featured=true
```

### Test with Static Fallback
```bash
curl https://your-app-url.com/api/products?featured=true&useDb=false
```

## Monitoring

Check logs for these messages:
- ✅ Success: Products fetched from database
- ⚠️ Warning: "No products found in database, falling back to products.ts"
- ❌ Error: "Database error, falling back to products.ts"

## Security

The seed endpoint should be protected in production:
1. Set `SEED_API_KEY` environment variable
2. Use the key in Authorization header
3. Consider restricting the endpoint to admin users only

## Future Enhancements

Potential improvements:
- Admin dashboard for product management
- Product images stored in S3
- Product versioning/history
- Inventory management
- Analytics tracking
