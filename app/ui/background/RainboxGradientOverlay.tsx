import React from 'react';

interface GradientOverlayProps {
    className: string;
    innerClassName: string;
}

export default function RainbowGradientOverlay({
    className,
    innerClassName,
}: GradientOverlayProps) {
    return (
        <div className={`${className}`}>
            <div
                className={`
        absolute inset-0 bg-linear-to-b 
        from-brand-quinaryvar dark:from-dkquinaryvar
        to-accent-accentpinkvar dark:to-dkaccentpurplevar
        ${innerClassName}
      `}
            ></div>
        </div>
    );
}
