import React from 'react'
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
        <ul className="flex flex-wrap flex-row gap-2">
            {socialLinks.map((link, index) => (
                <>
                    <li className='hover:text-neutral-100' key={index} aria-label={link.aria}><Link href={link.href}>{link.aria}</Link></li>
                    {index < socialLinks.length - 1 && <li>/</li>}
                </>
            ))}
        </ul>
    )
}

export default Social