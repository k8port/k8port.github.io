import React from 'react';
import AnimatedMuseSVG from './AnimatedMuse';

interface AnimatedMuseGroupProps {
    className?: string;
}

export const AnimatedMuseGroup = ({ className }: AnimatedMuseGroupProps) => {
    return (
        <div className={`${className}`}>
            <AnimatedMuseSVG
                className={`
                absolute inset-x-0 top-10 left-50 h-10
                opacity-85
                z-999
            `}
            />
            <AnimatedMuseSVG
                className={`
                absolute inset-x-0 top-10 left-40 h-10
                opacity-85
                z-999
            `}
            />
            <AnimatedMuseSVG
                className={`
                absolute inset-x-0 top-10 left-50 h-10
                opacity-85
                z-999
            `}
            />
            <AnimatedMuseSVG
                className={`
                absolute inset-x-0 top-20 left-40 h-10
                opacity-85
                z-999
            `}
            />
            <AnimatedMuseSVG
                className={`
                absolute inset-x-0 top-30 left-60 h-10
                opacity-85
                z-999
            `}
            />
            <AnimatedMuseSVG
                className={`
                absolute inset-x-0 top-40 left-50 h-10
                opacity-85
                z-999
            `}
            />
        </div>
    );
};
