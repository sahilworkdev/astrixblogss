export function RankPostCardSkeleton() {
  return (
    <div className="flex flex-col items-start gap-4 mobile:gap-6 tablet:gap-8 w-full py-4 animate-pulse">
      {/* Rank Placeholder */}
      <div className="w-12 h-12 bg-gray-300 rounded-md"></div>

      {/* Content Placeholder */}
      <div className="flex flex-col items-start gap-3 w-full">
        {/* Image Placeholder */}
        <div className="w-full h-[185px] mobile:h-[110px] tablet:h-[120px] bg-gray-300 rounded-[4px]"></div>

        {/* Title Placeholder */}
        <div className="w-3/4 h-6 bg-gray-300 rounded"></div>

        {/* Metadata Placeholders (Likes and Views) */}
        <div className="flex justify-start items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
