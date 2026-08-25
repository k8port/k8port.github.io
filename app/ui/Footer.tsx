'use client';

import React from 'react';
import { FC, ReactNode, HTMLAttributes } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

type NavItem = { href: string; label: string; icon?: ReactNode };

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
    nav?: NavItem[];
    socials?: NavItem[];
}

const defaultNav: NavItem[] = [
    { href: '/#landing', label: 'About (top) | ↑' },
    { href: '/#projects', label: 'Projects ♤' },
    { href: '/#contact', label: ' ↓ | Contact (bottom)' },
];

const defaultSocials: NavItem[] = [
    { href: 'https://github.com/k8port', label: 'GitHub', icon: <FaGithubAlt /> },
    { href: 'https://www.linkedin.com/in/k8portalatin/', label: 'LinkedIn', icon: <FaLinkedin /> },
];

const Footer: FC<FooterProps> = ({
    nav = defaultNav,
    socials = defaultSocials,
    className,
    ...rest
}) => (
    <footer
        {...rest}
        className={clsx(
            'bg-transparent bg-blur',
            'text-greenwhites-pearl',
            'fixed bottom-0 left-0 right-0 z-50',
            className
        )}
    >
        <div className="mx-auto w-full max-w-screen-xl px-4 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Left navigation  */}
            <nav className="hidden md:flex flex-wrap justify-center gap-4 md:justify-start">
                {nav.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className="text-sm text-greenwhites-pearl hover:font-bold hover:text-brand-quaternary transition-colors"
                    >
                        {label}
                    </Link>
                ))}
            </nav>

            {/* Center copyright */}
            <div className="inline-flex space-x-6 text-xl text-center order-last md:order-0">
                <p className="font-mono">@{new Date().getFullYear()}</p>
                <p className="text-4xl font-lobster">k8port io</p>
                <p className="font-zillaslab">All rights reserved.</p>
            </div>

            {/* Right social links */}
            <div className="hidden md:flex justify-center gap-4">
                {socials.map(({ href, icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className="text-3xl text-greenwhites-pearl hover:text-brand-quaternary transition-colors cursor-pointer"
                    >
                        {icon}
                    </Link>
                ))}
            </div>
        </div>
    </footer>
);

export default Footer;
