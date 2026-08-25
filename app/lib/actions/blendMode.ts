export enum MixBlendMode {
    MULTIPLY = 'multiply',
    SCREEN = 'screen',
    OVERLAY = 'overlay',
    DARKEN = 'darken',
    LIGHTEN = 'lighten',
    COLOR_DODGE = 'color-dodge',
    COLOR_BURN = 'color-burn',
    HARD_LIGHT = 'hard-light',
    SOFT_LIGHT = 'soft-light',
    DIFFERENCE = 'difference',
    EXCLUSION = 'exclusion',
    HUE = 'hue',
    SATURATION = 'saturation',
    COLOR = 'color',
    LUMINOSITY = 'luminosity',
    PLUS_DARKER = 'plus-darker',
    PLUS_LIGHTER = 'plus-lighter',
}

const isValidBlendMode = (mode: string) => {
    return Object.values(MixBlendMode).includes(mode as MixBlendMode);
};

export const getBlendMode = (mode: string) => {
    if (isValidBlendMode(mode)) {
        return `mix-blend-${mode}`;
    }
    return 'mix-blend-normal';
};
