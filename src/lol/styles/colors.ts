import {ColorResolvable} from 'discord.js';

export const colors = {
    iron: '#4A4A4B',
    bronze: '#A0522D',
    silver: '#C0C0C0',
    gold: '#FFD700',
    platinum: '#1ECECE',
    emerald: '#40C040',
    diamond: '#4EA8DE',
    master: '#9A65C9',
    grandmaster: '#E34234',
    challenger: '#80FFFF',
    white: '#FFFFFF'
} as const satisfies Record<string, ColorResolvable>;
