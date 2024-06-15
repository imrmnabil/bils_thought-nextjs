import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SubFeaturePost({ post }) {
    const {id, title, description, author, authorAvatar, image, badge, date, duration } = post
    return (
        <Link href={`/articles/${id}`}>
        <div className="flex lg:w-[20rem] xl:w-[24rem] gap-6 p-6 transition hover:bg-[#FFF5EF] rounded-xl">
            <div className='items-end justify-center hidden xl:flex lg:justify-start'>
                <div className="relative w-[6rem] h-[6rem] rounded-xl overflow-hidden">
                    <Image style={{ objectFit: "cover" }} fill src={image} alt="alt" />
                </div>
            </div>
            <div className="flex flex-col justify-end ">
                <h1 className='text-lg font-semibold xl:text-xl'>{title}</h1>
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-gray-500 size-4">
                        <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                        <path fillRule="evenodd" d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z" clipRule="evenodd" />
                    </svg>
                    <span className='text-sm text-gray-500'>{date.month} {date.day}, {date.year}</span>

                </div>
            </div>
        </div>
        </Link>
    )
}
