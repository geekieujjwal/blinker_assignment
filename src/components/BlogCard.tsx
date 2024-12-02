import DeleteButton from "@/app/blogs/components/DeleteButton";
import { Blog } from "@/types";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";

// Helper function to strip HTML tags
const stripHtmlTags = (html: string): string => {
  return html.replace(/<[^>]+>/g, ""); // Remove all HTML tags
};

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { _id, title, author, content, createdAt } = blog;
  return (
    <div
      key={blog._id}
      className="blog-post px-4 py-5 rounded-lg border-2 max-w-[500px]"
    >
      <div className="image-zoom">
        <Link href={_id ? `/blogs/${_id}` : "#"} className="blog-img">
          <Image
            src="/relationship.png"
            alt="Picture of the blog"
            className="w-full"
            width={400}
            height={300}
          />
        </Link>
      </div>
      <div className="pt-8">
        <span className="blog-date uppercase">
          <b>{author}</b> on {formatDate(createdAt ?? new Date())}
        </span>
      </div>
      <div>
        <h3 className="py-5">
          <Link
            href={_id ? `/blogs/${_id}` : "#"}
            className="font-heading font-thin text-2xl hover:text-gray-500"
            aria-disabled={!_id}
          >
            {title}
          </Link>
        </h3>
        <p className="py-5">
          {stripHtmlTags(content).length > 200
            ? `${stripHtmlTags(content).substring(0, 200)}...`
            : stripHtmlTags(content)}
        </p>
        <div className="flex items-center justify-between">
          <Link
            href={_id ? `/blogs/${_id}` : "#"}
            className="font-heading text-sm font-normal py-2 px-4 bg-transparent hover:bg-black text-black hover:text-white border-black border-2 hover:border-transparent rounded-full transition duration-700 ease-in-out"
          >
            Read More
          </Link>
          {_id ? (
            <div className="flex gap-5">
              <div className="relative group">
                <button>
                  <Link href={`/blogs/edit/?id=${blog._id}`}>
                    <FaRegEdit size={30} />
                  </Link>
                </button>
                <span className="absolute left-1/2 bottom-10 transform -translate-x-1/2 mt-2 px-2 py-1 text-sm bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Edit
                </span>
              </div>
              <div className="relative group">
                <DeleteButton id={blog._id} size={30} />
                <span className="absolute left-1/2 bottom-10 transform -translate-x-1/2 mt-2 px-2 py-1 text-sm bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Delete
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
