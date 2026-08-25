import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allProjects, getProjectBySlug } from '@/lib/projects';

interface ProjectPageProps {
    params: { slug: string };
}

export function generateStaticParams() {
    return allProjects.map(project => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = params;
    const project = getProjectBySlug(slug);

    if (!project || project.visibility === 'disabled') {
        notFound();
    }

    return (
        <section className="min-h-[calc(100vh-4rem)] px-6 py-14 bg-brand-primary">
            <div className="max-w-4xl mx-auto rounded-lg border border-greenwhites-featherwhite bg-brand-secondary p-8">
                <p className="caption-heavy text-sm uppercase text-greengrays-nickel">Project</p>
                <h1 className="mt-2 text-4xl font-semibold text-blueblacks-bluecharcoal">
                    {project.title}
                </h1>

                <p className="mt-4 paragraph-small text-redblacks-blackplum">
                    {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.deploymentModel && (
                        <span className="rounded-full border border-greenwhites-featherwhite px-3 py-1 text-xs uppercase text-greengrays-nickel">
                            Deployment: {project.deploymentModel}
                        </span>
                    )}

                    {project.liveStatus && (
                        <span className="rounded-full border border-greenwhites-featherwhite px-3 py-1 text-xs uppercase text-greengrays-nickel">
                            Status: {project.liveStatus}
                        </span>
                    )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags?.map(tag => (
                        <span
                            key={tag}
                            className="rounded-full border border-greenwhites-featherwhite px-3 py-1 text-xs uppercase text-greengrays-nickel"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="mt-6 text-sm text-greengrays-nickel">
                    {project.externalLiveUrl && project.liveStatus === 'live'
                        ? 'External live app is available using the button below.'
                        : 'This project route is live in the portfolio. External app link will be enabled once deployment is verified.'}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center rounded-md border border-greenwhites-featherwhite px-4 py-2 text-sm text-collection-midnightgreen hover:text-collection-alizarincrimson"
                    >
                        Back to Projects
                    </Link>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md border border-greenwhites-featherwhite px-4 py-2 text-sm text-collection-midnightgreen hover:text-collection-alizarincrimson"
                    >
                        View GitHub
                    </a>

                    {project.externalLiveUrl && project.liveStatus === 'live' && (
                        <a
                            href={project.externalLiveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-md border border-greenwhites-featherwhite px-4 py-2 text-sm text-collection-midnightgreen hover:text-collection-alizarincrimson"
                        >
                            Open Live App
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}
