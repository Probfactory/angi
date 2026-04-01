"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#111] text-white text-center text-[10px] tracking-[0.25em] py-2 uppercase">
        Free Shipping on Orders Above ₹1,999
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="flex items-center justify-between h-12 px-4 lg:px-6">
          {/* Left Nav */}
          <nav className="hidden lg:flex items-center gap-6 flex-1">
            <div
              className="relative"
              onMouseEnter={() => setShopDropdown(true)}
              onMouseLeave={() => setShopDropdown(false)}
            >
              <button className="flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase text-[#111] hover:text-[#666] transition-colors duration-300">
                Shop <ChevronDown className="w-3 h-3" />
              </button>
              {shopDropdown && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white shadow-sm border border-[#f0f0f0] min-w-[180px] py-2">
                    {[
                      { name: "All Products", slug: "all" },
                      { name: "Tamil T-Shirts", slug: "tamil-t-shirts" },
                      { name: "Identity T-Shirts", slug: "identity-t-shirts" },
                      { name: "Hoodies", slug: "hoodies" },
                      { name: "Polo T-Shirts", slug: "polo-t-shirts" },
                      { name: "Keychains", slug: "keychains" },
                    ].map((item) => (
                      <Link
                        key={item.slug}
                        href={`/collections/${item.slug}`}
                        className="block px-4 py-1.5 text-[11px] tracking-[0.1em] uppercase text-[#666] hover:text-[#111] transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="text-[11px] tracking-[0.15em] uppercase text-[#111] hover:text-[#666] transition-colors duration-300"
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5 text-[#111]" strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="text-[18px] font-light tracking-[0.5em] uppercase text-[#111]">
              ANGI
            </span>
          </Link>

          {/* Right */}
          <div className="flex items-center gap-3 lg:gap-4 flex-1 justify-end">
            <Link
              href="/contact"
              className="hidden lg:block text-[11px] tracking-[0.15em] uppercase text-[#111] hover:text-[#666] transition-colors duration-300"
            >
              Contact
            </Link>
            <button className="hover:text-[#666] transition-colors duration-300">
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <Link href="/account" className="hover:text-[#666] transition-colors duration-300">
              <User className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </Link>
            <button
              className="relative hover:text-[#666] transition-colors duration-300"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#111] text-white text-[8px] rounded-full w-3.5 h-3.5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white">
          <div className="flex items-center justify-between h-12 px-4">
            <span className="text-[11px] tracking-[0.2em] uppercase">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="px-4 pt-8 space-y-5">
            {[
              { name: "All Products", href: "/collections/all" },
              { name: "Tamil T-Shirts", href: "/collections/tamil-t-shirts" },
              { name: "Identity T-Shirts", href: "/collections/identity-t-shirts" },
              { name: "Hoodies", href: "/collections/hoodies" },
              { name: "Polo T-Shirts", href: "/collections/polo-t-shirts" },
              { name: "Keychains", href: "/collections/keychains" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-[13px] tracking-[0.15em] uppercase text-[#111]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-[#f0f0f0] pt-5 space-y-5">
              <Link href="/about" className="block text-[13px] tracking-[0.15em] uppercase text-[#666]" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/contact" className="block text-[13px] tracking-[0.15em] uppercase text-[#666]" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="/account" className="block text-[13px] tracking-[0.15em] uppercase text-[#666]" onClick={() => setMobileMenuOpen(false)}>Account</Link>
            </div>
          </nav>
        </div>
      )}

      <CartDrawer />
    </>
  );
}
