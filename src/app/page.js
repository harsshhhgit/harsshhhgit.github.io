import Image from 'next/image'
import Home from '@components/Home'
import styles from '@css/page.module.css'
import { Root } from '@/components/Layout'

export default function Page() {
  return (
    <Root>
      <Home/>
    </Root>
  )
}
