'use client'
import styles from '@css/common.module.css'
import Link from 'next/link'
const Error = () => {
  // function launch() {
  // if (!found) {
  //   throw ("(╯°□°)╯︵ ┻━┻");
  //   }
  // }
  return (
    <div className={styles.code_block_wrapper}>
      <div className={styles.error_code_block}>
        <div className={styles.error_code_heading}>
          error.js
        </div>
        <div className={styles.error_code_data}>
          <span className={styles.comments}>// 404 page not found</span><br />
          <span className={styles.function}>function launch</span>
          <span className={styles.punctuation}>()&nbsp;</span>
          <span className={styles.punctuation}>&#123;</span>
          <br />
          &emsp;&emsp;
          <span>
            <span className={styles.keywords}>if</span>{' '}
            <span className={styles.punctuation}>(</span>
            {/* <span className={styles.keywords}>!</span> */}
            <span className={styles.condition}>inDevelopemnt</span>
            <span className={styles.punctuation}>)</span>{' '}
            <span className={styles.punctuation}>&#123;</span>
          </span><br />
          <span>&emsp;&emsp;&emsp;&emsp;</span>
          <span className={styles.keywords}>throw</span>
          <span className={styles.string}> "fuck off bitch!!!"</span>
          <br />
          &emsp;&emsp;<span className={styles.punctuation}>&#125;</span><br />
          <span className={styles.punctuation}>&#125;</span><br />
          <span className={styles.comments}>// <Link href={`/`}>Go Home!</Link></span><br />
        </div>
      </div>
    </div>
  )
}

export default Error