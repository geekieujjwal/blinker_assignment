"use client";

// ** React Imports
import { useEffect, useState } from "react";

// ** Third Party Imports
import { Controller, useForm } from "react-hook-form";

// ** Next Imports
import Link from "next/link";
import { useRouter } from "next/navigation";

// ** Type Imports
import { Blog } from "@/types";
import { Editor } from "@tinymce/tinymce-react";

interface BlogData {
  title: string;
  author: string;
  content: string;
}

const BlogForm = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      content: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: BlogData) => {
    try {
      console.log("Submitted Data: ", data);
      // Example: await fetch('/api/posts', { method: 'POST', body: JSON.stringify(data) });
      const res = await fetch("/api/blogs", {
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log("res:", res);
      //   router.push("/blogs");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add your Blog</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title *
          </label>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <input
                {...field}
                id="title"
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter blog title"
              />
            )}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Author */}
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium mb-2">
            Author *
          </label>
          <Controller
            name="author"
            control={control}
            rules={{ required: "Author is required" }}
            render={({ field }) => (
              <input
                {...field}
                id="author"
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter author name"
              />
            )}
          />
          {errors.author && (
            <p className="text-red-500 text-sm">{errors.author.message}</p>
          )}
        </div>

        {/* Content */}
        <div className="mb-6">
          <label htmlFor="content" className="block text-sm font-medium mb-2">
            Content *
          </label>
          <Controller
            name="content"
            control={control}
            rules={{ required: "Content is required" }}
            render={({ field }) => (
              <Editor
                id="content"
                apiKey="78y5fe3pte0t54l9v0gdgsksfp9yhcjnum36fdefml8j9xzb"
                value={field.value}
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help",
                }}
                onEditorChange={(content) => field.onChange(content)}
              />
            )}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <Link
            href="/blogs"
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
