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
    const artSrc = isDark ? '/images/nouveaubrain.png' : '/images/nouveau-brain.png';

    return (
        <div>
            <div className="absolute inset-0 z-0 overflow-hidden bg-surface/70">
                {isDark ? (
                    <div className="pointer-events-none absolute inset-0 z-10 mix-blend-multiply bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_55%),linear-gradient(135deg,rgba(5,8,18,0.55),rgba(18,24,46,0.65))]" />
                ) : null}
                <Image
                    src={artSrc}
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
                                  filter: 'brightness(1.12) contrast(1.18) saturate(1.15)',
                                  opacity: 0.96,
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
