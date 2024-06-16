import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import LoadMarkdown from './LoadMarkdown';
import fetchSingleBlog from '@/app/lib/fetchSingleBlog';
import FeatureDescription from '@/app/components/FeatureDescription';
import FeatureHeading from '@/app/components/FeatureHeading';
import Image from 'next/image';

export default async function Blog({params}) {
  const {id} = params
  const post = await fetchSingleBlog(parseInt(id))
  console.log(post)
  const filePath = path.join(process.cwd(), 'public', `${post.mdpath}`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const conv = matter(fileContents);

  return (
    <div>
      <FeatureHeading text={post.title} />
      <div className="relative w-full aspect-video">
        <Image alt="ddddd" src={post.image} fill/>
      </div>
      <LoadMarkdown src={conv.content}/>
    </div>
  );
}

