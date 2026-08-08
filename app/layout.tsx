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
import { ThemeProvider } from './ui/theme/ThemeProvider';
import { fontZillaSlab, josefinSans, lobster } from './styles/typography/fonts';

export const metadata: Metadata = {
    title: 'k8portalatin | Software Engineer',
    description:
        "Kate Portalatin's (k8port) portfolio build using Next.js 13, Tailwind CSS, and TypeScript",
};

const themeInitScript = `
(function () {
    try {
        var stored = localStorage.getItem('theme');
        var theme = stored === 'light' || stored === 'dark'
            ? stored
            : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        var root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        root.style.colorScheme = theme;
    } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body
                className={`
                    ${josefinSans.variable}
                    ${fontZillaSlab.variable}
                    ${lobster.variable}
                    font-josefinsans
                    flex
                    flex-col
                    antialiased
                    overflow-x-hidden
                    bg-surface
                    text-content
                `}
            >
                <ThemeProvider>
                    <Header
                        className={`
                            sticky top-0 left-0
                            w-full h-16 z-99
                            relative overflow-hidden
                            bg-surface-raised/70 dark:bg-surface-elevated/90
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
                </ThemeProvider>
            </body>
            <Analytics />
            <SpeedInsights />
            {/* <Footer className='fixed bottom-0 z-50' /> */}
        </html>
    );
}
