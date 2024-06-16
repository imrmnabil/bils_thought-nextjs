import React from 'react'
import Image from 'next/image'
import PostAuthor from './PostAuthor'
import Link from 'next/link'

export default function PostCard({post}) {

    const { id, title, description, author, authorAvatar, image, badge, date, duration } = post

    return (
      <Link href={`/articles/${id}`}>
      <div className="h-full max-w-sm overflow-hidden transition bg-white shadow-2xl lg:min-w-60 xl:min-w-80 shadow-gray-200 rounded-xl md:max-w-md lg:max-w-lg hover:-translate-x-1 hover:-translate-y-1">
      <div className="relative">
        <div className='w-full aspect-[16/8] lg:aspect-[16/10]'>
          <Image className="object-cover" src={image} fill alt={id} />
        </div>
        <div className="absolute top-3 left-3">
          <span className="p-2 text-white border-0 rounded-lg badge md:p-4" style={{ backgroundColor: badge.color }}>
            {badge.name}
          </span>
        </div>
      </div>
      <div className="px-4 py-2 md:px-6 md:py-4">
        <p className="mb-1 text-xs text-gray-600 md:mb-2">
          {date.month} {date.day}, {date.year}
        </p>
        <p className="text-sm font-semibold text-gray-700 md:text-lg">
          {title}
        </p>
        <PostAuthor name={author} image={authorAvatar} />
      </div>
    </div>
    </Link>
    )
}
