import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] bg-[#111] flex items-end overflow-hidden">
        <Image src="/images/products/tshirt-1.jpg" alt="About ANGI" fill className="object-cover opacity-40" />
        <div className="relative z-10 p-6 sm:p-10 pb-12">
          <h1 className="text-[clamp(2rem,6vw,4rem)] font-extralight tracking-[0.4em] text-white leading-none">
            Our Story
          </h1>
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mt-3">
            Authenticity &middot; Identity &middot; Culture
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-lg mx-auto px-6 py-20 sm:py-28 text-center">
        <p className="text-[13px] leading-[2.2] text-[#888] font-light">
          Streetwear was born out of a feeling of powerlessness and alienation.
          Today, it embraces a variety of subcultures that have come together to
          give a sense of identity, belonging and at-homeness.
        </p>
        <p className="text-[13px] leading-[2.2] text-[#888] font-light mt-6">
          Since our known identity is fragments of a larger whole, we can infer
          that our collective identity is Tamizh. The very concept of ANGI is
          about establishing our identity through garments, arts, exhibitions
          and music.
        </p>
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#ccc] mt-10">
          You Are You.
        </p>
      </section>

      {/* Values */}
      <section className="bg-[#111] py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            { title: "Authenticity", text: "Truthfully representing who you believe you are. Every piece is a genuine expression of cultural identity." },
            { title: "Identity", text: "Our garments are more than fabric — they are a manifestation of the self, reflecting the core of who we are." },
            { title: "Culture", text: "Rooted in Tamil heritage, we celebrate the richness of our culture through bold designs and contemporary expression." },
          ].map((v) => (
            <div key={v.title}>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4">{v.title}</h3>
              <p className="text-[11px] leading-[2] text-white/40 font-light">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Identity Sub-brand */}
      <section className="max-w-lg mx-auto px-6 py-20 sm:py-28 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#ccc] mb-6">Sub-brand</p>
        <h2 className="text-[18px] font-extralight tracking-[0.3em] text-[#111] mb-8">Identity</h2>
        <p className="text-[12px] leading-[2.2] text-[#888] font-light">
          Every individual is shaped by a unique and intrinsic foundation. Our
          clothing is a manifestation of the self — inspired by the simplicity
          and depth of what it means to be human.
        </p>
        <p className="text-[11px] text-[#111] tracking-[0.1em] mt-8 font-light italic">
          Wear What Makes You, You.
        </p>
      </section>

      {/* Craftsmanship */}
      <section className="border-t border-[#f0f0f0] py-16">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { title: "Premium Cotton", sub: "220–380 GSM" },
            { title: "Print Techniques", sub: "Puff, HD, Digital, Discharge" },
            { title: "Special Finishes", sub: "Acid Wash, Pigment, CPD" },
            { title: "Made in India", sub: "Ethically Manufactured" },
          ].map((item) => (
            <div key={item.title}>
              <p className="text-[10px] tracking-[0.15em] uppercase text-[#111] mb-1">{item.title}</p>
              <p className="text-[9px] text-[#bbb]">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <Link
          href="/collections/all"
          className="text-[10px] tracking-[0.25em] uppercase text-[#111] border-b border-[#111] pb-1 hover:text-[#666] hover:border-[#666] transition-colors duration-300"
        >
          Shop Collection
        </Link>
      </section>
    </>
  );
}
