import React from "react";

// Type Imports
import { Blog } from "@/types";

// Next Imports
import { unstable_noStore } from "next/cache";

// Custom Component Imports
import SearchComponent from "./components/SearchComponent";
import Pagination from "./components/Pagination";
import BlogCard from "@/components/BlogCard";

const page = async ({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) => {
  unstable_noStore();
  const { query, page } = searchParams;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blogs?page=${page}&query=${query}`,
    {
      next: { tags: ["blogs"] },
    }
  );
  const { blogs, currentPage, totalPages } = await res.json();

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center">
        <SearchComponent />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
        {blogs.length > 0 ? (
          blogs?.map((blog: Blog) => <BlogCard blog={blog} key={blog._id} />)
        ) : (
          <h3 className="flex text-5xl justify-center items-center w-[90vw] h-[30vh]">
            No Blogs Found
          </h3>
        )}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default page;
