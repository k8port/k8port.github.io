import React from 'react';

// export component to emit <defs>
export default function SvgDefs() {
    return (
        <svg>
            <defs>
                {/* SVG filters, patterns, and gradients */}
                {/* filter for mountains vector */}
                <filter id="filter0_dd_679_49">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.376471 0 0 0 0 0.380392 0 0 0 0 0.439216 0 0 0 0.16 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_679_49"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.156863 0 0 0 0 0.160784 0 0 0 0 0.239216 0 0 0 0.04 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_679_49"
                        result="effect2_dropShadow_679_49"
                    />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_679_49" />
                </filter>

                {/* pattern for mountains vector */}
                <pattern
                    id="pattern0_679_49"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image0_679_49"
                        transform="matrix(0.000507673 0 0 0.000574383 -0.539714)"
                    />
                </pattern>

                {/* radial gradient filter */}
                <filter
                    id="filter1_dd_679_49"
                    x="0"
                    y="0"
                    width="1038"
                    height="919.999"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.376471 0 0 0 0 0.380392 0 0 0 0 0.439216 0 0 0 0.16 0"
                    />
                </filter>

                {/* photo blobs patterns */}
                <pattern
                    id="pattern1_679_49"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image1_679_49"
                        transform="matrix(0.0161877 0 0 0.0117047 -2.47425 -1.03943)"
                    />
                </pattern>

                <pattern
                    id="pattern2_679_49"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image2_679_49"
                        transform="matrix(0.0117515 0.00281509 -0.00517607 0.00641246 -0.692423 -0.970428)"
                    />
                </pattern>

                <pattern
                    id="pattern3_679_49"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image3_679_49"
                        transform="matrix(0.00671243 -0.00385931 0.00610483 0.00421294 -1.66721 0.779687)"
                    />
                </pattern>

                <pattern
                    id="pattern4_679_49"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image4_679_49"
                        transform="matrix(0.0068978 -0.00511658 0.00627342 0.00558543 -1.60891 0.728144)"
                    />
                </pattern>

                <pattern
                    id="pattern5_679_49"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="image5_679_49"
                        transform="matrix(0.008909 0.00467638 -0.00392407 0.010652 -0.427449 -2.42425)"
                    />
                </pattern>

                <radialGradient
                    id="paint0_radial_679_49"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(544.6 410.5) rotate(38.3927) scale(519.283 587.519)"
                >
                    <stop stopColor="#ADFF2F" />
                    <stop offset="0.4" stopColor="#FF9C00" stopOpacity="0.75" />
                    <stop offset="0.75" stopColor="#4FFFB0" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
            </defs>
        </svg>
    );
}
