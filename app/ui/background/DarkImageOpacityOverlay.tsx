import React, { forwardRef } from 'react';

interface DarkImageOpacityOverlayProps {
    className?: string;
}

// Like OpacityOverlay, but tuned for backgrounds that are already dark/low-key
// photos: dark mode washes toward content (near-white) instead of surface
// (near-black), so the underlying image doesn't get darkened further.
const DarkImageOpacityOverlay = forwardRef<HTMLDivElement, DarkImageOpacityOverlayProps>(
    ({ className }, ref) => {
        return (
            <div
                ref={ref}
                className={`
                    bg-linear-to-b from-brand-primary
                    to-brand-primary/0
                    dark:from-content/25 dark:to-transparent
                    ${className}
                `}
            />
        );
    }
);

DarkImageOpacityOverlay.displayName = 'DarkImageOpacityOverlay';

export default DarkImageOpacityOverlay;
