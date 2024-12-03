import React from "react";

// Next Imports
import Link from "next/link";

const Featured = () => {
  return (
    <section id="featured">
      <div className=" container mx-auto lg:flex justify-between align-middle px-5 lg:px-0">
        <h2 className="font-heading text-4xl ">Featured Posts</h2>
      </div>

      <div className="container mx-auto px-5 lg:px-0">
        <div className="isotope-container mt-12">
          <div className="grid grid-cols-2 gap-4">
            <div className="item love lg:me-28">
              <div className="featured-post py-2">
                <span className="blog-date uppercase">
                  dating and Relationships
                </span>
                <h3 className="font-heading text-2xl font-normal hover:text-gray-500 ">
                  <Link href="/blogs" className="blog-link capitalize">
                    How &apos;Weak Ties&apos; Can Strengthen Our Relationships
                  </Link>
                </h3>
              </div>
              <hr className="my-4" />
            </div>
            <div className="item love lg:me-28">
              <div className="featured-post py-2 ">
                <span className="blog-date uppercase">
                  dating and Relationships
                </span>
                <h3 className="font-heading text-2xl font-normal hover:text-gray-500">
                  <Link href="/blogs" className="blog-link capitalize">
                    How &apos;Weak Ties&apos; Can Strengthen Our Relationships
                  </Link>
                </h3>
              </div>
              <hr className="my-4 " />
            </div>
            <div className="item yoga lg:me-28">
              <div className="featured-post py-2">
                <span className="blog-date uppercase">
                  dating and Relationships
                </span>
                <h3 className="font-heading text-2xl font-normal hover:text-gray-500">
                  <Link href="/blogs" className="blog-link capitalize">
                    What It&apos;s Really Like to Date While Anxious{" "}
                  </Link>
                </h3>
              </div>
              <hr className="my-4" />
            </div>
            <div className="item yoga lg:me-28">
              <div className="featured-post py-2 ">
                <span className="blog-date uppercase">
                  dating and Relationships
                </span>
                <h3 className="font-heading text-2xl font-normal hover:text-gray-500">
                  <Link href="/blogs" className="blog-link capitalize">
                    What It&apos;s Really Like to Date While Anxious{" "}
                  </Link>
                </h3>
              </div>
              <hr className="my-4 " />
            </div>
            <div className="item recipes lg:me-28">
              <div className="featured-post py-2">
                <span className="blog-date uppercase">
                  dating and Relationships
                </span>
                <h3 className="font-heading text-2xl font-normal hover:text-gray-500">
                  <Link href="/blogs" className="blog-link capitalize">
                    Benefits to Having Much Older Friends than you
                  </Link>
                </h3>
              </div>
              <hr className="my-4" />
            </div>
            <div className="item recipes lg:me-28">
              <div className="featured-post py-2 ">
                <span className="blog-date uppercase">
                  dating and Relationships
                </span>
                <h3 className="font-heading text-2xl font-normal hover:text-gray-500">
                  <Link href="/blogs" className="blog-link capitalize">
                    Benefits to Having Much Older Friends than you
                  </Link>
                </h3>
              </div>
              <hr className="my-4 " />
            </div>
            <div className="item naturalherbs lg:me-28">
              <div className="featured-post py-2">
                <span className="blog-date uppercase">
                  dating and Relationships
                </span>
                <h3 className="font-heading text-2xl font-normal hover:text-gray-500">
                  <Link href="/blogs" className="blog-link capitalize">
                    How Often You Should Wash Your Hair in winter
                  </Link>
                </h3>
              </div>
              <hr className="my-4 " />
            </div>
            <div className="item naturalherbs lg:me-28">
              <div className="featured-post py-2 ">
                <span className="blog-date uppercase">
                  dating and Relationships
                </span>
                <h3 className="font-heading text-2xl font-normal hover:text-gray-500">
                  <Link href="/blogs" className="blog-link capitalize">
                    How Often You Should Wash Your Hair in winter
                  </Link>
                </h3>
              </div>
              <hr className="my-4 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
