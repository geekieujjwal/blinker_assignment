import React from "react";

// Custom Component Imports
import BlogBlock from "@/components/BlogBlock";
import BlogCards from "@/components/BlogCards";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";

export const runtime = "nodejs";

const page = () => {
  return (
    <>
      <Hero />
      <BlogCards />
      <Featured />
      <BlogBlock />
    </>
  );
};

export default page;
