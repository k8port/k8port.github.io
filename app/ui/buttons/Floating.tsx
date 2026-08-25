import React from 'react';
import { useFloating, autoUpdate } from '@floating-ui/react';

export function Floating() {
    const { refs, floatingStyles } = useFloating({
        whileElementsMounted: autoUpdate,
    });
    return (
        <>
            <button ref={refs.setReference}>Button</button>
            {/* refs.setFloating is a callback ref from @floating-ui/react, not .current access */}
            {/* eslint-disable-next-line react-hooks/refs */}
            <div ref={refs.setFloating} style={floatingStyles}>
                Tooltip
            </div>
        </>
    );
}
