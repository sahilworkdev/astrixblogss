import TagHeader from "@/components/layout/tagHeader";
import PostsGrid from "@/components/post/postsGrid";
import RankedPostsBar from "@/components/post/rankedPostsBar";
import PostDetailsSection from "@/components/post/postDetailsSection";
import { Metadata } from "next";
import { API_BASE_URL } from "@/config";

interface PostDetailsProps {
  params: Promise<{ postId: string }>;
  searchParams: Promise<{ query: string }>;
}

export async function generateMetadata({
  params,
}: PostDetailsProps): // parent: ResolvingMetadata
Promise<Metadata> {
  const postId = (await params).postId;

  const post = await fetch(`${API_BASE_URL}/blogs/${postId}`).then((res) =>
    res.json()
  );

  // console.log("post", post);
  const seoTitle = post.response.seoTitle;
  const seoDescription = post.response.seoDescription;
  return {
    title: ` ${seoTitle ? seoTitle : post.response.title} | Astrix Blogs`,
    description: seoDescription ? seoDescription : post.response.description,
  };
}

export default async function PostDetails({
  params,

}: PostDetailsProps) {
  const postId = (await params).postId;


  return (
    <div className="px-4 mobile:px-8 ">
      <PostDetailsSection id={postId} />
      {/* <PostDetailsSection id={postId} /> */}
      <div className="flex items-start justify-between gap-10 tablet:gap-12  flex-col-reverse tablet:flex-row">
        {/* Left Sidebar */}

        <RankedPostsBar limit={3} />

        {/* Right Section */}
        <div className="overflow-y-auto flex-1">
          <TagHeader />
          <PostsGrid />
        </div>
      </div>
    </div>
  );
}
