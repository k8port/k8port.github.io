// // next.config.ts
// import createMDX from '@next/mdx';
// import type { NextConfig } from 'next';

// const withMDX = createMDX({
//     extension: /\.mdx?$/,
// })

// const nextConfig: NextConfig = {
//     reactStrictMode: true,
//     pageExtensions: ['ts', 'tsx', 'mdx'],
//     eslint: {
//         dirs: ['app', 'components', 'lib', 'pages', 'public', 'styles'],
//         ignoreDuringBuilds: true
//     },
//     webpack(config) {
//         config.module.rules.push({
//             test: /\.svg$/i,
//             issuer: /\.[jt]sx?$/,
//             use: ['@svgr/webpack'],
//         })
//         return config
//     },
// }

// let finalConfig = withMDX(nextConfig)

// // Sanitize: remove turbopack.conditions if present
// if ('turbopack' in finalConfig && 'conditions' in (finalConfig as any).turbopack) {
//     console.warn('Stripping unsupported turbopack.conditions from Next Config')
//     delete (finalConfig as any).turbopack.conditions
// }

// export default finalConfig
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    typescript: {},
};

export default nextConfig;
