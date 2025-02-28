"use client";
import Image from "next/image";
import Button from "../common/button";
import ShareIconsGrid from "../common/shareIconsGrid";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDate } from "@/utils";
import PostDetailsSectionSkeleton from "../skeletons/postDetailsSkeleton";
import TimelineAndPost from "./timelineAndPost";
import ShareModal from "../common/shareModal";
import { API_BASE_URL } from "@/config";

interface Tag {
  id: string;
  name: string;
}
interface Author {
  id: string;
  name: string;
}

interface PostDetails {
  id: string;
  title: string;
  createdAt: string;
  content: string;
  views: number;
  likeCount: number | null;
  // dislikeCount: number | null;
  authors: Author[];
  description: string;
  featuredImage: string;
  tags: Tag[];
}

export default function PostDetailsSection({ id }: { id: string }) {
  const [postDetails, setPostDetails] = useState<PostDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/blogs/${id}`);
        const data = response.data.response;
        // console.log("post details ======>", data);
        setPostDetails(data);
      } catch (error) {
        console.error("Error fetching post details:", error);
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
    return <div className="text-center text-grey-400">Post not found</div>;
  }

  const {
    title,
    createdAt,
    content,
    views,
    authors,
    description,
    featuredImage,
    tags,
    likeCount,
    // dislikeCount,
  } = postDetails;

  const handleLike = async () => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
    if (likedPosts[id]) {
      console.log("You have already liked this post.");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/blogs/like/${id}/1`);
      console.log("response ======>", response.data.response);
      likedPosts[id] = true;
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
      setPostDetails(
        (prevDetails) =>
          prevDetails && {
            ...prevDetails,
            likeCount: (prevDetails?.likeCount ?? 0) + 1,
          }
      );
    } catch (error) {
      console.log("Failed to like post:", error);
    }
  };

  const handleUnlike = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/blogs/like/${id}/-1`);
      console.log("response ======>", response.data.response);
      likedPosts[id] = true;
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
      localStorage.removeItem("likedPosts");
      setPostDetails(
        (prevDetails) =>
          prevDetails && {
            ...prevDetails,
            likeCount: (prevDetails.likeCount ?? 0) - 1,
          }
      );
    } catch (error) {
      console.log("Failed to unlike post:", error);
    }
  };

  const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
  const isLiked = likedPosts[id];
  // console.log("content ======>", content);

  return (
    <div className="w-full flex flex-col gap-4 mobile:gap-6 mt-4 overflow-hidden">
      {/* tags */}
      <div className="flex justify-start items-center gap-1 flex-wrap  mb-4 mobile:mb-2">
        {tags.map((tag, index) => (
          <Button key={index} text={tag.name} />
        ))}
      </div>

      {/* post title */}
      <div className="text-5xl max-w-full text-ellipsis tablet:text-7xl font-bold leading-[40px] mobile:leading-[48px] tablet:leading-[72px] font-nohemi   hover:text-green-100 mb-2 mobile:mb-0">
        {title}
      </div>
      {/* date and views and author*/}
      <div className="flex justify-between  gap-2 flex-col items-start ">
        <div className="flex justify-start items-center gap-4">
          <div className="text-grey-100 text-[16px] leading-4 font-mulish">
            {formatDate(createdAt)}
          </div>
          <div className="flex justify-start items-center gap-1">
            <Image
              src={"/icons/eye.svg"}
              width={13}
              height={12}
              alt="eye icon"
            />
            <span className="text-grey-100 text-sm mobile:text-[16px] leading-4 font-mulish">
              {views || 0}
            </span>
          </div>
        </div>
        <div className="flex justify-start items-center gap-1 text-grey-100">
          <span className="font-semibold">By :&nbsp;</span>
          <span className=" text-sm mobile:text-[16px] leading-4 font-mulish">
            {authors.map((author) => author.name).join(", ")}
          </span>
        </div>
      </div>

      {/* post brief */}
      <div className="text-[22px] leading-[1.6rem] mobile:text-2xl mobile:leading-[24px] font-mulish  ">
        {description}
      </div>
      {/* like and share icon with counts */}
      <div className="flex justify-between ">
        <div className="flex justify-center items-center gap-2">
          <button
            className="cursor-pointer"
            onClick={isLiked ? handleUnlike : handleLike}
            title="Like Post"
          >
            <Image
              src={`${
                isLiked ? "/icons/thumbsUp.svg" : "/icons/likeOutline.svg"
              }`}
              width={24}
              height={24}
              alt="like Icon"
            />
          </button>
          <span className="text-sm font-mulish text-grey-200">
            {/* {(likeCount ?? 0) - (dislikeCount ?? 0)} */}
            {likeCount ?? 0}
          </span>
          {/* <button className="cursor-pointer" onClick={handleUnlike}>
            <Image
            src={`${
              isDisliked ? "/icons/thumbsDown.svg" : "/icons/unlikeOutline.svg"
            }`}
              width={24}
              height={24}
              alt="unlike Icon"
            />
          </button> */}
        </div>
        <div className=" justify-center items-center gap-1 hidden mobile:flex">
          <button
            className="cursor-pointer"
            onClick={() => setIsShareModalOpen(true)}
            title="Share Post"
          >
            <Image
              src={"/icons/share.svg"}
              width={24}
              height={24}
              alt="share Icon"
            />
          </button>
          {/* <span className="text-sm font-mulish text-grey-200">
            {views || 0}
          </span> */}
        </div>
      </div>
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        url={typeof window !== "undefined" ? window.location.href : ""}
      />

      {/* post image */}
      <div className="w-full relative h-[350px] tablet:h-[520px] laptop:h-[620px] overflow-hidden rounded">
        <Image
          src={featuredImage || "https://ik.imagekit.io/omjeem/Image-Not-Available.png"}
          width={620}
          height={620}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* post content */}
      <TimelineAndPost html={content} />
      <ShareIconsGrid />
    </div>
  );
}
