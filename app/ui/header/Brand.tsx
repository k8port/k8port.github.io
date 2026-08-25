import React from 'react';
import Image from 'next/image';

export default function Brand() {
    return (
        <div
            className={`
            absolute inset-1 w-23.75 h-7.5 left-10 top-2 z-10
            bg-bluegrays-cadetgray
            brand-style
            overflow-hidden
            border-[0.25px] border-solid border-accent-accentgreenvar rounded-lg`}
        >
            <div className="absolute inset-0 z-20">
                <Image
                    src="/images/tree.svg"
                    alt="treechip"
                    width={150}
                    height={50}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="absolute inset-0 left-10 z-30">
                <Image
                    src="/images/k8.png"
                    alt="logo"
                    width={50}
                    height={30}
                    className="w-full h-full p-1 object-contain"
                />
            </div>
        </div>
    );
}
