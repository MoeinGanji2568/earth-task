export function MarketCardSkeleton() {
  return (
    <div className="px-3 py-2 rounded-sm flex items-center gap-4 animate-pulse bg-[#0B0C14]">
      <div className="w-6 h-6 bg-gray-700 rounded-full" />
      <div className="flex-1">
        <div className="h-4 w-12 bg-gray-700 rounded-sm" />
      </div>
      <div className="flex flex-col gap-1 items-end">
        <div className="h-4 w-16 bg-gray-700 rounded-sm" />
        <div className="h-3 w-10 bg-gray-700 rounded-sm" />
      </div>
    </div>
  );
}
