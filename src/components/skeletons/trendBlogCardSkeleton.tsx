export function TrendBlogCardSkeleton() {
    return (
      <div className="flex flex-col items-start gap-3 w-full">
        {/* Image Skeleton */}
        <div className="w-full h-[250px] bg-gray-300 rounded-t-[10px]"></div>
  
        <div className="flex flex-col items-start p-2 gap-3 justify-between">
          {/* Date & Likes/Views Skeleton */}
          <div className="flex justify-between items-center w-full">
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
            <div className="flex justify-start items-center gap-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="w-12 h-4 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="w-12 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
  
          {/* Categories Skeleton */}
          <div className="flex justify-start items-center gap-2">
            <div className="w-16 h-6 bg-gray-300 rounded"></div>
            <div className="w-16 h-6 bg-gray-300 rounded"></div>
          </div>
  
          {/* Title Skeleton */}
          <div className="w-3/4 h-6 bg-gray-300 rounded mt-2"></div>
        </div>
      </div>
    );
  }
  