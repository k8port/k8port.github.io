import React from 'react';
import { Display } from '../../typography/Display';
import { Headline } from '../../typography/Headline';
import { ProfilePic } from './ProfilePic';

interface IIIProps {
    className?: string;
    insertNameHere: string;
    insertJobTitleHere: string;
    profilePicWidth?: string;
}

export const III = ({ className, insertNameHere, insertJobTitleHere }: IIIProps) => {
    return (
        <div className={`${className}`}>
            <Display
                className="w-md h-auto text-center animate-slide-in-left"
                displayText={insertNameHere}
                textColor="text-greengrays-graygreen"
                textSize="text-5xl"
            />
            <Headline
                className="mt-4 w-md h-auto text-center animate-slide-in-left"
                headlineText={insertJobTitleHere}
                headlineStyle="default"
                textColor="text-greengrays-camouflagegray"
                textSize="text-lg"
            />
            <div className={'mt-4 sm:mt-10 h-auto'}>
                <ProfilePic
                    imageWidth={2038}
                    imageHeight={1840}
                    className="rounded-full shadow-btn-shadow aspect-1038/920"
                    profilePicSrc="/images/abstract-profile/abstract-profile-sunset.svg"
                    profilePicDescription="Profile Picture"
                    restingOpacity={0.65}
                />
            </div>
        </div>
    );
};
