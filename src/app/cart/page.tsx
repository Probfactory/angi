"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <ShoppingBag className="w-12 h-12 text-[#e5e5e5] mb-4" strokeWidth={1} />
        <p className="text-[12px] text-[#999] mb-6">Your bag is empty</p>
        <Link
          href="/collections/all"
          className="text-[10px] tracking-[0.2em] uppercase text-[#111] border-b border-[#111] pb-0.5"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">
      <h1 className="text-[14px] tracking-[0.15em] font-light text-[#111] mb-10">
        Your Bag
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-12">
        <div>
          <div className="divide-y divide-[#f0f0f0]">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.size}-${item.color}`} className="py-5 flex gap-4">
                <div className="relative w-20 h-24 sm:w-24 sm:h-30 bg-[#f7f7f7] flex-shrink-0">
                  <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex justify-between items-start">
                      <Link href={`/product/${item.product.slug}`} className="text-[11px] text-[#111] hover:text-[#666] transition-colors">
                        {item.product.name}
                      </Link>
                      <button onClick={() => removeItem(item.product.id, item.size, item.color)} className="text-[#ccc] hover:text-[#111] ml-4">
                        <X className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-[9px] text-[#bbb] mt-1">{item.color}{item.size ? ` / ${item.size}` : ""}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-[#e5e5e5]">
                      <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)} className="px-2.5 py-1.5">
                        <Minus className="w-3 h-3 text-[#999]" strokeWidth={1.5} />
                      </button>
                      <span className="px-2 text-[10px] text-[#111]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)} className="px-2.5 py-1.5">
                        <Plus className="w-3 h-3 text-[#999]" strokeWidth={1.5} />
                      </button>
                    </div>
                    <span className="text-[11px] text-[#111]">₹{(item.product.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between">
            <Link href="/collections/all" className="text-[10px] text-[#bbb] hover:text-[#111] border-b border-[#e5e5e5] pb-0.5 transition-colors">
              Continue Shopping
            </Link>
            <button onClick={clearCart} className="text-[10px] text-[#bbb] hover:text-[#111] transition-colors">
              Clear Bag
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:sticky lg:top-20 lg:self-start">
          <div className="bg-[#fafafa] p-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-5">Order Summary</p>
            <div className="space-y-2.5 mb-5">
              <div className="flex justify-between text-[11px]">
                <span className="text-[#999]">Subtotal</span>
                <span className="text-[#111]">₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-[#999]">Shipping</span>
                <span className={totalPrice >= 1999 ? "text-[#111]" : "text-[#111]"}>
                  {totalPrice >= 1999 ? "Complimentary" : "₹99"}
                </span>
              </div>
            </div>
            <div className="flex justify-between text-[12px] pt-3 border-t border-[#e5e5e5] mb-5">
              <span className="text-[#111]">Total</span>
              <span className="text-[#111]">₹{(totalPrice < 1999 ? totalPrice + 99 : totalPrice).toLocaleString("en-IN")}</span>
            </div>
            <button className="w-full bg-[#111] text-white py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-[#333] transition-colors duration-300">
              Checkout
            </button>
            <p className="text-[8px] text-[#ccc] text-center mt-3 tracking-[0.05em]">
              Secure checkout powered by Zoho Commerce
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
