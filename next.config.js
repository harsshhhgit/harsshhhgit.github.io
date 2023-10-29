/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
    images: {
        remotePatterns:
            [{ protocol: 'https', hostname: 'res.cloudinary.com' }
            ],
        domains: ['avatars.githubusercontent.com', 'github.com', 'res.cloudinary.com']
    },
    reactStrictMode: false,
}

module.exports = withContentlayer(nextConfig)