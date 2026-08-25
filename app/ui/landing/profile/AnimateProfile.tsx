import { motion, useAnimation } from 'motion/react';
import React from 'react';
import { blobData, N } from '../../../data/blob_data';
import SvgDefs from './SvgDefs';

// 2️⃣ SVG-Masked Blobs
export default function AnimateProfile({
    animateState,
}: {
    animateState: 'explode' | 'reassemble';
}) {
    const controls = useAnimation();

    React.useEffect(() => {
        if (animateState === 'explode') {
            controls.start(i => ({
                x: 100 * Math.cos((2 * Math.PI * i) / N),
                y: 100 * Math.sin((2 * Math.PI * i) / N),
                rotate: 360,
                transition: { duration: 1, ease: 'easeOut' },
            }));
        } else if (animateState === 'reassemble') {
            controls.start({
                x: 0,
                y: 0,
                rotate: 0,
                transition: { duration: 1, ease: 'easeIn' },
            });
        }
    }, [animateState, controls]);

    return (
        <motion.svg
            width={1038}
            height={920}
            viewBox="0 0 1038 920"
            style={{ display: 'block', margin: 'auto' }}
        >
            {/* Define filters, gradients, and patterns */}
            <SvgDefs />

            <g filter="url(#filter0_dd_679_49">
                {/* background moon and mountains vector */}
                <path
                    d="M798.696 823.776C584.283 986.683 308.45 873.544 128.767 754.564C111.983 723.597 -89.4372 557.268 75.5189 227.558C227.024 -75.2669 749.653 -36.5077 905.229 164.623C1060.81 365.755 1107.97 516.056 798.696 823.776Z"
                    fill="url(#pattern0_679_49)"
                />
                {/* picture orb border */}
                <path
                    d="M488.82 5.60748C573.519 4.09333 658.354 18.3589 731.78 45.6133C805.191 72.8623 867.298 113.134 906.415 163.705C984.224 264.297 1035.24 352.552 1027.78 454.339C1020.31 556.086 954.448 670.922 799.754 824.839L799.683 824.909L799.604 824.97C691.969 906.748 568.94 919.201 450.424 896.351C331.938 873.506 217.871 815.365 127.938 755.815L127.627 755.607L127.448 755.278C125.441 751.575 120.592 745.739 113.741 737.512C106.95 729.356 98.3259 719.002 88.9658 706.415C70.2431 681.239 48.5628 647.114 32.582 603.607C0.599355 516.533 -8.47665 392.094 74.1777 226.887C150.28 74.7752 319.486 8.63477 488.82 5.60748Z"
                    stroke="#E9FFDB"
                    strokeWidth="3"
                />

                <g opacity="0.25" filter="url(#filter1_dd_679_49)">
                    {/* Radial gradient overlay */}
                    <path
                        d="M798.696 823.775C584.283 986.683 308.45 873.544 128.767 754.564C111.983 723.597 -89.4371 557.268 75.519 227.558C227.024 -75.2669 749.653 -36.5077 905.229 164.623C1060.81 365.755 1107.97 516.056 798.696 823.775Z"
                        fill="url(#paint0_radial_679_49)"
                    />
                    <path
                        d="M488.82 5.60748C573.519 4.09334 658.354 18.3589 731.78 45.6133C805.191 72.8623 867.298 113.134 906.415 163.705C984.224 264.297 1035.24 352.552 1027.78 454.339C1020.31 556.086 954.448 670.922 799.754 824.839L799.683 824.909L799.604 824.97C691.969 906.748 568.94 919.201 450.424 896.351C331.938 873.506 217.871 815.365 127.938 755.815L127.627 755.607L127.448 755.278C125.441 751.575 120.592 745.738 113.741 737.511C106.95 729.355 98.3258 719.001 88.9658 706.415C70.2431 681.239 48.5628 647.114 32.582 603.607C0.599345 516.533 -8.47666 392.094 74.1777 226.887C150.28 74.7752 319.486 8.63477 488.82 5.60748Z"
                        stroke="#E9FFDB"
                        strokeWidth="3"
                    />
                </g>
            </g>

            {blobData.map(({ d, patternId }, i) => (
                <motion.path
                    key={i}
                    d={d}
                    fill={`url(#${patternId})`}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    custom={i}
                    initial={{ x: 0, y: 0, rotate: 0 }}
                    animate={controls}
                />
            ))}
        </motion.svg>
    );
}
