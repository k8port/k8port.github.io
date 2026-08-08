import React from 'react';
import { FaHeart } from 'react-icons/fa';

interface AboutMeProps {
    className?: string;
}

export default function AboutMe({ className }: AboutMeProps) {
    return (
        <div id="aboutme" className={`${className}`}>
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
                        As a software engineer with a background in engineering, systems thinking,
                        and visual problem solving, I like to observe with care and intent. I
                        discern patterns & correspondences. I deconstruct systems and then carefully
                        record my observations. My work spans platform engineering, developer
                        experience, workflow and operational systems, cloud and backend
                        architectures, and product-minded engineering: the connecting thread between
                        each being not a single siloed specialty, but an orientation of systems
                        reducing complexity, improving leverage, and helping people work more
                        harmoniously with technology. My interests revolve around solving problems
                        with reliability, event-driven architectures, internal tooling, and
                        automation. In addition to my experience, I bring a philosophical
                        disposition to ask why systems are built the way they are, deep pattern
                        recognition across technical and organizational domains, and a genuine
                        passion to create elegant visual representations of complex data. My best
                        work happens in environments that value ownership, thoughtful engineering,
                        cross-functional problem solving, and deep work.
                    </p>
                </div>
            </div>
        </div>
    );
}
