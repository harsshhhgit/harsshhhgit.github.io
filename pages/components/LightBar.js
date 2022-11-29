import styles from '../../styles/bar.module.css'


const LightBar = () => {
    return (
        <div role="presentation" class="pointer-events-none">
            {/* <div class="w-full h-1" className={styles.color_line} style="background: linear-gradient(54.14deg, rgb(230, 69, 131) 0.21%, rgb(255, 110, 35) 18.92%, rgb(255, 252, 0) 37.63%, rgb(18, 174, 140) 61.54%, rgb(25, 172, 239) 81.81%, rgb(179, 66, 255) 100%);"></div>
        <div class="absolute h-full w-full top-0 inset-x-0 bg-no-repeat" style="background-image: url(&quot;/_next/static/media/gradient-top-bg.e15c1c5e.png&quot;); background-size: 100% 350px; background-position: center -200px;"></div>
        <div class="fixed h-full min-h-screen w-full inset-0 bg-gray-100 dark:bg-stone-900 -z-10 bg-texture dark:bg-texture-dark"></div> */}
            <div className={styles.color_line}></div>
            <div className={styles.color_gradient}></div>
            <div className={styles.texture}></div>
        </div>
    )
}

export default LightBar