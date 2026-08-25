import React from 'react';
import Image from 'next/image';

interface ImageFrameProps {
    className: string;
    imageClassName: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    unoptimized?: boolean;
}

export const ImageFrame = ({
    className,
    imageClassName,
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    unoptimized,
}: ImageFrameProps) => {
    return (
        <div className={`flex items-center relative ${className}`}>
            <Image
                className={`object-cover rounded-lg ${imageClassName}`}
                alt={imageAlt}
                src={imageSrc}
                width={imageWidth}
                height={imageHeight}
                priority
                quality={90}
                unoptimized={unoptimized}
            />
        </div>
    );
};
