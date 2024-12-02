import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  CiTwitter,
  CiYoutube,
} from "react-icons/ci";

const Footer = () => {
  return (
    <section id="footer" className="relative">
      <div className="pattern-overlay pattern-left absolute -z-10">
        <Image
          src="/leaf-img-pattern-left.png"
          alt="image"
          width={300}
          height={300}
        />
      </div>
      <div className="pattern-overlay pattern-right absolute bottom-0 right-0 -z-10">
        <Image
          src="/leaf-img-pattern-right.png"
          alt="image"
          width={300}
          height={300}
        />
      </div>

      <div className="container mx-auto footer-container py-40 px-5 lg:px-0">
        <footer className="grid grid-cols-2 lg:grid-cols-6 gap-6 pb-20">
          <div className="">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Twitter
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Facebook
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Instagram
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Linkedin
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Contact
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Blog
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Spirituality
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Life
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Relationships
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Travel
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Health
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Yoga
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Gardening
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Love
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Books
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="uppercase hover:text-gray-500">
                  Meditation
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-subgrid col-span-2 ">
            <div className="col-span-2 lg:text-right">
              <p className="m-0">
                {" "}
                <b>info@blinkertechnology.com</b>{" "}
              </p>
              <p className="m-0">Headquarters</p>
              <p>Central, HK</p>
              <p className="m-0">011-554-8798-6556</p>

              <div className=" mt-3 flex justify-end">
                <Link
                  href="#"
                  className="social-link text-xl hover:text-gray-500 me-4"
                  target="_blank"
                >
                  <CiFacebook />
                </Link>
                <Link
                  href="#"
                  className="social-link text-xl hover:text-gray-500 me-4"
                  target="_blank"
                >
                  <CiInstagram />
                </Link>
                <Link
                  href="#"
                  className="social-link text-xl hover:text-gray-500 me-4"
                  target="_blank"
                >
                  <CiTwitter />
                </Link>
                <Link
                  href="#"
                  className="social-link text-xl hover:text-gray-500 me-4"
                  target="_blank"
                >
                  <CiLinkedin />
                </Link>
                <Link
                  href="#"
                  className="social-link text-xl hover:text-gray-500 me-4"
                  target="_blank"
                >
                  <CiYoutube />
                </Link>
              </div>
            </div>
          </div>
        </footer>

        <footer className="border-t ">
          <div className="flex justify-center pt-10">
            <p className="mb-0">
              © 2024 Blinker Technologies. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
