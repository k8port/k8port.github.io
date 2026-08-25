import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { DesktopButtonGroup } from '../../buttons/DesktopButtonGroup';

interface AboutMeProps {
    className?: string;
}

export default function AboutMe({ className }: AboutMeProps) {
    return (
        <div id="aboutme" className={`${className}`}>
            <div className="flex flex-col gap-6 md:flex-row md:items-end">
                <DesktopButtonGroup className="hidden shrink-0 md:inline-flex" />
                <div
                    className={`
                        relative
                        w-full
                        bg-surface-raised/80
                        rounded-2xl
                        p-6 lg:p-8
                        border border-border
                        md:w-1/2
                    `}
                >
                <div className="flex items-center gap-4 lg:gap-8 p-2 lg:p-4">
                    <span className="text-heading text-xl md:text-xl lg:text-2xl font-lobster">
                        Interests
                    </span>
                    <FaHeart color="#FF0000" size={25} />
                </div>
                <div className="flex items-start gap-4">
                    <p
                        className={`
                            pt-t
                            text-content
                            paragraph-small mlg:text-base
                            leading-5 mlg:leading-6 text-pretty
                        `}
                    >
                        system design, programming paradigms, discovery, puzzles, complexity,
                        user-centric design, embroidery string craft, color theory, maps,
                        philosophy, dance, scenic drives, one day writing a book, thinking about the
                        people who lived before, watching cartoons and science shows, unusual
                        datasets, gardening and more...
                    </p>
                </div>
                </div>
            </div>
            <div 
                className={`
                    relative
                    w-full
                    bg-surface-raised/80
                    rounded-2xl
                    p-6 lg:p-8
                    border border-border
                `}
            >
                <div className="flex items-start gap-4 lg:gap-8 p-2 lg:p-4">
                    <span className="text-heading text-xl md:text-xl lg:text-2xl font-lobster">
                        About Me
                    </span>
                </div>
                <div className="flex items-start gap-4">
                    <p
                        className={`
                            pt-t
                            text-content
                            paragraph-small mlg:text-base
                            leading-5 mlg:leading-6 text-pretty
                        `}
                    >
                        A Software Engineer with a background in enterprise architectures, data engineering, and visual problem solving, 
                        I understand complex systems through observation and deconstruction, and enjoy untangling convoluted workflows that obscure understanding and the free flow of knowledge.  
                        
                        Is there an area of the codebase no one wants to touch? Are outdated, bulky implementations refusing to go away due to legacy constraints? Difficult problems like these are where I do my best work.  
                        
                        Similarly, I thrive when managing cross-functional projects and translating complexity across multiple problem domains within large organizations or business networks. I have a talent for bringing people together from disparate backgrounds to successfully solve difficult problems.
                        
                        My work experience spans data platforms, developer
                        experience, meta-model programming, workflow and operational systems, cloud and backend architectures, UX, AI/ML and other product-minded tech, and includes event-driven architectures, microsystems, mainframe, healthcare and financial systems.
                        
                        I work with a personal code of kindiness, curiosity, transparency and autonomy.  I strive to work on systems that are made to help people and to find solutions to improve quality of life. 
                        
                    </p>
                </div>
            </div>
        </div>
    );
}
