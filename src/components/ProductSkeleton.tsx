export default function ProductSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[3/4] bg-[#f3f3f3]" />
      <div className="pt-2 pb-1 px-0.5 space-y-2">
        <div className="h-3 bg-[#f0f0f0] rounded w-3/4" />
        <div className="h-2 bg-[#f0f0f0] rounded w-1/2" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#f0f0f0]">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white pb-6">
          <ProductSkeleton />
        </div>
      ))}
    </div>
  );
}
