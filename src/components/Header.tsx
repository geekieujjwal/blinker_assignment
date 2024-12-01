import React from "react";

const Header = () => {
  return (
    <nav className="fixed navbar w-full z-10 shadow-lg">
      <div className=" py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0 w-[70px] border-2">
              <a href="index.html">
                <img className="" src="/image.png" alt="Your Company" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ">
              <a
                href="index.html"
                className="font-heading uppercase text-base text-black hover:text-gray-500 py-2"
                aria-current="page"
              >
                Home
              </a>
              <div className="group relative cursor-pointer">
                <div className="flex items-center gap-0">
                  <a className="menu-hover font-heading uppercase text-base text-black hover:text-gray-500 px-10 py-2">
                    Pages
                  </a>
                </div>
                <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 ps-1 text-gray-800 shadow-xl group-hover:visible">
                  <a
                    href="about.html"
                    className="my-2 font-heading uppercase text-sm text-black hover:text-gray-500 md:mx-2"
                  >
                    About Us{" "}
                    <span className="inline-flex items-center capitalize rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                      Pro
                    </span>
                  </a>
                  <a
                    href="blog.html"
                    className="my-2 font-heading uppercase text-sm text-black hover:text-gray-500 md:mx-2"
                  >
                    Blog{" "}
                    <span className="inline-flex items-center capitalize rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                      Pro
                    </span>
                  </a>
                  <a
                    href="blog-single.html"
                    className="my-2 font-heading uppercase text-sm text-black hover:text-gray-500 md:mx-2"
                  >
                    Single Post
                    <span className="inline-flex items-center capitalize rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                      Pro
                    </span>
                  </a>
                  <a
                    href="contact.html"
                    className="my-2 font-heading uppercase text-sm text-black hover:text-gray-500 md:mx-2"
                  >
                    Contact{" "}
                    <span className="inline-flex items-center capitalize rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                      Pro
                    </span>
                  </a>
                  <a
                    href="faq.html"
                    className="my-2 font-heading uppercase text-sm text-black hover:text-gray-500 md:mx-2"
                  >
                    FAQs{" "}
                    <span className="inline-flex items-center capitalize rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                      Pro
                    </span>
                  </a>
                  <a
                    href="gallary.html"
                    className="my-2 font-heading uppercase text-sm text-black hover:text-gray-500 md:mx-2"
                  >
                    Gallery{" "}
                    <span className="inline-flex items-center capitalize rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                      Pro
                    </span>
                  </a>
                </div>
              </div>
              <a
                href="about.html"
                className="font-heading uppercase text-base text-black hover:text-gray-500 py-2 pe-5"
              >
                About
              </a>
              <a
                href="blog.html"
                className="font-heading uppercase text-base text-black hover:text-gray-500 py-2 px-5"
              >
                Blog
              </a>
              <a
                href="contact.html"
                className="font-heading uppercase text-base text-black hover:text-gray-500 py-2 ps-5"
              >
                Contact
              </a>
              <a
                href="https://templatesjungle.gumroad.com/l/amanda-lifestyle-blog-tailwind-css-website-template"
                className="font-heading uppercase font-bold text-base text-black hover:text-gray-500 py-2 ps-5"
                target="_blank"
              >
                GET PRO
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden mobile-menu-button">
            {/* <!-- Mobile menu button --> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md  p-2 text-black hover:bg-slate-700 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg
                className="open-icon block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg
                className="close-icon hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="md:hidden hidden bg-white" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 h-screen sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="index.html"
            className="font-heading block uppercase text-base text-black hover:text-gray-500 p-2"
            aria-current="page"
          >
            Home
          </a>
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between">
              <a className="menu-hover font-heading block uppercase text-base text-black hover:text-gray-500 p-2">
                Pages{" "}
              </a>
            </div>
            <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-2 text-gray-800 shadow-xl group-hover:visible">
              <a
                href="about.html"
                className="my-2 font-heading uppercase text-sm text-black hover:text-gray-500 md:mx-2"
              >
                About Us{" "}
                <span className="inline-flex items-center capitalize rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  Pro
                </span>
              </a>
              <a
                href="blog.html"
                className="my-2 font-heading uppercase text-sm text-black hover:text-gray-500 md:mx-2"
              >
                Blog{" "}
                <span className="inline-flex items-center capitalize rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  Pro
                </span>
              </a>
              <a
                href="blog-single.html"
                className="my-2 font-heading uppercase text-sm text-black hover:text-gray-500 md:mx-2"
              >
                Single Post{" "}
                <span className="inline-flex items-center capitalize rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  Pro
                </span>
              </a>
              <a
                href="contact.html"
                className="my-2 font-heading uppercase text-sm text-black hover:text-gray-500 md:mx-2"
              >
                Contact{" "}
                <span className="inline-flex items-center capitalize rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  Pro
                </span>
              </a>
              <a
                href="faq.html"
                className="my-2 font-heading uppercase text-sm text-black hover:text-gray-500 md:mx-2"
              >
                FAQs{" "}
                <span className="inline-flex items-center capitalize rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  Pro
                </span>
              </a>
              <a
                href="gallary.html"
                className="my-2 font-heading uppercase text-sm text-black hover:text-gray-500 md:mx-2"
              >
                Gallery{" "}
                <span className="inline-flex items-center capitalize rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                  Pro
                </span>
              </a>
            </div>
          </div>
          <a
            href="about.html"
            className="font-heading block uppercase text-base text-black hover:text-gray-500 p-2 "
          >
            About
          </a>
          <a
            href="blog.html"
            className="font-heading block uppercase text-base text-black hover:text-gray-500 p-2 "
          >
            Blog
          </a>
          <a
            href="contact.html"
            className="font-heading block uppercase text-base text-black hover:text-gray-500 p-2 "
          >
            Contact
          </a>
          <a
            href="https://templatesjungle.gumroad.com/l/amanda-lifestyle-blog-tailwind-css-website-template"
            className="font-heading font-bold block uppercase text-base text-black hover:text-gray-500 p-2 "
          >
            GET PRO
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
