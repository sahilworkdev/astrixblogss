"use client";

import { useState, useEffect } from "react";
import TrendBlogCard from "./trendingBlogCard";
import axios from "axios";
import { TrendBlogCardSkeleton } from "../skeletons/trendBlogCardSkeleton";
import Loading from "@/app/loading";
import toast from "@/utils/toast";
import { API_BASE_URL } from "@/config";

interface Blog {
  createdAt: string;
  _id: string;
  title: string;
  featuredImage: string | null;
  tags: { name: string; id: string }[] | null;
  likeCount: number | null;
  // dislikeCount: number | null;
  views: number;
}

export default function TrendingBlogsSection() {
  const [visibleBlogs, setVisibleBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const POSTS_PER_PAGE = 6;

  const fetchTrendingBlogs = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        // `${API_BASE_URL}/blogs?limit=${POSTS_PER_PAGE}&page=${page}`
        `${API_BASE_URL}/blogs/rank/data?limit=${POSTS_PER_PAGE}&page=${page}`
      );
      const blogs: Blog[] = response.data.response.blogs;
      // console.log("TRENDING BLOGS >>>>> ", blogs);
      setVisibleBlogs((prevVisible) => [...prevVisible, ...blogs]);
    } catch (error) {
      console.error("Failed to fetch trending blogs:", error);
      toast.error("Failed to fetch trending blogs");
    }
    setIsLoading(false);
  };

  // Fetch initial blogs on component mount
  useEffect(() => {
    fetchTrendingBlogs(page);
  }, [page]);

  const showMoreBlogs = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="px-2">
      <h1 className="text-[28px] leading-[35px] font-bold mb-4 mobile:mb-6">
        Trending Blogs
      </h1>
      <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-8 mobile:gap-12 tablet:gap-20">
        {isLoading
          ? Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
              <TrendBlogCardSkeleton key={index} />
            ))
          : visibleBlogs.map((blog, index) => (
              <TrendBlogCard
                image={
                  blog.featuredImage ||
                  "https://ik.imagekit.io/omjeem/Image-Not-Available.png"
                }
                key={index}
                postId={blog?._id}
                date={blog?.createdAt}
                likeCount={blog?.likeCount}
                // dislikeCount={blog?.dislikeCount}
                views={blog?.views}
                tags={blog?.tags}
                title={
                  <span dangerouslySetInnerHTML={{ __html: blog.title }} />
                }
              />
            ))}
      </div>
      <div className="flex justify-center items-center w-full h-full mt-6">
        {isLoading ? (
          <Loading />
        ) : (
          <button
            onClick={showMoreBlogs}
            className="inline-flex items-center justify-center gap-2 rounded-[40px] k h-5 font-mulish px-6 py-4 font-semibold border border-green-100 text-green-100 hover:bg-green  hover:border-green hover:text-black"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}
