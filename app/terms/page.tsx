import Link from "next/link";

export default function TermsPage() {
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
            Terms and Conditions
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Please read these terms carefully before using our website and services.
          </p>
          <p className="text-sm text-text-secondary mt-4">
            Last Updated: January 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Agreement to Terms
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary leading-relaxed">
                  Welcome to Candycoat.co. These Terms and Conditions ("Terms") govern your access to and use of our website and services. By accessing or using candycoat.co, you agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  If you do not agree to these Terms, please do not use our website. We reserve the right to modify these Terms at any time, and your continued use of the website constitutes acceptance of any changes.
                </p>
              </div>
            </div>

            {/* Use of Website */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Use of Website
              </h2>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Eligibility</h3>
                  <p className="text-text-secondary">
                    You must be at least 18 years old to make purchases on our website. By placing an order, you confirm that you are of legal age and have the authority to enter into this agreement.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Account Responsibilities</h3>
                  <p className="text-text-secondary mb-3">If you create an account, you are responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized access</li>
                    <li>Ensuring your account information is accurate and up-to-date</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Prohibited Activities</h3>
                  <p className="text-text-secondary mb-3">You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li>Use the website for any unlawful purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with the proper functioning of the website</li>
                    <li>Use automated systems to access the website without permission</li>
                    <li>Transmit viruses, malware, or harmful code</li>
                    <li>Impersonate another person or entity</li>
                    <li>Harass, abuse, or harm other users</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Products and Orders */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Products and Orders
              </h2>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Product Information</h3>
                  <p className="text-text-secondary">
                    We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions, colors, or other content are error-free. If a product is not as described, your sole remedy is to return it in accordance with our return policy.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Pricing and Availability</h3>
                  <p className="text-text-secondary mb-3">
                    All prices are listed in South African Rand (ZAR) and are subject to change without notice. We reserve the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li>Modify prices at any time</li>
                    <li>Limit quantities available for purchase</li>
                    <li>Discontinue products without notice</li>
                    <li>Refuse or cancel orders at our discretion</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Order Acceptance</h3>
                  <p className="text-text-secondary">
                    Your order is an offer to purchase products. We reserve the right to accept or decline your order for any reason, including product availability, errors in pricing or product information, or suspected fraudulent activity. Order confirmation does not guarantee acceptance.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Payment
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary mb-4">
                  We accept major credit cards (Visa, Mastercard, American Express) and EFT payments. By providing payment information, you represent and warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                  <li>You are authorized to use the payment method</li>
                  <li>The information provided is accurate and complete</li>
                  <li>You will pay all charges incurred</li>
                  <li>You authorize us to charge the payment method for your order</li>
                </ul>
                <p className="text-text-secondary">
                  Payment must be received before orders are processed and shipped. All transactions are processed securely through encrypted payment gateways.
                </p>
              </div>
            </div>

            {/* Shipping and Delivery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Shipping and Delivery
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary mb-4">
                  We ship to addresses within South Africa. Delivery times are estimates and not guaranteed. We are not liable for delays caused by shipping carriers, customs, or circumstances beyond our control.
                </p>
                <p className="text-text-secondary">
                  Risk of loss passes to you upon delivery to the shipping carrier. For full shipping details, please see our <Link href="/shipping" className="text-primary hover:underline">Shipping Policy</Link>.
                </p>
              </div>
            </div>

            {/* Returns and Refunds */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Returns and Refunds
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary mb-4">
                  We offer a 30-day return policy on unopened products. Due to hygiene reasons, we cannot accept returns on opened products unless they are defective or damaged.
                </p>
                <p className="text-text-secondary mb-3">To be eligible for a return:</p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                  <li>Products must be unopened and in original packaging</li>
                  <li>Return must be initiated within 30 days of delivery</li>
                  <li>Contact us at info@candycoat.co to request a return</li>
                  <li>Provide proof of purchase and reason for return</li>
                </ul>
                <p className="text-text-secondary">
                  Refunds are processed within 5-7 business days after we receive the returned item. Original shipping costs are non-refundable. Customer is responsible for return shipping costs unless the item is defective or we made an error.
                </p>
              </div>
            </div>

            {/* Product Warranties */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Product Warranties and Disclaimers
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary mb-4">
                  Our products are made with natural ingredients and are intended for external use only. While we ensure quality and safety, individual results may vary based on skin type and sensitivity.
                </p>
                <p className="text-text-secondary mb-3">
                  <strong>Disclaimer:</strong> Our products are provided "as is" without warranties of any kind, express or implied. We do not warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                  <li>Products will meet your specific requirements</li>
                  <li>Products will be suitable for all skin types</li>
                  <li>Products will produce specific results</li>
                  <li>The website will be uninterrupted or error-free</li>
                </ul>
                <p className="text-text-secondary">
                  <strong>Important:</strong> If you have sensitive skin, allergies, or medical conditions, consult a healthcare professional before use. Discontinue use if irritation occurs.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Intellectual Property
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary mb-4">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Candycoat.co or its licensors and is protected by South African and international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-text-secondary">
                  You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any content without our express written permission. Unauthorized use may violate copyright, trademark, and other laws.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Limitation of Liability
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary mb-4">
                  To the fullest extent permitted by law, Candycoat.co and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                  <li>Your use of or inability to use the website or products</li>
                  <li>Any errors, mistakes, or inaccuracies of content</li>
                  <li>Unauthorized access to your personal information</li>
                  <li>Interruption or cessation of service</li>
                  <li>Any allergic reactions or adverse effects from product use</li>
                  <li>Any other matter relating to the website or products</li>
                </ul>
                <p className="text-text-secondary">
                  Our total liability to you for any claims shall not exceed the amount you paid for the product giving rise to the claim.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Indemnification
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary">
                  You agree to indemnify, defend, and hold harmless Candycoat.co and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the website, violation of these Terms, or infringement of any third-party rights.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Governing Law and Disputes
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary mb-4">
                  These Terms are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts of South Africa.
                </p>
                <p className="text-text-secondary">
                  Before initiating legal proceedings, we encourage you to contact us to resolve any disputes informally.
                </p>
              </div>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Severability
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Changes to Terms
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes are posted constitutes acceptance of the modified Terms. We recommend reviewing these Terms periodically.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Contact Information
              </h2>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
                <p className="text-text-secondary mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-text-secondary mb-6">
                  <p><strong>Email:</strong> info@candycoat.co</p>
                  <p><strong>Subject Line:</strong> Terms and Conditions Inquiry</p>
                </div>
                <div className="space-y-3">
                  <p className="text-text-secondary">
                    For general inquiries: <Link href="/contact" className="text-primary hover:underline">Visit our Contact Page</Link>
                  </p>
                  <p className="text-text-secondary">
                    For privacy concerns: <Link href="/privacy" className="text-primary hover:underline">View our Privacy Policy</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="mb-12">
              <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6">
                <p className="text-text-primary font-semibold mb-2">
                  By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
                <p className="text-text-secondary text-sm">
                  Thank you for choosing Candycoat.co for your body butter needs!
                </p>
              </div>
            </div>
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
