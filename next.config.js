/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
    images: {
        domains:["avatars.githubusercontent.com"]
    },
    reactStrictMode: false,
}

module.exports = withContentlayer(nextConfig)