"use client";

import Link from "next/link";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";
import { ProductGridSkeleton } from "./ProductSkeleton";

export default function CategorySection({
  title,
  categorySlug,
  limit = 4,
}: {
  title: string;
  categorySlug: string;
  limit?: number;
}) {
  const { products, loading } = useProducts(categorySlug);
  const display = products.slice(0, limit);

  if (!loading && display.length === 0) return null;

  return (
    <section>
      <div className="flex items-baseline justify-between px-4 lg:px-6 mb-6">
        <h2 className="text-[12px] tracking-[0.2em] uppercase font-light text-[#111]">
          {title}
        </h2>
        <Link
          href={`/collections/${categorySlug}`}
          className="text-[10px] tracking-[0.15em] uppercase text-[#999] hover:text-[#111] transition-colors duration-300 border-b border-[#ddd] pb-0.5"
        >
          View All
        </Link>
      </div>
      {loading ? (
        <ProductGridSkeleton count={limit} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#f0f0f0]">
          {display.map((product) => (
            <div key={product.id} className="bg-white">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
