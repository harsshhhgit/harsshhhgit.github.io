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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(openSans.variable, inter.variable, sohne.variable, fira.variable)}>
      {/* <body className={openSans.className}>{children}</body> */}
      <body >
        <Circle1/>
        <Circle2/>
        <Header/>
        {children}
        </body>

    </html>
  )
}
