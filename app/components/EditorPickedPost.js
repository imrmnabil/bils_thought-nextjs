"use client";
import React, { useState, useRef } from "react";
import CatagoryBadge from "./CatagoryBadge";
import DateComp from "./Date";
import FeatureHeading from "./FeatureHeading";
import FeatureDescription from "./FeatureDescription";
import PostAuthor from "./PostAuthor";
import Image from "next/image";
import Link from "next/link";

export default function EditorPickedPost({ post }) {
  const {
    id,
    title,
    description,
    author,
    authorAvatar,
    image,
    badge,
    date,
    duration,
  } = post;
  return (
    <Link href={`/articles/${id}`}>
    <div className="py-10 pl-10 pr-10 mt-10 lg:py-4 rounded-xl lg:bg-transparent bg-[#ffd9c1]">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex items-center justify-center lg:justify-start bg-[#ffd9c1] rounded-xl">
          <div className="relative lg:-top-10 lg:-left-10 w-[36rem] overflow-hidden min-w-sm aspect-square rounded-xl">
            <Image style={{ objectFit: "cover" }} fill src={image} alt="alt" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <CatagoryBadge bg_color={badge.color.trim()} text="Tech" />
            <DateComp month={date.month} day={date.day} year={date.year} />
          </div>
          <div className="">
            <FeatureHeading text={title} />
            <FeatureDescription text={description} />
            <PostAuthor name={author} image={authorAvatar} />
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
