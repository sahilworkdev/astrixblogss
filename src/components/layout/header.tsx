"use client";

import Image from "next/image";
import Link from "next/link";
import SearchForm from "../common/searchForm";

export default function Header() {
  return (
    <>
      {/* Desktop Header */}

      <header className="w-full sticky bg-white  mb-4 top-0 hidden tablet:block z-50">
        <div className="grid grid-cols-3 items-center px-6 py-2 w-full">
          <Link href="/">
            <Image
              src={"/newlogo.svg"}
              width={150}
              height={100}
              alt="Atrix Logo"
            />
          </Link>

          <div className="flex justify-start items-start gap-2 w-full max-w-lg">
            <SearchForm />
          </div>
        </div>
      </header>

      {/* Mobile Header */}

      <header className="w-full sticky bg-white top-0 flex tablet:hidden z-50">
        <div className="flex justify-center items-center px-4 py-3 w-full">
          <Link href="/">
            <Image
              src={"/newlogo.svg"}
              width={100}
              height={28}
              alt="Atrix Logo"
            />
          </Link>
        </div>
      </header>
    </>
  );
}
