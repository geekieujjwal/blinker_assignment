import { Blog } from "@/types";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const pages = async () => {
  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res.json();

  console.log("data:", data);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-7 px-5 lg:px-0">
        {data?.blogs?.map((blog: Blog) => {
          return (
            <div key={blog._id} className="blog-post py-10">
              <div className="image-zoom ">
                <Link href={`/blogs/${blog._id}`} className="blog-img">
                  <Image
                    src="/relationship.png"
                    alt="Picture of the blog"
                    width={400}
                    height={300}
                  />
                </Link>
              </div>
              <div className="pt-8">
                <span className="blog-date uppercase">
                  <b>{blog.author}</b> on {formatDate(blog.createdAt)}
                </span>
              </div>
              <div className="">
                <h3 className="py-5">
                  <Link
                    href="blog-single.html"
                    className="font-heading font-thin text-2xl hover:text-gray-500"
                  >
                    {blog.title}
                  </Link>
                </h3>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blogs/${blog._id}`}
                    className="font-heading text-sm font-normal py-2 px-4 bg-transparent hover:bg-black text-black hover:text-white border-black border-2 hover:border-transparent rounded-full transition duration-700 ease-in-out"
                  >
                    Read More
                  </Link>
                  <div className="flex gap-5">
                    <div className="relative group">
                      <button>
                        <Link href={`/blogs/${blog._id}`}>
                          <FaRegEdit size={30} />
                        </Link>
                      </button>
                      <span className="absolute left-1/2 bottom-10 transform -translate-x-1/2 mt-2 px-2 py-1 text-sm bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Edit
                      </span>
                    </div>

                    <div className="relative group">
                      <button>
                        <MdDeleteOutline size={30} />
                      </button>
                      <span className="absolute left-1/2 bottom-10 transform -translate-x-1/2 mt-2 px-2 py-1 text-sm bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Delete
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default pages;
