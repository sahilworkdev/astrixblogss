"use client";
import { useEffect, useState } from "react";
import Button from "../common/button";
// import Dropdown from "../common/dropdown";
import SearchForm from "../common/searchForm";
import axios from "axios";
import { API_BASE_URL } from "@/config";

interface Blog {
  _id: string;
  title: string;
  featuredImage: string;
  createdAt: string;
  likeCount: number;
  views: number;
}
interface Tag {
  _id: string;
  name: string;
  blogs: Blog[];
}
interface TagHeaderProps {
  onTagClick?: (tagId: string) => void;
  selectedTagId?: string | null; 
}

export default function TagHeader({
  onTagClick,
  selectedTagId,
}: TagHeaderProps) {
  const [tags, setTags] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTags = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tags`);
      const data = response.data.response;
      // console.log("DATA >>>>> ", data);
      const tagsWithBlogs = data.filter(
        (tag: Tag) => Array.isArray(tag.blogs) && tag.blogs.length > 0
      );
      if (tagsWithBlogs.length > 0) {
        setTags(tagsWithBlogs);
        // console.log("TAGS >>>>> ", tagsWithBlogs);
      }
    } catch (error) {
      console.error("Error fetching tags:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div>
      {/* above tablet */}
      <div className="flex-col gap-4 mb-4 mt-6 tablet:mt-0 hidden tablet:flex">
        <div className="font-mulish font-bold text-[28px] ">The Latest</div>
        <div className="flex justify-between w-full items-start">
          <div className="flex justify-start items-center gap-2 flex-wrap">
            {/* Render 7 the fetched tags as buttons or skeletons */}
            {isLoading
              ? Array.from({ length: 7 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse bg-gray-300 rounded-[40px] h-6 w-20"
                  ></div>
                ))
              : tags
                  .slice(0, 7)
                  .map((tag, index) => (
                    <Button
                      key={index}
                      text={tag.name}
                      classNames={
                        selectedTagId === tag._id
                          ? "cursor-pointer bg-green-100 text-black border"
                          : "cursor-pointer"
                      }
                      onClick={() => onTagClick && onTagClick(tag._id)}
                    />
                  ))}
          </div>
          {/* <div className="flex justify-center items-center gap-2">
            <SearchForm query={query} />
            <Dropdown
              options={options}
              selectedOption={selectedOption}
              onSelect={handleSelect}
            />
          </div> */}
        </div>
      </div>

      {/* mobile and tablet */}
      <div className="flex-col gap-4 mb-4 mt-2 tablet:mt-0 py-2 flex tablet:hidden">
        <div className="flex justify-start items-center gap-1 flex-wrap">
          {/* Render 6 fetched tags as buttons or skeletons */}
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse bg-gray-300 rounded-[40px] h-6 w-20"
                ></div>
              ))
            : tags
                .slice(0, 6)
                .map((tag, index) => (
                  <Button
                    key={index}
                    text={tag.name}
                    onClick={() => onTagClick && onTagClick(tag._id)}
                    classNames={
                      selectedTagId === tag._id
                        ? "cursor-pointer bg-green-100 text-black border"
                        : "cursor-pointer"
                    }
                  />
                ))}
        </div>

        <div className="flex justify-between w-full items-start gap-2 flex-col">
          <div className="font-mulish font-bold text-[28px] text-grey">
            The Latest
          </div>
          <div className="flex justify-between items-center gap-2 w-full">
            <SearchForm />
            {/* <Dropdown
              options={options}
              selectedOption={selectedOption}
              onSelect={handleSelect}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
