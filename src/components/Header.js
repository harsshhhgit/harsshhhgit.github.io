'use client'

import styles from '@css/common.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const currentRoute = usePathname()
  return (
    <header className={styles.header}>
        <Link href={`mailto:harsshhh.pro@gmail.com`}>harsshhh.pro@gmail.com</Link>
        <nav>
          <ul className={styles.nav_list}>
            <li><Link href={`/`} className={currentRoute === '/' ? styles.activeStyle : styles.nonActiveStyle}>Home</Link></li>
            <li>/</li>
            <li><Link href={`/post`} className={currentRoute === '/post' ? styles.activeStyle: styles.nonActiveStyle}>Posts</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header