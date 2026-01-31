"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [saving, setSaving] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await fetch("/api/products?useDb=false");
      const data = await response.json();
      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setMessage({ type: "error", text: "Failed to load products" });
    } finally {
      setLoading(false);
    }
  }

  async function syncToDatabase() {
    setSyncing(true);
    setMessage(null);

    try {
      const response = await fetch("/api/products/seed", {
        method: "POST",
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: "success", text: `Successfully synced ${data.count} products to database!` });
      } else {
        setMessage({ type: "error", text: data.error || "Failed to sync products" });
      }
    } catch (error) {
      console.error("Failed to sync products:", error);
      setMessage({ type: "error", text: "Failed to sync products to database" });
    } finally {
      setSyncing(false);
    }
  }

  async function handleSave(product: Product) {
    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch("/api/products", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: "success", text: "Product updated successfully!" });
        setEditingProduct(null);
        fetchProducts();
      } else {
        setMessage({ type: "error", text: data.error || "Failed to update product" });
      }
    } catch (error) {
      console.error("Failed to save product:", error);
      setMessage({ type: "error", text: "Failed to save product" });
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-text-secondary">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Product Management</h1>
              <p className="mt-1 text-sm text-text-secondary">View and edit all products</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={syncToDatabase}
                disabled={syncing}
                className="px-4 py-2 text-sm font-medium text-white bg-success rounded-lg hover:bg-success/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {syncing ? "Syncing..." : "Sync to Database"}
              </button>
              <Link
                href="/admin"
                className="px-4 py-2 text-sm font-medium text-text-primary bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Back to Admin
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Banner */}
        <div className="mb-6 p-4 bg-blue-50 text-blue-800 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="text-sm">
              <p className="font-semibold mb-1">How to use:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Click "Edit Product" to modify product details</li>
                <li>Changes save directly to the database when you click "Save Changes"</li>
                <li>Use "Sync to Database" to populate the database from products.ts file</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center p-4`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{product.name}</h3>
                    <p className="text-sm text-text-secondary italic">{product.tagline}</p>
                  </div>
                  <span className={`${product.badgeColor} px-2 py-1 rounded-full text-xs font-semibold`}>
                    {product.badge}
                  </span>
                </div>
                <p className="text-sm text-text-secondary mb-4 line-clamp-3">{product.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-primary">R{product.price.toFixed(2)}</span>
                  <span className={`${product.inStock ? "text-success" : "text-error"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <button
                  onClick={() => setEditingProduct(product)}
                  className="mt-4 w-full btn-secondary py-2 text-sm"
                >
                  Edit Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onSave={handleSave}
          onClose={() => setEditingProduct(null)}
          saving={saving}
        />
      )}
    </div>
  );
}

interface EditProductModalProps {
  product: Product;
  onSave: (product: Product) => void;
  onClose: () => void;
  saving: boolean;
}

function EditProductModal({ product, onSave, onClose, saving }: EditProductModalProps) {
  const [formData, setFormData] = useState<Product>(product);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const updateField = (field: keyof Product, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const updateArrayField = (field: "benefits" | "ingredients" | "images", value: string) => {
    const array = value.split("\n").filter((item) => item.trim() !== "");
    setFormData({ ...formData, [field]: array });
  };

  const updateSizes = (value: string) => {
    try {
      const sizes = JSON.parse(value);
      setFormData({ ...formData, sizes });
    } catch (e) {
      // Invalid JSON, don't update
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full my-8">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-text-primary">Edit Product: {product.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              disabled={saving}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Product Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => updateField("slug", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => updateField("tagline", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Price (125ml)</label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => updateField("price", parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Short Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => updateField("description", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Long Description</label>
            <textarea
              value={formData.longDescription}
              onChange={(e) => updateField("longDescription", e.target.value)}
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Benefits */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Benefits (one per line)
            </label>
            <textarea
              value={formData.benefits.join("\n")}
              onChange={(e) => updateArrayField("benefits", e.target.value)}
              rows={7}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
              placeholder="24 hours of nourishing moisture&#10;Tightens and tones&#10;Anti-inflammatory"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Ingredients (one per line)
            </label>
            <textarea
              value={formData.ingredients.join("\n")}
              onChange={(e) => updateArrayField("ingredients", e.target.value)}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
              placeholder="Shea Butter (Butyrospermum Parkii)&#10;Mango Butter (Mangifera Indica)&#10;Jojoba Oil"
            />
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Images (one path per line, relative to /public)
            </label>
            <textarea
              value={formData.images.join("\n")}
              onChange={(e) => updateArrayField("images", e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
              placeholder="/images/product-1.jpeg&#10;/images/product-2.jpeg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Main Image</label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => updateField("image", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="/images/product.jpeg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Badge</label>
              <input
                type="text"
                value={formData.badge}
                onChange={(e) => updateField("badge", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Badge Color (Tailwind classes)</label>
              <input
                type="text"
                value={formData.badgeColor}
                onChange={(e) => updateField("badgeColor", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="bg-primary text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Gradient (Tailwind classes)</label>
              <input
                type="text"
                value={formData.gradient}
                onChange={(e) => updateField("gradient", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="from-pink-50 to-purple-50"
              />
            </div>
          </div>

          {/* Sizes */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Sizes (JSON format)
            </label>
            <textarea
              value={JSON.stringify(formData.sizes, null, 2)}
              onChange={(e) => updateSizes(e.target.value)}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
            />
          </div>

          {/* Flags */}
          <div className="flex gap-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.inStock}
                onChange={(e) => updateField("inStock", e.target.checked)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="ml-2 text-sm text-text-primary">In Stock</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => updateField("featured", e.target.checked)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="ml-2 text-sm text-text-primary">Featured</span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="px-6 py-2 text-sm font-medium text-text-primary bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
