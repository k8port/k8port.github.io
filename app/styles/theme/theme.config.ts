import { neutral_blacks } from '../colors/neutrals/blacks';
import { neutral_whites } from '../colors/neutrals/whites';
import { neutral_grays } from '../colors/neutrals/grays';
import { neutral_browns } from '../colors/neutrals/browns';
import { spectrum_blues } from '../colors/spectrum/blues';
import { theme } from './theme_light';
import { darkThemeColors } from './theme_dark';
import { proficiencies } from '../colors/proficiencies';
import { collection } from '../colors/collection';
import { typography } from '../typography/typography';
import { lightThemeButtonShadows, darkThemeButtonShadows } from './shadows';

export const themeConfig = {
    colors: {
        ...theme.colors,
        ...darkThemeColors.colors.brand,
        ...darkThemeColors.colors.accent,
        ...neutral_blacks,
        ...neutral_grays,
        ...neutral_browns,
        ...neutral_whites,
        ...spectrum_blues,
        ...proficiencies,
        ...collection
    },
    typography: {
        ...typography.font,
    },
    shadows: {
        ...theme.shadows,
        ...darkThemeColors.shadows,
        ...lightThemeButtonShadows,
        ...darkThemeButtonShadows,
    },
    spacing: {
        header: 'var(--header-height)',
        footer: 'var(--footer-margin)',
    },
    screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        mlg: '900px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1600px',
        '4xl': '1800px',
        '5xl': '2000px',
    },
    textShadow: {
        'btn-text-shadow': {
            '2px 2px 0 rgba(45,70,58,0.75)': '-2px -2px 0 rgba(45,70,58,0.75)',
            '2px -2px 0 rgba(45,70,58,0.75)': '-2px 2px 0 rgba(45,70,58,0.75)',
        },
    },
    transition: {
        default: 'all 0.3s ease-in-out',
        fast: 'all 0.15s ease-in-out',
        slow: 'all 0.5s ease-in-out',
    },
    zIndex: {
        header: '50',
        modal: '100',
        tooltip: '200',
    },
} as const;
