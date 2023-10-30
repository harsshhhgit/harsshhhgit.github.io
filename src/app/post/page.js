import React from 'react'
import { allPosts, Post } from 'contentlayer/generated'
import Link from 'next/link'
import { dateTrim, formatDate } from '@/utils/formatDate'

const page = () => {
  return (
    <>
      <main className="flex flex-col gap-20">
        <h1 className="text-2xl text-neutral-100">Posts</h1>
        <article className="flex flex-col gap-4">
        {allPosts.map((post, index) => (
          <Link className="group flex flex-col gap-2 border-t border-neutral-700 py-4 transition-all hover:text-neutral-100" key={index} href={post.slug}>
            <div className="flex w-full items-center justify-between">
              <h2 className="text-base">{post.title}</h2>

              <div className="flex flex-row items-center gap-4">
                <p>{dateTrim(formatDate(post.publishedAt))}</p>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="transition-all duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5.25 12.75L12.75 5.25"
                    stroke="#999999"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.25 5.25H12.75V12.75"
                    stroke="#999999"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <p>{post.description}</p>
          </Link>
        ))}
        </article>
      </main>
    </>
  )
}

export default page