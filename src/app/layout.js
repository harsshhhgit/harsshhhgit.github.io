import '@css/globals.css'
import clsx from 'clsx'
import { Circle2, Circle1 } from '@/components/Circles'
import { openSans, inter, sohne, fira } from './fonts/fonts'
import Header from '@/components/Header'
import Head from 'next/head'

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
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
