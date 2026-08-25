import { getFontAwesomeIcon } from '@/lib/actions/getFontAwesomeIcon';
import React from 'react';

const IconComponent = getFontAwesomeIcon('User');

interface UserThumbProps {
    size: 'm' | 's';
}

export default function UserThumb({ size }: UserThumbProps) {
    return (
        <div
            className={`
            flex items-center 
            gap-2.5 rounded-[100px]
            justify-center bg-greenwhites-featherwhite
            relative
            ${size === 's' ? 'w-6 h-6' : 'w-12 h-12'}
        `}
        >
            {IconComponent && <IconComponent className="text-redblacks-blackplum" />}
        </div>
    );
}
