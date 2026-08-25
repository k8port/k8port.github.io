import { useState, useRef, useEffect } from 'react';
import React from 'react';

interface PopoverProps {
    children: React.ReactNode;
    triggerLabel: string;
}

export function Popover({ triggerLabel, children }: PopoverProps) {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target as Node) &&
                !buttonRef.current?.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left">
            <button
                type="button"
                ref={buttonRef}
                onClick={() => setOpen(!open)}
                className="px-3 py-2 rounded bg-brand-secondary hover:bg-brand-primary focus:outline-none focus:ring"
                aria-haspopup="true"
            >
                {triggerLabel}
            </button>
            {open && (
                <div
                    ref={panelRef}
                    className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-secondary ring-1 ring-accent-accentgreenvar ring-opacity-5 z-50"
                    role="dialog"
                    aria-labelledby="options-menu"
                >
                    {children}
                </div>
            )}
        </div>
    );
}
