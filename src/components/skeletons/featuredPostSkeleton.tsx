export default function FeaturedPostSkeleton() {
    return (
      <div className="w-full flex flex-col gap-2 mobile:gap-4 mb-8 tablet:mb-12 animate-pulse">
        {/* Image Section */}
        <div className="w-full relative h-[250px] tablet:h-[350px] laptop:h-[400px] bg-gray-300 rounded-lg"></div>
  
        {/* Post Metadata (Date, Likes, Views) */}
        <div className="flex justify-between items-center w-full text-sm md:text-base mt-2">
          <div className="w-24 h-4 bg-gray-300 rounded"></div>
          <div className="flex justify-start items-center gap-4">
            <div className="flex justify-center items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
  
        {/* Tags Section */}
        <div className="flex flex-wrap justify-start items-center gap-2 mt-2">
          <div className="w-16 h-6 bg-gray-300 rounded"></div>
          <div className="w-16 h-6 bg-gray-300 rounded"></div>
        </div>
  
        {/* Title Section */}
        <div className="w-3/4 h-8 bg-gray-300 rounded mt-4"></div>
        <div className="w-2/3 h-8 bg-gray-300 rounded"></div>
      </div>
    );
  }
  