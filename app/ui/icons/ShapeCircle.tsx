import React from 'react';

interface ShapeCircleProps {
    className?: string;
}

export const ShapeCircle = ({ className }: ShapeCircleProps) => {
    return (
        <div className={`relative w-4 h-4 ${className}`}>
            <img
                className="absolute w-2.75 h-2.75 top-0.75 left-0.75"
                alt="Shape Circle"
                src="/images/shape-circle.svg"
            />
        </div>
    );
};
