"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/store/cart";

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.getTotal());
  const itemCount = useCartStore((state) => state.getItemCount());
  const clearCart = useCartStore((state) => state.clearCart);

  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Shipping
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    province: "Gauteng",
    postalCode: "",
    country: "South Africa",
    phone: "",
  });

  // Shipping: Free for Gauteng orders up to R500, otherwise R90
  const shippingCost = formData.province === "Gauteng" && subtotal >= 500 ? 0 : 90.00;
  const total = subtotal + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      // Validate shipping info
      if (!formData.email || !formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.province || !formData.postalCode) {
        alert("Please fill in all required fields");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Process order
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            customer: {
              email: formData.email,
              firstName: formData.firstName,
              lastName: formData.lastName,
              phone: formData.phone,
            },
            shipping: {
              address: formData.address,
              address2: formData.address2,
              city: formData.city,
              province: formData.province,
              postalCode: formData.postalCode,
              country: formData.country,
            },
            items: items.map((item) => ({
              productId: item.productId,
              name: item.name,
              size: item.size,
              sizeLabel: item.sizeLabel,
              quantity: item.quantity,
              unitPrice: Math.round(item.price * 100),
              subtotal: Math.round(item.price * item.quantity * 100),
              image: item.image,
            })),
            subtotal: Math.round(subtotal * 100),
            shippingCost: Math.round(shippingCost * 100),
            total: Math.round(total * 100),
          }),
        });

        const data = await response.json();

        if (data.success) {
          clearCart();
          router.push(`/confirmation/${data.order.orderId}`);
        } else {
          alert(data.error || "Failed to place order. Please try again.");
        }
      } catch (error) {
        console.error("Order submission error:", error);
        alert("Failed to place order. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Your cart is empty</h2>
          <Link href="/shop" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

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
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Secure Checkout
            </div>
          </div>
        </nav>
      </header>

      {/* Progress Steps */}
      <div className="bg-gray-50 border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            {[
              { num: 1, label: "Shipping" },
              { num: 2, label: "Review" },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= s.num
                        ? "bg-primary text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {step > s.num ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      s.num
                    )}
                  </div>
                  <span className="text-sm mt-2 text-text-secondary">{s.label}</span>
                </div>
                {idx < 1 && (
                  <div
                    className={`w-24 h-1 mx-4 ${
                      step > s.num ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Checkout Form */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Shipping */}
                {step === 1 && (
                  <div>
                    <h2 className="text-3xl font-bold text-text-primary mb-6">Shipping Information</h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-text-primary mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-text-primary mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-text-primary mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-text-primary mb-2">
                          Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-text-primary mb-2">
                          Apartment, suite, etc. (optional)
                        </label>
                        <input
                          type="text"
                          name="address2"
                          value={formData.address2}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-text-primary mb-2">
                            City *
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-text-primary mb-2">
                            Province *
                          </label>
                          <select
                            name="province"
                            value={formData.province}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          >
                            <option value="Eastern Cape">Eastern Cape</option>
                            <option value="Free State">Free State</option>
                            <option value="Gauteng">Gauteng</option>
                            <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                            <option value="Limpopo">Limpopo</option>
                            <option value="Mpumalanga">Mpumalanga</option>
                            <option value="North West">North West</option>
                            <option value="Northern Cape">Northern Cape</option>
                            <option value="Western Cape">Western Cape</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-text-primary mb-2">
                            Postal Code *
                          </label>
                          <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            placeholder="0000"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-text-primary mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-text-primary mb-3">
                          Delivery Information
                        </label>
                        <div className="p-4 border-2 border-primary rounded-lg bg-gradient-to-br from-pink-50 to-purple-50">
                          <div className="flex items-start mb-3">
                            <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                            <div>
                              <p className="font-semibold text-text-primary">Standard Delivery</p>
                              <p className="text-sm text-text-secondary">5-7 business days within South Africa</p>
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <p className="text-sm text-text-secondary">
                              {formData.province === "Gauteng" && subtotal >= 500 ? (
                                <span className="text-success font-semibold">🎉 FREE delivery for your Gauteng order over R500!</span>
                              ) : formData.province === "Gauteng" ? (
                                <span>Delivery: R90.00 (Add R{(500 - subtotal).toFixed(2)} more for free delivery in Gauteng)</span>
                              ) : (
                                <span>Delivery: R90.00</span>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Link href="/cart" className="flex-1 text-center py-3 border-2 border-gray-300 text-text-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Back to Cart
                      </Link>
                      <button type="submit" className="flex-1 btn-primary py-3 rounded-lg">
                        Review Order
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Review */}
                {step === 2 && (
                  <div>
                    <h2 className="text-3xl font-bold text-text-primary mb-6">Review Your Order</h2>

                    <div className="space-y-6">
                      {/* Shipping Address */}
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-bold text-text-primary">Shipping Address</h3>
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="text-primary text-sm hover:underline"
                          >
                            Edit
                          </button>
                        </div>
                        <p className="text-text-secondary">
                          {formData.firstName} {formData.lastName}<br />
                          {formData.address}<br />
                          {formData.address2 && <>{formData.address2}<br /></>}
                          {formData.city}, {formData.province} {formData.postalCode}<br />
                          {formData.email}<br />
                          {formData.phone}
                        </p>
                      </div>

                      {/* Delivery Information */}
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-text-primary mb-4">Delivery Information</h3>
                        <p className="text-text-secondary">
                          Standard Delivery (5-7 business days)<br />
                          {shippingCost === 0 ? (
                            <span className="text-success font-semibold">FREE delivery (Gauteng order over R500)</span>
                          ) : (
                            `Delivery Fee: R${shippingCost.toFixed(2)}`
                          )}
                        </p>
                      </div>

                      {/* Payment Method */}
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-text-primary mb-4">Payment Method</h3>
                        <p className="text-text-secondary">
                          <strong>EFT (Electronic Funds Transfer)</strong><br />
                          Payment details will be provided after order confirmation
                        </p>
                      </div>

                      {/* Terms */}
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="terms"
                          required
                          className="mt-1 mr-3"
                        />
                        <label htmlFor="terms" className="text-sm text-text-secondary">
                          I agree to the <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                        </label>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 text-center py-3 border-2 border-gray-300 text-text-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                        disabled={isSubmitting}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 btn-primary py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Place Order"}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-text-primary mb-4">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-text-primary text-sm">{item.name}</p>
                        <p className="text-xs text-text-secondary">{item.sizeLabel} × {item.quantity}</p>
                        <p className="text-sm font-bold text-primary">R{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal ({itemCount} items)</span>
                    <span className="font-semibold">R{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Delivery</span>
                    <span className="font-semibold">
                      {shippingCost === 0 ? (
                        <span className="text-success">FREE</span>
                      ) : (
                        `R${shippingCost.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center">
                    <span className="text-lg font-bold text-text-primary">Total</span>
                    <span className="text-2xl font-bold text-primary">R{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
