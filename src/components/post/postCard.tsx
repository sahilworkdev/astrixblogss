import Image from "next/image";
import Button from "../common/button";
import Link from "next/link";
import { formatDate } from "@/utils";

interface PostCardProps {
  postId: string;
  imageUrl: string;
  date: string;
  likeCount: number | null;
  // dislikeCount: number | null;
  views: number;
  tags: { name: string; id: string }[] | null;
  title: React.ReactNode;
}

export default function PostCard({
  postId,
  imageUrl,
  date,
  likeCount,
  // dislikeCount,
  views,
  tags,
  title,
}: PostCardProps) {
  const formattedDate = formatDate(new Date(date));

  return (
    <div className="w-full flex flex-col items-start gap-3">
      <Link
        href={`/posts/${postId}`}
        className="w-full relative mobile:h-[160px] tablet:h-[240px] rounded-[4px] overflow-hidden bg-gray-100"
      >
        <Image
          src={imageUrl}
          width={326}
          height={240}
          alt="Post Image"
          className="object-contain w-full h-full"
          loading="lazy"
        />
      </Link>

      <div className="flex justify-between items-center w-full">
        <div className="text-xs text-grey-100">{formattedDate}</div>
        <div className="flex justify-start items-center gap-2">
          <div className="flex justify-center items-center gap-1">
            <Image
              src={"/icons/thumbsUp.svg"}
              width={12}
              height={12}
              alt="thumbsUp icon"
            />
            <span className="text-grey-100 text-xs leading-3">
              {likeCount ?? 0}
            </span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <Image
              src={"/icons/eye.svg"}
              width={12}
              height={12}
              alt="views icon"
            />
            <span className="text-grey-100 text-xs leading-3">{views}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 flex-wrap">
        {tags?.slice(0, 3).map((tag, index) => (
          <Button key={index} text={tag.name} classNames="cursor-default" />
        ))}
      </div>

      <Link
        href={`/posts/${postId}`}
        className="font-bold text-xl leading-[22px]  font-nohemi hover:text-green-100 max-w-full overflow-hidden text-ellipsis"
      >
        {title}
      </Link>
    </div>
  );
}
