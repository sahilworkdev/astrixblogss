export default function PostDetailsSectionSkeleton() {
  return (
    <div className="w-full flex flex-col gap-4 mobile:gap-6 mt-4 px-4">
      {/* tags skeleton */}
      <div className="flex justify-start items-center gap-1 flex-wrap px-2 mobile:px-4 tablet:px-6 mb-4 mobile:mb-2">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-16 h-6 bg-gray-300 rounded-md animate-pulse"
            ></div>
          ))}
      </div>

      {/* post title skeleton */}
      <div className="h-12 tablet:h-16 bg-gray-300 rounded-md animate-pulse px-2 mobile:px-4 tablet:px-6 mb-2 mobile:mb-0"></div>

      {/* date and views skeleton */}
      <div className="flex justify-start items-center gap-4 px-2 mobile:px-4 tablet:px-6">
        <div className="w-20 h-4 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="flex justify-start items-center gap-1">
          <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-8 h-4 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
      </div>

      {/* post brief skeleton */}
      <div className="h-6 mobile:h-8 bg-gray-300 rounded-md animate-pulse px-2 mobile:px-4 tablet:px-6"></div>

      {/* like and share icons with counts skeleton */}
      <div className="flex justify-between px-2 mobile:px-4 tablet:px-6">
        <div className="flex justify-center items-center gap-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-8 h-4 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-8 h-4 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
      </div>

      {/* post image skeleton */}
      <div className="w-full relative h-[350px] tablet:h-[520px] laptop:h-[620px] bg-gray-300 rounded-md animate-pulse px-2 mobile:px-4 tablet:px-0"></div>
    </div>
  );
}
