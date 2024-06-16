import React from 'react'

export default function BlogHeading({text}) {
  return (
    <div className='pt-2 md:pt-4 lg:pt-8'>
        <h1 className='text-2xl font-semibold leading-snug text-black md:text-4xl xl:text-6xl'>{text}</h1>
    </div>
  )
}
