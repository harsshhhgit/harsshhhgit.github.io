import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
    const blogs = allBlogs.map((post) => ({
        url: `https://www.harsshhh.com/post/${post.slug}`,
        lastModified: post.publishedAt,
    }));

    const routes = ['', '/post'].map(
        (route) => ({
            url: `https://www.harsshhh.com${route}`,
            lastModified: new Date().toISOString().split('T')[0],
        })
    );

    return [...routes, ...blogs];
}