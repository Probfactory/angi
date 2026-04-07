import ProductPageClient from "./ProductPageClient";

// With static export, we need to enumerate all possible slugs.
// Since products come from API, we generate a known set here.
// Any product not in this list will get a 404 from Cloudflare Pages,
// but we handle it with a _redirects fallback.
export function generateStaticParams() {
  // Return empty — we'll use Cloudflare Pages SPA fallback
  // to serve index.html for all /product/* routes
  return [{ slug: "_" }];
}

export default function ProductPage() {
  return <ProductPageClient />;
}
