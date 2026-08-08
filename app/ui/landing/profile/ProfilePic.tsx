import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

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
    const darkModeSrc = profilePicSrc?.replace('/abstract-profile/abstract-profile-sunset.svg', '/abstract-profile/abstract-profile-sunrise.svg');

    return (
        <div className={`relative w-full h-full ${className}`} style={{ opacity: restingOpacity }}>
            <Image
                src={darkModeSrc ?? profilePicSrc ?? '/images/abstract-profile/abstract-profile-sunset.svg'}
                alt={`${profilePicDescription}`}
                className={clsx(
                    'w-full transition-all duration-300',
                    'dark:[filter:invert(1)_hue-rotate(180deg)_brightness(1.05)_contrast(1.15)]'
                )}
                width={imageWidth}
                height={imageHeight}
            />
        </div>
    );
};
