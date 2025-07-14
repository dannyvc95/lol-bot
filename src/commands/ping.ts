import {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    EmbedBuilder,
    bold,
    unorderedList,
} from 'discord.js';
import {colors} from '../lol/styles/colors';
import {RiotGamesClient} from '../lol/client';
import {fieldDivisor} from '../utils';
import {StatusDto} from '../lol/types/StatusDto';

export const pingCommand = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Revisa si el bot está en línea.');

export async function executePingCommand(interaction: ChatInputCommandInteraction) {
    try {
        const embed = new EmbedBuilder()
            .setTitle(bold('Pong!'))
            .setDescription('El bot está en línea.\n\nEstado actual del servicio de League of Legends:')
            .setColor(colors.green)
            .setThumbnail('https://media.giphy.com/media/7mK9NefOGX6XqnnNGo/giphy.gif');

        const client = new RiotGamesClient();

        // Get information about the current status of the league of legends server.
        const lolStatus = await client.lolStatus.getLolStatus();

        if (lolStatus) {
            const fields = [
                {
                    name: 'Servidor:',
                    value: lolStatus.name,
                    inline: false,
                },
                ...fieldDivisor(3),
                {
                    name: '🗓️ Mantenimientos planeados:',
                    value: `${lolStatus.maintenances.length} mantenimiento(s).`,
                    inline: true,
                },
                {
                    name: '⚠️ Incidentes reportados:',
                    value: `${lolStatus.incidents.length} incidente(s).`,
                    inline: true,
                }
            ];

            if (lolStatus.maintenances.length > 0) {
                fields.push(
                    ...fieldDivisor(3),
                    {
                        name: 'Mantenimientos planeados:',
                        value:  unorderedList(formatLolStatusContent(lolStatus.maintenances)),
                        inline: false
                    }
                );
            }

            if (lolStatus.incidents.length > 0) {
                fields.push(
                    ...fieldDivisor(3),
                    {
                        name: 'Incidentes reportados:',
                        value:  unorderedList(formatLolStatusContent(lolStatus.incidents)),
                        inline: false
                    }
                );
            }

            embed.setFields(fields);
        }

        return await interaction.reply({embeds: [embed]});
    } catch (error) {
        console.error(error);
    }
}

function formatLolStatusContent(status: StatusDto[]): string[] {
    const items: string[] = [];

    const matchLocale = (locale: string) => locale === process.env.PREFERRED_LOCALE;

    status.forEach(({titles, updates}) => {
        const title = titles.find(({locale}) => matchLocale(locale))?.content ?? '';
        // TODO: add logic to get the latest update instead of the first item of the array.
        const update = updates.at(0)?.translations.find(({locale}) => matchLocale(locale))?.content ?? '';

        items.push(`${bold(title)}: ${update}`);
    });

    return items;
}
