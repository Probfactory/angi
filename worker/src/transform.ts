// Transform Zoho Commerce product format → frontend Product interface

export interface ProductVariant {
  variantId: string;
  name: string;
  size: string;
  sku: string;
  price: number;
  stock: number;
}

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
  variants: ProductVariant[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 80);
}

function deriveCategory(
  product: any
): { category: string; categorySlug: string } {
  const name = (product.name || "").toLowerCase();
  const categoryName = (product.category_name || "").toLowerCase();
  const tags = (product.tags || "").toLowerCase();

  // Check product name and tags for category hints
  if (name.includes("hoodie") || name.includes("hoodi") || tags.includes("hoodie")) {
    return { category: "Hoodies", categorySlug: "hoodies" };
  }
  if (name.includes("polo") || tags.includes("polo")) {
    return { category: "Polo T-Shirts", categorySlug: "polo-t-shirts" };
  }
  if (name.includes("keychain") || tags.includes("keychain")) {
    return { category: "Keychains", categorySlug: "keychains" };
  }
  if (name.includes("track") || tags.includes("track-pants")) {
    return { category: "Track Pants", categorySlug: "track-pants" };
  }
  if (name.includes("jeans") || tags.includes("jeans")) {
    return { category: "Jeans", categorySlug: "jeans" };
  }
  if (name.includes("shirt") && !name.includes("t-shirt") && !name.includes("tshirt")) {
    return { category: "Shirts", categorySlug: "shirts" };
  }
  if (name.includes("couple") || tags.includes("couple")) {
    return { category: "Couple T-Shirts", categorySlug: "couple-t-shirts" };
  }
  if (name.includes("kids") || tags.includes("kids")) {
    return { category: "Kids T-Shirts", categorySlug: "kids-t-shirts" };
  }
  if (
    name.includes("identity") ||
    name.includes("identity is everything") ||
    tags.includes("identity")
  ) {
    return { category: "Identity T-Shirts", categorySlug: "identity-t-shirts" };
  }
  if (
    name.includes("tamil") ||
    name.includes("tamizh") ||
    name.includes("chennai") ||
    tags.includes("tamil")
  ) {
    return { category: "Tamil T-Shirts", categorySlug: "tamil-t-shirts" };
  }

  // Default
  return { category: "T-Shirts", categorySlug: "t-shirts" };
}

function extractColor(name: string): string {
  const colorMap: Record<string, string> = {
    black: "Black",
    white: "White",
    green: "Green",
    blue: "Blue",
    red: "Red",
    yellow: "Yellow",
    brown: "Brown",
    grey: "Grey",
    gray: "Grey",
    pink: "Pink",
    purple: "Purple",
    orange: "Orange",
    navy: "Navy",
    cream: "Cream",
    maroon: "Maroon",
    olive: "Olive",
    "light brown": "Light Brown",
    "dusty pink": "Dusty Pink",
  };

  const lower = name.toLowerCase();
  for (const [key, val] of Object.entries(colorMap)) {
    if (lower.includes(key)) return val;
  }
  return "";
}

export function transformProduct(zohoProduct: any): Product | null {
  if (!zohoProduct || !zohoProduct.name) return null;

  const { category, categorySlug } = deriveCategory(zohoProduct);

  // Use Zoho's URL field as slug, or generate from name
  const slug = zohoProduct.url && zohoProduct.url.length > 5
    ? zohoProduct.url
    : slugify(zohoProduct.name);

  // Extract sizes from variants
  const sizes: string[] = [];
  const variants: ProductVariant[] = [];

  if (zohoProduct.variants && zohoProduct.variants.length > 0) {
    for (const v of zohoProduct.variants) {
      const size = v.attribute_option_name1 || "";
      if (size && !sizes.includes(size)) {
        sizes.push(size);
      }
      variants.push({
        variantId: v.variant_id,
        name: v.name,
        size,
        sku: v.sku || "",
        price: v.rate || 0,
        stock: typeof v.stock_on_hand === "number" ? v.stock_on_hand : 0,
      });
    }
  }

  // Extract images from documents
  const images: string[] = [];
  if (zohoProduct.documents && zohoProduct.documents.length > 0) {
    for (const doc of zohoProduct.documents) {
      if (doc.file_name && (doc.file_name.endsWith(".jpg") || doc.file_name.endsWith(".png") || doc.file_name.endsWith(".webp"))) {
        // Zoho image URL pattern
        images.push(doc.document_url || doc.file_name);
      }
    }
  }

  // Also check variant documents
  if (images.length === 0 && zohoProduct.variants) {
    for (const v of zohoProduct.variants) {
      if (v.documents && v.documents.length > 0) {
        for (const doc of v.documents) {
          if (doc.document_url && !images.includes(doc.document_url)) {
            images.push(doc.document_url);
          }
        }
      }
    }
  }

  const color = extractColor(zohoProduct.name);
  const price = zohoProduct.min_rate || (variants[0]?.price ?? 0);

  // Parse description - strip HTML
  const rawDesc = zohoProduct.product_description || zohoProduct.description || "";
  const description = rawDesc.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  // Determine stock
  const totalStock = variants.reduce((sum: number, v: ProductVariant) => sum + v.stock, 0);
  const inStock = zohoProduct.overall_stock > 0 || totalStock > 0;

  return {
    id: zohoProduct.product_id,
    name: zohoProduct.name,
    slug,
    price,
    category,
    categorySlug,
    colors: color ? [color] : ["Default"],
    sizes: sizes.length > 0 ? sizes : [],
    images: images.length > 0 ? images : ["/images/products/placeholder.jpg"],
    description: description || "Premium quality streetwear from ANGI.",
    details: [
      "Premium Quality",
      "Made in India",
      zohoProduct.attribute_name1 ? `Available in ${sizes.length} sizes` : "",
    ].filter(Boolean),
    badge: zohoProduct.is_featured ? "Featured" : undefined,
    inStock,
    variants,
  };
}

export function transformProducts(zohoProducts: any[]): Product[] {
  return zohoProducts
    .map(transformProduct)
    .filter((p): p is Product => p !== null);
}
