import BlogBlock from "@/components/BlogBlock";
import BlogCard from "@/components/BlogCard";
import Cta from "@/components/Cta";
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
      <Cta />
    </>
  );
};

export default page;
