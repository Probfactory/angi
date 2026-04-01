import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function Home() {
  const tamilTees = products.filter((p) => p.categorySlug === "tamil-t-shirts");
  const identityTees = products.filter((p) => p.categorySlug === "identity-t-shirts");
  const hoodies = products.filter((p) => p.categorySlug === "hoodies");
  const polos = products.filter((p) => p.categorySlug === "polo-t-shirts");
  const keychains = products.filter((p) => p.categorySlug === "keychains");

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

      {/* Categories — Edge to Edge */}
      <section>
        <div className="px-4 lg:px-6 mb-6">
          <h2 className="text-[12px] tracking-[0.2em] uppercase font-light text-[#111]">
            Collections
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {categories
            .filter((c) => c.slug !== "all")
            .map((category, i) => (
              <Link
                key={category.slug}
                href={`/collections/${category.slug}`}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={`/images/products/tshirt-${(i % 3) + 1}.jpg`}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-5">
                  <h3 className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white font-light">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-10 sm:h-14" />

      {/* Tamil T-Shirts */}
      <section>
        <div className="flex items-baseline justify-between px-4 lg:px-6 mb-6">
          <h2 className="text-[12px] tracking-[0.2em] uppercase font-light text-[#111]">
            Tamil T-Shirts
          </h2>
          <Link
            href="/collections/tamil-t-shirts"
            className="text-[10px] tracking-[0.15em] uppercase text-[#999] hover:text-[#111] transition-colors duration-300 border-b border-[#ddd] pb-0.5"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#f0f0f0]">
          {tamilTees.map((product) => (
            <div key={product.id} className="bg-white">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-10 sm:h-14" />

      {/* Identity T-Shirts */}
      <section>
        <div className="flex items-baseline justify-between px-4 lg:px-6 mb-6">
          <h2 className="text-[12px] tracking-[0.2em] uppercase font-light text-[#111]">
            Identity T-Shirts
          </h2>
          <Link
            href="/collections/identity-t-shirts"
            className="text-[10px] tracking-[0.15em] uppercase text-[#999] hover:text-[#111] transition-colors duration-300 border-b border-[#ddd] pb-0.5"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#f0f0f0]">
          {identityTees.map((product) => (
            <div key={product.id} className="bg-white">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-10 sm:h-14" />

      {/* Hoodies */}
      <section>
        <div className="flex items-baseline justify-between px-4 lg:px-6 mb-6">
          <h2 className="text-[12px] tracking-[0.2em] uppercase font-light text-[#111]">
            Hoodies
          </h2>
          <Link
            href="/collections/hoodies"
            className="text-[10px] tracking-[0.15em] uppercase text-[#999] hover:text-[#111] transition-colors duration-300 border-b border-[#ddd] pb-0.5"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#f0f0f0]">
          {hoodies.map((product) => (
            <div key={product.id} className="bg-white">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-10 sm:h-14" />

      {/* Polo T-Shirts */}
      <section>
        <div className="flex items-baseline justify-between px-4 lg:px-6 mb-6">
          <h2 className="text-[12px] tracking-[0.2em] uppercase font-light text-[#111]">
            Polo T-Shirts
          </h2>
          <Link
            href="/collections/polo-t-shirts"
            className="text-[10px] tracking-[0.15em] uppercase text-[#999] hover:text-[#111] transition-colors duration-300 border-b border-[#ddd] pb-0.5"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#f0f0f0]">
          {polos.map((product) => (
            <div key={product.id} className="bg-white">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-10 sm:h-14" />

      {/* Keychains */}
      <section>
        <div className="flex items-baseline justify-between px-4 lg:px-6 mb-6">
          <h2 className="text-[12px] tracking-[0.2em] uppercase font-light text-[#111]">
            Keychains
          </h2>
          <Link
            href="/collections/keychains"
            className="text-[10px] tracking-[0.15em] uppercase text-[#999] hover:text-[#111] transition-colors duration-300 border-b border-[#ddd] pb-0.5"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#f0f0f0]">
          {keychains.map((product) => (
            <div key={product.id} className="bg-white">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <div className="h-10 sm:h-14" />
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
