import '@css/globals.css'
import clsx from 'clsx'
import { Circle2, Circle1 } from '@/components/Circles'
import { openSans, inter, sohne, fira } from './fonts/fonts'
import Header from '@/components/Header'

export const metadata = {
  title: { default: 'Harshbardhan Singh', template: '%s — harsshhh' },
  creator: 'Harshbardhan Singh',
  publisher: 'Harshbardhan Singh',
  description: 'Software Engineer | Student',
  keywords: ['Harshbardhan Singh', 'harsshhhgit', 'harsshhh'],
  authors: [{ name: 'Harshbardhan Singh', url: 'https://harsshhh.xyz' }],
  colorScheme: 'dark',
  icons: {
    icon: '/favicons/favicon.png',
    shortcut: '/favicons/shortcut.png',
    apple: [
      { url: '/favicons/apple-touch-icon.png' }
    ]
  },
  category: 'technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(openSans.variable, inter.variable, sohne.variable, fira.variable)}>
      {/* <body className={openSans.className}>{children}</body> */}
      <body >
        <Circle1 />
        <Circle2 />
        <Header />
        {children}
      </body>

    </html>
  )
}
