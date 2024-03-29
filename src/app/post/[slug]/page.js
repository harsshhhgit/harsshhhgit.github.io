import Post from '@/components/Post'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export const generateStaticParams = () =>
    allPosts.map((post) => ({ slug: post.slug.substring(6) }))

const Page = ({ params }) => {
    // console.log(`Param: ${params.slug}`) //post.slug === params.slug
    const post = allPosts.find((post) => post.slug.substring(6) === params.slug)
    if (!post) notFound()

    return (
        <Post
            {...post}
        />
    )
}

export default Page