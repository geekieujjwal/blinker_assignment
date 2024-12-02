import BlogBlock from "@/components/BlogBlock";
import BlogCard from "@/components/BlogCards";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <BlogCard />
      <Featured />
      <BlogBlock />
    </>
  );
};

export default page;
