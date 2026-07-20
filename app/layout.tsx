import React from 'react';
// Define the Metadata type locally to avoid import errors
interface Metadata {
    title?: string;
    description?: string;
    icons?: {
        icon?: string;
        apple?: string;
    };
}
import './styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './ui/header/Header';
import {
    fontZillaSlab,
    josefinSans,
    lobster,
} from './styles/typography/fonts';

export const metadata: Metadata = {
    title: 'k8portalatin | Software Engineer',
    description:
        "Kate Portalatin's (k8port) portfolio build using Next.js 13, Tailwind CSS, and TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="Kate Portalatin's (k8port) portfolio build using Next.js 15, TypeScript,
                                React 19, Tailwind CSS 4, and TypeScript"
                />
                <meta
                    name="keywords"
                    content="Kate Portalatin, k8port, portfolio, Next.js, TypeScript, React, Tailwind CSS"
                />
            </head>
            <body
                className={`
                    ${josefinSans.variable}
                    ${fontZillaSlab.variable}
                    ${lobster.variable}
                    font-josefinsans
                    flex
                    flex-col
                    bg-brand-primary
                    antialiased
                    overflow-x-hidden
                `}
            >
                <Header
                    className={`
                        sticky top-0 left-0
                        w-full h-16 z-99
                        bg-brand-secondaryvar/65
                        bg-[url('/images/brand/waves_pattern.png')]
                        bg-repeat-x
                        bg-center
                        bg-blend-overlay
                        backdrop-blur-sm
                        transition-all duration-300
                        header-shadow
                    `}
                />
                <main>{children}</main>
            </body>
            <Analytics />
            <SpeedInsights />
            {/* <Footer className='fixed bottom-0 z-50' /> */}
        </html>
    );
}
