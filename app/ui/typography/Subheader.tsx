import React from 'react';

interface SubheaderProps {
    subheaderText: string;
    subheaderStyle?: 'default' | 'heavy';
}

export const Subheader = ({ subheaderText, subheaderStyle }: SubheaderProps) => {
    const fontWeightClass = subheaderStyle === 'heavy' ? 'font-bold' : 'font-normal';
    return (
        <div
            className={`
            relative 
            w-445px 
            -mt-px 
            font-josefinsans
            ${fontWeightClass} 
            text-redblacks-blackplum 
            text-base
            leading-6
            uppercase
            not-italic`}
        >
            {subheaderText}
        </div>
    );
};
