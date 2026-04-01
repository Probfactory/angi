"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import Link from "next/link";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export default function CollectionPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const currentCategory = categories.find((c) => c.slug === categorySlug);
  const categoryName = currentCategory?.name || "All";

  const filteredProducts = useMemo(() => {
    let result =
      categorySlug === "all"
        ? [...products]
        : products.filter((p) => p.categorySlug === categorySlug);

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
    }
    return result;
  }, [categorySlug, sortBy]);

  return (
    <div>
      {/* Title */}
      <div className="px-4 lg:px-6 pt-8 pb-4">
        <h1 className="text-[14px] tracking-[0.15em] font-light text-[#111]">
          {categoryName}{" "}
          <span className="text-[11px] text-[#bbb] ml-1">
            {filteredProducts.length}
          </span>
        </h1>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 lg:px-6 pb-4">
        {/* Category Nav */}
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className={`text-[10px] tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300 ${
                cat.slug === categorySlug
                  ? "text-[#111]"
                  : "text-[#bbb] hover:text-[#111]"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-[10px] tracking-[0.1em] uppercase bg-transparent border-none focus:outline-none cursor-pointer text-[#999]"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-[#999] hover:text-[#111] transition-colors duration-300"
          >
            Filter
            <SlidersHorizontal className="w-3 h-3" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="mx-4 lg:mx-6 mb-4 p-5 bg-[#fafafa]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#999]">
              Filters
            </span>
            <button onClick={() => setShowFilters(false)}>
              <X className="w-3.5 h-3.5 text-[#999]" strokeWidth={1.5} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#bbb] mb-2">Size</p>
              <div className="flex flex-wrap gap-1.5">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className="w-9 h-8 text-[10px] border border-[#e5e5e5] text-[#666] hover:border-[#111] hover:text-[#111] transition-colors duration-300"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#bbb] mb-2">Price</p>
              <div className="space-y-1.5">
                {["Under ₹1,000", "₹1,000 - ₹2,000", "₹2,000+"].map((r) => (
                  <button key={r} className="block text-[10px] text-[#999] hover:text-[#111] transition-colors duration-300">
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid — Edge to Edge, 1px gap */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#f0f0f0]">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[12px] text-[#999]">No products found.</p>
          <Link
            href="/collections/all"
            className="inline-block mt-3 text-[10px] tracking-[0.15em] uppercase text-[#111] border-b border-[#ddd] pb-0.5"
          >
            View All
          </Link>
        </div>
      )}
    </div>
  );
}
