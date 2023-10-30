import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import Image, { ImageProps } from 'next/image'

const PostImage = (props) => (
    <Image
    className='rounded-lg'
        {...(props)}
        draggable={false}
    />
)

const components = { PostImage }

const MDX = ({ code }) => {
    const Component = useMDXComponent(code)
    return <Component components={{ ...components }} />
}

export default MDX;