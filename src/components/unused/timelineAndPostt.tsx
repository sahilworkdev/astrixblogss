import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface PostContentInterface {
  id: string;
  header?: string;
  description: string;
  lists?: string[];
  images?: string[];
  content?: PostContentInterface[];
}

const TimelineAndPost = ({ newData }: { newData: PostContentInterface[] }) => {
  console.log("CONTENT DATA >>>>>>>>", newData);

  return (
    <div className="flex justify-between w-full min-h-[100dvh]">
      {/* Timeline/Sidebar Section */}
      <div className="sticky top-4 h-[calc(100vh-40rem)] hidden tablet:block  w-[36%] mb-60">
        <PostSideBarRecursion content={newData} />
      </div>
      {/* Post Content Section */}
      <div className="px-2 mobile:px-4 tablet:px-6 overflow-y-auto w-full pt-4 tablet:mb-16 tablet:ml-6">
        <PostDataRecursion content={newData} />
      </div>
    </div>
  );
};

function PostDataRecursion({
  content,
}: {
  content: PostContentInterface[] | undefined;
}) {
  const [contentData, setContentData] = useState(content || []);

  useEffect(() => {
    if (content) {
      setContentData(content);
    }
  }, [content]);

  if (!contentData || contentData?.length === 0) {
    return null;
  }
  return (
    <>
      {contentData?.map((post: PostContentInterface, index) => {
        return <PostDataContent post={post} key={index} />;
      })}
    </>
  );
}

function PostDataContent({ post }: { post: PostContentInterface }) {
  return (
    <div id={post.id} key={post.id}>
      <div
        className="text-2xl leading-[22px] font-bold font-mulish capitalize mb-2"
        dangerouslySetInnerHTML={{ __html: post?.header || "" }}
      >
        {/* {post.header} */}
      </div>
      <div className="mb-4">
        <div
          className="text-sm tablet:text-lg font-mulish mb-4"
          dangerouslySetInnerHTML={{ __html: post?.description }}
        >
          {/* {post.description} */}
        </div>
        {post?.lists?.map((list: string, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: list }}>
            {/* {list} */}
          </div>
        ))}
        <PostDataRecursion content={post.content} />
      </div>
      <div className="w-full  tablet:gap-4 grid grid-cols-1 tablet:grid-cols-2">
        {post?.images &&
          post.images.map((image, index) => (
            <div
              className="w-full mx-auto h-auto  object-cover mb-4 "
              key={index}
            >
              <Image
                src={image}
                width={100}
                height={100}
                alt="image"
                className="w-full h-auto object-contain"
              />
              {/* <p className="text-center text-gray-500 text-sm mt-2">
                {post?.imageCaption}
              </p> */}
            </div>
          ))}
      </div>
    </div>
  );
}

//Timeline Sidebar
function PostSideBarRecursion({
  content,
}: {
  content: PostContentInterface[] | undefined;
}) {
  const [contentData, setContentData] = useState(content);
  useEffect(() => {
    if (typeof window !== "undefined") setContentData(content);
  }, [content]);
  return (
    <div>
      {contentData?.map((post: PostContentInterface, index) => (
        <div key={index} className="mt-4">
          <ul className="space-y-2 w-full ps-4">
            <ListComponent post={post} />
          </ul>
        </div>
      ))}
    </div>
  );
}

function ListComponent({ post }: { post: PostContentInterface }) {
  const [showNested, setShowNested] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Select all divs with an id attribute
      const sections = document.querySelectorAll("div[id]");

      // Create a new IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          root: null, // Observes viewport
          rootMargin: "0px 0px -50% 0px", // Trigger when the section is halfway visible
          threshold: 0.5, // At least 50% of the element is visible
        }
      );

      // Observe each section
      sections.forEach((section) => observer.observe(section));

      // Cleanup on unmount
      return () => observer.disconnect();
    }
  }, []);
  return (
    <li key={post.id}>
      {post.header && (
        <div
          onClick={() => setShowNested(!showNested)}
          className="cursor-pointer flex justify-between items-center w-full border-b"
        >
          <Link
            href={`#${post.id}`}
            className={`text-xl font-medium block py-3 capitalize
                        ${
                          activeSection === post.id.replace("#", "")
                            ? "text-blue-600"
                            : "text-grey-100"
                        }
                      `}
            dangerouslySetInnerHTML={{ __html: post.header }}
          >
            {/* {post.header} */}
          </Link>
          <Image
            src={"/icons/arrow.svg"}
            width={14}
            height={12}
            alt="arrow icon"
          />
        </div>
      )}

      {showNested && <PostSideBarRecursion content={post.content} />}
    </li>
  );
}

export default TimelineAndPost;
