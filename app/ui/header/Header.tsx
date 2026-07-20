import React from 'react';
import NavMenu from './navmenu/NavMenu';

export default function Header({ className }: { className?: string }) {
    return (
        <header className={`${className}`}>
            <div className="flex items-center py-4">
                <div className={'container max-w-full mx-auto px-4 sm:px-4 lg:px-4'}>
                    <div className="flex items-center justify-between w-full">
                        {/* <Brand /> */}
                        <div
                            className={`
                                grow flex 
                                justify-center
                                font-josefinsans
                                text-bluegrays-deepspacesparkle
                                text-sm
                                leading-3
                            `}
                        >
                            <span className="absolute top-6 left-22 md:left-50 text-bluegrays-cadetblue tracking-tighter">
                                I&apos;m not just a node, I am circuits
                            </span>
                        </div>
                        <NavMenu className="grow flex justify-end" />
                    </div>
                </div>
            </div>
        </header>
    );
}
