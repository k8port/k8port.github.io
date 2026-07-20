import React from 'react';

interface ScrollingBannerProps {
    className?: string;
}

export default function ScrollingBanner({ className }: ScrollingBannerProps) {
    return (
        <div
            className={`
            fixed top-6 left-0
            w-full h-10
            bg-accent-accentbluevar/50
            z-50
            overflow-hidden
            h-10 md:h-16
            flex 
            items-center
            border border-solid border-brand-primary
            ring-2
            ring-accent-accentblue
            shadow-btn-shadow3
            ${className}`}
        >
            <div className="text-brand-secondary text-center text-2xl md:text-5xl font-lobster">
                <div className="whitespace-nowrap animate-scroll px-4 py-2">
                    Non Perditio Dolorem
                </div>
            </div>
        </div>
    );
}
