import '@css/globals.css'
import clsx from 'clsx'
import { open_sans, inter, sohne, fira } from './fonts/fonts'

export const metadata = {
  title: { default: 'Harshbardhan Singh', template: '%s — harsshhh' },
  creator: 'Harshbardhan Singh',
  publisher: 'Harshbardhan Singh',
  description: 'Software Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(inter.variable, sohne.variable, open_sans.variable, fira.variable)}>
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
      
    </html>
  )
}
