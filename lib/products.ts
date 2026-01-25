export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  images: string[]; // Multiple product images for carousel
  badge: string;
  badgeColor: string;
  gradient: string;
  benefits: string[];
  ingredients: string[];
  sizes: {
    value: string;
    label: string;
    price: number;
  }[];
  inStock: boolean;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "citrus-kiss",
    name: "Citrus Kiss",
    tagline: "Awaken Your Senses",
    price: 100.00,
    description: "Awaken your senses with the zesty aroma of Citrus Kiss! This soft, fluffy body butter blends vibrant citrus essences with rich natural ingredients to revitalize and deeply nourish your skin.",
    longDescription: "Awaken your senses with the zesty aroma of Citrus Kiss! This luxurious, soft and fluffy body butter is infused with vibrant citrus essences that revitalize your skin, leaving it deeply moisturized, smooth, and glowing. Perfect for morning use to transform your skincare routine into a moment of pure bliss. Our indulgent blend of shea butter and mango butter melts into your skin while the uplifting citrus scent boosts your mood and confidence. Each application feels like a treat, enveloping you in refreshing fragrance and velvety softness.",
    image: "/images/citrus-kiss-3.jpeg",
    images: ["/images/citrus-kiss-3.jpeg", "/images/citrus-kiss-2.jpeg", "/images/citrus-kiss-4.jpeg", "/images/citrus-kiss.png"],
    badge: "Energizing",
    badgeColor: "bg-secondary",
    gradient: "from-orange-50 to-yellow-50",
    benefits: [
      "24 hours of nourishing moisture",
      "Deep hydration with shea butter and mango butter",
      "Uplifting citrus scent that boosts your mood",
      "Perfect for morning use to start your day energized",
      "Revitalizes and refreshes tired skin"
    ],
    ingredients: [
      "Shea Butter (Butyrospermum Parkii)",
      "Mango Butter (Mangifera Indica)",
      "Jojoba Oil",
      "Grapeseed Oil",
      "Vitamin E",
      "Natural Citrus Essential Oils (Orange, Lemon, Grapefruit)",
      "Natural Preservatives"
    ],
    sizes: [
      { value: "50ml", label: "50ml", price: 100.00 },
      { value: "100ml", label: "100ml", price: 150.00 },
      { value: "125ml", label: "125ml", price: 200.00 }
    ],
    inStock: true,
    featured: true
  },
  {
    id: "2",
    slug: "cotton-candy-swirl",
    name: "Cotton Candy Swirl",
    tagline: "Sweet Indulgence",
    price: 100.00,
    description: "Dive into the delightful sweetness of Cotton Candy Swirl! This soft, fluffy body butter is a whimsical treat that envelops your skin in irresistible sweetness while deeply nourishing and moisturizing.",
    longDescription: "Dive into the delightful sweetness of Cotton Candy Swirl! This luxurious, fluffy body butter is designed to feel like a treat, enveloping your skin in a soft, sugary scent reminiscent of confidence and self-love. The indulgent blend of rich natural ingredients provides intense moisture for soft, supple, glowing skin while the sweet fragrance lingers all day. Perfect for a nighttime pampering session when you want to transform your daily skincare routine into a moment of pure bliss. Each application feels like a celebration of sweetness and indulgence.",
    image: "/images/cotton-candy-swirl-3.jpeg",
    images: ["/images/cotton-candy-swirl-3.jpeg", "/images/cotton-candy-swirl-2.jpeg", "/images/cotton-candy-swirl-4.jpeg", "/images/cotton-candy-swirl.png"],
    badge: "Sweet",
    badgeColor: "bg-primary",
    gradient: "from-pink-50 to-purple-50",
    benefits: [
      "24 hours of nourishing moisture",
      "Luxurious moisture for soft, supple skin",
      "Sweet fragrance that lingers all day",
      "Great for nighttime pampering sessions",
      "Whimsical scent reminiscent of summer days"
    ],
    ingredients: [
      "Shea Butter (Butyrospermum Parkii)",
      "Mango Butter (Mangifera Indica)",
      "Jojoba Oil",
      "Grapeseed Oil",
      "Vitamin E",
      "Natural Sweet Vanilla Extract",
      "Cotton Candy Essence",
      "Natural Preservatives"
    ],
    sizes: [
      { value: "50ml", label: "50ml", price: 100.00 },
      { value: "100ml", label: "100ml", price: 150.00 },
      { value: "125ml", label: "125ml", price: 200.00 }
    ],
    inStock: true,
    featured: true
  },
  {
    id: "3",
    slug: "powder-cloud",
    name: "Powder Cloud",
    tagline: "Gentle Tranquility",
    price: 100.00,
    description: "Experience the gentle embrace of Powder Cloud, a soft, fluffy body butter with a soothing, subtle powdery fragrance. This nourishing blend turns your skincare into a moment of tranquility and self-love.",
    longDescription: "Experience the gentle embrace of Powder Cloud, a luxurious, fluffy body butter that caresses your skin with a subtle, powdery fragrance. Perfect for those who cherish tranquility and comfort, this calming, indulgent formula promotes relaxation while leaving your skin deeply moisturized, smooth, and glowing. Ideal for sensitive skin with its gentle touch and rich natural ingredients that soothe, protect, and feel like a treat. Each application transforms your daily routine into a moment of pure bliss, wrapping you in softness and serenity.",
    image: "/images/powder-cloud-3.jpeg",
    images: ["/images/powder-cloud-3.jpeg", "/images/powder-cloud-2.jpeg", "/images/powder-cloud-4.jpeg", "/images/powder-cloud.png"],
    badge: "Calming",
    badgeColor: "bg-accent text-text-primary",
    gradient: "from-purple-50 to-blue-50",
    benefits: [
      "24 hours of nourishing moisture",
      "Calming scent that promotes relaxation",
      "Rich in nourishing ingredients for all-day hydration",
      "Ideal for sensitive skin with gentle formula",
      "Subtle powdery fragrance for comfort"
    ],
    ingredients: [
      "Shea Butter (Butyrospermum Parkii)",
      "Mango Butter (Mangifera Indica)",
      "Jojoba Oil",
      "Grapeseed Oil",
      "Vitamin E",
      "Natural Powder Essence",
      "Chamomile Extract",
      "Lavender Essential Oil",
      "Natural Preservatives"
    ],
    sizes: [
      { value: "50ml", label: "50ml", price: 100.00 },
      { value: "100ml", label: "100ml", price: 150.00 },
      { value: "125ml", label: "125ml", price: 200.00 }
    ],
    inStock: true,
    featured: true
  },
  {
    id: "4",
    slug: "butter-cream-bliss",
    name: "Butter Cream Bliss",
    tagline: "Luxurious Indulgence",
    price: 100.00,
    description: "Indulge in the rich, creamy embrace of Butter Cream Bliss! This ultra-luxurious body butter wraps your skin in velvety softness with a decadent vanilla-cream scent that feels like pure indulgence.",
    longDescription: "Indulge in the rich, creamy embrace of Butter Cream Bliss! This ultra-luxurious, fluffy body butter is our most indulgent formula yet, wrapping your skin in velvety softness with a decadent vanilla-cream scent that feels like pure heaven. Perfect for those who love to pamper themselves, this sumptuous blend of rich natural ingredients provides intense nourishment, leaving your skin deeply moisturized, smooth, and glowing with a silky finish. Each application is a moment of pure bliss, transforming your daily skincare routine into a spa-like experience that celebrates self-love and confidence.",
    image: "/images/butter-cream-bliss-3.jpeg",
    images: ["/images/butter-cream-bliss-3.jpeg", "/images/butter-cream-bliss-2.jpeg", "/images/butter-cream-bliss-4.jpeg", "/images/butter-cream-bliss.png"],
    badge: "Luxurious",
    badgeColor: "bg-amber-500 text-white",
    gradient: "from-amber-50 to-cream-50",
    benefits: [
      "24 hours of nourishing moisture",
      "Ultra-rich formula for intense nourishment",
      "Decadent vanilla-cream scent that lingers",
      "Velvety smooth texture melts into skin",
      "Perfect for full-body pampering sessions"
    ],
    ingredients: [
      "Shea Butter (Butyrospermum Parkii)",
      "Mango Butter (Mangifera Indica)",
      "Jojoba Oil",
      "Grapeseed Oil",
      "Vitamin E",
      "Cocoa Butter",
      "Natural Vanilla Extract",
      "Sweet Cream Essence",
      "Natural Preservatives"
    ],
    sizes: [
      { value: "50ml", label: "50ml", price: 100.00 },
      { value: "100ml", label: "100ml", price: 150.00 },
      { value: "125ml", label: "125ml", price: 200.00 }
    ],
    inStock: true,
    featured: true
  },
  {
    id: "5",
    slug: "melon-mousse",
    name: "Melon Mousse",
    tagline: "Fresh & Revitalizing",
    price: 100.00,
    description: "Refresh and revitalize with the crisp, juicy essence of Melon Mousse! This light, fluffy body butter brings the freshness of summer melons to your skin, leaving it hydrated, smooth, and glowing.",
    longDescription: "Refresh and revitalize with the crisp, juicy essence of Melon Mousse! This light, fluffy body butter captures the fresh, invigorating scent of sweet melons, bringing an instant burst of hydration and energy to your skin. Perfect for those who love fresh, fruity fragrances, this luxurious formula blends rich natural ingredients to leave your skin deeply moisturized, smooth, and glowing with a healthy radiance. Each application feels like a refreshing treat, transforming your daily skincare routine into a revitalizing moment of pure bliss.",
    image: "/images/melon-mousse-3.jpeg",
    images: ["/images/melon-mousse-3.jpeg", "/images/melon-mousse-2.jpeg", "/images/melon-mousse-4.jpeg", "/images/melon-mousse.jpeg"],
    badge: "Refreshing",
    badgeColor: "bg-green-500 text-white",
    gradient: "from-green-50 to-lime-50",
    benefits: [
      "24 hours of nourishing moisture",
      "Light, refreshing melon fragrance",
      "Instantly hydrates and revitalizes skin",
      "Perfect for daytime freshness",
      "Absorbs quickly without greasy residue"
    ],
    ingredients: [
      "Shea Butter (Butyrospermum Parkii)",
      "Mango Butter (Mangifera Indica)",
      "Jojoba Oil",
      "Grapeseed Oil",
      "Vitamin E",
      "Natural Melon Extract",
      "Cucumber Extract",
      "Aloe Vera",
      "Natural Preservatives"
    ],
    sizes: [
      { value: "50ml", label: "50ml", price: 100.00 },
      { value: "100ml", label: "100ml", price: 150.00 },
      { value: "125ml", label: "125ml", price: 200.00 }
    ],
    inStock: true,
    featured: true
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}
