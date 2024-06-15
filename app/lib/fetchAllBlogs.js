import prisma from "./prisma";
import formatDateTime from "./formatDateTime";

export default async function fetchAllBlogs() {
  const blogs = await prisma.post.findMany({
    include: {
      categories: {
        take: 1,
      },
    },
  });
  console.log(blogs[0])
  const readyBlogs = [];

  for (let i = 0; i < blogs.length; i++) {
    let author = await prisma.profile.findFirst({
      where: {
        userid: blogs[i].userid,
      },
    });
    let authorUser = await prisma.user.findFirst({
      where: {
        id: blogs[i].userid,
      },
    });
    let catagory = blogs[i].categories[0];
    let { date, month, year, hour, minute } = formatDateTime(
      blogs[i].createdAt
    );
    let post = {
      id: blogs[i].id,
      title: blogs[i].title,
      description: blogs[i].description,
      author: authorUser.name,
      authorAvatar: author.avatar,
      image: blogs[i].cover,
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
        minute: minute,
      },
      duration: blogs[i].duration,
    };
    readyBlogs.push(post);
  }
  return readyBlogs;
}
