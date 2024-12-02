import BlogForm from "@/components/BlogForm";
import React, { Suspense } from "react";

const EditBlogPage = () => {
  return (
    <Suspense fallback={<div>loading....</div>}>
      <BlogForm />
    </Suspense>
  );
};

export default EditBlogPage;
