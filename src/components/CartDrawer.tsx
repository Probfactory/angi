"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-[70]" onClick={() => setIsCartOpen(false)} />

      <div className="fixed right-0 top-0 h-full w-full max-w-[380px] bg-white z-[80] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-12 border-b border-[#f0f0f0]">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#111]">
            Bag ({items.length})
          </span>
          <button onClick={() => setIsCartOpen(false)} className="text-[#999] hover:text-[#111] transition-colors">
            <X className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6">
              <ShoppingBag className="w-10 h-10 text-[#e5e5e5] mb-4" strokeWidth={1} />
              <p className="text-[11px] text-[#999] mb-6">Your bag is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-[10px] tracking-[0.2em] uppercase text-[#111] border-b border-[#111] pb-0.5"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="p-5 space-y-5">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-3">
                  <div className="relative w-20 h-24 bg-[#f7f7f7] flex-shrink-0">
                    <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <h3 className="text-[11px] text-[#111] truncate pr-2">{item.product.name}</h3>
                      <button onClick={() => removeItem(item.product.id, item.size, item.color)} className="text-[#ccc] hover:text-[#111]">
                        <X className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-[9px] text-[#bbb] mt-0.5">{item.color}{item.size ? ` / ${item.size}` : ""}</p>
                    <p className="text-[11px] text-[#111] mt-1">₹{item.product.price.toLocaleString("en-IN")}</p>
                    <div className="flex items-center gap-2 mt-2 border border-[#e5e5e5] w-fit">
                      <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)} className="px-2 py-1">
                        <Minus className="w-2.5 h-2.5 text-[#999]" />
                      </button>
                      <span className="text-[10px] min-w-[16px] text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)} className="px-2 py-1">
                        <Plus className="w-2.5 h-2.5 text-[#999]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#f0f0f0] p-5 space-y-3">
            <div className="flex justify-between text-[11px]">
              <span className="text-[#999]">Subtotal</span>
              <span className="text-[#111]">₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <p className="text-[9px] text-[#ccc]">Shipping calculated at checkout</p>
            <Link
              href="/cart"
              onClick={() => setIsCartOpen(false)}
              className="block w-full bg-[#111] text-white text-center py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-[#333] transition-colors duration-300"
            >
              View Bag
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
