import React from 'react';
import { LandingContainer } from './ui/landing/LandingContainer';
import ProjectsContainer from './ui/projects/ProjectsContainer';
import CollaborateContainer from './ui/collaborate/CollaborateContainer';
import Footer from './ui/Footer';

export default function HomePage() {
    return (
        <div className="w-full overflow-x-hidden">
            <section id="landing" className="relative">
                <LandingContainer />
            </section>

            <section id="projects" className="relative">
                <ProjectsContainer />
            </section>

            <section id="contact" className="relative flex flex-col min-h-screen">
                <CollaborateContainer className="grow" />
                <Footer className="mt-auto" />
            </section>
        </div>
    );
}
