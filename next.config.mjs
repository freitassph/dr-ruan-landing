/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [],
        // Mobile-first device sizes — evita imagens oversized em mobile
        deviceSizes: [390, 430, 768, 1024, 1280, 1920],
        imageSizes: [16, 32, 64, 128, 256],
        // Cache imagens por 1 ano no CDN
        minimumCacheTTL: 31536000,
    },
    // Compressão gzip/brotli
    compress: true,
    // Reduzir JS legado — alvo apenas navegadores modernos
    experimental: {
        optimizePackageImports: ['lucide-react', 'framer-motion'],
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    }
                ]
            }
        ];
    },
};

export default nextConfig;
