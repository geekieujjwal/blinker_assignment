import React from "react";

// Next Imports
import Image from "next/image";
import Link from "next/link";

const Block = ({ src }: { src: string }) => {
  return (
    <figure className="blog-block-content image-zoom relative">
      <Link href="/blogs">
        <Image src={src} alt="Image" width={300} height={300} />
        <div className="header-overlay hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
          <h5 className="font-heading text-white text-xl p-12">
            5 Helpful Tips for Living Healthy Life
          </h5>
        </div>
      </Link>
    </figure>
  );
};

const imgArray = [
  "/blog7.png",
  "/blog8.png",
  "/blog9.png",
  "/blog10.png",
  "/blog11.png",
];

const BlogBlock = () => {
  return (
    <section id="blog-block">
      <div className="columns-5 gap-0 pt-40">
        {imgArray.map((src, index) => (
          <Block key={index} src={src} />
        ))}
      </div>
    </section>
  );
};

export default BlogBlock;
