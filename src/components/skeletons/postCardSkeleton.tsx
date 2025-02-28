export function PostCardSkeleton() {
    return (
      <div className="w-full flex flex-col items-start justify-between gap-3">
        {/* Image Skeleton */}
        <div className="w-full h-[185px] bg-gray-300 rounded-[4px]"></div>
  
        {/* Metadata Skeleton */}
        <div className="flex justify-between items-center w-full">
          <div className="w-24 h-4 bg-gray-300 rounded"></div>
          <div className="flex justify-start items-center gap-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-12 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
  
        {/* Tags Skeleton */}
        <div className="flex justify-start items-center gap-2">
          <div className="w-16 h-6 bg-gray-300 rounded"></div>
          <div className="w-16 h-6 bg-gray-300 rounded"></div>
        </div>
  
        {/* Title Skeleton */}
        <div className="w-3/4 h-6 bg-gray-300 rounded mt-2"></div>
      </div>
    );
  }
  