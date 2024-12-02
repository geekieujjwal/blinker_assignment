"use client";

// ** React Imports
import { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ** Third Party Imports
import { Controller, useForm } from "react-hook-form";

// ** Next Imports
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// ** Type Imports
import { Editor } from "@tinymce/tinymce-react";
import BlogCard from "./BlogCard";

interface BlogData {
  title: string;
  author: string;
  content: string;
}

const BlogForm = () => {
  // ** States
  const [loading, setLoading] = useState(false);

  // ** Hooks

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");

  const isEditMode = pathname.includes("/edit");

  const { control, handleSubmit, setValue, watch, formState } = useForm({
    defaultValues: {
      title: "",
      author: "",
      content: "",
    },
    mode: "onTouched",
  });

  const formValues = watch();

  console.log(formValues);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!blogId) return;

      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/blogs/${blogId}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blog details");
        } else {
          router.refresh();
        }

        const data = await res.json();
        const { blog } = data;

        // Set the fetched blog data to the form fields
        setValue("title", blog.title);
        setValue("author", blog.author);
        setValue("content", blog.content);
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast.error("Failed to load blog details", { position: "top-right" });
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId, router, setValue]);

  const onSubmit = async (data: BlogData) => {
    try {
      const url = isEditMode
        ? `/api/blogs/${blogId}` // Use the blog ID for editing
        : "/api/blogs"; // Endpoint for creating a new blog

      const method = isEditMode ? "PATCH" : "POST"; // PATCH for editing, POST for creating

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/${url}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.refresh();
        toast.success(
          isEditMode
            ? "Blog updated successfully!"
            : "Blog created successfully!",
          { position: "top-right" }
        );
        setTimeout(() => router.push("/blogs"), 2000); // Redirect after success
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to save blog", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An unexpected error occurred", { position: "top-right" });
    }
  };

  return (
    <div className="p-6  mx-auto">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-center mb-4">
        {isEditMode ? "Edit" : "Create"} your Blog
      </h1>
      {loading ? (
        <p>Loading blog details...</p>
      ) : (
        <div className=" w-full flex justify-around gap-6 flex-col-reverse items-center md:flex-row">
          <div className="min-w-[400px] grow">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Title */}
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium mb-2"
                >
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
                {formState.errors.title && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.title.message}
                  </p>
                )}
              </div>

              {/* Author */}
              <div className="mb-4">
                <label
                  htmlFor="author"
                  className="block text-sm font-medium mb-2"
                >
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
                {formState.errors.author && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.author.message}
                  </p>
                )}
              </div>

              {/* Content */}
              <div className="mb-6">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium mb-2"
                >
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
                {formState.errors.content && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.content.message}
                  </p>
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
          <BlogCard blog={formValues} key={Math.random()} />
        </div>
      )}
    </div>
  );
};

export default BlogForm;
