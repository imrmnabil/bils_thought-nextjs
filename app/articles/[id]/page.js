import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import LoadMarkdown from './LoadMarkdown';
import fetchSingleBlog from '@/app/lib/fetchSingleBlog';
import FeatureDescription from '@/app/components/FeatureDescription';
import FeatureHeading from '@/app/components/FeatureHeading';
import Image from 'next/image';
import BlogHeading from '@/app/components/BlogHeading';
import DateComp from '@/app/components/Date';
import PostAuthor from '@/app/components/PostAuthor';

export default async function Blog({params}) {
  const {id} = params
  const post = await fetchSingleBlog(parseInt(id))
  console.log(post)
  const filePath = path.join(process.cwd(), 'public', `${post.mdpath}`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const conv = matter(fileContents);
  const {month, day, year} = post.date;

  return (
    <div>
      <BlogHeading text={post.title} />
      <div className="flex items-center">
      <DateComp day={day} month={month} year={year}/>
      <span className='pr-2'>by</span>
      <PostAuthor name={post.author} image={post.authorAvatar}/>
      </div>
      <div className="relative w-full mb-10 overflow-hidden aspect-video rounded-xl">
        <Image alt="ddddd" src={post.image} fill className='object-cover '/>
      </div>
      <LoadMarkdown src={conv.content}/>
    </div>
  );
}

