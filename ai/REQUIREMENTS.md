# Candycoat.co Website Requirements

## Project Overview
Candycoat.co is a vibrant, luxurious e-commerce platform for Silk Butter premium body creams. The site showcases three signature products: Citrus Kiss, Cotton Candy Swirl, and Powder Cloud.

## Design Philosophy
**Theme:** Simple, clean, and luxurious with a lively and catchy aesthetic
**Mood:** Classy, indulgent, feminine, and sensory-focused
**Target Audience:** Beauty enthusiasts seeking premium, cruelty-free skincare

---

## Visual Design System

### Color Palette
- **Primary Color:** `#FF8FB1` (Soft Rose Pink) - Inspired by Cotton Candy, feminine and luxurious
- **Secondary Color:** `#FFB347` (Coral Orange) - Inspired by Citrus Kiss, warm and energetic
- **Accent Color:** `#E6D5FF` (Lavender) - Inspired by Powder Cloud, calming and elegant
- **Background:** `#FFFFFF` (Pure White) - Clean and minimalist
- **Text Primary:** `#2D2D2D` (Charcoal) - Readable and sophisticated
- **Text Secondary:** `#6B6B6B` (Medium Gray) - For supporting text
- **Success:** `#4CAF50` (Green) - For confirmations
- **Error:** `#EF4444` (Red) - For errors

### Typography
- **Primary Font:** Geist Sans (already configured)
- **Secondary Font:** Geist Mono (for product codes, prices)
- **Headings:** Bold, generous spacing
- **Body:** Clear, readable with good line height (1.6-1.8)

### Design Elements
- **Buttons:** Rounded corners (8-12px border-radius), elevated on hover
- **Cards:** Subtle shadows, clean borders
- **Images:** High-quality product photography with transparent backgrounds
- **Icons:** Minimal, line-based icons for navigation and actions
- **Animations:** Smooth transitions (300ms), subtle hover effects
- **Spacing:** Generous white space for luxury feel

---

## Technical Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **State Management:** React Context API / Zustand (for cart)
- **Forms:** React Hook Form + Zod validation
- **Payments:** Stripe integration (future)
- **Analytics:** Google Analytics / Vercel Analytics

---

## Site Structure & Navigation

### Header (Global)
- Logo (Silk Butter logo - left aligned)
- Main Navigation:
  - Home
  - Shop (dropdown: All Products, Citrus Kiss, Cotton Candy Swirl, Powder Cloud)
  - About
  - Contact
- Utility Navigation:
  - Search icon
  - Account icon (login/register)
  - Cart icon with item count badge
- Mobile: Hamburger menu with full-screen overlay

### Footer (Global)
- **Column 1: About**
  - About Us
  - Our Story
  - Sustainability
  - Cruelty-Free Promise

- **Column 2: Customer Care**
  - Contact Us
  - FAQ
  - Shipping & Returns
  - Privacy Policy
  - Terms & Conditions

- **Column 3: Connect**
  - Newsletter signup form
  - Social media icons (Instagram, Facebook, Pinterest, TikTok)

- **Column 4: Contact Info**
  - Email address
  - Customer service hours

- **Bottom Bar:**
  - Copyright notice
  - Payment method icons

---

## Page Requirements

### 1. Landing Page (`/`)

#### Hero Section
- **Full-width hero image** or gradient background
- **Headline:** "Indulge Your Senses with Silk Butter Body Creams!"
- **Subheadline:** "Experience a world of softness and fragrance that wraps your skin in luxury."
- **CTA Button:** "Explore Our Flavors" (Primary color, links to /shop)
- **Background:** Subtle animation or parallax effect

#### Product Showcase Section
- **Grid layout:** 3 columns (desktop), 1 column (mobile)
- **Product Cards** for each flavor:
  - Product image (use transparent logos from `/public/images/`)
  - Product name
  - Short description (1-2 sentences)
  - Key benefit badge
  - "Learn More" button (links to individual product page)
  - Hover effect: Card lift with shadow increase

#### Why Choose Silk Butter Section
- **Icon + Text Grid** (4 columns):
  1. Quality Ingredients (icon + headline + description)
  2. Cruelty-Free (icon + headline + description)
  3. Handcrafted with Love (icon + headline + description)
  4. Sustainable Practices (icon + headline + description)

#### Customer Testimonials Section
- **Carousel** or **3-column grid**
- Customer name, rating (5 stars), quote
- Photos (optional, use avatars if no photos)
- Testimonials from brief:
  - Emily R. - Citrus Kiss
  - Sarah T. - Cotton Candy Swirl
  - Jessica M. - Powder Cloud

#### Newsletter CTA Section
- **Centered, highlighted box**
- Headline: "Join our community for exclusive offers and updates!"
- Email input field
- "Subscribe" button (Primary color)

---

### 2. Shop Page (`/shop`)

#### Product Listing
- **Grid layout:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Filter sidebar** (desktop) or **Filter drawer** (mobile):
  - Sort by: Featured, Price (Low-High), Price (High-Low), Name (A-Z)
  - Filter by scent type (if more products added later)

#### Product Cards
- Product image
- Product name
- Price
- Short description
- Star rating
- "Add to Cart" button
- "Quick View" button (opens modal)

---

### 3. Individual Product Pages (`/shop/[product-slug]`)

#### Product Details Layout
- **Left Column (50%):**
  - Large product image
  - Image gallery thumbnails (if multiple images)
  - Zoom on hover

- **Right Column (50%):**
  - Product name (H1)
  - Price (large, bold)
  - Star rating + number of reviews
  - Product description (from brief)
  - **Benefits list:**
    - Bullet points with checkmark icons
  - **Size selector:** Dropdown (e.g., 8oz, 16oz)
  - **Quantity selector:** +/- buttons
  - **Add to Cart button** (Primary color, large)
  - **Add to Wishlist** (heart icon, secondary)
  - **Shipping info:** "Free shipping on orders over $50"
  - **Trust badges:** Cruelty-free, Handmade, Natural ingredients

#### Ingredients Section
- Collapsible accordion
- Full ingredient list
- Sourcing information

#### Customer Reviews Section
- Review summary (average rating, total reviews)
- Individual reviews (name, rating, date, text)
- "Write a Review" button

#### Related Products Section
- "You May Also Like"
- 3-4 product cards (other flavors)

---

### 4. Cart Page (`/cart`)

#### Cart Layout
- **Left Section (70%):**
  - Cart items table/list:
    - Product image (thumbnail)
    - Product name
    - Price per unit
    - Quantity selector (+/- buttons)
    - Subtotal
    - Remove button (X icon)
  - Empty cart state: "Your cart is empty" + "Continue Shopping" button

- **Right Section (30%):**
  - **Order Summary Card:**
    - Subtotal
    - Shipping (calculated at checkout)
    - Tax (calculated at checkout)
    - Total (bold, large)
    - **Promo code input** (optional)
    - **"Proceed to Checkout" button** (Primary color, full-width)
    - **"Continue Shopping" link** (Secondary color)
    - Trust badges (Secure checkout, SSL encrypted)

---

### 5. Checkout Page (`/checkout`)

#### Multi-Step Checkout Process

**Step Indicators:**
1. Shipping → 2. Payment → 3. Review

#### Shipping Information (Step 1)
- Email address
- Shipping address form:
  - First name, Last name
  - Address line 1, Address line 2
  - City, State/Province, ZIP/Postal code
  - Country (dropdown)
  - Phone number
- "Save this address" checkbox (for logged-in users)
- **Shipping method selection:**
  - Standard (5-7 days) - Free
  - Express (2-3 days) - $9.99
  - Overnight (1 day) - $19.99

#### Payment Information (Step 2)
- **Payment method tabs:**
  - Credit/Debit Card (Stripe integration)
  - PayPal (future)
  - Apple Pay / Google Pay (future)
- Card details form:
  - Card number
  - Cardholder name
  - Expiration date (MM/YY)
  - CVV
  - Billing address (same as shipping checkbox)
- Security badges (SSL, PCI compliant)

#### Review Order (Step 3)
- **Order summary:**
  - All items listed with quantities
  - Shipping address (with edit link)
  - Shipping method
  - Payment method (last 4 digits)
  - Order total breakdown
- Terms & Conditions checkbox
- **"Place Order" button** (Primary color, large)

#### Sidebar (all steps)
- Order summary (items, subtotal, shipping, tax, total)
- Product thumbnails with quantities
- Collapsible on mobile

---

### 6. Order Confirmation Page (`/confirmation/[order-id]`)

#### Thank You Section
- **Large checkmark icon** (Success color)
- **Headline:** "Thank You for Your Order!"
- **Subheadline:** "Your order has been confirmed"
- **Order number:** #[ORDER_ID]
- **Confirmation email message:** "A confirmation email has been sent to [email]"

#### Order Details
- **Estimated delivery date**
- **Shipping address**
- **Payment method** (last 4 digits)
- **Order summary table:**
  - Product names, quantities, prices
  - Subtotal, shipping, tax, total

#### What's Next Section
- "Track your order" button (links to tracking page)
- "Continue Shopping" button
- "Create an account" CTA (if guest checkout)

#### Recommended Products Section
- "Complete Your Collection"
- 3 product cards (other flavors not in order)

---

### 7. About Page (`/about`)

#### Our Story Section
- Hero image or video
- Brand narrative
- Founder story (if applicable)

#### Values Section
- Quality Ingredients
- Cruelty-Free
- Handcrafted
- Sustainable Practices
(Expanded versions of landing page icons)

#### Meet the Products
- Brief introduction to the three flavors
- Links to product pages

---

### 8. Contact Page (`/contact`)

#### Contact Form
- Name
- Email
- Subject
- Message
- "Send Message" button

#### Contact Information
- Email address
- Phone number (if available)
- Business hours
- Social media links

---

## E-Commerce Functionality

### Cart Management
- Add to cart (with quantity)
- Update cart item quantities
- Remove cart items
- Cart persistence (localStorage)
- Cart count badge in header
- Empty cart state

### User Accounts (Phase 2)
- User registration
- Login/Logout
- Password reset
- Order history
- Saved addresses
- Wishlist

### Checkout Flow
- Guest checkout option
- Multi-step checkout process
- Form validation (real-time)
- Shipping cost calculation
- Tax calculation
- Promo code application
- Payment processing (Stripe)

### Order Management
- Order confirmation page
- Confirmation email
- Order tracking (Phase 2)

---

## Features & Interactions

### Animations & Micro-interactions
- Smooth page transitions
- Button hover effects (scale, shadow)
- Card hover effects (lift, shadow)
- Loading states (skeleton screens)
- Success/error toast notifications
- Add to cart animation (item flies to cart icon)

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: 0-640px
  - Tablet: 641-1024px
  - Desktop: 1025px+
- Touch-friendly buttons (min 44x44px)
- Hamburger menu on mobile
- Collapsible sections on mobile

### Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- Alt text for all images
- Color contrast ratios (4.5:1 minimum)

### SEO Optimization
- Meta tags (title, description, OG tags)
- Structured data (Product schema)
- XML sitemap
- robots.txt
- Fast loading times (<3s)
- Optimized images (WebP format)

### Performance
- Image optimization (Next.js Image component)
- Code splitting
- Lazy loading
- CDN for static assets
- Lighthouse score: 90+ on all metrics

---

## Content Requirements

### Copy Tone
- Luxurious and indulgent
- Sensory and descriptive
- Warm and inviting
- Confident but not pushy

### Product Descriptions
Use content from `ai/brief.txt`:

**Citrus Kiss:**
- Description: "Awaken your senses with the zesty aroma of Citrus Kiss! Infused with vibrant citrus essences, this cream revitalizes your skin, leaving it feeling fresh and energized."
- Benefits: Deep hydration, uplifting scent, perfect for morning use

**Cotton Candy Swirl:**
- Description: "Dive into the delightful sweetness of Cotton Candy Swirl! This whimsical cream envelops your skin in a soft, sugary scent, reminiscent of carefree summer days."
- Benefits: Luxurious moisture, sweet fragrance, great for nighttime pampering

**Powder Cloud:**
- Description: "Experience the gentle embrace of Powder Cloud, a soothing blend that caresses your skin with a subtle, powdery fragrance. Perfect for those who cherish tranquility and comfort."
- Benefits: Calming scent, all-day hydration, ideal for sensitive skin

---

## Image Assets

### Required Images
- **Logo:** `/public/images/Silk Butter logo.png`
- **Product Logos:**
  - Citrus Kiss: `/public/images/Citrus_Bliss_Logo_Transparent_HighRes 21 Jan.png`
  - Cotton Candy Swirl: `/public/images/Cotton_Candy_Swirl_Logo_Transparent_HighRes 21 Jan.png`
  - Powder Cloud: `/public/images/Powder_Cloud_Logo_Transparent_HighRes 21 Jan.png`

### Additional Image Needs (To Be Created/Sourced)
- Hero section background image
- Product lifestyle photography
- Ingredient close-ups
- Texture/application shots
- Customer testimonial photos (optional)
- About page imagery
- Icons for features (cruelty-free, handmade, etc.)

---

## Technical Implementation Notes

### State Management (Cart)
```typescript
interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}
```

### Product Data Structure
```typescript
interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  images: string[];
  benefits: string[];
  ingredients: string[];
  sizes: { value: string; label: string; price: number }[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
}
```

### API Routes (Next.js API)
- `/api/products` - Get all products
- `/api/products/[slug]` - Get single product
- `/api/cart` - Cart operations
- `/api/checkout` - Create checkout session
- `/api/orders` - Create and retrieve orders
- `/api/newsletter` - Newsletter signup

---

## Testing Requirements
- Unit tests for components (Jest + React Testing Library)
- E2E tests for checkout flow (Playwright)
- Accessibility testing (axe-core)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile device testing (iOS, Android)

---

## Launch Checklist
- [ ] All pages implemented and responsive
- [ ] Cart functionality working
- [ ] Checkout flow complete
- [ ] Payment integration tested
- [ ] Email notifications configured
- [ ] Analytics installed
- [ ] SEO optimization complete
- [ ] Accessibility audit passed
- [ ] Performance optimization (Lighthouse 90+)
- [ ] Cross-browser testing complete
- [ ] SSL certificate installed
- [ ] Privacy policy and T&Cs in place
- [ ] Social media accounts linked
- [ ] Newsletter integration working

---

## Future Enhancements (Phase 2)
- User accounts and authentication
- Product reviews and ratings system
- Wishlist functionality
- Product recommendations engine
- Live chat support
- Loyalty/rewards program
- Gift card purchases
- Subscription service (monthly deliveries)
- Blog/content marketing section
- Multi-currency support
- International shipping
- Mobile app (iOS/Android)

---

## Success Metrics
- Conversion rate: Target 2-3%
- Average order value: Target $45+
- Cart abandonment rate: Target <70%
- Page load time: Target <3s
- Mobile traffic: Expected 60%+
- Bounce rate: Target <50%
- Customer satisfaction: Target 4.5+ stars

---

## Brand Assets & Guidelines

### Logo Usage
- Primary logo: Silk Butter logo (full color on white)
- Minimum size: 120px width
- Clear space: 20px on all sides
- Do not distort, rotate, or recolor

### Brand Voice
- **Personality:** Luxurious, playful, confident, caring
- **Do's:** Use sensory language, focus on experience, be warm
- **Don'ts:** Be clinical, use jargon, be overly salesy

---

## Conclusion
This requirements document outlines a comprehensive, modern e-commerce website for Candycoat.co that is lively, classy, and catchy. The simple white background provides a clean canvas for the colorful product branding, while the chosen color palette (soft rose pink and coral orange) creates an inviting, feminine, and luxurious aesthetic that perfectly matches the Silk Butter brand identity.
