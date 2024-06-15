import React from 'react'
import Markdown from 'react-markdown'

export default function ConvertedArticle({src}) {
  const markdown = src
  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  )
}

