import Image from "next/image";
import Link from "next/link";

interface RankPostCardProps {
  postId: string;

  imageUrl: string;
  title: React.ReactNode;
  likeCount: number;
  // dislikeCount: number;
  views: number;
}

export default function RankPostCard({
  postId,

  imageUrl,
  title,
  likeCount,
  // dislikeCount,
  views,
}: RankPostCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 mobile:gap-6 tablet:gap-8 w-full py-4">
      {/* <div className="text-5xl leading-[25px]  font-nohemi">0{rank}</div> */}
      <div className="flex flex-col items-start gap-3 w-full">
        <Link
          href={`/posts/${postId}`}
          className="w-full relative mobile:h-[160px] tablet:h-[240px] rounded-[4px] overflow-hidden bg-gray-100"
        >
          <Image
            src={imageUrl}
            width={220}
            height={240}
            alt="Post Image"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </Link>
        <Link
          href={`/posts/${postId}`}
          className="font-bold text-lg leading-[22px] font-nohemi w-full  hover:text-green-100 max-w-full overflow-hidden text-ellipsis"
        >
          {title}
        </Link>
        <div className="flex justify-start items-center gap-4">
          <div className="flex justify-start items-center gap-4">
            <div className="flex justify-center items-center gap-1">
              <Image
                src={"/icons/thumbsUp.svg"}
                width={12}
                height={12}
                alt="Thumbs Up Icon"
              />
              <span className="text-grey-100 text-xs leading-3 font-mulish">
                {likeCount ?? 0}
              </span>
            </div>
            {/* <div className="flex justify-center items-center gap-1">
              <Image
                src={"/icons/unlikeOutline.svg"}
                width={12}
                height={12}
                alt="Thumbs Down Icon"
              />
              <span className="text-grey-100 text-xs leading-3 font-mulish">
                {dislike}
              </span>
            </div> */}
          </div>
          <div className="flex justify-center items-center gap-1">
            <Image
              src={"/icons/eye.svg"}
              width={12}
              height={12}
              alt="Views Icon"
            />
            <span className="text-grey-100 text-xs leading-3 font-mulish">
              {views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
