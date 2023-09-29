import { Inter, Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})
export const open_sans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-opensans',
})
export const sohne = localFont({
    src: './sohne.woff2',
    weight: '400',
    display: 'swap',
    variable: '--font-sohne',
})
export const fira = localFont({
    src: './fira.woff2',
    weight: '400',
    display: 'swap',
    variable: '--font-mono',
})