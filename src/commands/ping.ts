import {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    EmbedBuilder,
    bold,
} from 'discord.js';
import {colors} from '../lol/styles/colors';
import {RiotGamesClient} from '../lol/client';

export const pingCommand = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Revisa si el bot está en línea.');

export async function executePingCommand(interaction: ChatInputCommandInteraction) {
    try {
        const client = new RiotGamesClient();

        const embed = new EmbedBuilder()
            .setTitle(bold('Pong!'))
            .setDescription('El bot está en línea.\n\nEstado actual del servicio de League of Legends:')
            .setColor(colors.glowCyan)
            .setThumbnail('https://media.giphy.com/media/7mK9NefOGX6XqnnNGo/giphy.gif');

        // Get information about the current status of the league of legends server.
        const lolStatus = await client.lolStatus.getLolStatus();

        if (lolStatus) {
            const maintainance = {
                isWarning: lolStatus.maintenances.length > 0,
                warningMessage: `⚠️ ${lolStatus.maintenances.length} mantenimientos del servidor planeados.`,
                message: '✅ Ningún mantenimiento del servidor planeado.',
            };

            const incidents = {
                isWarning: lolStatus.incidents.length > 0,
                warningMessage: `⚠️ ${lolStatus.incidents.length} incidentes del servidor reportados.`,
                message: '✅ Ningún incidente del servidor reportado.',
            };

            embed.setFields([
                {name: 'Servidor', value: lolStatus.name, inline: true},
                {
                    name: 'Mantenimientos',
                    value: maintainance.isWarning ? maintainance.warningMessage : maintainance.message,
                },
                {
                    name: 'Incidentes',
                    value: incidents.isWarning ? incidents.warningMessage : incidents.message,
                },
            ]);
        }



        await interaction.reply({embeds: [embed]});
    } catch (error) {
        console.error(error);
    }
}
