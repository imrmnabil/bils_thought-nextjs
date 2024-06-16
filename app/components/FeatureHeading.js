import React from 'react'

export default function FeatureHeading({text}) {
  return (
    <div className='py-2 md:py-4 lg:py-8'>
        <h1 className='text-2xl font-semibold leading-snug text-slate-700 md:text-4xl xl:text-6xl'>{text}</h1>
    </div>
  )
}
