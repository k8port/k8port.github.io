import React from 'react';
import ContentBox from './ContentBox/ContentBox';

interface ProjectCardProps {
    project: {
        key: string;
        slug: string;
        title: string;
        description: string;
        image?: string;
        github: string;
        portfolioRoute?: string;
        externalLiveUrl?: string;
        liveStatus?: 'planned' | 'in-progress' | 'live';
        tags?: string[];
        year?: number;
    };
    className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <div className={`flex flex-col items-start gap-4 p-4 ${className}`}>
            <ContentBox
                title={project.title}
                text={project.description}
                category={`${project.tags?.join(', ')}`}
                github={project.github}
                portfolioRoute={project.portfolioRoute}
                externalLiveUrl={project.externalLiveUrl}
                liveStatus={project.liveStatus}
                image={project.image}
                has_button={true}
            />
        </div>
    );
}
