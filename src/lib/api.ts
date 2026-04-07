// API client for the Cloudflare Worker proxy

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "https://angi-api.cutcopypast.workers.dev";

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

export interface Category {
  name: string;
  slug: string;
  count: number;
}

async function apiFetch<T>(path: string): Promise<T> {
  const resp = await fetch(`${API_BASE}${path}`);
  if (!resp.ok) {
    throw new Error(`API error: ${resp.status} ${resp.statusText}`);
  }
  return resp.json();
}

export async function fetchProducts(
  category?: string
): Promise<{ products: Product[]; total: number }> {
  const params = category && category !== "all" ? `?category=${category}` : "";
  return apiFetch(`/api/products${params}`);
}

export async function fetchProduct(
  slug: string
): Promise<{ product: Product }> {
  return apiFetch(`/api/products/${slug}`);
}

export async function fetchCategories(): Promise<{ categories: Category[] }> {
  return apiFetch("/api/categories");
}

export async function createCheckout(
  items: Array<{ variantId: string; quantity: number }>
): Promise<{ checkoutUrl: string }> {
  const resp = await fetch(`${API_BASE}/api/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  });
  if (!resp.ok) throw new Error("Checkout failed");
  return resp.json();
}
