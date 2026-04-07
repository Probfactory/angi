import CollectionPageClient from "./CollectionPageClient";

// Pre-render known category pages at build time
export function generateStaticParams() {
  return [
    { category: "all" },
    { category: "tamil-t-shirts" },
    { category: "identity-t-shirts" },
    { category: "hoodies" },
    { category: "polo-t-shirts" },
    { category: "keychains" },
    { category: "couple-t-shirts" },
    { category: "track-pants" },
    { category: "shirts" },
    { category: "kids-t-shirts" },
    { category: "jeans" },
  ];
}

export default function CollectionPage() {
  return <CollectionPageClient />;
}
