"use client";

import Link from "next/link";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Standard shipping within South Africa typically takes 3-7 business days. Express shipping is available for 1-3 business days delivery."
        },
        {
          q: "Do you offer free shipping?",
          a: "Yes! We offer free standard shipping on all orders over R500 within South Africa."
        },
        {
          q: "Can I track my order?",
          a: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can use this to track your package's journey."
        },
        {
          q: "What if my order arrives damaged?",
          a: "We're sorry if that happens! Please contact us within 48 hours of delivery with photos of the damage, and we'll arrange a replacement or refund immediately."
        }
      ]
    },
    {
      category: "Products",
      questions: [
        {
          q: "Are your products organic?",
          a: "Yes! All our body butters are made with organic, natural ingredients including shea butter, mango butter, and natural oils. We never use harmful chemicals or synthetic additives."
        },
        {
          q: "Are your products vegan and cruelty-free?",
          a: "Most of our products are vegan and all are 100% cruelty-free. We never test on animals and source our ingredients ethically."
        },
        {
          q: "How should I store my body butter?",
          a: "Store your body butter in a cool, dry place away from direct sunlight. Body butters may soften in warm temperatures, which is completely normal and doesn't affect quality."
        },
        {
          q: "How long do your products last?",
          a: "Our body butters have a shelf life of 12 months when stored properly. We recommend using them within 6 months of opening for best freshness."
        },
        {
          q: "Can I use body butter on my face?",
          a: "While our body butters are safe and natural, they're formulated for body use. We recommend using facial products specifically designed for delicate facial skin."
        }
      ]
    },
    {
      category: "Usage & Application",
      questions: [
        {
          q: "How do I apply body butter?",
          a: "Apply to clean, slightly damp skin after bathing. Take a small amount and massage gently until absorbed. A little goes a long way!"
        },
        {
          q: "How often should I use body butter?",
          a: "For best results, use daily after showering or bathing. You can also reapply throughout the day on dry areas."
        },
        {
          q: "Will body butter clog my pores?",
          a: "Our body butters are non-comedogenic, meaning they won't clog your pores. However, if you have very oily or acne-prone skin, use sparingly."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy on unopened products. If you're not satisfied with your purchase, contact us for a full refund or exchange."
        },
        {
          q: "Can I return opened products?",
          a: "Due to hygiene reasons, we cannot accept returns on opened products unless they're defective or damaged."
        },
        {
          q: "How long do refunds take?",
          a: "Once we receive your return, refunds are processed within 5-7 business days. The funds should appear in your account within 7-10 business days."
        }
      ]
    },
    {
      category: "Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, American Express) and EFT payments."
        },
        {
          q: "Is it safe to shop on your website?",
          a: "Yes! We use industry-standard SSL encryption to protect your payment information. Your data is secure with us."
        },
        {
          q: "Do you offer bulk or wholesale pricing?",
          a: "Yes! Please contact us at info@candycoat.co for wholesale inquiries and special pricing on bulk orders."
        }
      ]
    }
  ];

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
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, and more.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={faqIndex}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-text-primary pr-4">{faq.q}</span>
                        <svg
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                            isOpen ? "transform rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Still Have Questions */}
          <div className="mt-16 text-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Still Have Questions?</h3>
            <p className="text-text-secondary mb-6">
              Can't find what you're looking for? Our customer support team is here to help!
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
