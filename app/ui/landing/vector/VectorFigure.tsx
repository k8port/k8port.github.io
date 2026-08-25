import React from 'react';
import Image from 'next/image';

interface VectorFigureProps {
    className: string;
}

export default function VectorFigure({ className }: VectorFigureProps) {
    return (
        <Image
            src="/images/layered_vector/vector_figure.svg"
            alt="Main Figurine"
            width={300}
            height={1209}
            className={className}
        />
    );
}
