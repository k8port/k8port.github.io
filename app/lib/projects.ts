import projectsData from '../data/projects.json';

export type LiveStatus = 'planned' | 'in-progress' | 'live';
export type DeploymentModel = 'internal-static' | 'external-static' | 'external-cloud' | 'hybrid';

export interface ProjectEntry {
    key: string;
    slug: string;
    title: string;
    description: string;
    github: string;
    tags: string[];
    image?: string;
    portfolioRoute?: string;
    externalLiveUrl?: string;
    deploymentModel?: DeploymentModel;
    liveStatus?: LiveStatus;
    ctaPrimaryLabel?: string;
    ctaSecondaryLabel?: string;
    visibility?: 'public' | 'private-demo' | 'disabled';
}

export const allProjects: ProjectEntry[] = projectsData as ProjectEntry[];

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
    return allProjects.find(project => project.slug === slug);
}
