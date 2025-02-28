"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostCardSkeleton } from "../skeletons/postCardSkeleton";
import PostCard from "./postCard";
import { API_BASE_URL } from "@/config";

interface Post {
  _id: string;
  title: string;
  featuredImage: string;
  createdAt: string;
  tags: { name: string; id: string }[] | null;
  likeCount: number | null;
  // dislikeCount: number | null;
  views: number;
}

export default function PostsGrid({
  query,
  tagPosts,
  tagName,
}: {
  query?: string;
  tagPosts?: Post[];
  tagName?: string;
}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/blogs?limit=9`, {
        params: { ...(query && { search: query }) },
      });
      const fetchedPosts = response.data.response.blogs;

      setPosts(fetchedPosts);
      // console.log("POSTS IN POSTS GRID >>>>> ", fetchedPosts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [query]);

  return (
    <div className="w-full flex gap-4 flex-col">
      {query && (
        <div className="text-start text-grey-100 text-xl">
          Search results for : &nbsp;
          <span className="font-bold text-green-100">{query}</span>
        </div>
      )}
      {tagName && tagPosts && (
        <div className="text-start text-grey-100 text-xl">
          Posts for tag: &nbsp;
          <span className="font-bold text-green-100">{tagName}</span>
        </div>
      )}

      <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-8 mobile:gap-12 mb-8 tablet:mb-12">
        {isLoading ? (
          Array.from({ length: 9 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))
        ) : posts.length === 0 ? (
          <p className=" text-grey-400 text-xl ">No posts found</p>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={post._id || index}
              postId={post._id}
              imageUrl={
                post.featuredImage ||
                "https://ik.imagekit.io/omjeem/Image-Not-Available.png"
              }
              date={post.createdAt}
              likeCount={post.likeCount || 0}
              // dislikeCount={post.dislikeCount || 0}
              views={post.views || 0}
              tags={post.tags}
              title={<span dangerouslySetInnerHTML={{ __html: post.title }} />}
            />
          ))
        )}
      </div>
    </div>
  );
}
