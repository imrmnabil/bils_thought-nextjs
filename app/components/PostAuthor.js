import React from 'react'
import Image from 'next/image'

export default function PostAuthor({ name, image }) {
    return (
        <div className='flex items-center gap-2 py-2'>
            <div className="relative w-[1.2rem] h-[1.2rem] rounded-full overflow-hidden">
                <Image style={{ objectFit: "cover" }} fill src={image} alt="alt" />
            </div>
            <div className="">
                <h1 className="text-gray-400">{name}</h1>
            </div>
        </div>
    )
}
