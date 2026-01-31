import Link from "next/link";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-text-secondary mt-4">
            Last Updated: January 2024
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Introduction
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary leading-relaxed">
                  At Candycoat.co ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website candycoat.co and make purchases from us.
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  By using our website, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our website.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Personal Information</h3>
                  <p className="text-text-secondary mb-3">We may collect the following personal information when you:</p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li>Make a purchase (name, email, phone number, shipping address, billing address)</li>
                    <li>Create an account (username, password, email address)</li>
                    <li>Contact us (name, email, message content)</li>
                    <li>Subscribe to our newsletter (email address)</li>
                    <li>Participate in promotions or surveys (name, email, responses)</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Payment Information</h3>
                  <p className="text-text-secondary">
                    Payment information is processed securely through our payment processors. We do not store complete credit card numbers or payment credentials on our servers. All payment data is encrypted and handled in compliance with PCI-DSS standards.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Automatic Information</h3>
                  <p className="text-text-secondary mb-3">When you visit our website, we automatically collect:</p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                How We Use Your Information
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary mb-3">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders and account</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website, products, and services</li>
                  <li>Prevent fraud and enhance security</li>
                  <li>Comply with legal obligations</li>
                  <li>Analyze website usage and trends</li>
                  <li>Send you updates about new products and promotions</li>
                </ul>
              </div>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Cookies and Tracking Technologies
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                  <li>Remember your preferences and settings</li>
                  <li>Keep you logged in to your account</li>
                  <li>Analyze site traffic and usage patterns</li>
                  <li>Personalize content and advertisements</li>
                  <li>Improve website functionality</li>
                </ul>
                <p className="text-text-secondary">
                  You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
                </p>
              </div>
            </div>

            {/* Information Sharing and Disclosure */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Information Sharing and Disclosure
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary mb-3">We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                  <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, shipping companies, email service providers)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Fraud Prevention:</strong> To protect against fraud, unauthorized transactions, and other illegal activities</li>
                </ul>
                <p className="text-text-secondary">
                  We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Data Security
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-text-secondary">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Your Rights and Choices */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Your Rights and Choices
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 mb-4">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
                  <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                  <li><strong>Object:</strong> Object to certain processing of your information</li>
                </ul>
                <p className="text-text-secondary">
                  To exercise any of these rights, please contact us at info@candycoat.co. We will respond to your request within 30 days.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Children's Privacy
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                </p>
              </div>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Third-Party Links
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Changes to This Policy
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-text-secondary">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our website after such changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                Contact Us
              </h2>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
                <p className="text-text-secondary mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-text-secondary">
                  <p><strong>Email:</strong> info@candycoat.co</p>
                  <p><strong>Subject Line:</strong> Privacy Inquiry</p>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="btn-primary inline-block">
                    Contact Us
                  </Link>
                </div>
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
