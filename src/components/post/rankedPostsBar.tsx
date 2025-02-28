"use client";
import { useEffect, useState } from "react";
import RankPostCard from "./rankPostCard";
import axios from "axios";
import { RankPostCardSkeleton } from "../skeletons/rankedPostSkeleton";
import toast from "@/utils/toast";
import { API_BASE_URL } from "@/config";

interface RankedPost {
  _id: string;
  featuredImage: string;
  title: string;
  likeCount: number | null;
  views: number;
}

export default function RankedPostsBar({ limit }: { limit: number }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rankedPosts, setRankedPosts] = useState<RankedPost[]>([]);

  const fetchRankedPosts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/blogs/listicles/all?limit=${limit}`
        // `${API_BASE_URL}/blogs/listicles/all`
      );
      const blogs = response.data.response.blogs;
      // console.log("RANKED POSTS >>>>> ", blogs);
      setRankedPosts(blogs);
    } catch (error) {
      console.error("Failed to fetch ranked posts:", error);
      toast.error("Failed to fetch ranked posts");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRankedPosts();
  }, []);

  return (
    <div className="tablet:w-[20%]">
      {/* Header */}
      <div className="font-mulish  font-bold text-[28px] mobile:mb-6 tablet:mb-8 mb-4">
        Listicles
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-1 gap-8 mobile:gap-12 tablet:gap-14">
        {isLoading ? (
          Array.from({ length: limit }).map((_, index) => (
            <RankPostCardSkeleton key={index} />
          ))
        ) : rankedPosts.length === 0 ? (
          <p className="text-center text-gray-500">No Posts</p>
        ) : (
          rankedPosts.map((post) => (
            <RankPostCard
              key={post._id}
              postId={post._id}
              imageUrl={
                post.featuredImage ||
                "https://ik.imagekit.io/omjeem/Image-Not-Available.png"
              }
              title={<span dangerouslySetInnerHTML={{ __html: post.title }} />}
              likeCount={post.likeCount || 0}
              views={post.views || 0}
            />
          ))
        )}
      </div>
    </div>
  );
}
