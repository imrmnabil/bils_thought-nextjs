"use client";
import React from "react";
import { Urbanist } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function MainNavbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < 100) {
        setVisible(true);
      } else if (window.scrollY <= 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={
        visible
          ? "transform transition-transform translate-y-0"
          : "transform transition-transform -translate-y-full"
      }
    >
      <div className="flex justify-center bg-white ">
        <div className="navbar !container">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>HOME</a>
                </li>
                <li>
                  <a>BLOGS</a>
                  {/* <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <a>ABOUT ME</a>
                </li>
              </ul>
            </div>
            <Link
              href="/"
              className="text-2xl font-bold sm:text-4xl btn btn-ghost"
            >
              <h1 className={urbanist.className}>Bil&#39;s Thought</h1>
            </Link>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 text-xl menu menu-horizontal">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                {/* <details>
                  <summary>BLOGS</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details> */}
                <Link href="/">BLOGS</Link>
              </li>
              <li>
                <a>ABOUT ME</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="px-1 text-white bg-black btn btn-sm sm:btn-md">
              Follow
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <hr className="container" />
      </div>
    </div>
  );
}
