"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../common/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDate } from "@/utils";
import FeaturedPostSkeleton from "../skeletons/featuredPostSkeleton";
import toast from "@/utils/toast";
import { API_BASE_URL } from "@/config";

interface FeaturedPostData {
  _id: string;
  featuredImage: string | null;
  createdAt: string;
  likeCount: number | null;
  // dislikeCount: number | null;
  views: number | null;
  tags: { name: string; id: string }[] | null;
  title: string;
  description: string;
}

export default function FeaturedPost() {
  const [featuredPost, setFeaturedPost] = useState<FeaturedPostData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  const fetchFeaturedPost = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/blogs/featured/all?limit=1`
      );

      const post = response.data.response.blogs;
      // console.log("FEATURED POST >>>>> ", post);

      setFeaturedPost(post[0]);
    } catch (error) {
      console.log("Failed to fetch featured post:", error);
      toast.error("Failed to fetch featured post");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedPost();
  }, []);

  if (isLoading || !featuredPost) {
    return <FeaturedPostSkeleton />;
  }

  if (!featuredPost) {
    return null;
  }

  const tags = featuredPost.tags?.map((tag) => tag.name);
  // console.log("FEATURE TAGS >>>>> ", tags);

  return (
    <div className="w-full flex flex-col gap-2 mobile:gap-4 mb-10 tablet:mb-12">
      {/* Image Section */}
      <Link
        href={`/posts/${featuredPost._id}`}
        className="w-full relative h-[260px] tablet:h-[300px] laptop:h-[480px] overflow-hidden bg-gray-200 rounded-lg"
      >
        <Image
          src={
            featuredPost.featuredImage ||
            "https://ik.imagekit.io/omjeem/Image-Not-Available.png"
          }
          fill
          alt={featuredPost.title || "Featured Post Image"}
          className="object-cover w-full h-full"
        />
      </Link>

      {/* Post Metadata (Date, Likes, Views) */}
      <div className="flex justify-between items-center w-full text-sm md:text-base">
        <div className="text-grey-100 font-mulish">
          {formatDate(featuredPost.createdAt)}
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="flex items-center gap-1">
            <Image
              src="/icons/thumbsUp.svg"
              width={12}
              height={12}
              alt="Likes Icon"
            />
            <span className="text-grey-100 text-[1rem] leading-3 font-mulish">
              {featuredPost.likeCount ?? 0}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/icons/eye.svg"
              width={12}
              height={12}
              alt="Views Icon"
            />
            <span className="text-grey-100 text-[1rem] leading-3 font-mulish">
              {featuredPost.views || 0}
            </span>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap justify-start items-center gap-2 my-1">
        {tags?.slice(0, 4).map((tag, index) => (
          <Button key={index} text={tag} classNames="cursor-default" />
        ))}
      </div>

      {/* Title Section */}
      <Link
        href={`/posts/${featuredPost._id}`}
        className="font-bold text-[34px] tablet:text-[36px] laptop:text-[42px] leading-[38px] tablet:leading-[54px] laptop:leading-[58px] font-nohemi hover:text-green-100"
        dangerouslySetInnerHTML={{ __html: featuredPost.title }}
      >
        {/* {featuredPost.title} */}
      </Link>
    </div>
  );
}
