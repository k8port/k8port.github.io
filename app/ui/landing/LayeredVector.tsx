import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { AnimatedMuseGroup } from './vector/AnimatedMuseGroup';

interface LayeredVectorProps {
    className: string;
}

export default function LayeredVector({ className }: LayeredVectorProps) {
    const width = 140;
    const height = 500;
    const aspectRatio = width / height;
    return (
        <div className={`${className}`}>
            <div className="relative h-dvh">
                <AnimatedMuseGroup className="absolute top-2 right-30 size-12" />
                <AnimatedMuseGroup className="absolute top-2 right-34 size-14" />
                <AnimatedMuseGroup className="absolute top-2 right-32 size-16" />
                <AnimatedMuseGroup className="absolute top-2 right-34 size-18" />
                <AnimatedMuseGroup className="absolute top-2 right-36 size-18" />
                <AnimatedMuseGroup className="absolute top-2 right-38 size-16" />
                <AnimatedMuseGroup className="absolute top-2 right-33 size-14" />
                <AnimatedMuseGroup className="absolute top-2 right-33 size-18" />
                <AnimatedMuseGroup className="absolute top-2 right-34 size-12" />
                <AnimatedMuseGroup className="absolute top-2 right-34 size-14" />

                <AnimatedMuseGroup className="absolute top-3 right-35 size-16" />
                <AnimatedMuseGroup className="absolute top-3 right-33 size-18" />
                <AnimatedMuseGroup className="absolute top-3 right-34 size-12" />
                <AnimatedMuseGroup className="absolute top-3 right-34 size-16" />
                <AnimatedMuseGroup className="absolute top-3 right-34 size-14" />
                <AnimatedMuseGroup className="absolute top-3 right-34 size-16" />
                <AnimatedMuseGroup className="absolute top-3 right-34 size-12" />
                {/* <Image // TODO: hair animation>
                    src="/images/layered_vector/hair.svg"
                    alt="Vector figure&apos;s hair"
                    width={width}
                    height={height}
                    className={`
                        absolute right-0
                        opacity-85
                        min-w-[275px]
                        animate-sway
                        aspect-[${aspectRatio}]
                    `}
                /> */}
                <Image
                    src="/images/layered_vector/vector_figure.svg"
                    alt="Vector Figure"
                    width={width}
                    height={height}
                    style={{ aspectRatio }}
                    className={clsx(
                        'absolute right-0 object-cover opacity-85 priority h-dvh sm:h-full min-w-[285px] transition-all duration-300',
                        'dark:[filter:invert(1)_hue-rotate(180deg)_brightness(1.05)_contrast(1.15)]'
                    )}
                />
            </div>
        </div>
    );
}
