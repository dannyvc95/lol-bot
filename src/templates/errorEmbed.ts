import {bold, EmbedBuilder} from 'discord.js';
import {colors} from '../lol/styles/colors';

export function errorEmbed(description: string) {
    return new EmbedBuilder()
        .setTitle(bold('Algo salió mal...'))
        .setDescription(description)
        .setColor(colors.grandmaster)
        .setThumbnail('https://media.giphy.com/media/6vjrlLxW0fJlSD2Xvy/giphy.gif');
}
