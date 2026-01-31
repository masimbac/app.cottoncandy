import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  variant?: "home" | "shop";
}

export function ProductCard({ product, variant = "home" }: ProductCardProps) {
  if (variant === "home") {
    return (
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
        <div className={`relative h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center p-8`}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain w-full h-full"
          />
          <div className={`absolute top-4 right-4 ${product.badgeColor} px-3 py-1 rounded-full text-sm font-semibold`}>
            {product.badge}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-text-primary mb-3">{product.name}</h3>
          <p className="text-text-secondary mb-4 leading-relaxed">
            {product.description}
          </p>
          <p className="text-xs text-text-secondary mb-4 leading-relaxed">
            {product.ingredients
              .filter(ing => {
                const lower = ing.toLowerCase();
                // Keep base ingredients only
                return (
                  lower.includes('shea butter') ||
                  lower.includes('mango butter') ||
                  lower.includes('coconut oil') ||
                  lower.includes('jojoba oil') ||
                  lower.includes('grapeseed oil') ||
                  lower.includes('vitamin e') ||
                  lower.includes('sweet almond')
                );
              })
              .map(ing => ing.replace(/\s*\(.*?\)\s*/g, '').trim())
              .join(' + ')}
          </p>
          <ul className="space-y-2 mb-6">
            {product.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start text-sm text-text-secondary">
                <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
          <Link
            href={`/shop/${product.slug}`}
            className={`btn-${product.id === "2" || product.id === "4" ? "primary" : "secondary"} w-full block text-center`}
          >
            Get Some
          </Link>
        </div>
      </div>
    );
  }

  return null;
}
