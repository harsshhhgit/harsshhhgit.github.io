import styles from '@css/home.module.css'
import Social from './Social'

const Home = () => {
  return (
    <article className={styles.home_wrapper}>
      <div className={styles.details_wrapper}>

        <h1 className={styles.h1}>Hi, I&#8217;m Harsh 👋</h1>

        {/* Small About */}
        <h2>Namaste, I&apos;m a <strong>indian sofware engineer</strong> working in a service-based MNC and simultaneously pursuing bachelor&apos;s degree from <strong>BITS Pilani</strong>. Besides that, I am learning <strong>DevOps</strong> and I&apos;m interested in <strong>Linux</strong>, <strong>CyberSecurity</strong>, alongside
          other random computer things.</h2>

        {/* Social Media Links */}
        <Social/>
      </div>
    </article>
  )
}

export default Home