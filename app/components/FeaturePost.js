import React from 'react'
import Image from 'next/image'
import CatagoryBadge from './CatagoryBadge'
import DateComp from './Date'
import FeatureHeading from './FeatureHeading'
import FeatureDescription from './FeatureDescription'
import PostAuthor from './PostAuthor'
import Link from 'next/link'
export default function FeaturePost({post}) {

    const {id, title, description, author, authorAvatar, image, badge, date, duration } = post
    console.log(`id: ${id}`)
    return (
        <Link href={`/articles/${id}`}>
        <div className='p-2 mt-10 transition hover:scale-[101%]'>
            <div className="flex flex-col-reverse gap-4 lg:flex-row">
                <div className="flex flex-col justify-end">
                    <div className="flex items-center">
                        <CatagoryBadge bg_color={badge.color.trim()} text="Tech" />
                        <DateComp month={date.month} day={date.day} year={date.year} />
                    </div>
                    <div className="">
                        <FeatureHeading text={title} />
                        <FeatureDescription text= {description} />
                        <PostAuthor name={author} image={authorAvatar}/>
                    </div>
                </div>
                <div className='flex items-center justify-center lg:justify-start'>
                    <div className="relative w-[36rem] overflow-hidden min-w-sm aspect-square rounded-xl ">
                        <Image style={{ objectFit: "cover" }} fill src={image} alt="alt" />
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}
