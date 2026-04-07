"use client";

import { useState, useEffect } from "react";
import { Product, fetchProduct } from "@/lib/api";

export function useProduct(slug: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProduct(slug);
        if (!cancelled) {
          setProduct(data.product);
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err.message);
          console.error("Failed to fetch product:", err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { product, loading, error };
}
