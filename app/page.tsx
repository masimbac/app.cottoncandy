import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-text-primary">
                Candy.<span className="text-primary">Coat</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
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

            {/* Utility Navigation */}
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
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </button>
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
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Indulge Your Skin with <span className="text-primary">Candy.Coat</span> Organic selection of Body Butters
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Soft, fluffy, and nourishing body butters that turn your daily skincare routine into a moment of pure bliss.
            </p>
            <Link href="/shop" className="btn-primary inline-block text-lg">
              Shop Our Collection
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20"></div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
              Our Luxurious Collection
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Discover five exquisite body butters, each crafted with rich natural ingredients and irresistible scents to deeply nourish your skin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {/* Citrus Kiss */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-8">
                <Image
                  src="/images/citrus-kiss-2.jpeg"
                  alt="Citrus Kiss Body Butter"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Energizing
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text-primary mb-3">Citrus Kiss</h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  Awaken your senses with the zesty aroma of Citrus Kiss! This soft, fluffy body butter blends vibrant citrus essences with rich natural ingredients to revitalize and deeply nourish your skin.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    24 hours of nourishing moisture
                  </li>
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Shea butter, Mango butter, Jojoba
                  </li>
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Grapeseed oil & Vitamin E
                  </li>
                </ul>
                <Link href="/shop/citrus-kiss" className="btn-secondary w-full block text-center">
                Get Some
                </Link>
              </div>
            </div>

            {/* Cotton Candy Swirl */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-8">
                <Image
                  src="/images/cotton-candy-swirl-2.jpeg"
                  alt="Cotton Candy Swirl Body Butter"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Sweet
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text-primary mb-3">Cotton Candy Swirl</h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  Dive into the delightful sweetness of Cotton Candy Swirl! This soft, fluffy body butter is a whimsical treat that envelops your skin in irresistible sweetness.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    24 hours of nourishing moisture
                  </li>
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Shea butter, Mango butter, Jojoba
                  </li>
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Grapeseed oil & Vitamin E
                  </li>
                </ul>
                <Link href="/shop/cotton-candy-swirl" className="btn-primary w-full block text-center">
                Get Some
                </Link>
              </div>
            </div>

            {/* Powder Cloud */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-8">
                <Image
                  src="/images/powder-cloud-2.jpeg"
                  alt="Powder Cloud Body Butter"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-accent text-text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  Calming
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text-primary mb-3">Powder Cloud</h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  Experience the gentle embrace of Powder Cloud, a soft, fluffy body butter with a soothing, subtle powdery fragrance. Perfect for moments of tranquility and self-love.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    24 hours of nourishing moisture
                  </li>
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Shea butter, Mango butter, Jojoba
                  </li>
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Grapeseed oil & Vitamin E
                  </li>
                </ul>
                <Link href="/shop/powder-cloud" className="btn-secondary w-full block text-center">
                  Get Some
                </Link>
              </div>
            </div>

            {/* Butter Cream Bliss */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-8">
                <Image
                  src="/images/butter-cream-bliss-2.jpeg"
                  alt="Butter Cream Bliss Body Butter"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Luxurious
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text-primary mb-3">Butter Cream Bliss</h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  Indulge in the rich, creamy embrace of Butter Cream Bliss! This ultra-luxurious body butter wraps your skin in velvety softness with a decadent vanilla-cream scent.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    24 hours of nourishing moisture
                  </li>
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Shea butter, Mango butter, Jojoba
                  </li>
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Grapeseed oil & Vitamin E
                  </li>
                </ul>
                <Link href="/shop/butter-cream-bliss" className="btn-primary w-full block text-center">
                  Get Some
                </Link>
              </div>
            </div>

            {/* Melon Mousse */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-green-50 to-lime-50 flex items-center justify-center p-8">
                <Image
                  src="/images/melon-mousse-3.jpeg"
                  alt="Melon Mousse Body Butter"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Refreshing
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text-primary mb-3">Melon Mousse</h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  Refresh and revitalize with the crisp, juicy essence of Melon Mousse! This light, fluffy body butter brings the freshness of summer melons to your skin.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    24 hours of nourishing moisture
                  </li>
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Shea butter, Mango butter, Jojoba
                  </li>
                  <li className="flex items-start text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Grapeseed oil & Vitamin E
                  </li>
                </ul>
                <Link href="/shop/melon-mousse" className="btn-secondary w-full block text-center">
                  Get Some
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Silk Butter Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
              Why Choose Candy.Coat?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We're committed to luxury self-care, quality ingredients, and turning your skincare into moments of pure bliss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality Ingredients */}
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Rich Natural Ingredients</h3>
              <p className="text-text-secondary leading-relaxed">
                Premium shea butter, mango butter, and natural oils blend together to create soft, fluffy formulas that leave your skin deeply moisturized, smooth, and glowing.
              </p>
            </div>

            {/* Cruelty-Free */}
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Cruelty-Free</h3>
              <p className="text-text-secondary leading-relaxed">
                We believe in beauty without harm. Our products are never tested on animals, ensuring a guilt-free experience.
              </p>
            </div>

            {/* Handcrafted */}
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Designed to Feel Like a Treat</h3>
              <p className="text-text-secondary leading-relaxed">
                Every Candy.Coat creation is handcrafted in small batches and designed to feel like a treat, transforming your daily routine into a moment of indulgence.
              </p>
            </div>

            {/* Sustainable */}
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Sustainable Practices</h3>
              <p className="text-text-secondary leading-relaxed">
                Committed to eco-friendly packaging and sustainable sourcing of materials for a better planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Real experiences from real people who love Candy.Coat body butters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-primary mb-6 leading-relaxed italic">
                "Candy.Coat has transformed my skincare routine! The Citrus Kiss body butter is my morning go-to for soft, glowing skin!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  E
                </div>
                <div>
                  <p className="font-bold text-text-primary">Emily R.</p>
                  <p className="text-sm text-text-secondary">Verified Customer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-primary mb-6 leading-relaxed italic">
                "I adore the Cotton Candy Swirl! This fluffy body butter smells divine and leaves my skin feeling like silk. It's such a treat!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  S
                </div>
                <div>
                  <p className="font-bold text-text-primary">Sarah T.</p>
                  <p className="text-sm text-text-secondary">Verified Customer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-primary mb-6 leading-relaxed italic">
                "Powder Cloud is my favorite for nighttime. It's so calming and makes my skincare routine feel like pure bliss!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-text-primary font-bold text-lg mr-3">
                  J
                </div>
                <div>
                  <p className="font-bold text-text-primary">Jessica M.</p>
                  <p className="text-sm text-text-secondary">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Subscribe for exclusive offers, beauty tips, and updates on new flavors!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30 text-text-primary"
              required
            />
            <button
              type="submit"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-white/80 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/about#story" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/about#sustainability" className="text-gray-400 hover:text-white transition-colors">Sustainability</Link></li>
                <li><Link href="/about#cruelty-free" className="text-gray-400 hover:text-white transition-colors">Cruelty-Free Promise</Link></li>
              </ul>
            </div>

            {/* Customer Care */}
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

            {/* Connect */}
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

            {/* Contact Info */}
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

          {/* Bottom Bar */}
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
