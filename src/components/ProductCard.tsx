"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Product } from "@/lib/api";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block pb-6">
      <div className="relative aspect-[3/4] bg-[#f7f7f7] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {product.badge && (
          <span className="absolute top-2 left-2 text-[8px] tracking-[0.15em] uppercase text-[#999]">
            {product.badge}
          </span>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute bottom-2 right-2 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Plus className="w-3 h-3 text-[#111]" strokeWidth={1.5} />
        </button>
      </div>

      <div className="pt-2 pb-1 px-0.5">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-[11px] tracking-[0.05em] text-[#111] font-medium truncate">
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {product.comparePrice && (
              <span className="text-[10px] text-[#bbb] line-through">
                ₹{product.comparePrice.toLocaleString("en-IN")}
              </span>
            )}
            <span className="text-[11px] text-[#111] font-medium">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
        <p className="text-[10px] text-[#999] mt-0.5 tracking-[0.03em]">
          {product.colors[0]}
          {product.colors.length > 1 && `  ${product.colors.length} Colours`}
        </p>
      </div>
    </Link>
  );
}
