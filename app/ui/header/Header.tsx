import React from 'react';
import NavMenu from './navmenu/NavMenu';
import ThemeToggle from '../theme/ThemeToggle';

export default function Header({ className }: { className?: string }) {
    return (
        <header className={`relative isolate overflow-hidden ${className ?? ''}`}>
            <div className="absolute inset-0 bg-surface-raised/80 transition-colors duration-300 dark:bg-surface-elevated/90" />
            <div className="absolute inset-0 bg-[url('/images/brand/waves_pattern.png')] bg-repeat-x bg-center bg-blend-overlay opacity-70 transition-opacity duration-300 dark:opacity-45" />
            <div className="relative z-10 flex items-center py-4">
                <div className={'container max-w-full mx-auto px-4 sm:px-4 lg:px-4'}>
                    <div className="flex items-center justify-between w-full">
                        {/* <Brand /> */}
                        <div
                            className={`
                                grow flex 
                                justify-center
                                font-josefinsans
                                text-content-muted
                                text-sm
                                leading-3
                            `}
                        >
                            <span className="absolute top-6 left-22 md:left-50 text-content-muted tracking-tighter text-lg">
                                I&apos;m not just a node, I am circuits
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <NavMenu className="grow flex justify-end" />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
