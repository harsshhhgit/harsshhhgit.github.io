import styles from '@css/post.module.css'
import PostList from './PostList'

const Post = () => {
  return (
    <div className={styles.post_wrapper}>
    <h1 className={styles.post_head}>Posts</h1>
    <PostList/>
    </div>
  )
}

export default Post