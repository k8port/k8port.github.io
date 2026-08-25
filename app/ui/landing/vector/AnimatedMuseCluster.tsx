import React from 'react';
import { AnimatedMuseGroup } from './AnimatedMuseGroup';

interface AnimatedMuseClusterProps {
    /** Shared vertical offset for the whole cluster, as a literal Tailwind class (e.g. "top-2"). */
    top: string;
    /** Per-muse "right-* size-*" literal Tailwind classes describing the arrangement. */
    muses: string[];
}

export const AnimatedMuseCluster = ({ top, muses }: AnimatedMuseClusterProps) => (
    <>
        {muses.map((muse, i) => (
            <AnimatedMuseGroup key={i} className={`absolute ${top} ${muse}`} />
        ))}
    </>
);
