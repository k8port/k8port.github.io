import React from 'react';

interface HeadlineProps {
    className?: string;
    headlineText: string;
    headlineStyle?: 'default' | 'heavy';
    textColor?: string;
    textSize?: string;
}

export const Headline = ({
    className,
    headlineText,
    headlineStyle,
    textColor,
    textSize,
}: HeadlineProps) => {
    const fontWeightClass = headlineStyle === 'heavy' ? 'font-bold' : 'font-normal';
    const transformClass = headlineStyle === 'heavy' ? 'uppercase' : 'capitalize';
    const leadingClass = headlineStyle === 'heavy' ? 'leading-8' : 'leading-[normal]';
    return (
        <p
            className={`
            font-josefinsans
            ${fontWeightClass} 
            ${leadingClass} 
            ${transformClass}
            ${textColor}
            ${textSize}
            ${className}
            hover:text-brand-tertiary
            hover:text-[calc(${textSize}*1.4)]
        `}
        >
            {headlineText}
        </p>
    );
};
