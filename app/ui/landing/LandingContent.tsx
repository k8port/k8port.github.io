import React, { forwardRef } from 'react';
import LayeredVector from './LayeredVector';
import AboutMe from './profile/AboutMe';
import { MobileButtonGroup } from '../buttons/MobileButtonGroup';
import { DesktopButtonGroup } from '../buttons/DesktopButtonGroup';
import { III } from './profile/III';
import { Greeting } from './profile/Greeting';
import { Display } from '../typography/Display';
import { Headline } from '../typography/Headline';
import { ProfilePic } from './profile/ProfilePic';
import { useBreakpointDebug } from '../../lib/hooks/useBreakpointDebug';
import { useWindowSize } from '../../lib/hooks/useWindowSize';

interface LandingContentProps {
    className?: string;
}

const LandingContent = forwardRef<HTMLDivElement, LandingContentProps>(({ className }, ref) => {
    useBreakpointDebug();
    useWindowSize();

    return (
        <div
            ref={ref}
            className={`
            relative flex flex-col w-full
            gap-10 mx-auto
            pb-20
            shadow
            ${className}
          `}
        >
            {/* Mobile hero */}
            <div className="flex flex-col gap-6 mt-10 md:hidden">
                <Greeting
                    className="greeting text-5xl text-accent font-outline ml-26"
                    greetingText="Hello!"
                />
                <III
                    className="relative flex flex-col gap-2"
                    insertNameHere="Kate Portalatin"
                    insertJobTitleHere="Full Stack Product Engineer 🜉 Data Intensive Frontends"
                    profilePicWidth="w-96 lg:w-md"
                />
                <MobileButtonGroup className="self-center" />
            </div>

            {/* Desktop hero: PhotoOrb in the top-left corner with the greeting,
                name, and title overlapping it. */}
            <section className="relative hidden w-full min-h-vh md:block">
                <div
                    className={`
                        absolute top-0 left-0 z-0
                        w-[65vw] max-w-2xl
                    `}
                >
                    <ProfilePic
                        imageWidth={2038}
                        imageHeight={1840}
                        className="rounded-full shadow-btn-shadow aspect-1038/920"
                        profilePicSrc="/images/abstract-profile/abstract-profile-sunset.svg"
                        profilePicDescription="Profile Picture"
                        restingOpacity={0.65}
                    />
                </div>

                <div className="relative z-10 flex w-full flex-col pt-8 pl-10 mlg:pl-20">
                    <Greeting
                        className={`
                            greeting
                            text-4xl md:text-6xl lg:text-7xl
                            text-center
                            text-accent
                            font-outline
                        `}
                        greetingText="Hello!"
                    />

                    <div className="mt-6 flex flex-col items-center text-center">
                        <Display
                            className="h-auto text-center animate-slide-in-left font-semibold"
                            displayText="Kate Portalatin"
                            textColor="text-accent-strong"
                            textSize="text-5xl"
                        />
                        <Headline
                            className="mt-4 h-auto text-center animate-slide-in-left"
                            headlineText="Full Stack Product Engineer 🜉 Data Intensive Frontends"
                            headlineStyle="default"
                            textColor="text-accent"
                            textSize="text-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Text container: ~50% of the page, center-aligned */}
            <AboutMe className="flex w-full flex-col gap-6 mx-auto md:w-4/5" />

            <DesktopButtonGroup className="hidden self-center md:inline-flex items-start" />

            <LayeredVector
                className={`
          absolute top-0 right-0
          h-dvh z-999
        `}
            />
        </div>
    );
});

LandingContent.displayName = 'LandingContent';

export default LandingContent;
