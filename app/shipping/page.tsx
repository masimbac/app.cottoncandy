import Link from "next/link";

export default function ShippingPage() {
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
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Shipping & Delivery
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Fast, reliable delivery across South Africa. Your body butter, delivered with care.
          </p>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Free Shipping Banner */}
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 mb-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-2">Free Standard Shipping</h2>
            <p className="text-xl">On all orders over R500</p>
          </div>

          {/* Shipping Options */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              Shipping Options
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Standard Shipping</h3>
                    <p className="text-primary font-semibold mb-2">FREE on orders over R500</p>
                    <p className="text-text-secondary mb-2">R50 on orders under R500</p>
                    <p className="text-sm text-text-secondary">Delivery in 3-7 business days</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Express Shipping</h3>
                    <p className="text-secondary font-semibold mb-2">R150 flat rate</p>
                    <p className="text-text-secondary mb-2">Available nationwide</p>
                    <p className="text-sm text-text-secondary">Delivery in 1-3 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              How Delivery Works
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Order Confirmation</h3>
                  <p className="text-text-secondary">
                    You'll receive an email confirmation immediately after placing your order with all order details.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Processing</h3>
                  <p className="text-text-secondary">
                    Orders are processed within 1-2 business days. We carefully package your body butters to ensure they arrive in perfect condition.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Shipping</h3>
                  <p className="text-text-secondary">
                    Once shipped, you'll receive a tracking number via email. Use this to track your package in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Delivery</h3>
                  <p className="text-text-secondary">
                    Your order arrives at your doorstep! Sign for your package or authorize a safe drop-off location.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Areas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              Delivery Areas
            </h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-text-secondary mb-4">
                We currently ship to all major cities and towns across South Africa, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Johannesburg
                </div>
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cape Town
                </div>
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Durban
                </div>
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pretoria
                </div>
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Port Elizabeth
                </div>
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Bloemfontein
                </div>
              </div>
              <p className="text-sm text-text-secondary">
                Delivery to rural areas may take an additional 1-3 business days. If you're unsure about delivery to your area, please contact us.
              </p>
            </div>
          </div>

          {/* Order Tracking */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              Order Tracking
            </h2>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Track Your Order</h3>
                  <p className="text-text-secondary mb-4">
                    Once your order ships, you'll receive a tracking number via email. You can track your package's journey in real-time using the courier's tracking portal.
                  </p>
                  <p className="text-sm text-text-secondary">
                    Tracking information may take up to 24 hours to become active after shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping FAQ */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              Common Questions
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-text-primary mb-2">What if I'm not home for delivery?</h3>
                <p className="text-text-secondary text-sm">
                  Our courier will attempt delivery up to three times. If unsuccessful, the package will be held at the nearest collection point for 7 days. You can also arrange a safe drop-off location in your delivery instructions.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-text-primary mb-2">Can I change my delivery address after ordering?</h3>
                <p className="text-text-secondary text-sm">
                  If your order hasn't shipped yet, contact us immediately and we'll update the address. Once shipped, address changes must be arranged directly with the courier using your tracking number.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-text-primary mb-2">What if my order arrives damaged?</h3>
                <p className="text-text-secondary text-sm">
                  We take great care in packaging, but accidents happen. Please contact us within 48 hours of delivery with photos of the damage, and we'll arrange a replacement or refund immediately.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-text-primary mb-2">Do you ship internationally?</h3>
                <p className="text-text-secondary text-sm">
                  Currently, we only ship within South Africa. We're working on expanding to international shipping soon. Subscribe to our newsletter to be notified when international shipping becomes available.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Have Questions About Shipping?</h3>
            <p className="text-text-secondary mb-6">
              Our customer support team is here to help with any shipping-related questions.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Candycoat.co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
