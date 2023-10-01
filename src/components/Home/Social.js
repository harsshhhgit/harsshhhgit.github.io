import styles from '@css/common.module.css'
import Link from 'next/link'

const Social = () => {

    const socialLinks = [
        {
            aria: 'X',
            href: 'https://twitter.com/harsshhhtwt',
        },
        {
            aria: 'GitHub',
            href: 'https://github.com/harsshhhgit',
        },
        {
            aria: 'LinkedIn',
            href: 'https://linkedin.com/in/harsshhh',
        },
        {
            aria: 'YouTube',
            href: 'https://www.youtube.com/@harsshhhyt',
        },
        {
            aria: 'Instagram',
            href: 'https://www.instagram.com/harsshhhig',
        },
        {
            aria: 'Discord',
            href: 'https://discordapp.com/users/804398864063791124',
        }
    ]

    return (
        <ul className={styles.nav_list} style={{flexWrap: 'wrap'}}>
            {socialLinks.map((link, index) => (
                <>
                    <li key={index} aria-label={link.aria}><Link href={link.href}>{link.aria}</Link></li>
                    {index < socialLinks.length - 1 && <li>/</li>}
                </>
            ))}
        </ul>
    )
}

export default Social