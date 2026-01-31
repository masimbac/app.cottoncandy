"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState, useEffect } from "react";
import type { Product } from "@/lib/products";
import type { Order } from "@/lib/types/order";

export default function ConfirmationPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = use(params);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch order
        const orderResponse = await fetch(`/api/orders/${orderId}`);
        const orderData = await orderResponse.json();
        if (orderData.success) {
          setOrder(orderData.order);
        }

        // Fetch recommended products
        const productsResponse = await fetch("/api/products");
        const productsData = await productsResponse.json();
        if (productsData.success) {
          setRecommendedProducts(productsData.products.slice(0, 3));
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [orderId]);

  const copyOrderReference = () => {
    navigator.clipboard.writeText(orderId);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const orderDate = order
    ? new Date(order.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              <Link href="/shop" className="text-text-primary hover:text-primary transition-colors font-medium">
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
              <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Success Message */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-text-secondary">Loading order details...</p>
            </div>
          ) : (
            <>
              {/* Success Icon */}
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                  Thank You for Your Order!
                </h1>
                <p className="text-lg text-text-secondary mb-2">
                  Your order has been successfully placed. Please complete payment to process your order.
                </p>
                <p className="text-text-secondary">
                  Order #{orderId}
                </p>
              </div>

              {/* EFT Payment Details - PROMINENT */}
              <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-8 mb-8">
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-amber-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary mb-2">
                      Payment Details (EFT)
                    </h2>
                    <p className="text-text-secondary mb-4">
                      Please make an EFT payment to complete your order
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-text-secondary">Bank</p>
                      <p className="font-bold text-text-primary">FNB</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Account Holder</p>
                      <p className="font-bold text-text-primary">Candy.Coat</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Account Type</p>
                      <p className="font-bold text-text-primary">
                        Cheque
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Account Number</p>
                      <p className="font-bold text-text-primary">62434208709</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Branch Code</p>
                      <p className="font-bold text-text-primary">250655</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Amount</p>
                      <p className="font-bold text-primary text-xl">
                        R{order ? (order.total / 100).toFixed(2) : "0.00"}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-text-secondary mb-2">
                      Payment Reference (IMPORTANT)
                    </p>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                      <p className="font-bold text-text-primary text-lg">{orderId}</p>
                      <button
                        onClick={copyOrderReference}
                        className="text-primary hover:underline text-sm font-semibold flex items-center"
                      >
                        {copySuccess ? (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Copied!
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-amber-100 p-4 rounded-lg">
                  <p className="text-sm text-amber-900">
                    <strong>Important:</strong> Please use your order number{" "}
                    <strong>{orderId}</strong> as the payment reference so we can identify your
                    payment and process your order promptly.
                  </p>
                </div>
              </div>

              {/* Order Summary */}
              {order && (
                <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-text-primary mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex gap-3 border-b pb-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-text-primary">{item.name}</p>
                          <p className="text-sm text-text-secondary">
                            {item.sizeLabel} × {item.quantity}
                          </p>
                        </div>
                        <div>
                          <p className="font-bold text-primary">
                            R{(item.subtotal / 100).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 border-t pt-4">
                    <div className="flex justify-between text-text-secondary">
                      <span>Subtotal ({order.itemCount} items)</span>
                      <span className="font-semibold">R{(order.subtotal / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Delivery</span>
                      <span className="font-semibold">
                        {order.shippingCost === 0 ? (
                          <span className="text-success">FREE</span>
                        ) : (
                          `R${(order.shippingCost / 100).toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <div className="border-t pt-3 flex justify-between items-center">
                      <span className="text-lg font-bold text-text-primary">Total</span>
                      <span className="text-2xl font-bold text-primary">
                        R{(order.total / 100).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Shipping Address */}
              {order && (
                <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Shipping Address</h2>
                  <div className="text-text-secondary">
                    {order.customerFirstName} {order.customerLastName}<br />
                    {order.shippingAddress}<br />
                    {order.shippingAddress2 && <>{order.shippingAddress2}<br /></>}
                    {order.shippingCity}, {order.shippingProvince} {order.shippingPostalCode}<br />
                    {order.shippingCountry}<br />
                    <br />
                    {order.customerEmail}<br />
                    {order.customerPhone}
                  </div>
                </div>
              )}

              {/* Order Details Card */}
              <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-text-primary mb-1">Confirmation Sent</h3>
                    <p className="text-sm text-text-secondary">Check your email for details</p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-text-primary mb-1">Order Date</h3>
                    <p className="text-sm text-text-secondary">{orderDate}</p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                      <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-text-primary mb-1">Estimated Delivery</h3>
                    <p className="text-sm text-text-secondary">5-7 business days after payment</p>
                  </div>
                </div>
              </div>

              {/* What's Next */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-text-primary mb-6">What Happens Next?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary mb-1">Complete EFT Payment</h3>
                      <p className="text-text-secondary">Use the payment details above and include your order number as the reference.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary mb-1">Payment Confirmation</h3>
                      <p className="text-text-secondary">We'll confirm your payment (usually within 1-2 business days).</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary mb-1">Order Processing</h3>
                      <p className="text-text-secondary">We'll carefully prepare and package your Candy.Coat body mousse.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary mb-1">Delivery</h3>
                      <p className="text-text-secondary">Your luxurious body mousse will arrive at your doorstep!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/shop"
                  className="flex-1 text-center py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  Continue Shopping
                </Link>
                <button
                  onClick={() => window.print()}
                  className="flex-1 btn-primary py-4 rounded-lg"
                >
                  Print Order Details
                </button>
              </div>

              {/* Customer Support */}
              <div className="text-center bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-text-primary mb-2">Need Help?</h3>
                <p className="text-text-secondary mb-4">
                  Our customer support team is here to assist you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                  <a href="mailto:orders@candycoat.co" className="flex items-center text-primary hover:underline">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    orders@candycoat.co
                  </a>
                  <span className="hidden sm:block text-gray-300">|</span>
                  <span className="text-text-secondary">Mon-Fri: 9am-6pm SAST</span>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
            Complete Your Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className={`relative h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center p-8`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    {product.description}
                  </p>
                  <span className="text-2xl font-bold text-primary">R{product.price.toFixed(2)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
