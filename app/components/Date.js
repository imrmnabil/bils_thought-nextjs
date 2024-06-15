import React from 'react'

export default function DateComp({month, day, year}) {
  return (
    <span className='p-4'>{month} {day}, {year}</span>
  )
}
