"use client";
import { useState } from "react";
import Dropdown from "../common/dropdown";
import SearchForm from "../common/searchForm";

export default function SearchFormAndDropdown() {
  const options = ["All", "Latest", "December"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected Option:", option);
  };
  return (
    <div className="flex justify-center items-center gap-2 mt-6 flex-col mobile:flex-row">
      <SearchForm  />
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onSelect={handleSelect}
      />
    </div>
  );
}
