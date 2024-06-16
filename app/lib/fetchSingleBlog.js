import prisma from "./prisma";
import formatDateTime from "./formatDateTime";
import { duration } from "@mui/material";
import { Content } from "next/font/google";

export default async function fetchSingleBlog(id) {
  const blog = await prisma.post.findFirst({
    where: {
      id: id,
    },
    include: {
      categories: {
        take: 1,
      },
    },
  });
  let author = await prisma.profile.findFirst({
    where: {
      userid: blog.userid,
    },
  });
  let catagory = blog.categories[0];
  let { date, month, year, hour, minute } = formatDateTime(blog.createdAt);
  let post = {
    id: blog.id,
    title: blog.title,
    description:blog.description,
    author: author.name,
    authorAvatar: author.avatar,
    image: blog.cover,
    badge: {
      name: catagory.name,
      color: catagory.color,
    },
    date: {
      day: date,
      month: month,
      year: year,
    },
    time: {
        hour: hour,
        minute: minute
    },
    duration: blog.duration,
    mdpath: blog.markdown
  };
  return post;
}
