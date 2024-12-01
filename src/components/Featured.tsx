import React from "react";

const Featured = () => {
  return (
    <section id="featured">
      <div className=" container mx-auto lg:flex justify-between align-middle px-5 lg:px-0">
        <h2 className="font-heading text-4xl ">Featured Posts</h2>
        <div className="pt-5 lg:pt-0">
          <button
            className="filter-button font-heading text-sm rounded-full hover:bg-primary hover:text-white px-4 py-2 mt-3 lg:mt-0 active uppercase"
            data-filter="*"
          >
            All
          </button>
          <button
            className="filter-button font-heading text-sm rounded-full hover:bg-primary hover:text-white px-4 py-2 mt-3 lg:mt-0  uppercase"
            data-filter=".love"
          >
            love
          </button>
          <button
            className="filter-button font-heading text-sm rounded-full hover:bg-primary hover:text-white px-4 py-2 mt-3 lg:mt-0  uppercase"
            data-filter=".yoga"
          >
            yoga
          </button>
          <button
            className="filter-button font-heading text-sm rounded-full hover:bg-primary hover:text-white px-4 py-2 mt-3 lg:mt-0  uppercase"
            data-filter=".recipes"
          >
            recipes
          </button>
          <button
            className="filter-button font-heading text-sm rounded-full hover:bg-primary hover:text-white px-4 py-2 mt-3 lg:mt-0  uppercase"
            data-filter=".naturalherbs"
          >
            natural herbs
          </button>
        </div>
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
                  <a href="blog-single.html" className="blog-link capitalize">
                    How 'Weak Ties' Can Strengthen Our Relationships
                  </a>
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
                  <a href="blog-single.html" className="blog-link capitalize">
                    How 'Weak Ties' Can Strengthen Our Relationships
                  </a>
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
                  <a href="blog-single.html" className="blog-link capitalize">
                    What It's Really Like to Date While Anxious{" "}
                  </a>
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
                  <a href="blog-single.html" className="blog-link capitalize">
                    What It's Really Like to Date While Anxious{" "}
                  </a>
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
                  <a href="blog-single.html" className="blog-link capitalize">
                    Benefits to Having Much Older Friends than you
                  </a>
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
                  <a href="blog-single.html" className="blog-link capitalize">
                    Benefits to Having Much Older Friends than you
                  </a>
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
                  <a href="blog-single.html" className="blog-link capitalize">
                    How Often You Should Wash Your Hair in winter
                  </a>
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
                  <a href="blog-single.html" className="blog-link capitalize">
                    How Often You Should Wash Your Hair in winter
                  </a>
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
