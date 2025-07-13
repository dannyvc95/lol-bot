import {CacheType, ChatInputCommandInteraction, Interaction} from 'discord.js';
import {executePingCommand} from '../commands/ping';

export const handleInteractionCreate = async (interaction: Interaction<CacheType>) => {
    try {
        if (interaction.isChatInputCommand() && interaction.isCommand()) {
            const command = interaction as ChatInputCommandInteraction;

            if (command.commandName === 'ping') {
                await executePingCommand(command);
            }
        }
    } catch (error) {
        console.log(error);
    }
};
