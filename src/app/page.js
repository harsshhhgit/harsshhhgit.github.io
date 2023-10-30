import Social from '@/components/Social'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex h-full flex-col gap-20">
      <article className="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-12">
        <Image
          src='/{harsh}.png'
          className="w-1/4 self-center rounded-full"
          alt="{harsh}"
          width="200"
          height="200"
        />
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl text-neutral-100">
            Hi, I&#8217;m Harsh 👋
          </h1>
          <h2 className="w-auto max-w-[60ch] leading-6">
            Namaste, I&apos;m a <strong className='font-normal text-red-500'>Indian sofware engineer</strong> working in a service-based MNC and simultaneously pursuing bachelor&apos;s degree from <strong className='font-normal text-red-500'>BITS Pilani</strong>. Besides that, I am learning <strong className='font-normal text-red-500'>DevOps</strong> and I&apos;m interested in <strong className='font-normal text-red-500'>Linux</strong>, <strong className='font-normal text-red-500'>CyberSecurity</strong>, alongside
            other random computer things.
          </h2>
          <Social />
        </div>
      </article>

      {/* <article className="flex flex-col gap-8">
      <header className="flex w-full flex-row justify-between gap-2">
        <h3 className="text-lg font-normal text-neutral-100">Latest posts</h3>
        <Link href={`/post`} className='hover:text-neutral-100 transition-colors duration-150 cursor-pointer underline decoration-dashed underline-offset-8' target="_self" >See all posts</Link>
      </header>
      </article> */}
    </main>
  )
}
