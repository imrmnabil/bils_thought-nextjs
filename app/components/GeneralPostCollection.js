import React from "react";
import PostCard from "./PostCard";

export default function GeneralPostCollection({ collection_name, posts, grid=3 }) {
  console.log(grid)
  return (
    <div className="relative pt-10 overflow-visible">
      <div className="absolute w-2/3 z-0 bg-[#FFF5EF] -left-[20%] aspect-square"></div>
      <div className="relative z-20">
        <h1 className="py-4 text-4xl font-bold">{collection_name}</h1>
        <div className="flex items-center justify-around w-full mt-4">
          <div className={`grid justify-center grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-${grid} gap-y-10`}>
            {posts.map((post) => {
              return <PostCard key={post.id} post={post} />;
            })}
          </div>
        </div>
        <div className="flex items-center justify-around w-full p-4">
          <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide  rounded-lg h-[60px] hover:bg-gray-50">
            See All 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
