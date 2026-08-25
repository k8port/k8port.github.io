import React from 'react';

interface TitleProps {
    titleText: string;
    fontWeight: 'normal' | 'bold';
}

export const Title = ({ titleText, fontWeight }: TitleProps) => {
    const fontWeightClass = fontWeight === 'normal' ? 'font-normal' : 'font-bold';
    return (
        <p
            className={`
            relative 
            w-111.25 
            mt-[px] 
            font-josefinsans
            ${fontWeightClass} 
            text-redblacks-blackplum 
            text-xl 
            leading-7 
            uppercase 
            not-italic`}
        >
            {titleText}
        </p>
    );
};
