import React from 'react';

interface DisplayProps {
    className?: string;
    displayText: string;
    textColor?: string;
    textSize?: string;
}

export const Display = ({ className, displayText, textColor, textSize }: DisplayProps) => {
    return (
        <div
            className={`
            font-zillaslab
            hover:text-brand-tertiary
            hover:text-[calc(${textSize}*1.4)]
            ${textColor}
            ${textSize}
            ${className}
        `}
        >
            {displayText}
        </div>
    );
};
