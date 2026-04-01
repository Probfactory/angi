"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-6 py-16 sm:py-20">
      <h1 className="text-[14px] tracking-[0.15em] font-light text-[#111] text-center mb-2">
        Contact
      </h1>
      <p className="text-[11px] text-[#bbb] text-center mb-16">
        We&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Form */}
        <div>
          <form className="space-y-5">
            <div>
              <label className="block text-[9px] tracking-[0.2em] uppercase text-[#bbb] mb-2">Name</label>
              <input type="text" placeholder="Your name" className="w-full border-b border-[#e5e5e5] pb-2 text-[12px] text-[#111] placeholder-[#ddd] focus:outline-none focus:border-[#111] transition-colors bg-transparent" />
            </div>
            <div>
              <label className="block text-[9px] tracking-[0.2em] uppercase text-[#bbb] mb-2">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full border-b border-[#e5e5e5] pb-2 text-[12px] text-[#111] placeholder-[#ddd] focus:outline-none focus:border-[#111] transition-colors bg-transparent" />
            </div>
            <div>
              <label className="block text-[9px] tracking-[0.2em] uppercase text-[#bbb] mb-2">Subject</label>
              <select className="w-full border-b border-[#e5e5e5] pb-2 text-[12px] text-[#111] focus:outline-none focus:border-[#111] transition-colors bg-transparent">
                <option>General Inquiry</option>
                <option>Order Support</option>
                <option>Returns & Exchange</option>
                <option>Collaboration</option>
              </select>
            </div>
            <div>
              <label className="block text-[9px] tracking-[0.2em] uppercase text-[#bbb] mb-2">Message</label>
              <textarea rows={4} placeholder="How can we help?" className="w-full border-b border-[#e5e5e5] pb-2 text-[12px] text-[#111] placeholder-[#ddd] focus:outline-none focus:border-[#111] transition-colors bg-transparent resize-none" />
            </div>
            <button type="submit" className="w-full bg-[#111] text-white py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-[#333] transition-colors duration-300 mt-2">
              Send Message
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="space-y-8">
          {[
            { icon: Mail, label: "Email", value: "hello@angi.in" },
            { icon: Phone, label: "Phone", value: "+91 98765 43210" },
            { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu, India" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <item.icon className="w-4 h-4 text-[#ccc] mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[9px] tracking-[0.15em] uppercase text-[#bbb] mb-1">{item.label}</p>
                <p className="text-[11px] text-[#111]">{item.value}</p>
              </div>
            </div>
          ))}

          <div className="pt-6 border-t border-[#f0f0f0]">
            <p className="text-[9px] tracking-[0.15em] uppercase text-[#bbb] mb-2">Hours</p>
            <div className="text-[10px] text-[#999] space-y-1">
              <p>Mon – Fri: 10AM – 7PM IST</p>
              <p>Sat: 10AM – 5PM IST</p>
              <p>Sun: Closed</p>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="#" className="text-[#ccc] hover:text-[#111] transition-colors duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="text-[#ccc] hover:text-[#111] transition-colors duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
