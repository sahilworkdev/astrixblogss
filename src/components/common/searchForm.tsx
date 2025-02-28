import React from "react";
import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { SearchIcon } from "lucide-react";
import SearchFormReset from "./searchFormReset";
const SearchForm = () => {
  const params = useSearchParams();
  const query = params.get("query");
  return (
    <Form
      action={"/"}
      scroll={false}
      className="flex justify-between items-center search-form border-[1.5px] border-gray-400 px-2 rounded-md w-full focus-within:border-green-100"
    >
      <input
        type="text"
        name="query"
        defaultValue={query || ""}
        className={`bg-transparent outline-none border-none p-2`}
        placeholder="Search posts"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        {!query && (
          <button type="submit" className="search-btn text-grey-100">
            <SearchIcon className="size-5" />
          </button>
        )}
      </div>
    </Form>
  );
};

export default SearchForm;
