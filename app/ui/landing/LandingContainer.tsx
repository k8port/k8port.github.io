'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '../theme/ThemeProvider';
import RainbowGradientOverlay from '../background/RainboxGradientOverlay';
import OpacityOverlay from '../background/OpacityOverlay';
import LandingContent from './LandingContent';

export const LandingContainer = () => {
    const width = 3200;
    const height = 3200;
    const overlayRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div>
            <div className="absolute inset-0 z-0 overflow-hidden bg-surface/70">
                <Image
                    src="/images/nouveau-brain.png"
                    alt="Art Nouveau brain design"
                    width={width}
                    height={height}
                    className={`
                        priority
                        absolute inset-0
                        aspect-1/5
                        lg:aspect-1/20
                        dt-lg:aspect-1/30
                        xl:aspect-1/40
                        2xl:aspect-1/50
                        3xl:aspect-1/60
                        4xl:aspect-1/70
                        5xl:aspect-1/80
                        object-cover
                        max-w-full
                        max-h-full
                        transition-all duration-300
                    `}
                    style={
                        isDark
                            ? {
                                  filter: 'invert(1) hue-rotate(180deg) saturate(1.4) brightness(1.12) contrast(1.3)',
                                  mixBlendMode: 'screen',
                              }
                            : undefined
                    }
                />
            </div>

            {/* layer 2: Gradient overlays */}
            <RainbowGradientOverlay
                className="absolute inset-0"
                innerClassName="mix-blend-exclusion"
            />
            <RainbowGradientOverlay
                className="absolute inset-0"
                innerClassName="mix-blend-hard-light"
            />

            {/* layer 3: Animated Opacity Layer */}
            <OpacityOverlay
                ref={overlayRef}
                className="absolute inset-0 transition-opacity duration-300 z-30"
            />

            {/* layer 4: Scrolling Banner
      <ScrollingBanner className='relative z-50' /> */}

            {/* layer 5: Landing Content */}
            <LandingContent ref={scrollRef} className={'relative z-60'} />
        </div>
    );
};
