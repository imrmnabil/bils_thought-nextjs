"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowRightRounded } from "@mui/icons-material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import EditorPickedPost from "./EditorPickedPost";

export default function EditorPicksCarousel({ posts }) {
  const swiperRef = useRef();
  const numPosts = posts.length;
  return (
    <div className="relative flex flex-col">
      <div className="py-4">
        <h1 className="py-6 text-4xl font-bold">Editor&#39;s Picked</h1>
      </div>
      <div>
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          spaceBetween={50}
          speed={1500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {posts.map((post, index) => {
            return (
              <SwiperSlide key={post.id}>
                <EditorPickedPost post={post} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="z-50 flex items-center justify-center gap-3 lg:absolute top-20 lg:top-10 lg:right-10">
        <button
          onClick={() => {
            if (swiperRef.current.activeIndex === 0) {
              swiperRef.current.slideToLoop(numPosts - 1);
            } else {
              swiperRef.current.slidePrev();
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            if (swiperRef.current.activeIndex === numPosts - 1) {
              swiperRef.current.slideToLoop(0);
            } else {
              swiperRef.current.slideNext();
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
