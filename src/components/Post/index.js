import React from 'react'
import Header from './Header'
import MDX from '../MDX'

const Post = (post) => {
  return (
    <article className="flex w-full flex-col gap-4">
      <Header {...post}/>
      <div className="prose prose-quoteless prose-invert max-w-full" style={{ width: '100% !important' }}>
        <MDX code={post.body.code}/>
      </div>
    </article>
  )
}

export default Post