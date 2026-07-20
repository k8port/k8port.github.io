'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import clsx from 'clsx';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle({ className }: { className?: string }) {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            role="switch"
            onClick={toggleTheme}
            aria-checked={isDark}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className={clsx(
                'relative inline-flex items-center shrink-0',
                'w-14 h-7 rounded-full px-1',
                'border border-collection-caribbeangreen/60',
                'transition-colors duration-300 cursor-pointer',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-collection-caribbeangreen',
                isDark ? 'bg-dkdarksecondaryvar' : 'bg-brand-tertiary',
                className
            )}
        >
            <Sun
                className={clsx(
                    'absolute left-1.5 w-4 h-4 transition-opacity duration-300',
                    'text-collection-portlandorangered',
                    isDark ? 'opacity-40' : 'opacity-100'
                )}
                aria-hidden="true"
            />
            <Moon
                className={clsx(
                    'absolute right-1.5 w-4 h-4 transition-opacity duration-300',
                    'text-redwhites-platinum',
                    isDark ? 'opacity-100' : 'opacity-40'
                )}
                aria-hidden="true"
            />

            <span
                className={clsx(
                    'relative z-10 inline-flex items-center justify-center',
                    'w-5 h-5 rounded-full bg-redwhites-snow shadow-md',
                    'transform transition-transform duration-300 ease-in-out',
                    isDark ? 'translate-x-7' : 'translate-x-0'
                )}
            >
                {isDark ? (
                    <Moon className="w-3 h-3 text-dkdarkprimary" aria-hidden="true" />
                ) : (
                    <Sun className="w-3 h-3 text-collection-portlandorangered" aria-hidden="true" />
                )}
            </span>
        </button>
    );
}
