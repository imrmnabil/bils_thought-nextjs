import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import LoadMarkdown from './LoadMarkdown';

export default function Blog({params}) {
  const {id} = params
  const filePath = path.join(process.cwd(), 'public', 'md', `post${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const conv = matter(fileContents);

  return (
    <div>
      <LoadMarkdown src={conv.content}/>
    </div>
  );
}

