import {
    APIEmbedField,
    bold,
    ChatInputCommandInteraction,
    EmbedBuilder,
    RestOrArray,
    SlashCommandBuilder,
    SlashCommandStringOption,
} from 'discord.js';
import {QueueType} from '../lol/types';
import {RiotGamesClient} from '../lol/client';
import {colors} from '../lol/styles/colors';
import {capitalize} from '../utils';

const rankCommandOptions = {
    summoner: 'invocador',
    queue: 'cola'
};

const summonerOption = (option: SlashCommandStringOption): SlashCommandStringOption => {
    option.setName(rankCommandOptions.summoner)
        .setDescription('Escribe tu Riot ID, por ejemplo: NoxMajesty#LAN')
        .setRequired(true);

    return option;
};

const queueOption = (option: SlashCommandStringOption): SlashCommandStringOption => {
    option.setName(rankCommandOptions.queue)
        .setDescription('Elige una cola clasificatoria')
        .addChoices(
            {name: 'Solo/dúo', value: 'RANKED_SOLO_5x5'},
            {name: 'Flexible', value: 'RANKED_FLEX_SR'}
        )
        .setRequired(false);

    return option;
};

export const rankCommand = new SlashCommandBuilder()
    .setName('rank')
    .setDescription('Obten información de tu liga y división actual entre otra información.')
    .addStringOption(summonerOption)
    .addStringOption(queueOption);

export async function executeRankCommand(interaction: ChatInputCommandInteraction) {
    try {
        const riotId = interaction.options.getString(rankCommandOptions.summoner, true);

        // Use solo/duo queue by default in case it is not specified.
        const queue: QueueType = interaction.options.getString(rankCommandOptions.queue) as QueueType ||
            'RANKED_SOLO_5x5';

        if (!riotId.includes('#')) {
            return await interaction.reply('Riot ID incompleto, asegurate the incluir tu lema.');
        }

        console.log(riotId, queue);

        const embed = await getRankEmbed(riotId, queue);

        if (embed) {
            return await interaction.reply({embeds: [embed]});
        }

    } catch (error) {
        console.error(error);
    }
}

async function getRankEmbed(riotId: string, queue: QueueType): Promise<EmbedBuilder | null> {
    try {
        const gameName = riotId.split('#').at(0);
        const tagLine = riotId.split('#').at(1);

        if (gameName && tagLine) {
            const client = new RiotGamesClient();
            const account = await client.account.getAccountByRiotId(gameName, tagLine);

            if (account) {
                const leagueEntries = await client.league.getLeagueEntriesByPuuid(account.puuid);
                const leagueEntry = leagueEntries?.find(({queueType}) => queueType === queue);

                if (leagueEntry) {
                    const winRate = Math.ceil((leagueEntry.wins / (leagueEntry.wins + leagueEntry.losses)) * 100);

                    const fields: RestOrArray<APIEmbedField> = [
                        {
                            name: `🏆 ${queue === 'RANKED_SOLO_5x5' ? 'Solo/dúo' : 'Flexible'}`,
                            value: `${capitalize(leagueEntry.tier)} ${leagueEntry.rank} ${leagueEntry.leaguePoints} PL`,
                            inline: true
                        },
                        {
                            name: '📊 Tasa de victoria',
                            value: `${winRate}% ${leagueEntry.wins}V ${leagueEntry.losses}D`,
                            inline: true
                        }
                    ];

                    const embed = new EmbedBuilder()
                        .setTitle(`${bold(riotId)}`)
                        .setDescription('Esta es tu información de clasificatoria:')
                        .setColor(colors[leagueEntry.tier.toLowerCase() as keyof unknown])
                        .setImage(`${process.env.LOCAL_ASSETS_URL}/emblems/${leagueEntry.tier.toLowerCase()}.png`)
                        .setURL(`https://op.gg/lol/summoners/lan/${gameName}-${tagLine}`)
                        .setFields(fields);

                    return embed;
                }
            }
        }
    } catch (error) {
        console.error(error);
    }

    return null;
}
