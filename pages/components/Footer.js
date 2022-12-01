import { format } from 'date-fns'
import { FC, useEffect, useState } from 'react'
import styles from '../../styles/footer.module.css'


const Footer = () => {
    const [time, setTime] = useState(new Date())
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        setInterval(() => setTime(new Date()), 1000)
    }, [])

    if (!mounted) return null

    return (
        <footer className={styles.footer}>
            <hr className={styles.hr} />
            <p className={styles.date}>
                {time.toLocaleString('en-GB', { hour12: true }, {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    day: 'numeric',
                    month: 'short',
                    timeZone: 'Asia/Kolkata',
                })}
            </p>
        </footer>
    )
}

export default Footer