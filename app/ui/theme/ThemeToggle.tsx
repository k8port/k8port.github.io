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
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-pressed={isDark}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className={clsx(
                'inline-flex items-center justify-center',
                'w-9 h-9 rounded-full',
                'text-collection-midnightgreen dark:text-redwhites-platinum',
                'hover:text-collection-alizarincrimson',
                'transition-colors duration-300',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-collection-caribbeangreen',
                className
            )}
        >
            {isDark ? (
                <Sun className="w-5 h-5" aria-hidden="true" />
            ) : (
                <Moon className="w-5 h-5" aria-hidden="true" />
            )}
        </button>
    );
}
