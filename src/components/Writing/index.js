import styles from '@css/writing.module.css'
import { allPosts, Post } from 'contentlayer/generated'
import Link from 'next/link'

const PostList = () => {
    return (
        <div className={styles.all_post}>
            {allPosts.map((post, index) => (
                <Link className={styles.single_item} key={index} href={post.slug}>
                    <div className={styles.si_head_data}>
                        <span className={styles.si_title}>{post.title}</span>
                        <div className={styles.date}>
                            <span>{post.publishedAt}</span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={styles.svg}><path d="M5.25 12.75L12.75 5.25" stroke="#999999" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.25 5.25H12.75V12.75" stroke="#999999" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                    </div>
                    <span>{post.description}</span>
                </Link>
            ))}
        </div>
    )
}

const Writing = () => {
    return (
        <div className={styles.post_wrapper}>
            <h1 className={styles.post_head}>Posts</h1>
            <PostList />
        </div>
    )
}

export default Writing