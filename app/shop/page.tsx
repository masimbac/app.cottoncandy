"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import type { Product } from "@/lib/products";
import { useCartStore } from "@/lib/store/cart";

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);
  const itemCount = useCartStore((state) => state.getItemCount());
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    const defaultSize = product.sizes[1]; // Use 125ml as default
    addItem({
      productId: product.id,
      name: product.name,
      price: defaultSize.price,
      quantity: 1,
      size: defaultSize.value,
      sizeLabel: defaultSize.label,
      image: product.image,
      slug: product.slug,
    });

    // Show success feedback
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as homepage */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-text-primary">
                Candy.<span className="text-primary">Coat</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-text-primary hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="/shop" className="text-primary font-medium">
                Shop
              </Link>
              <Link href="/about" className="text-text-primary hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-text-primary hover:text-primary transition-colors font-medium">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{itemCount}</span>
              </Link>
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Shop Candy.Coat
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover our luxurious collection of soft, fluffy body butters. Each creation blends rich natural ingredients with irresistible scents to deeply nourish your skin.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-text-secondary">Loading products...</p>
            </div>
          ) : (
            <>
              {/* Filter/Sort Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-12 pb-6 border-b border-gray-200">
                <p className="text-text-secondary mb-4 sm:mb-0">
                  Showing all {products.length} products
                </p>
            <div className="flex items-center space-x-4">
              <label htmlFor="sort" className="text-sm text-text-secondary">Sort by:</label>
              <select
                id="sort"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A-Z</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <Link href={`/shop/${product.slug}`}>
                  <div className={`relative h-80 bg-gradient-to-br ${product.gradient} flex items-center justify-center p-8`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={250}
                      className="object-contain w-full h-full"
                    />
                    <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {product.badge}
                    </div>
                    {product.inStock ? (
                      <div className="absolute top-4 left-4 bg-success text-white px-3 py-1 rounded-full text-xs font-semibold">
                        In Stock
                      </div>
                    ) : (
                      <div className="absolute top-4 left-4 bg-error text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Out of Stock
                      </div>
                    )}
                  </div>
                </Link>

                <div className="p-6">
                  <Link href={`/shop/${product.slug}`}>
                    <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-text-secondary mb-3 italic">{product.tagline}</p>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-primary">R{product.price.toFixed(2)}</span>
                      <span className="text-sm text-text-secondary ml-2">/ 125ml</span>
                    </div>
                    <div className="flex items-center text-secondary">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/shop/${product.slug}`}
                      className="flex-1 text-center py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 btn-primary py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!product.inStock}
                    >
                      {addedProductId === product.id ? (
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Added!
                        </span>
                      ) : (
                        "Add to Cart"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Banner */}
          <div className="mt-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-text-primary mb-2">Free Shipping</h3>
                <p className="text-sm text-text-secondary">On orders over R500</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-text-primary mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-text-secondary">Premium ingredients</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-text-primary mb-2">Cruelty-Free</h3>
                <p className="text-sm text-text-secondary">Never tested on animals</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </div>
                <h3 className="font-bold text-text-primary mb-2">Easy Returns</h3>
                <p className="text-sm text-text-secondary">30-day return policy</p>
              </div>
            </div>
          </div>
            </>
          )}
        </div>
      </section>

      {/* Footer - Same as homepage */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/about#story" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/about#sustainability" className="text-gray-400 hover:text-white transition-colors">Sustainability</Link></li>
                <li><Link href="/about#cruelty-free" className="text-gray-400 hover:text-white transition-colors">Cruelty-Free Promise</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Customer Care</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@candycoat.co
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mon-Fri: 9am-6pm EST
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Candycoat.co. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">We accept:</span>
                <div className="flex space-x-2">
                  <div className="bg-white rounded px-2 py-1 text-xs font-semibold text-gray-800">VISA</div>
                  <div className="bg-white rounded px-2 py-1 text-xs font-semibold text-gray-800">MC</div>
                  <div className="bg-white rounded px-2 py-1 text-xs font-semibold text-gray-800">AMEX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
