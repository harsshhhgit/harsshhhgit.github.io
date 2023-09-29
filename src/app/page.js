import Image from 'next/image'
import { Circle2, Circle1 } from '@/components/Circles'
import styles from '@css/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Circle1/>
      <Circle2/>
      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
    </main>
  )
}
