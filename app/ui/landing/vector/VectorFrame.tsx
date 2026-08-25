import { getBlendMode } from '@/lib/actions/blendMode';
import React from 'react';
import VectorFigure from './VectorFigure';

interface VectorFrameProps {
    className: string;
    minw?: string;
    minh?: string;
    minw_tiny?: string;
    minh_tiny?: string;
    minw_sm?: string;
    minh_sm?: string;
    minw_md?: string;
    minh_md?: string;
    minw_lg?: string;
    minh_lg?: string;
    top?: string;
    left?: string;
    tiny_top?: string;
    tiny_left?: string;
    sm_top?: string;
    sm_left?: string;
    md_top?: string;
    md_left?: string;
    lg_top?: string;
    lg_left?: string;
    lgdt_top?: string;
    lgdt_left?: string;
    opacity?: string;
    blendmode?: string;
}

export default function VectorFrame({ className, ...props }: VectorFrameProps) {
    const minw = `${props.minw || '0'}`;
    const minh = `${props.minh || '0'}`;
    const top = `${props.top || '0'}`;
    const left = `${props.left || '0'}`;
    const tinyTop = `${props.tiny_top || '0'}`;
    const tinyLeft = `${props.tiny_left || '0'}`;
    const smTop = `${props.sm_top || '0'}`;
    const smLeft = `${props.sm_left || '0'}`;
    const mdTop = `${props.md_top || '0'}`;
    const mdLeft = `${props.md_left || '0'}`;
    const lgTop = `${props.lg_top || '0'}`;
    const lgLeft = `${props.lg_left || '0'}`;
    const lgdtTop = `${props.lgdt_top || '0'}`;
    const lgdtLeft = `${props.lgdt_left || '0'}`;
    const opacity = `${props.opacity || '1'}`;
    const blendmode = getBlendMode(props.blendmode || 'normal');

    return (
        <div
            className={className}
            style={
                {
                    '--v-top': `${top}px`,
                    '--v-tiny-top': `${tinyTop}px`,
                    '--v-sm-top': `${smTop}px`,
                    '--v-md-top': `${mdTop}px`,
                    '--v-lg-top': `${lgTop}px`,
                    '--v-lgdt-top': `${lgdtTop}px`,

                    '--v-left': `${left}px`,
                    '--v-tiny-left': `${tinyLeft}px`,
                    '--v-sm-left': `${smLeft}px`,
                    '--v-md-left': `${mdLeft}px`,
                    '--v-lg-left': `${lgLeft}px`,
                    '--v-lgdt-left': `${lgdtLeft}px`,
                } as React.CSSProperties
            }
        >
            <VectorFigure
                className={`
                    absolute
                    top-[var(--v-top)]           tiny:top-[var(--v-tiny-top)]
                    sm:top-[var(--v-sm-top)]
                    md:top-[var(--v-md-top)]     lg:top-[var(--v-lg-top)]
                    lg-dt:top-[var(--v-lgdt-top)]

                    -left-[var(--v-left)]         tiny:-left-[var(--v-tiny-left)]
                    sm:-left-[var(--v-sm-left)]
                    md:-left-[var(--v-md-left)]   lg:-left-[var(--v-lg-left)]
                    lg-dt:-left-[var(--v-lgdt-left)]

                    min-w-[${minw}] min-h-[${minh}]
                    opacity-[${opacity}]
                    mix-blend-${blendmode}
                `}
            />
        </div>
    );
}
