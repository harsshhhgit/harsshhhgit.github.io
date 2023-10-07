import styles from '@css/post.module.css'

const Header = (post) => {
    return (
        <>
            <header className={styles.header}>
                <p className={styles.title_date}>{post.title} - {post.publishedAt}</p>
                <p className={styles.description}>{post.description}</p>
            </header>
        </>
    )
}

export default Header