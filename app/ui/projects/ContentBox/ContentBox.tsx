import React from 'react';
import Link from 'next/link';
import PlaceholderPicture from '../PlaceholderPicture';
import Content from './Content';
import { ImageFrame } from '../../ImageFrame';
import { getFontAwesomeIcon } from '@/lib/actions/getFontAwesomeIcon';

const GitHubIcon = getFontAwesomeIcon('GitHub');
const ArrowIcon = getFontAwesomeIcon('Right Arrow');

interface ContentBoxProps {
    category?: string;
    title?: string;
    text?: string;
    image?: string;
    has_button?: boolean;
    github?: string;
    portfolioRoute?: string;
    externalLiveUrl?: string;
    liveStatus?: 'planned' | 'in-progress' | 'live';
}

export default function ContentBox({
    category,
    title,
    text,
    image,
    has_button,
    github,
    portfolioRoute,
    externalLiveUrl,
    liveStatus,
}: ContentBoxProps) {
    return (
        <div className="flex flex-col w-sm h-auto items-center relative bg-surface-raised border border-solid border-border rounded-lg">
            {!image && <PlaceholderPicture className="self-stretch h-3xs object-cover w-auto" />}

            {image && (
                <ImageFrame
                    className="self-stretch"
                    imageClassName="object-cover"
                    imageSrc={image}
                    imageAlt={title ? `${title} preview` : 'Project Image'}
                    imageWidth={348}
                    imageHeight={220}
                    unoptimized={image.endsWith('.svg')}
                />
            )}

            {title && category && text && (
                <Content
                    title={title}
                    category={category}
                    text={text}
                    name="Kate Portalatin"
                    role="Full Stack Engineer"
                />
            )}

            {has_button && (
                <div className="flex items-center gap-2 p-4 w-full border-t border-border">
                    {portfolioRoute && (
                        <Link
                            href={portfolioRoute}
                            className="inline-flex items-center gap-2 px-4 py-2 cursor-pointer text-accent hover:text-accent-strong hover:text-lg text-base whitespace-nowrap"
                        >
                            <span>View Project</span>
                            {ArrowIcon && <ArrowIcon className="w-4 h-4 hover:w-5 hover:h-5" />}
                        </Link>
                    )}

                    {externalLiveUrl && liveStatus === 'live' && (
                        <a
                            href={externalLiveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 cursor-pointer text-accent hover:text-accent-strong hover:text-lg text-base whitespace-nowrap"
                        >
                            <span>Live App</span>
                            {ArrowIcon && <ArrowIcon className="w-4 h-4 hover:w-5 hover:h-5" />}
                        </a>
                    )}

                    {externalLiveUrl && liveStatus !== 'live' && (
                        <span className="inline-flex items-center gap-2 px-4 py-2 text-greengrays-nickel text-base whitespace-nowrap">
                            Live App Coming Soon
                        </span>
                    )}

                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 cursor-pointer text-accent hover:text-accent-strong hover:text-lg text-base whitespace-nowrap"
                        >
                            {GitHubIcon && <GitHubIcon className="w-4 h-4 hover:w-5 hover:h-5" />}
                            <span>GitHub</span>
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}
