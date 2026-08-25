// app/fonts.ts
import {
    Josefin_Sans,
    Zilla_Slab,
    Lobster
} from 'next/font/google';

export const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    variable: '--font-josefinsans',
    display: 'swap',
});

export const fontZillaSlab = Zilla_Slab({
    subsets: ['latin'],
    weight: ['300','400','500','600','700'],
    variable: '--font-zillaslab',
    display: 'swap',
});

export const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-lobster',
    display: 'swap',
});