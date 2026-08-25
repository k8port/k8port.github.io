// components/PhotoBlobs.jsx
import React from 'react';
import { motion } from 'framer-motion';

const blobs = [
    { id: 1, x: 0, y: 0, img: '/images/abstract-profile/abstract-profile-blob1.svg' },
    { id: 2, x: 100, y: -60, img: '/images/abstract-profile/abstract-profile-blob2.svg' },
    { id: 3, x: -80, y: 120, img: '/images/abstract-profile/abstract-profile-blob3.svg' },
];

export default function PhotoBlobs({ morphToBirds }: { morphToBirds: boolean }) {
    return (
        <>
            {blobs.map(({ id, x, y, img }, i) => (
                <motion.div
                    key={id}
                    className="absolute w-24 h-24 rounded-full bg-cover bg-center"
                    style={{ left: '50%', top: '50%', x, y, backgroundImage: `url(${img})` }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: morphToBirds ? 0 : 1,
                        scale: morphToBirds ? 0.7 : 1,
                        transition: { delay: i * 0.1 },
                    }}
                />
            ))}
        </>
    );
}
