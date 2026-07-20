import React from 'react';
import Image from 'next/image';

interface ProfilePicProps {
    className?: string;
    imageWidth?: number;
    imageHeight?: number;
    profilePicDescription?: string;
    profilePicSrc?: string;
    restingOpacity?: number;
}

export const ProfilePic = ({
    className,
    imageWidth,
    imageHeight,
    profilePicDescription,
    profilePicSrc,
    restingOpacity = 1,
}: ProfilePicProps) => {
    return (
        <div className={`relative w-full h-full ${className}`} style={{ opacity: restingOpacity }}>
            <Image
                src={`${profilePicSrc}`}
                alt={`${profilePicDescription}`}
                className="w-full"
                width={imageWidth}
                height={imageHeight}
            />
        </div>
    );
};
