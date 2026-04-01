"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getProductBySlug, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const params = useParams();
  const product = getProductBySlug(params.slug as string);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-[12px] text-[#999] mb-3">Product not found</p>
          <Link href="/collections/all" className="text-[10px] tracking-[0.15em] uppercase text-[#111] border-b border-[#ddd] pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    const size = selectedSize || (product.sizes.length > 0 ? product.sizes[0] : "One Size");
    const color = selectedColor || product.colors[0];
    for (let i = 0; i < quantity; i++) {
      addItem(product, size, color);
    }
    setQuantity(1);
  };

  return (
    <>
      {/* Breadcrumb */}
      <nav className="px-4 lg:px-6 py-3 flex items-center gap-1.5 text-[9px] tracking-[0.1em] uppercase text-[#bbb]">
        <Link href="/" className="hover:text-[#111] transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/collections/${product.categorySlug}`} className="hover:text-[#111] transition-colors">{product.category}</Link>
        <span>/</span>
        <span className="text-[#111]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image — Full Bleed */}
        <div className="relative aspect-[3/4] bg-[#f7f7f7]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {product.badge && (
            <span className="absolute top-4 left-4 text-[9px] tracking-[0.15em] uppercase text-[#999]">
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="px-6 lg:px-10 py-8 lg:py-12 lg:sticky lg:top-14 lg:self-start">
          <h1 className="text-[16px] sm:text-[18px] font-light tracking-[0.1em] text-[#111] mb-3">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-[14px] text-[#111]">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.comparePrice && (
              <span className="text-[12px] text-[#ccc] line-through">
                ₹{product.comparePrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <p className="text-[11px] leading-[1.8] text-[#888] mb-8 max-w-md">
            {product.description}
          </p>

          {/* Color */}
          <div className="mb-6">
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#bbb] mb-2.5">
              Colour — {selectedColor || product.colors[0]}
            </p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1.5 text-[10px] tracking-[0.05em] border transition-colors duration-300 ${
                    (selectedColor || product.colors[0]) === color
                      ? "border-[#111] text-[#111]"
                      : "border-[#e5e5e5] text-[#999] hover:border-[#111]"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          {product.sizes.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#bbb]">
                  Size
                </p>
                <button className="text-[9px] tracking-[0.1em] text-[#bbb] hover:text-[#111] transition-colors underline">
                  Size Guide
                </button>
              </div>
              <div className="flex gap-1.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-10 text-[10px] border transition-colors duration-300 ${
                      selectedSize === size
                        ? "border-[#111] text-[#111]"
                        : "border-[#e5e5e5] text-[#999] hover:border-[#111]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <div className="flex gap-2 mb-8">
            <div className="flex items-center border border-[#e5e5e5]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2.5 text-[#999] hover:text-[#111] transition-colors"
              >
                <Minus className="w-3 h-3" strokeWidth={1.5} />
              </button>
              <span className="px-2 text-[11px] text-[#111] min-w-[24px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2.5 text-[#999] hover:text-[#111] transition-colors"
              >
                <Plus className="w-3 h-3" strokeWidth={1.5} />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#111] text-white py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-[#333] transition-colors duration-300"
            >
              Add to Bag
            </button>
          </div>

          {/* Shipping info */}
          <p className="text-[9px] tracking-[0.1em] text-[#ccc] mb-8">
            Free shipping on orders above ₹1,999 &middot; Easy 7-day returns
          </p>

          {/* Accordions */}
          <div className="border-t border-[#f0f0f0]">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center justify-between w-full py-4 text-[10px] tracking-[0.15em] uppercase text-[#111]"
            >
              Product Details
              {showDetails ? <ChevronUp className="w-3 h-3 text-[#bbb]" /> : <ChevronDown className="w-3 h-3 text-[#bbb]" />}
            </button>
            {showDetails && (
              <div className="pb-4 space-y-1.5">
                {product.details.map((d, i) => (
                  <p key={i} className="text-[10px] text-[#999] leading-relaxed">
                    {d}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-[#f0f0f0]">
            <button
              onClick={() => setShowShipping(!showShipping)}
              className="flex items-center justify-between w-full py-4 text-[10px] tracking-[0.15em] uppercase text-[#111]"
            >
              Shipping & Returns
              {showShipping ? <ChevronUp className="w-3 h-3 text-[#bbb]" /> : <ChevronDown className="w-3 h-3 text-[#bbb]" />}
            </button>
            {showShipping && (
              <div className="pb-4 space-y-1.5 text-[10px] text-[#999]">
                <p>Standard delivery: 5-7 business days</p>
                <p>Express delivery: 2-3 business days</p>
                <p>Easy 7-day returns on all orders</p>
              </div>
            )}
          </div>
          <div className="border-t border-[#f0f0f0]" />
        </div>
      </div>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#999] px-4 lg:px-6 mb-6">
            You May Also Like
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#f0f0f0]">
            {relatedProducts.map((p) => (
              <div key={p.id} className="bg-white">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
