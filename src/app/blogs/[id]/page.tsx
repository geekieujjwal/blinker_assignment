import BlogCard from "@/components/BlogCards";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import DeleteButton from "../components/DeleteButton";

const BlogPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blogs/${params.id}`
  );
  const { blog } = await res.json();

  return (
    <div className="container mx-auto px-4 py-10">
      <article className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header Section */}
        <header className="bg-gray-800 text-white py-6 px-8">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-300">
              <b>{blog.author}</b> - {formatDate(blog.createdAt)}
            </p>
            <div className="flex gap-5">
              <div className="relative group">
                <button>
                  <Link href={`/blogs/edit/?id=${blog._id}`}>
                    <FaRegEdit size={20} />
                  </Link>
                </button>
                <span className="absolute left-1/2 bottom-10 transform -translate-x-1/2 mt-2 px-2 py-1 text-sm bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Edit
                </span>
              </div>
              <div className="relative group">
                <DeleteButton id={blog._id} size={22} />
                <span className="absolute left-1/2 bottom-10 transform -translate-x-1/2 mt-2 px-2 py-1 text-sm bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Delete
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Image Section */}
        <div className="relative h-72 md:h-96">
          <Image
            src="/blog11.png"
            alt="Blog Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 prose max-w-none bg-orange-50">
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="prose prose-lg"
          />
        </div>
      </article>

      {/* Related Section */}
      <aside className="mt-32">
        <h2 className="text-2xl font-semibold mb-[-100px]">Related Blogs</h2>
        <BlogCard />
      </aside>
    </div>
  );
};

export default BlogPage;
