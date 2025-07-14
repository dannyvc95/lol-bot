import {CacheType, ChatInputCommandInteraction, Interaction} from 'discord.js';
import {executePingCommand} from '../commands/ping';
import {executeRankCommand} from '../commands/rank';

export const handleInteractionCreate = async (interaction: Interaction<CacheType>) => {
    try {
        if (interaction.isChatInputCommand() && interaction.isCommand()) {
            const command = interaction as ChatInputCommandInteraction;

            if (command.commandName === 'ping') {
                await executePingCommand(command);
            } else if (command.commandName === 'rank') {
                await executeRankCommand(command);
            }
        }
    } catch (error) {
        console.log(error);
    }
};
