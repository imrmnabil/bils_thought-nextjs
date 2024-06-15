import Image from "next/image";
import FeaturePost from "./components/FeaturePost";
import SubFeaturePost from "./components/SubFeaturePost";
import SubFeatureCollection from "./components/SubFeatureCollection";
import PostCard from "./components/PostCard";
import Pic1 from "@/public/pexel1.jpg"
import Pic2 from "@/public/pexel1.jpg"
import avatar1 from "@/public/mario.png"
import GeneralPostCollection from "./components/GeneralPostCollection";
import EditorPicksCarousel from "./components/EditorPicksCaroosel";
import EditorPickedPost from "./components/EditorPickedPost";
import { useSWR } from 'swr';
import fetchAllBlogs from "./lib/fetchAllBlogs";

export default async function Home() {

  const posts = await fetchAllBlogs()
  
  // const posts = [
  //   {
  //     id: "1",
  //     title: "Occaecat mollit eu ex et labore id nisi duis.",
  //     description: "Aliqua magna do do esse officia. Sint do qui ex proident in sunt laborum voluptate reprehenderit amet sunt. Do proident labore excepteur irure proident dolor. Mollit Lorem cillum nulla occaecat ex culpa laborum ea magna.",
  //     author: "Mario Dongky",
  //     authorAvatar: avatar1,
  //     image: Pic1,
  //     badge: {
  //       name: "Technology",
  //       color: "#16C79A"
  //     },
  //     date: {
  //       day: "6",
  //       month: "July",
  //       year: "2024"
  //     },
  //     duration: "6 Minutes"
  //   },
  //   {
  //     id: "2",
  //     title: "Fugiat reprehenderit amet nisi cupidatat pariatur enim anim.",
  //     description: "Dolore sint ex occaecat culpa ipsum eiusmod sint. Tempor dolore et pariatur consectetur cillum laborum labore proident. Commodo consequat elit pariatur aliquip reprehenderit laborum in dolore.",
  //     author: "Mario Dongky",
  //     authorAvatar: avatar1,
  //     image: Pic1,
  //     badge: {
  //       name: "Science",
  //       color: "#FF5733"
  //     },
  //     date: {
  //       day: "7",
  //       month: "July",
  //       year: "2024"
  //     },
  //     duration: "8 Minutes"
  //   },
  //   {
  //     id: "3",
  //     title: "Consectetur ullamco veniam fugiat laboris sunt laboris sunt.",
  //     description: "Sint proident laborum nostrud voluptate dolore laboris magna voluptate officia. Reprehenderit officia consequat cupidatat ad deserunt sunt ipsum ut magna id. Ex tempor excepteur esse minim esse.",
  //     author: "Mario Dongky",
  //     authorAvatar: avatar1,
  //     image: Pic1,
  //     badge: {
  //       name: "Health",
  //       color: "#3498DB"
  //     },
  //     date: {
  //       day: "8",
  //       month: "July",
  //       year: "2024"
  //     },
  //     duration: "5 Minutes"
  //   },
  //   {
  //     id: "4",
  //     title: "Adipisicing nulla dolore ut amet veniam.",
  //     description: "Laboris esse tempor reprehenderit dolor ipsum nisi labore velit et nulla non. In cillum ex proident do. Dolore occaecat magna laborum ea laboris magna.",
  //     author: "Mario Dongky",
  //     authorAvatar: avatar1,
  //     image: Pic1,
  //     badge: {
  //       name: "Business",
  //       color: "#E67E22"
  //     },
  //     date: {
  //       day: "9",
  //       month: "July",
  //       year: "2024"
  //     },
  //     duration: "10 Minutes"
  //   },
  //   {
  //     id: "5",
  //     title: "Dolor labore minim commodo magna sit cillum velit.",
  //     description: "Enim ex pariatur consequat aliquip. Magna velit officia veniam voluptate duis officia magna exercitation esse velit. Officia sint dolore magna fugiat id ad exercitation irure.",
  //     author: "Mario Dongky",
  //     authorAvatar: avatar1,
  //     image: Pic1,
  //     badge: {
  //       name: "Lifestyle",
  //       color: "#9B59B6"
  //     },
  //     date: {
  //       day: "10",
  //       month: "July",
  //       year: "2024"
  //     },
  //     duration: "7 Minutes"
  //   },
  //   {
  //     id: "1",
  //     title: "Occaecat mollit eu ex et labore id nisi duis.",
  //     description: "Aliqua magna do do esse officia. Sint do qui ex proident in sunt laborum voluptate reprehenderit amet sunt. Do proident labore excepteur irure proident dolor. Mollit Lorem cillum nulla occaecat ex culpa laborum ea magna.",
  //     author: "Mario Dongky",
  //     authorAvatar: avatar1,
  //     image: Pic1,
  //     badge: {
  //       name: "Technology",
  //       color: "#16C79A"
  //     },
  //     date: {
  //       day: "6",
  //       month: "July",
  //       year: "2024"
  //     },
  //     duration: "6 Minutes"
  //   }
  // ];
  const featurePost = posts[0];
  const subfeaturePosts = posts.slice(0,3);

  return (
    <main>
      {/* <div className="hidden lg:block z-0 w-1/3 aspect-square bg-[#FFF5EF] static top-0 right-0"></div> */}
      <FeaturePost post={featurePost}/>
      <SubFeatureCollection posts={subfeaturePosts}/>
      <GeneralPostCollection collection_name = "Recent Articles" posts={posts} grid={3}/>
      <EditorPicksCarousel posts={subfeaturePosts}/>
      <GeneralPostCollection posts={posts.slice(0,4)} collection_name={"Most Popular"} grid={2}/>
    </main>
  );
}
