import {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    SlashCommandStringOption,
    AttachmentBuilder,
    EmbedBuilder,
    bold,
} from 'discord.js';

import * as cheerio from 'cheerio';
import {createCanvas, loadImage} from 'canvas';

import {colors} from '../lol/styles/colors';
import {errorEmbed} from '../templates/errorEmbed';

export const counterCommandOptions = {
    champion: 'campeón',
};

const championOption = (option: SlashCommandStringOption): SlashCommandStringOption => {
    option.setName(counterCommandOptions.champion)
        .setDescription('Elige un campeón')
        .setAutocomplete(true)
        .setRequired(true);

    return option;
};

export const counterCommand = new SlashCommandBuilder()
    .setName('counter')
    .setDescription('Obten una lista de campeones que son fuertes o débiles contra tu selección.')
    .addStringOption(championOption);

export async function executeCounterCommand(interaction: ChatInputCommandInteraction) {
    try {
        const championName = interaction.options.getString(counterCommandOptions.champion, true);

        const url = `https://www.leagueofgraphs.com/champions/tier-list/${championName.toLowerCase()}`;
        const response = await fetch(url, {headers: {'User-Agent': 'Mozilla/5.0'}});

        /**
        * Use web scraping technique to get data from leagueofgraphs.com.
        */
        if (response.ok) {
            const $ = cheerio.load(await response.text());

            const counteredBy: string[] = [];
            const counters: string[] = [];

            // Get is countered by list.
            $('.box-title:contains("Is countered by...")').next('.iconsRow').find('img').each((_, element) => {
                const alt = $(element).attr('alt');
                if (alt) {
                    counteredBy.push(alt.trim());
                };
            });

            // Get counters list.
            $('.box-title:contains("Counters...")').next('.iconsRow').find('img').each((_, element) => {
                const alt = $(element).attr('alt');
                if (alt) {
                    counters.push(alt.trim());
                };
            });

            const [countersBuffer, counteredByBuffer] = await Promise.all([
                generateCanvasFromChampionList(counters, 'tile'),
                generateCanvasFromChampionList(counteredBy, 'tile'),
            ]);

            const countersAttachment = new AttachmentBuilder(countersBuffer, {name: 'counters.png'});
            const counteredByAttachment = new AttachmentBuilder(counteredByBuffer, {name: 'counteredBy.png'});

            const referenceUrl = `https://www.leagueofgraphs.com/champions/tier-list/${championName.toLowerCase()}`;

            const countersEmbed = new EmbedBuilder()
                .setTitle(`${championName} es fuerte contra...`)
                .setThumbnail(`https://cdn.communitydragon.org/latest/champion/${championName.toLowerCase()}/tile`)
                // eslint-disable-next-line max-len
                .setDescription(`Si juegas contra ${bold(counters.join(', '))}, [${bold(championName)}](${referenceUrl}) puede ser una buena elección.`)
                .setColor(colors.diamond)
                .setImage('attachment://counters.png')
                .setFooter({
                    text: 'leagueofgraphs.com',
                    iconURL: 'https://lolg-cdn.porofessor.gg/img/s/favicon_v2.png',
                });

            const counteredByEmbed = new EmbedBuilder()
                .setTitle(`${championName} es débil contra...`)
                // eslint-disable-next-line max-len
                .setDescription(`Si juegas contra [${bold(championName)}](${referenceUrl}), es buena idea elegir entre ${bold(counteredBy.join(', '))}.`)
                .setColor(colors.master)
                .setImage('attachment://counteredBy.png')
                .setFooter({
                    text: 'leagueofgraphs.com',
                    iconURL: 'https://lolg-cdn.porofessor.gg/img/s/favicon_v2.png',
                });

            return await interaction.reply({
                embeds: [countersEmbed, counteredByEmbed],
                files: [countersAttachment, counteredByAttachment],
            });
        }
    } catch (error) {
        console.error(error);
    }

    return interaction.reply({embeds: [errorEmbed('Lo siento, no pude obtener la información.')]});
}

export async function generateCanvasFromChampionList(champions: string[], style: 'square' | 'tile'): Promise<Buffer> {
    const tileSize = 380;
    const padding = 10;
    const columns = champions.length;

    const canvasWidth = padding * 2 + columns * tileSize;
    const canvasHeight = tileSize + padding * 2;

    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');

    const images = await Promise.all(champions.map((champion) =>
        loadImage(`https://cdn.communitydragon.org/latest/champion/${champion.toLowerCase()}/${style}`)));

    for (let i = 0; i < champions.length; i++) {
        const x = padding + i * tileSize;
        const y = padding;
        ctx.drawImage(images[i], x, y, tileSize, tileSize);
    }

    return canvas.toBuffer('image/png');
}
