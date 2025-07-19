/* eslint-disable max-len */
import {
    APIEmbedField,
    bold,
    ChatInputCommandInteraction,
    codeBlock,
    EmbedBuilder,
    RestOrArray,
    SlashCommandBuilder,
    SlashCommandStringOption,
    unorderedList,
    userMention,
} from 'discord.js';
import {QueueType} from '../lol/types';
import {RiotGamesClient} from '../lol/client';
import {colors} from '../lol/styles/colors';
import {capitalize, emptyFields} from '../utils';
import {errorEmbed} from '../templates/errorEmbed';

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
            const errorMessage = `Asegurate de utilizar el formato correcto, por ejemplo: ${codeBlock('NoxMajesty#LAN')}`;

            return await interaction.reply({embeds: [errorEmbed(errorMessage)]});
        }

        console.log(riotId, queue);

        const embed = await getRankEmbed(riotId, queue, interaction.member?.user.id);

        if (embed) {
            return await interaction.reply({embeds: [embed]});
        }

        const errorMessage = `Lo siento, no pude encontrar a ${bold(riotId)}.\n\nPor favor verifica que:
        ${unorderedList([
        'El nombre de usuario y el tag estén escritos correctamente.',
        `La cuenta pertenezca a la región ${bold('LAN')}.`])}`;

        return await interaction.reply({embeds: [errorEmbed(errorMessage)]});

    } catch (error) {
        console.error(error);
    }
}

async function getRankEmbed(riotId: string, queue: QueueType, userId?: string): Promise<EmbedBuilder | null> {
    try {
        const gameName = riotId.split('#').at(0);
        const tagLine = riotId.split('#').at(1);

        if (gameName && tagLine) {
            const client = new RiotGamesClient();
            const account = await client.account.getAccountByRiotId(gameName, tagLine);

            if (account) {
                const leagueEntries = await client.league.getLeagueEntriesByPuuid(account.puuid);
                const leagueEntry = leagueEntries?.find(({queueType}) => queueType === queue);
                const summoner = await client.summoner.getSummonerByPuuid(account.puuid);
                const championMastery = await client.championMastery.getChampionMasteriesTopByPuuid(account.puuid);

                const topChampions = [];
                if (championMastery) {
                    const topChampionsIds = championMastery.map(({championId}) => championId);
                    for (const championId of topChampionsIds) {
                        const res = await fetch(`https://cdn.communitydragon.org/${process.env.PATCH_VERSION}/champion/${championId}/data`);
                        if (res.ok) {
                            const champion = await res.json();
                            topChampions.push(champion?.name);
                        }
                    }
                }

                if (leagueEntry) {
                    const winRate = Math.ceil((leagueEntry.wins / (leagueEntry.wins + leagueEntry.losses)) * 100);

                    const fields: RestOrArray<APIEmbedField> = [
                        ...emptyFields(1),
                        {
                            name: `🏆 Clasificatoria ${queue === 'RANKED_SOLO_5x5' ? 'solo/dúo' : 'flexible'}:`,
                            value: `${capitalize(leagueEntry.tier)} ${leagueEntry.rank} (${leagueEntry.leaguePoints} PL)`,
                            inline: false
                        },
                        ...emptyFields(1),
                        {
                            name: '📊 Tasa de victoria:',
                            value: `${winRate}% / ${leagueEntry.wins} Victorias / ${leagueEntry.losses} Derrotas`,
                            inline: false
                        },
                        ...emptyFields(1),
                        {
                            name: '🕹️ Partidas jugadas:',
                            value: `${leagueEntry.wins + leagueEntry.losses} partidas`,
                            inline: false
                        },
                        ...emptyFields(1),
                        {
                            name: '⭐️ Campeones favoritos:',
                            value: topChampions.join(', '),
                            inline: false
                        }
                    ];

                    const embed = new EmbedBuilder()
                        .setTitle(`${bold(riotId)} - ${queue === 'RANKED_SOLO_5x5' ? 'Solo/Dúo' : 'Flexible'}`)
                        .setDescription(`Hola ${userId ? userMention(userId) : 'invocador'}, esta es la información que encontré de ${bold(riotId)}:`)
                        .setColor(colors[leagueEntry.tier.toLowerCase() as keyof unknown])
                        .setImage(`${process.env.LOCAL_ASSETS_URL}/emblems/${leagueEntry.tier.toLowerCase()}.png`)
                        .setURL(encodeURI(`https://op.gg/lol/summoners/lan/${gameName}-${tagLine}`))
                        .setThumbnail(`https://cdn.communitydragon.org/${process.env.PATCH_VERSION}/profile-icon/${summoner?.profileIconId}`)
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
