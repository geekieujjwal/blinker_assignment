import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="relative">
      <div className="pattern-overlay pattern-left absolute -z-10">
        {/* <img src="images/leaf-img-pattern-left.png" alt="pattern" /> */}
      </div>
      <div className="pattern-overlay pattern-right absolute bottom-0 right-0 -z-10">
        {/* <img src="images/leaf-img-pattern-right.png" alt="pattern" /> */}
      </div>

      <div className="container mx-auto footer-container py-40 px-5 lg:px-0">
        <footer className="grid grid-cols-2 lg:grid-cols-6 gap-6 pb-20">
          <div className="">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Twitter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Instagram
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Linkedin
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Contact
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Blog
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Spirituality
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Life
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Relationships
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Travel
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Health
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Yoga
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Gardening
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Love
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Books
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="uppercase hover:text-gray-500">
                  Meditation
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-subgrid col-span-2 ">
            <div className="col-span-2 lg:text-right">
              <p className="m-0">
                {" "}
                <b>info@yourcompany.com</b>{" "}
              </p>
              <p className="m-0">15Th Street Avenue, New York, USA</p>
              <p className="m-0">011-554-8798-6556</p>

              <div className=" mt-3 d-flex justify-content-md-end">
                <a
                  href="#"
                  className="social-link text-xl hover:text-gray-500 me-4"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
        </footer>

        <footer className="border-t ">
          <div className="flex justify-center pt-10">
            <p className="mb-0">© 2023 TemplatesJungle. All rights reserved.</p>
          </div>
          <div className="flex justify-center">
            <p className="">
              Free HTML Template By:
              <a
                href="https://templatesjungle.com/"
                className="website-link"
                target="_blank"
              >
                <b>
                  <u>TemplatesJungle</u>
                </b>
              </a>
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
