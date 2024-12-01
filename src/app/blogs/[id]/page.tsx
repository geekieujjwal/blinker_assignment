import Image from "next/image";
import React from "react";

const BlogPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${params.id}`);
  const { blog } = await res.json();

  console.log("data:", blog);

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.author}</p>
      <p>{blog.createdAt}</p>
      <Image src="/blog11.png" alt="Blog Image" width={300} height={300} />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPage;
