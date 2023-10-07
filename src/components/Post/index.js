import styles from '@css/post.module.css'
import Header from './Header'
import MDX from '../MDX'

const Post = (post) => {
  return (
    <article className={styles.section}>
      <Header {...post} />
      <div className={styles.blog}>
        <MDX code={post.body.code} />
      </div>
    </article>
  )
}

export default Post