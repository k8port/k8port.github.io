'use client';

import React, { useState } from 'react';
import { useLinkStatus } from 'next/link';
import clsx from 'clsx';
import Link from 'next/link';

interface NavMenuProps {
    className?: string;
}

/**
 * ------------------------------------------------------------
 * centralized link configuration
 * ------------------------------------------------------------
 *
 *  > SRP-aligned with each sub-component handling single responsibility
 *  > Fully-typed (TS 5.8 literal inference)
 *  > Uses React 19/ Next 15.3 navigation hooks for SPA transitions
 *  > Accessible: <nav aria-label>, keyboard-friendly, focus styles
 *  > Responsive: hamburger menu for <md else inline links
 */

export const navItems = [
    { label: 'home', href: '/#landing', status: 'active' },
    { label: 'projects', href: '/#projects', status: 'active' },
    { label: 'contact', href: '/#contact', status: 'active' },
    { label: 'blog', href: '/blog', status: 'active' },
    // { label: 'skills', href: '/skills', status: 'pending' },
] as const satisfies readonly { label: string; href: string; status: 'active' | 'pending' }[];

type NavItem = (typeof navItems)[number];

// ------------------------------------------------------------------------------------------------
//  2. Root component = owns minimal state (isMenuOpen)
// ------------------------------------------------------------------------------------------------
export default function NavMenu({ className }: NavMenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = () => setIsMenuOpen(false);

    return (
        <div className={` ${className} flex flex-col w-full max-w-screen-2xl gap-2.5 relative `}>
            <div className="flex my-2 ml-auto">
                <Hamburger
                    open={isMenuOpen}
                    toggle={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden"
                />
                <DesktopLinks />
            </div>

            {/* mobile hamburger drop-down menu */}
            <MobileLinks open={isMenuOpen} onNavigate={handleNavigate} />
        </div>
    );

    /**
     * ------------------------------------------------------------
     * 3. Presentation-only sub-components (SRP)
     * ------------------------------------------------------------
     *
     *  > Hamburger: mobile menu toggle
     *  > DesktopLinks: desktop menu links
     *  > MobileLinks: mobile menu links
     *
     */

    /* Hamburger */
    function Hamburger({
        open,
        toggle,
        className,
    }: {
        open: boolean;
        toggle: () => void;
        className?: string;
    }) {
        return (
            <button
                role="button"
                onClick={toggle}
                aria-label="Toggle Menu"
                aria-expanded={open}
                aria-pressed={open}
                className={clsx('p-2', className)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {open ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>
        );
    }

    /* DesktopLinks (inline, screens >= md) */
    function DesktopLinks() {
        return (
            <nav aria-label="Main" className="hidden space-x-12 ml-auto mr-8 text-lg md:flex">
                {navItems.map(item => (
                    <NavLink key={item.href} item={item} />
                ))}
            </nav>
        );
    }

    /* MobileLinks (drawer, screens < md) */
    function MobileLinks({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
        if (!open) return null;
        return (
            <nav
                aria-label="Mobile"
                className={`
                    flex flex-col lg:hidden
                    w-32 bg-brand-quinary
                    shadow-lg rounded-md
                    absolute top-12 right-0
                    border border-solid border-brand-quinary
                    z-50
                `}
            >
                {navItems.map(item => (
                    <NavLink
                        key={item.href}
                        item={item}
                        onNavigate={onNavigate}
                        className="block w-full px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                ))}
            </nav>
        );
    }
}

/* Atomic Links = handles active and pending states */
function NavLink({
    item,
    className,
    onNavigate,
}: {
    item: NavItem;
    className?: string;
    onNavigate?: () => void;
}) {
    const { pending } = useLinkStatus();
    const isActive = !pending;

    if (!isActive) {
        return (
            <span
                className={clsx(
                    'transition-opacity cursor-not-allowed opacity-50',
                    className,
                    'text-greengrays-nickel'
                )}
                title="coming soon"
            >
                {item.label}
            </span>
        );
    } else {
        return (
            <Link
                href={item.href}
                onClick={onNavigate}
                className={clsx(
                    'transition-opacity',
                    className,
                    isActive ? 'text-collection-midnightgreen' : 'text-greengrays-nickel',
                    isActive
                        ? 'hover:text-collection-alizarincrimson'
                        : 'hover:text-bluewhites-ghostwhite',
                    pending && 'opacity-50',
                    pending && 'cursor-not-allowed'
                )}
            >
                {item.label}
            </Link>
        );
    }
}
