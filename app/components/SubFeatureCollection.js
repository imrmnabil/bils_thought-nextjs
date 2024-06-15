import React from 'react'
import SubFeaturePost from './SubFeaturePost'
import Pic2 from  "@/public/pexel2.jpg"

export default function SubFeatureCollection({posts}) {
    return (
        <div className="hidden gap-10 mt-24 lg:grid lg:grid-cols-3">
            {posts.map((post)=>{
                return <SubFeaturePost key={post.id} post={post}/>
            })}
        </div>
    )
}
