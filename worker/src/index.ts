import { Env } from "./zoho-auth";
import { fetchAllProducts, fetchProduct, fetchCategories } from "./zoho-api";
import { transformProducts, transformProduct } from "./transform";

// Simple in-memory cache
let productsCache: { data: any; expiresAt: number } | null = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCorsHeaders(origin: string, allowedOrigin: string) {
  const allowed = [
    allowedOrigin,
    "http://localhost:3000",
    "http://localhost:3001",
  ];
  const matched = !origin ? "*" : allowed.includes(origin) ? origin : allowedOrigin || "*";

  return {
    "Access-Control-Allow-Origin": matched,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const origin = request.headers.get("Origin") || "";
    const cors = getCorsHeaders(origin, env.ALLOWED_ORIGIN);

    const json = (data: any, status = 200) =>
      new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=300", ...cors },
      });

    const err = (message: string, status = 500) =>
      json({ error: message }, status);

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    try {
      // GET /api/products
      if (path === "/api/products" && request.method === "GET") {
        const category = url.searchParams.get("category");

        if (productsCache && Date.now() < productsCache.expiresAt) {
          let products = productsCache.data;
          if (category && category !== "all") {
            products = products.filter((p: any) => p.categorySlug === category);
          }
          return json({ products, total: products.length });
        }

        const zohoProducts = await fetchAllProducts(env);
        const products = transformProducts(zohoProducts);
        productsCache = { data: products, expiresAt: Date.now() + CACHE_TTL };

        let filtered = products;
        if (category && category !== "all") {
          filtered = products.filter((p) => p.categorySlug === category);
        }
        return json({ products: filtered, total: filtered.length });
      }

      // GET /api/products/:slug
      if (path.startsWith("/api/products/") && request.method === "GET") {
        const slug = path.replace("/api/products/", "");

        if (productsCache && Date.now() < productsCache.expiresAt) {
          const product = productsCache.data.find((p: any) => p.slug === slug);
          if (product) return json({ product });
        }

        const zohoProducts = await fetchAllProducts(env);
        const products = transformProducts(zohoProducts);
        productsCache = { data: products, expiresAt: Date.now() + CACHE_TTL };

        const product = products.find((p) => p.slug === slug);
        if (!product) return err("Product not found", 404);
        return json({ product });
      }

      // GET /api/categories
      if (path === "/api/categories" && request.method === "GET") {
        if (!productsCache || Date.now() >= productsCache.expiresAt) {
          const zohoProducts = await fetchAllProducts(env);
          productsCache = { data: transformProducts(zohoProducts), expiresAt: Date.now() + CACHE_TTL };
        }

        const categoryMap = new Map<string, { name: string; slug: string; count: number }>();
        for (const p of productsCache.data) {
          const existing = categoryMap.get(p.categorySlug);
          if (existing) existing.count++;
          else categoryMap.set(p.categorySlug, { name: p.category, slug: p.categorySlug, count: 1 });
        }

        const categories = [
          { name: "All", slug: "all", count: productsCache.data.length },
          ...Array.from(categoryMap.values()).sort((a, b) => b.count - a.count),
        ];
        return json({ categories });
      }

      // POST /api/checkout
      if (path === "/api/checkout" && request.method === "POST") {
        const body = (await request.json()) as { items: Array<{ variantId: string; quantity: number }> };
        if (!body.items || body.items.length === 0) return err("Cart is empty", 400);

        const checkoutUrl = `https://angiclothing-917263380.zohoecommerce.com/checkout`;
        return json({ checkoutUrl });
      }

      // Health check
      if (path === "/api/health") {
        return json({ status: "ok", timestamp: new Date().toISOString() });
      }

      return err("Not found", 404);
    } catch (e: any) {
      console.error("Worker error:", e);
      return err(e.message || "Internal server error");
    }
  },
};
