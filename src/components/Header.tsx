import React from "react";

// Next Imports
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="fixed navbar w-full bg-white z-10 shadow-lg">
      <div className=" py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="items-center justify-between hidden md:block">
            <div className="flex-shrink-0 w-[70px] border-2">
              <Link href="/">
                <Image
                  src="/image.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </Link>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-around md:justify-end gap-1 sm:gap-4 md:gap-10">
              <Link
                href="/"
                className="font-heading uppercase text-base text-black hover:text-gray-500 py-2 px-5"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                href="/blogs"
                className="font-heading uppercase text-base text-black hover:text-gray-500 py-2 px-5"
              >
                Blogs
              </Link>
              <Link
                href="/blogs/new"
                className="font-heading uppercase text-base text-black hover:text-gray-500 py-2 px-5 whitespace-nowrap"
              >
                Add Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
