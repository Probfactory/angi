import { Env } from "./zoho-auth";
import { fetchAllProducts, fetchProduct, fetchCategories } from "./zoho-api";
import { transformProducts, transformProduct } from "./transform";

// Simple in-memory cache
let productsCache: { data: any; expiresAt: number } | null = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function corsHeaders(env: Env) {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function jsonResponse(data: any, env: Env, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300",
      ...corsHeaders(env),
    },
  });
}

function errorResponse(message: string, env: Env, status = 500) {
  return jsonResponse({ error: message }, env, status);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(env),
      });
    }

    try {
      // GET /api/products — list all products
      if (path === "/api/products" && request.method === "GET") {
        const category = url.searchParams.get("category");

        // Check cache
        if (productsCache && Date.now() < productsCache.expiresAt) {
          let products = productsCache.data;
          if (category && category !== "all") {
            products = products.filter(
              (p: any) => p.categorySlug === category
            );
          }
          return jsonResponse({ products, total: products.length }, env);
        }

        // Fetch from Zoho
        const zohoProducts = await fetchAllProducts(env);
        const products = transformProducts(zohoProducts);

        // Cache all products
        productsCache = {
          data: products,
          expiresAt: Date.now() + CACHE_TTL,
        };

        // Filter by category if requested
        let filtered = products;
        if (category && category !== "all") {
          filtered = products.filter((p) => p.categorySlug === category);
        }

        return jsonResponse({ products: filtered, total: filtered.length }, env);
      }

      // GET /api/products/:slug — single product
      if (path.startsWith("/api/products/") && request.method === "GET") {
        const slug = path.replace("/api/products/", "");

        // Try cache first
        if (productsCache && Date.now() < productsCache.expiresAt) {
          const product = productsCache.data.find(
            (p: any) => p.slug === slug
          );
          if (product) {
            return jsonResponse({ product }, env);
          }
        }

        // Fetch all and find
        const zohoProducts = await fetchAllProducts(env);
        const products = transformProducts(zohoProducts);
        productsCache = {
          data: products,
          expiresAt: Date.now() + CACHE_TTL,
        };

        const product = products.find((p) => p.slug === slug);
        if (!product) {
          return errorResponse("Product not found", env, 404);
        }
        return jsonResponse({ product }, env);
      }

      // GET /api/categories — list categories
      if (path === "/api/categories" && request.method === "GET") {
        // Derive categories from products
        if (!productsCache || Date.now() >= productsCache.expiresAt) {
          const zohoProducts = await fetchAllProducts(env);
          productsCache = {
            data: transformProducts(zohoProducts),
            expiresAt: Date.now() + CACHE_TTL,
          };
        }

        const categoryMap = new Map<string, { name: string; slug: string; count: number }>();
        for (const p of productsCache.data) {
          const existing = categoryMap.get(p.categorySlug);
          if (existing) {
            existing.count++;
          } else {
            categoryMap.set(p.categorySlug, {
              name: p.category,
              slug: p.categorySlug,
              count: 1,
            });
          }
        }

        const categories = [
          { name: "All", slug: "all", count: productsCache.data.length },
          ...Array.from(categoryMap.values()).sort((a, b) => b.count - a.count),
        ];

        return jsonResponse({ categories }, env);
      }

      // POST /api/checkout — create checkout URL
      if (path === "/api/checkout" && request.method === "POST") {
        const body = (await request.json()) as {
          items: Array<{
            variantId: string;
            quantity: number;
          }>;
        };

        if (!body.items || body.items.length === 0) {
          return errorResponse("Cart is empty", env, 400);
        }

        // For now, redirect to Zoho Commerce storefront checkout
        // TODO: Implement cart creation via Zoho API when available
        const checkoutUrl = `https://angiclothing-917263380.zohoecommerce.com/checkout`;
        return jsonResponse({ checkoutUrl }, env);
      }

      // Health check
      if (path === "/api/health") {
        return jsonResponse({
          status: "ok",
          timestamp: new Date().toISOString(),
        }, env);
      }

      return errorResponse("Not found", env, 404);
    } catch (err: any) {
      console.error("Worker error:", err);
      return errorResponse(err.message || "Internal server error", env);
    }
  },
};
