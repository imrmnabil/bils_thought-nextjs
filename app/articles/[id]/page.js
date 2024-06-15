import React from 'react'
import ConvertedArticle from './article'
import fetchSingleBlog from '@/app/lib/fetchSingleBlog'

export default async function Article({params }) {
  const {id} = params
  const idInt = parseInt(id)
  const post  = await fetchSingleBlog(idInt);
  console.log(post)

  return (
    <div>
      <ConvertedArticle src = {post.content}/>
    </div>
  )
}
