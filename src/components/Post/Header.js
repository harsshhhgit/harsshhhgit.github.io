import React from 'react'
import {formatDate} from '@/utils/formatDate'

const Header = (post) => {
  return (
    <header>
      <p className='text-md'>{post.title} &nbsp;-&nbsp; {formatDate(post.publishedAt)}</p>
      <p className="italic">{post.description}</p>
    </header>
  )
}

export default Header