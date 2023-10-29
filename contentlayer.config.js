import {
    defineDocumentType,
    makeSource,
} from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import remarkSectionize from 'remark-sectionize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'

const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) =>
            `/post/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
}

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: '**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
        isPublished: { type: 'boolean', required: true}
    },
    computedFields,
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm, remarkSectionize],
        rehypePlugins: [
            rehypeSlug,
            rehypeCodeTitles,
            rehypePrism,
            rehypePresetMinify,
            [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
        ],
    },
})