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
        'bg-brand-tertiary border border-solid border-brand-secondaryvar !text-redblacks-arsenic';
    let hoverStyleClass = 'hover:bg-brand-quinary hover:!text-redblacks-vampireblack';
    let activeStyleClass = 'active:bg-brand-tertiaryvar active:!text-accent-accentbluevar';
    let loadingStyleClass =
        '[&[data-loading=true]]:bg-accent-accentbluevar [&[data-loading=true]]:border-brand-primary [&[data-loading=true]]:!text-brand-secondaryvar';
    let sizeClass = 'px-28 py-5';
    const iconPositionClass = iconPosition;
    let borderRadiusClass = 'rounded-sm';
    const IconComponent = buttonIconSelection ?? null;

    if (style === 'outlined') {
        styleClass =
            'bg-accent-accentpink border border-solid border-accent-accentpinkvar !text-redblacks-blackraspberry';
        hoverStyleClass =
            'hover:bg-accent-accentredvar hover:border-2 hover:border-accent-accentred hover:!text-redblacks-blackraspberry';
        activeStyleClass =
            'active:bg-redblacks-blackraspberry active:border-collection-portlandorangered active:!text-redgrays-silverpink';
        loadingStyleClass =
            '[&[data-loading=true]]:bg-accent-accentpink [&[data-loading=true]]:border-accent-accentpinkvar [&[data-loading=true]]:!text-redblacks-blackraspberry';
    }

    if (style === 'ghost') {
        styleClass =
            'bg-brand-quinary/75 border border-solid border-brand-quaternary !text-redblacks-vampireblack';
        hoverStyleClass =
            'hover:bg-accent-accentpinkvar/75 hover:border-2 hover-border-brand-secondaryvar hover:!text-redwhites-vistawhite shadow-btn-shadow';
        activeStyleClass =
            'active:bg-accent-accentbluevar active:border-brand-tertiary active:!text-brand-septenary';
        loadingStyleClass =
            '[&[data-loading=true]]:bg-accent-accentgreen [&[data-loading=true]]:border-brand-quinaryvar [&[data-loading=true]]:!text-accent-accentbluevar';
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
