import Link from 'next/link'
import styles from '@css/post.module.css'

const postList = [{
    title: "Someone Someone",
    description: "Something something something something something something",
    publishedAt: "2023-05-24",
    isPublish: true
},
{
    title: "No One No one",
    description: "Nothing nothing nothing nothing nothing nothing",
    publishedAt: "2022-02-15",
    isPublish: true
},
{
    title: "Untitled",
    description: "Lorem ipsum dolor sit amet consectetur et ultrices blandit neque ege",
    publishedAt: "2024-04-14",
    isPublish: true
}]

const PostList = () => {
    return (
        <div className={styles.all_post}>
            {postList.map((item, index) => (
                <Link className={styles.single_item} key={index} href={`/`}>
                    <div className={styles.post_head_data}>
                        <h2>{item.title}</h2>
                        <div className={styles.date}>
                            <span>{item.publishedAt}</span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={styles.svg}><path d="M5.25 12.75L12.75 5.25" stroke="#999999" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.25 5.25H12.75V12.75" stroke="#999999" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                    </div>
                    <span>{item.description}</span>
                </Link>
            ))}
        </div>
    )
}

export default PostList