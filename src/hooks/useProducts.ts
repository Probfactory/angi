"use client";

import { useState, useEffect } from "react";
import { Product, fetchProducts } from "@/lib/api";

export function useProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts(category);
        if (!cancelled) {
          setProducts(data.products);
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err.message);
          console.error("Failed to fetch products:", err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [category]);

  return { products, loading, error };
}
