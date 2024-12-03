import React from "react";

// Type Imports
import { Blog } from "@/types";

// Custom Component Imports
import BlogCard from "./BlogCard";

const BlogCards = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs`, {
    next: {
      tags: ["blogs"],
    },
  });
  const data = await res.json();
  const blogsToShow = data.blogs.slice(0, 3);

  return (
    <section id="blog-card">
      <div className="container mx-auto py-28 flex flex-wrap lg:flex-nowrap justify-around gap-8">
        {blogsToShow.map((blog: Blog) => (
          <BlogCard blog={blog} key={blog._id} />
        ))}
      </div>
    </section>
  );
};

export default BlogCards;
