"use client";
import TagHeader from "@/components/layout/tagHeader";
import FeaturedPost from "@/components/post/featuredPost";
import PostsGrid from "@/components/post/postsGrid";
import RankedPostsBar from "@/components/post/rankedPostsBar";
import { useState } from "react";
import TrendingBlogsSection from "@/components/post/trendingBlogsSection";
import { API_BASE_URL } from "@/config";
import axios from "axios";
import { useSearchParams } from "next/navigation";
interface Post {
  _id: string;
  title: string;
  featuredImage: string;
  createdAt: string;
  tags: { name: string; id: string }[] | null;
  likeCount: number | null;
  views: number;
}

interface TagPost {
  name: string;
  blogs: Post[];
}
export default function Home() {
  const [tagPosts, setTagPosts] = useState<TagPost[]>([]);
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);
  const [tagName, setTagName] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const handleTagClick = async (tagId: string) => {
    try {
      if (selectedTagId === tagId) {
        setTagPosts([]);
        setTagName("");
        setSelectedTagId(null);
        return;
      }

      setTagPosts([]);
      setTagName("");

      const response = await axios.get(`${API_BASE_URL}/tags/${tagId}`);
      setTagPosts(response.data.response.blogs);
      setTagName(response.data.response.name);
      setSelectedTagId(tagId);
      // console.log("TAG POSTS >>>>> ", tagPosts);
    } catch (error) {
      console.error("Error fetching tag details:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-6  px-4 mobile:px-8">
      <div className="flex justify-between gap-10 tablet:gap-12  flex-col-reverse tablet:flex-row">
        {/* left sidebar */}

        <RankedPostsBar limit={5} />

        {/* right section */}
        <div className="overflow-y-auto flex-1">
        <TagHeader onTagClick={handleTagClick} selectedTagId={selectedTagId} />
          {query ? (
            <PostsGrid query={query} />
          ) : tagPosts.length > 0 ? (
            <PostsGrid tagPosts={tagPosts[0].blogs} tagName={tagName || ""} />
          ) : (
            <FeaturedPost />
          )}

          <div className="mt-2 mobile:mt-8 w-full">
            {!query && !tagPosts.length && tagName === null && <PostsGrid />}
          </div>
        </div>
      </div>
      <TrendingBlogsSection />
    </div>
  );
}
