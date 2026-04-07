import Image from "next/image";
import Link from "next/link";
import CategorySection from "@/components/CategorySection";

export default function Home() {
  return (
    <>
      {/* Hero — Full Bleed */}
      <section className="relative h-screen bg-[#111] flex items-end overflow-hidden">
        <Image
          src="/images/products/tshirt-3.jpg"
          alt="ANGI"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 w-full p-6 sm:p-10 pb-12 sm:pb-16">
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-extralight tracking-[0.5em] text-white leading-none">
            ANGI
          </h1>
          <p className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-white/60 mt-3">
            Identity Through Fashion
          </p>
          <Link
            href="/collections/all"
            className="inline-block mt-8 text-[10px] tracking-[0.25em] uppercase text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-500"
          >
            Shop Collection
          </Link>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-10 sm:h-14" />

      {/* Category Sections — API powered */}
      <CategorySection title="Tamil T-Shirts" categorySlug="tamil-t-shirts" limit={4} />
      <div className="h-10 sm:h-14" />

      <CategorySection title="Identity T-Shirts" categorySlug="identity-t-shirts" limit={4} />
      <div className="h-10 sm:h-14" />

      <CategorySection title="Hoodies" categorySlug="hoodies" limit={4} />
      <div className="h-10 sm:h-14" />

      <CategorySection title="Polo T-Shirts" categorySlug="polo-t-shirts" limit={4} />
      <div className="h-10 sm:h-14" />

      {/* Brand Story */}
      <section className="bg-[#111] py-20 sm:py-28">
        <div className="max-w-xl mx-auto text-center px-6">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6">
            Authenticity &middot; Identity &middot; Culture
          </p>
          <p className="text-[13px] sm:text-[14px] leading-[2] text-white/70 font-light">
            Establishing identity through garments, arts, exhibitions and music.
            Rooted in Tamil culture, ANGI celebrates the power of self-expression
            and the beauty of who you are.
          </p>
          <Link
            href="/about"
            className="inline-block mt-10 text-[10px] tracking-[0.25em] uppercase text-white/50 border-b border-white/20 pb-1 hover:text-white hover:border-white/40 transition-all duration-500"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-sm mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#999] mb-6">
            Join the Movement
          </p>
          <form className="flex border-b border-[#ddd]">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent py-3 text-[12px] tracking-[0.05em] text-[#111] placeholder-[#ccc] focus:outline-none"
            />
            <button
              type="submit"
              className="text-[10px] tracking-[0.2em] uppercase text-[#999] hover:text-[#111] transition-colors duration-300 pl-4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
