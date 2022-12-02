import styles from '../../styles/skills.module.css'
import Image from 'next/image'
import css from '/public/custom-icons/css.svg'
import html from '/public/custom-icons/html.svg'
import github from '/public/custom-icons/github.svg'
import js from '/public/custom-icons/js.svg'
import vscode from '/public/custom-icons/VSCode.svg'
import git from '/public/custom-icons/git.svg'

const Skills = () => {
    return (
        <div className={styles.skills_container}>
            <div className={styles.skills_imgGroup}>
                <Image src={css} width={20} height={20} alt="css" className={styles.skills_img}></Image>
                <Image src={html} width={20} height={20} alt="html" className={styles.skills_img}></Image>
                <Image src={github} width={20} height={20} alt="github" className={styles.skills_img}></Image>
                <Image src={js} width={20} height={20} alt="js" className={styles.skills_img}></Image>
                <Image src={vscode} width={20} height={20} alt="vscode" className={styles.skills_img}></Image>
                <Image src={git} width={20} height={20} alt="git" className={styles.skills_img}></Image>
            </div>
            {/* <div className={styles.skills_grid}>

        </div> */}
        </div>
    )
}

export default Skills