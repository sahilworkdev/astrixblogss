"use client";
import Image from "next/image";
import ShareIconsGrid from "../common/shareIconsGrid";
import { useEffect, useState } from "react";
import axios from "axios";
import TimelineAndPost, { PostContentInterface } from "./timelineAndPostt";
import Button from "../common/button";
import PostDetailsSectionSkeleton from "../skeletons/postDetailsSkeleton";

import { formatDate } from "@/utils";
import toast from "@/utils/toast";
import { notFound } from "next/navigation";

interface PostDetails {
  _id: string;
  title: string;
  createdAt: string;
  content: PostContentInterface[];
  views: number;
  slug: string;
  coverImg: string;
  tags: { name: string; id: string }[] | null;
  likecount: number;
  description: string;
}

export default function PostDetailsSection({ id }: { id: string }) {
  const [postDetails, setPostDetails] = useState<PostDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(
          `https://astrix-blog-eydzefayhyb3esb6.centralindia-01.azurewebsites.net/api/blogs/${id}`
        );

        console.log("Post Details ======>", response.data.response);
        const data = response.data.response;
        console.log("Post Details ======>", data);
        setPostDetails(data);
      } catch (error) {
        console.error("Error fetching post details:", error);
        toast.error("Error fetching post details");
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]);

  if (loading) {
    return <PostDetailsSectionSkeleton />;
  }

  if (!postDetails) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col gap-4 mobile:gap-6 mt-4">
      {/* tags */}
      <div className="flex justify-start items-center gap-1 flex-wrap px-2 mobile:px-4 tablet:px-6 mb-4 mobile:mb-2">
        {postDetails?.tags?.map((tag: { name: string; id: string }, index: number) => (
          <Button key={index} text={tag.name} />
        ))}
      </div>

      {/* post title */}
      <div className="text-5xl tablet:text-7xl font-bold leading-[40px] mobile:leading-[48px] tablet:leading-[72px] font-nohemi text-grey-200 px-2 mobile:px-4 tablet:px-6 hover:text-purple mb-2 mobile:mb-0" dangerouslySetInnerHTML={{ __html: postDetails?.title }}>
        {/* {postDetails?.title} */}
      </div>
      {/* date and views */}
      <div className="flex justify-start items-center gap-4 px-2 mobile:px-4 tablet:px-6">
        <div className="text-grey-400 text-[16px] leading-4 font-mulish">
          {formatDate(postDetails?.createdAt)}
        </div>
        <div className="flex justify-start items-center gap-1">
          <Image src={"/icons/eye.svg"} width={20} height={20} alt="eye icon" />
          <span className="text-grey-400 text-sm mobile:text-[16px] leading-4 font-mulish">
            {postDetails?.views || 0}
          </span>
        </div>
      </div>

      {/* post brief */}
      <div className="text-sm leading-[1rem] mobile:text-2xl mobile:leading-[24px] font-mulish text-grey-200 px-2 mobile:px-4 tablet:px-6" 
      dangerouslySetInnerHTML={{__html: postDetails?.description}}
      >
        {/* {postDetails?.description} */}
      </div>
      {/* like and share icon with counts */}
      <div className="flex justify-between px-2 mobile:px-4 tablet:px-6">
        <div className="flex justify-center items-center gap-2">
          <button className="cursor-pointer">
            <Image
              src={"/icons/likeOutline.svg"}
              width={24}
              height={24}
              alt="like Icon"
            />
          </button>
          <span className="text-sm font-mulish text-grey-200">
            {postDetails?.likecount || 0}
          </span>
          <button className="cursor-pointer">
            <Image
              src={"/icons/unlikeOutline.svg"}
              width={24}
              height={24}
              alt="unlike Icon"
            />
          </button>
        </div>
        <div className="flex justify-center items-center gap-1">
          <button className="cursor-pointer">
            <Image
              src={"/icons/share.svg"}
              width={24}
              height={24}
              alt="share Icon"
            />
          </button>
          <span className="text-sm font-mulish text-grey-200">
            {/* {views || 0} */}
          </span>
        </div>
      </div>

      {/* post image */}
      <div className="w-full relative h-[350px] tablet:h-[520px] laptop:h-[620px] px-2 mobile:px-4 tablet:px-0">
        <Image
          src={
            postDetails?.coverImg ||
            "https://ik.imagekit.io/omjeem/Image-Not-Available.png"
          }
          fill
          alt="post image"
          className="object-cover px-2 mobile:px-4 tablet:px-0"
        />
      </div>

      {/* post content */}
      <TimelineAndPost newData={postDetails?.content} />
      <ShareIconsGrid />
    </div>
  );
}
