'use client';

import { HTMLAttributes } from 'react';
import ContactForm from './ContactForm';
import Image from 'next/image';
import DarkImageOpacityOverlay from '../background/DarkImageOpacityOverlay';
import clsx from 'clsx';
import React from 'react';

type CollaborateContainerProps = HTMLAttributes<HTMLDivElement>;

export default function CollaborateContainer({ className, ...rest }: CollaborateContainerProps) {
    return (
        <div
            id="collaborate"
            {...rest}
            className={clsx('relative isolate flex items-center justify-center', className)}
        >
            {/* full-screen background image */}
            <Image
                priority
                src="/images/arcade-girl.png"
                alt="Arcade Girl"
                fill
                className={'object-cover object-[center_12%] -z-10 dark:brightness-150 dark:contrast-110'}
            />

            {/* overlay */}
            <DarkImageOpacityOverlay className="absolute inset-0 -z-10" />

            {/* content form wrapper */}
            <div className="w-full max-w-3xl md:max-w-4xl p-6 md:p-10 bg-transparent rounded-lg">
                <h2
                    className="caption-heavy text-xl text-center 
                    mb-8 tracking-wider 
                    text-midnightgreen
                    text-shadow-lg dark:text-content 
                "
                >
                    CONTACT&nbsp;ME
                </h2>
                <ContactForm />
            </div>
        </div>
    );
}
