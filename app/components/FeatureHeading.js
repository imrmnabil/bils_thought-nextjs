import React from 'react'

export default function FeatureHeading({text}) {
  return (
    <div>
        <h1 className='text-2xl font-bold leading-snug text-black md:text-4xl xl:text-6xl'>{text}</h1>
    </div>
  )
}
