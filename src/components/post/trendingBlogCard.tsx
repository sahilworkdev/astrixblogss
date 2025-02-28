import Image from "next/image";
import Button from "../common/button";
import Link from "next/link";
import { formatDate } from "@/utils";

interface BlogCardProps {
  postId: string;
  date: string;
  likeCount: number | null;
  // dislikeCount: number | null;
  views: number;
  tags: { name: string; id: string }[] | null;
  title: React.ReactNode;
  image: string;
}

export default function TrendBlogCard({
  postId,
  date = "Unknown Date",
  likeCount = 0,
  // dislikeCount = 0,
  views = 0,
  tags,
  title = "Untitled Post",
  image = "/images/default-blog.jpg",
}: BlogCardProps) {
  const formattedDate = formatDate(new Date(date));
  return (
    <div className="flex flex-col items-start gap-2 mobile:gap-3 w-full overflow-hidden">
      <Link
        href={`/posts/${postId}`}
        className="w-full relative mobile:h-[160px] tablet:h-[260px] rounded-[4px] overflow-hidden  bg-gray-100"
      >
        <Image
          src={image}
          width={425}
          height={240}
          alt="Post Image"
          className="object-contain w-full h-full"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-col items-start gap-2 mobile:gap-3 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="text-xs text-grey-100 font-mulish">
            {formattedDate}
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="flex justify-center items-center gap-1">
              <Image
                src="/icons/thumbsUp.svg"
                width={12}
                height={12}
                alt="thumbs up icon"
              />
              <span className="text-grey-100 text-xs leading-3 font-mulish">
                {likeCount ?? 0}
              </span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <Image
                src="/icons/eye.svg"
                width={12}
                height={12}
                alt="views icon"
              />
              <span className="text-grey-100 text-xs leading-3 font-mulish">
                {views}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-start items-center gap-2 flex-wrap">
          {tags?.slice(0, 4).map((tag, index) => (
            <Button key={index} text={tag.name} classNames="cursor-default" />
          ))}
        </div>

        <Link
          href={`/posts/${postId}`}
          className="font-bold text-[22px] leading-[28px] font-nohemi  hover:text-green-100  max-w-full overflow-hidden  text-ellipsis"
        >
          {title}
        </Link>
      </div>
    </div>
  );
}
