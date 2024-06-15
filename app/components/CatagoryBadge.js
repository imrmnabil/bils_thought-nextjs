import React from 'react'

export default function CatagoryBadge({bg_color,text}) {
  return (
    <span className="px-6 py-5 text-lg font-light text-white rounded-xl badge" style={{ backgroundColor: `${bg_color}`}}>{text}</span>
  )
}
