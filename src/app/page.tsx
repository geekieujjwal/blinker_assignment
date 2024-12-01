import BlogBlock from "@/components/BlogBlock";
import BlogCard from "@/components/BlogCard";
import Cta from "@/components/Cta";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <BlogCard />
      <Featured />
      <BlogBlock />
      <Cta />
      <Footer />
    </>
  );
};

export default page;
