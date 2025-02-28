import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text?: string;
  iconSrc?: string;
  onClick?: () => void;
  classNames?: string;
}

const Button = ({ text, iconSrc, onClick, classNames }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "inline-flex items-center justify-center gap-1 px-2  text-black rounded-[40px] border border-black h-6  text-xs font-mulish",
        classNames,
      )}
      onClick={onClick}
    >
      {iconSrc && <Image src={iconSrc} alt="icon" className="w-5 h-5" />}
      {text && (
        <span className="truncate text-ellipsis max-w-[150px] ..">{text}</span>
      )}
    </button>
  );
};

export default Button;
