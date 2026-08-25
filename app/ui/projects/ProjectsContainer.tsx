'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import { allProjects } from '@/lib/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projectMap = allProjects.map(project => ({
    ...project,
    tags: (project.tags ?? []).map(tag => tag.toLowerCase()),
}));

export default function ProjectsContainer() {
    return (
        <section className="px-8 py-16 bg-surface-raised border border-border rounded-lg shadow-lg shadow-inset-lg">
            <div className="max-w-screen-xl mx-auto mb-8 text-center">
                <h2 className="caption-heavy text-lg uppercase text-heading">
                    Portfolio Software Projects
                </h2>
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                navigation
                pagination={{ clickable: true }}
                grabCursor={true}
                simulateTouch={true}
                touchRatio={1}
                touchAngle={45}
                touchStartPreventDefault={false}
                touchMoveStopPropagation={false}
                touchReleaseOnEdges={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        centeredSlides: true,
                    }, // mobile
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        centeredSlides: false,
                    }, // tablet
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        centeredSlides: false,
                    }, // laptop
                    1280: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        centeredSlides: false,
                    }, // desktop +
                }}
                className="swiper-fullwidth"
            >
                {projectMap.map((proj, i) => (
                    <SwiperSlide key={i} className="w-full">
                        <ProjectCard
                            project={proj}
                            className="bg-surface-elevated border border-border h-full flex-row justify-center"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
