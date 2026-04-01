export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  comparePrice?: number;
  category: string;
  categorySlug: string;
  colors: string[];
  sizes: string[];
  images: string[];
  description: string;
  details: string[];
  badge?: string;
  inStock: boolean;
}

export const categories = [
  { name: "All", slug: "all" },
  { name: "Tamil T-Shirts", slug: "tamil-t-shirts" },
  { name: "Identity T-Shirts", slug: "identity-t-shirts" },
  { name: "Hoodies", slug: "hoodies" },
  { name: "Polo T-Shirts", slug: "polo-t-shirts" },
  { name: "Keychains", slug: "keychains" },
];

export const products: Product[] = [
  // — Tamil T-Shirts —
  {
    id: "1",
    name: "Be Zen Oversized T-Shirt",
    slug: "be-zen-oversized-tshirt",
    price: 1499,
    comparePrice: 1999,
    category: "Tamil T-Shirts",
    categorySlug: "tamil-t-shirts",
    colors: ["Off White", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/products/tshirt-1.jpg"],
    description:
      "Premium oversized t-shirt featuring the iconic Be Zen artwork with digital print and silicon softener finish. A celebration of inner peace and Tamil cultural identity.",
    details: [
      "100% Premium Cotton (240 GSM)",
      "Digital Print with Silicon Softener",
      "Oversized Fit",
      "Ribbed Crew Neck",
      "Made in India",
    ],
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "3",
    name: "Adaiyaalam Graphic T-Shirt",
    slug: "adaiyaalam-graphic-tshirt",
    price: 1599,
    comparePrice: 2199,
    category: "Tamil T-Shirts",
    categorySlug: "tamil-t-shirts",
    colors: ["Off White", "Cream"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/products/tshirt-3.jpg"],
    description:
      "A statement piece featuring bold Tamil typography and floral artwork. HD print with puff detailing. ANGI is the manifestation of IDENTITY.",
    details: [
      "100% Premium Cotton (240 GSM)",
      "HD Print & Puff Print",
      "Oversized Fit",
      "Drop Shoulder",
      "Made in India",
    ],
    badge: "New",
    inStock: true,
  },
  {
    id: "4",
    name: "Acid Wash Heritage Tee",
    slug: "acid-wash-heritage-tee",
    price: 1799,
    category: "Tamil T-Shirts",
    categorySlug: "tamil-t-shirts",
    colors: ["Washed Black", "Washed Grey"],
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/tshirt-1.jpg"],
    description:
      "Lava-dye acid wash t-shirt with digital print. Each piece has a unique wash pattern making it one of a kind.",
    details: [
      "100% Premium Cotton (240 GSM)",
      "Lava-Dye (Acid Wash) + Digital Print",
      "Oversized Fit",
      "Vintage Wash Finish",
      "Made in India",
    ],
    inStock: true,
  },

  // — Identity T-Shirts —
  {
    id: "2",
    name: "Embossed Logo T-Shirt",
    slug: "embossed-logo-tshirt",
    price: 1299,
    category: "Identity T-Shirts",
    categorySlug: "identity-t-shirts",
    colors: ["Forest Green", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/products/tshirt-2.jpg"],
    description:
      "Minimal yet bold — the embossed Angi logo on premium cotton. Non-PVC puff print for a clean, textured finish.",
    details: [
      "100% Premium Cotton (220 GSM)",
      "Non-PVC & Puff Print",
      "Relaxed Fit",
      "Ribbed Crew Neck",
      "Made in India",
    ],
    inStock: true,
  },
  {
    id: "5",
    name: "Discharge Print Tee",
    slug: "discharge-print-tee",
    price: 1399,
    category: "Identity T-Shirts",
    categorySlug: "identity-t-shirts",
    colors: ["Charcoal", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/products/tshirt-2.jpg"],
    description:
      "Discharge print with enzyme wash for a soft vintage feel. Pigment dyed with embroidery detailing.",
    details: [
      "100% Premium Cotton (220 GSM)",
      "Discharge Print with Dye-Spray",
      "Regular Fit",
      "Enzyme Washed",
      "Made in India",
    ],
    inStock: true,
  },
  {
    id: "13",
    name: "Basic Character Tee",
    slug: "basic-character-tee",
    price: 1199,
    category: "Identity T-Shirts",
    categorySlug: "identity-t-shirts",
    colors: ["Black", "White", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/products/tshirt-3.jpg"],
    description:
      "From the Identity line — a minimal tee that reflects the basic character stretch. Clean design, premium fabric.",
    details: [
      "100% Premium Cotton (200 GSM)",
      "HD Print",
      "Regular Fit",
      "Ribbed Crew Neck",
      "Made in India",
    ],
    inStock: true,
  },

  // — Hoodies —
  {
    id: "6",
    name: "Cross Culture Hoodie",
    slug: "cross-culture-hoodie",
    price: 2999,
    comparePrice: 3499,
    category: "Hoodies",
    categorySlug: "hoodies",
    colors: ["Black", "Off White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/products/tshirt-3.jpg"],
    description:
      "Premium heavyweight hoodie from the Cross Culture campaign. Features bold graphic print with puff detailing and kangaroo pocket.",
    details: [
      "100% Premium Cotton Fleece (380 GSM)",
      "Non-PVC & Puff Print",
      "Oversized Fit",
      "Kangaroo Pocket",
      "Adjustable Hood with Drawstring",
      "Made in India",
    ],
    badge: "New",
    inStock: true,
  },
  {
    id: "7",
    name: "Animal Instinct Hoodie",
    slug: "animal-instinct-hoodie",
    price: 3199,
    category: "Hoodies",
    categorySlug: "hoodies",
    colors: ["Washed Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/tshirt-1.jpg"],
    description:
      "From the Animal Instinct collection. Acid wash hoodie with digital print and embroidery. A reflection of your true essence.",
    details: [
      "100% Premium Cotton Fleece (380 GSM)",
      "Acid Wash + Digital Print + Embroidery",
      "Oversized Fit",
      "Kangaroo Pocket",
      "Ribbed Cuffs and Hem",
      "Made in India",
    ],
    inStock: true,
  },
  {
    id: "8",
    name: "Identity Minimal Hoodie",
    slug: "identity-minimal-hoodie",
    price: 2799,
    category: "Hoodies",
    categorySlug: "hoodies",
    colors: ["Black", "Cream", "Forest Green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/products/tshirt-2.jpg"],
    description:
      "Clean minimal hoodie with subtle Identity branding. Pigment print with reverse CPD technique.",
    details: [
      "100% Premium Cotton Fleece (350 GSM)",
      "Pigment Print + Reverse CPD",
      "Relaxed Fit",
      "Kangaroo Pocket",
      "Made in India",
    ],
    inStock: true,
  },

  // — Polo T-Shirts —
  {
    id: "9",
    name: "Heritage Polo T-Shirt",
    slug: "heritage-polo-tshirt",
    price: 1699,
    category: "Polo T-Shirts",
    categorySlug: "polo-t-shirts",
    colors: ["Black", "White", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/products/tshirt-1.jpg"],
    description:
      "Classic polo silhouette with Angi embroidered logo on chest. Premium pique cotton with a modern relaxed fit.",
    details: [
      "100% Pique Cotton (220 GSM)",
      "Embroidered Logo",
      "Relaxed Fit",
      "Two-Button Placket",
      "Ribbed Collar and Cuffs",
      "Made in India",
    ],
    inStock: true,
  },
  {
    id: "10",
    name: "Culture Polo T-Shirt",
    slug: "culture-polo-tshirt",
    price: 1899,
    comparePrice: 2299,
    category: "Polo T-Shirts",
    categorySlug: "polo-t-shirts",
    colors: ["Forest Green", "Maroon", "Black"],
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/products/tshirt-2.jpg"],
    description:
      "Premium polo with tonal Angi branding. Crafted from double-ply pique cotton for a structured feel.",
    details: [
      "100% Double-Ply Pique Cotton (240 GSM)",
      "Tonal Embroidered Logo",
      "Regular Fit",
      "Three-Button Placket",
      "Side Slits",
      "Made in India",
    ],
    badge: "New",
    inStock: true,
  },

  // — Keychains —
  {
    id: "11",
    name: "Angi Logo Keychain",
    slug: "angi-logo-keychain",
    price: 499,
    category: "Keychains",
    categorySlug: "keychains",
    colors: ["Silver", "Gold", "Black"],
    sizes: [],
    images: ["/images/products/tshirt-3.jpg"],
    description:
      "Premium metal keychain with the iconic Angi logo. Matte finish with engraved detailing.",
    details: [
      "Zinc Alloy Metal",
      "Matte Finish",
      "Engraved Angi Logo",
      "Keyring Attachment",
      "Gift Box Included",
    ],
    inStock: true,
  },
  {
    id: "12",
    name: "Identity Script Keychain",
    slug: "identity-script-keychain",
    price: 599,
    category: "Keychains",
    categorySlug: "keychains",
    colors: ["Silver", "Rose Gold"],
    sizes: [],
    images: ["/images/products/tshirt-1.jpg"],
    description:
      "Tamil script keychain — a wearable piece of cultural identity. Premium metal with polished finish.",
    details: [
      "Stainless Steel",
      "Polished Finish",
      "Tamil Script Engraving",
      "Lobster Clasp",
      "Gift Box Included",
    ],
    badge: "Limited",
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === "all") return products;
  return products.filter((p) => p.categorySlug === categorySlug);
}
