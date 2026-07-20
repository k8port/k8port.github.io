import React from 'react';
import { Greeting } from './Greeting';
import { FaHeart } from 'react-icons/fa';

interface AboutMeProps {
    className?: string;
}

export default function AboutMe({ className }: AboutMeProps) {
    return (
        <div id="aboutme" className={`${className}`}>
            <Greeting
                className={`
                    greeting
                    text-5xl md:text-7xl lg:text-8xl
                    relative
                    text-brand-septenary
                    font-outline
                `}
                greetingText="Hello!"
            />

            <div
                className={`
                    relative
                    size-72
                    mlg:size-84
                    bg-brand-secondary/60
                    rounded-2xl
                `}
            >
                <div className="absolute inset-4">
                    <div className="flex items-start gap-4 lg:gap-8 p-2 lg:p-4">
                        <span className="text-redblacks-blackplum text-2xl md:text-2xl lg:text-3xl font-lobster">
                            Favorites
                        </span>
                        <FaHeart color="#FF0000" size={25} />
                    </div>
                    <div className="flex items-start gap-4">
                        <p
                            className={`
                                pt-t
                                text-redblacks-blackplum
                                paragraph-small mlg:text-base
                                leading-5 mlg:leading-6 text-pretty
                            `}
                        >
                            system design, programming paradigms, discovery, puzzles, complexity,
                            user-centric design, embroidery string craft, color theory, maps,
                            philosophy, dance, scenic drives, one day writing a book, thinking about
                            the people who lived before, watching cartoons and science shows,
                            unusual datasets, gardening and more...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
