import {bold, EmbedBuilder} from 'discord.js';
import {colors} from '../lol/styles/colors';

export function errorEmbed(description: string) {
    return new EmbedBuilder()
        .setTitle(bold('Algo salió mal...'))
        .setDescription(description)
        .setColor(colors.grandmaster)
        .setImage('https://media.giphy.com/media/Jp5TA7lfVfiOZ3hL53/giphy.gif');
}
