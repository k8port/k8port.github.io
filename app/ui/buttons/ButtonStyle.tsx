import React from 'react';
import { ShapeCircle } from '../icons/ShapeCircle';
import { Rec } from '../icons/Rec';
import { IconType } from 'react-icons/lib';

interface ButtonStyleProps {
    style: 'filled' | 'ghost' | 'outlined';
    iconPosition:
        | 'left-icon'
        | 'right-icon'
        | 'no-icon'
        | 'left-icon-right-text'
        | 'right-icon-left-text';
    size: 'large' | 'medium' | 'small' | 'tiny';
    borderRadius: 'four' | 'eight' | 'sixteen' | 'thirty-two';
    buttonText: string;
    buttonIconSelection?: IconType;
    onClick?: () => void;
}

export const ButtonStyle = ({
    style,
    iconPosition,
    size,
    borderRadius,
    buttonText,
    buttonIconSelection,
    onClick,
}: ButtonStyleProps) => {
    let styleClass =
        'bg-surface-raised border border-solid border-border !text-content';
    let hoverStyleClass = 'hover:bg-surface-muted hover:!text-heading';
    let activeStyleClass = 'active:bg-surface-elevated active:!text-accent';
    let loadingStyleClass =
        '[&[data-loading=true]]:bg-surface-elevated [&[data-loading=true]]:border-border [&[data-loading=true]]:!text-content';
    let sizeClass = 'px-28 py-5';
    const iconPositionClass = iconPosition;
    let borderRadiusClass = 'rounded-sm';
    const IconComponent = buttonIconSelection ?? null;

    if (style === 'outlined') {
        styleClass =
            'bg-accent/20 border border-solid border-accent !text-accent-strong';
        hoverStyleClass =
            'hover:bg-accent/40 hover:border-2 hover:border-accent hover:!text-heading';
        activeStyleClass =
            'active:bg-accent/60 active:border-accent-strong active:!text-content';
        loadingStyleClass =
            '[&[data-loading=true]]:bg-accent/30 [&[data-loading=true]]:border-accent [&[data-loading=true]]:!text-accent-strong';
    }

    if (style === 'ghost') {
        styleClass =
            'bg-surface-muted/80 border border-solid border-border !text-content';
        hoverStyleClass =
            'hover:bg-surface-elevated hover:border-2 hover:border-border-strong hover:!text-heading shadow-btn-shadow';
        activeStyleClass =
            'active:bg-surface-raised active:border-border active:!text-accent';
        loadingStyleClass =
            '[&[data-loading=true]]:bg-surface-elevated [&[data-loading=true]]:border-border [&[data-loading=true]]:!text-content';
    }

    if (size === 'medium') {
        sizeClass = 'px-12 py-4';
    } else if (size === 'small') {
        sizeClass = 'px-10 py-3';
    } else if (size === 'large') {
        sizeClass = 'px-28 py-5';
    } else {
        sizeClass = 'px-8 py-2';
    }

    if (borderRadius === 'eight') {
        borderRadiusClass = 'rounded-lg';
    } else if (borderRadius === 'sixteen') {
        borderRadiusClass = 'rounded-2xl';
    } else if (borderRadius === 'thirty-two') {
        borderRadiusClass = 'rounded-full';
    } else {
        borderRadiusClass = 'rounded-sm';
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                inline-flex items-center 
                justify-center gap-1 
                ${sizeClass}
                ${styleClass}
                ${hoverStyleClass}
                ${activeStyleClass}
                ${loadingStyleClass}
                ${iconPositionClass}
                ${borderRadiusClass}
                border border-solid
                shadow-btn-shadow6
                cursor-pointer
        `}
        >
            <div
                className={`
                inline-flex 
                items-end 
                data-[loading='true']:items-center
                gap-1.5 
                relative 
                flex-[0_0_auto]
            `}
            >
                <div
                    className={`
                    relative
                    w-fit mt-[px] 
                    whitespace-nowrap 
                    not-italic
                    text-[10.5px]
                    capitalize
                    data-[loading='true']:text-transparent
                    tracking-tight
                `}
                >
                    {IconComponent && <IconComponent className="inline-flex mx-auto w-5 h-5" />}
                    <span className="data-[loading=true]:hidden mx-2 mt-t font-josefinsans">
                        {buttonText}
                    </span>
                </div>
                <div
                    className={`
                    text-greenblacks-jade
                    active:text-bluewhites-ghostwhite
                    inline-flex
                    items-center
                    gap-1.5
                    relative
                    uppercase
                `}
                >
                    <Rec className="hidden group-data-[loading=true]:inline-block animate-spin relative! w-2! h-2!" />
                    <ShapeCircle className="hidden relative! w-3.5! h-3.5! group-data-[loading=true]:w-4! group-data-[loading=true]:h-4!" />
                    <Rec className="hidden group-data-[loading=true]:inline-block animate-spin relative! w-2! h-2!" />
                </div>
            </div>
        </button>
    );
};
