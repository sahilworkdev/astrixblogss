"use client";
import Image from "next/image";
import { useState } from "react";

interface DropdownProps {
  options: string[]; 
  selectedOption: string;
  onSelect: (ratio: string) => void;
}

export default function Dropdown({
  options,
  selectedOption,
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (ratio: string) => {
    onSelect(ratio);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-dark/80 text-black text-xs border w-[88px] border-light-100 py-1 px-2 rounded flex items-center justify-between bg-light-50"
      >
        {selectedOption}
        <span
          className={`ml-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <Image
            src="/icons/chevronDown.svg"
            width={12}
            height={6}
            alt="Toggle Dropdown"
          />
        </span>
      </button>

      {isOpen && (
        <ul className="absolute top-full mt-1 bg-light-50 border border-light-100 rounded shadow-md text-black text-sm w-full z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-2 py-1 hover:bg-light-100 ${
                selectedOption === option ? "bg-dark-100" : ""
              } cursor-pointer`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


