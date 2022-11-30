import styles from '../../styles/bar.module.css'


const LightBar = () => {
    return (
        <div role="presentation">
            <div className={styles.color_line}></div>
            <div className={styles.color_gradient}></div>
            <div className={styles.texture}></div>
        </div>
    )
}

export default LightBar