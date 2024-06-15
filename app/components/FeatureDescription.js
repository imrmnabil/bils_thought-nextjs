import React from 'react'

export default function FeatureDescription({text}) {
    text = text.trim();
    if(text.length >= 200) {
        text = text.substring(0,200) +".."
    }
  return (
    <div className="pt-4">
        <span className="text-xl leading-relaxed">{text}</span>
    </div>
  )
}
