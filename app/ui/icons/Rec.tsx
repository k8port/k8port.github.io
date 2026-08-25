import React from 'react';

interface RecProps {
    className?: string;
}

export const Rec = ({ className }: RecProps) => {
    return (
        <div className={`relative h-2 w-2 ${className}`} aria-hidden="true">
            <img
                className="absolute w-1.25 h-1.25 top-px left-px"
                alt="Filled Circle"
                src="/images/brand/filled-circle.svg"
            />
        </div>
    );
};
