import {ColorResolvable} from 'discord.js';

export const colors = {
    /** Deep, mystical blue background */
    darkBlue: '#0A1428',

    /** Lighter blue for accents and highlights */
    mediumBlue: '#1E3A5F',

    /** Glowing cyan for energy effects */
    hextechCyan: '#00FFFF',

    /** Softer cyan for glows/fades */
    glowCyan: '#00C8FF',

    /** Rich gold for ornate metal accents */
    hextechGold: '#C89B3C',

    /** Brushed metal with a warm bronze tone */
    bronze: '#A37C27',

    /** Cold steel used in frames and machinery */
    steelGray: '#2C2F3A',

    /** Light gray for UI highlights */
    lightGray: '#B5BDC6',
} as const satisfies Record<string, ColorResolvable>;
