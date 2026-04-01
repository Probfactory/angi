import { categories } from "@/data/products";
import CollectionPageClient from "./CollectionPageClient";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default function CollectionPage() {
  return <CollectionPageClient />;
}
