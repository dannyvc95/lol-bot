import {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    EmbedBuilder,
    bold,
    unorderedList,
} from 'discord.js';
import {colors} from '../lol/styles/colors';
import {RiotGamesClient} from '../lol/client';
import {emptyFields} from '../utils';
import {StatusDto} from '../lol/types/StatusDto';

/**
 * Define the ping command.
 */
export const pingCommand = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Revisa si el bot está en línea.');

/**
 * Handles the ping command.
 * @param interaction
 * @returns
 */
export async function executePingCommand(interaction: ChatInputCommandInteraction) {
    try {
        /**
         * Create the base embed for the reply.
         */
        const embed = new EmbedBuilder()
            .setTitle(bold('Pong!'))
            .setDescription('El bot está en línea.')
            .setColor(colors.emerald)
            .setThumbnail('https://media.giphy.com/media/7mK9NefOGX6XqnnNGo/giphy.gif');

        /**
         * Use the Riot Games client to get information about the current server status.
         */
        const client = new RiotGamesClient();
        const lolStatus = await client.lolStatus.getLolStatus();

        if (lolStatus) {
            const showMaintenances = lolStatus.maintenances.length > 0;
            const showIncidents = lolStatus.incidents.length > 0;

            const serverStatus = showMaintenances || showIncidents ?
                '⚠️ Información de mantenimientos/incidentes disponible.' :
                '✅ En línea.';

            /**
             * Add fields to indicate the selected server and the current status.
             */
            const fields = [
                {name: 'Servidor:', value: `📍 ${lolStatus.name}`, inline: true},
                {name: 'Estado del servidor:', value: serverStatus, inline: true},
            ];

            /**
             * If there are maintenances to show, add the list of entries and set a warning color for the embed.
             */
            if (showMaintenances) {
                fields.push(
                    ...emptyFields(1),
                    {
                        name: '🗓️ Mantenimientos:',
                        value:  unorderedList(formatLolStatusContent(lolStatus.maintenances)),
                        inline: false
                    }
                );

                embed.setColor(colors.gold);
            }

            /**
             * If there are incidents to show, add the list of entries and set a danger color for the embed.
             */
            if (showIncidents) {
                fields.push(
                    ...emptyFields(3),
                    {
                        name: '⚠️ Incidentes:',
                        value:  unorderedList(formatLolStatusContent(lolStatus.incidents)),
                        inline: false
                    }
                );

                embed.setColor(colors.grandmaster);
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

    const matchLocale = (locale: string) => locale === process.env.LOCALE;

    status.forEach(({titles, updates}) => {
        const title = titles.find(({locale}) => matchLocale(locale))?.content?.replace('.', '') ?? '';
        // TODO: add logic to get the latest update instead of the first item of the array.
        const update = updates.at(0)?.translations.find(({locale}) => matchLocale(locale))?.content ?? '';

        items.push(`${bold(title)}: ${update}`);
    });

    return items;
}
