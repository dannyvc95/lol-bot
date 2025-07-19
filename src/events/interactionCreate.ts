import {CacheType, ChatInputCommandInteraction, Interaction} from 'discord.js';
import {executePingCommand} from '../commands/ping';
import {executeRankCommand} from '../commands/rank';
import {counterCommandOptions, executeCounterCommand} from '../commands/counter';
import {championNames} from '../lol/championNames';

export const handleInteractionCreate = async (interaction: Interaction<CacheType>) => {
    try {
        // Handle autocomplete separately.
        if (interaction.isAutocomplete()) {
            const focusedOption = interaction.options.getFocused(true);

            if (interaction.commandName === 'counter' && focusedOption.name === counterCommandOptions.champion) {
                const query = focusedOption.value.toLowerCase();

                const filtered = championNames
                    .filter(name => name.toLowerCase().startsWith(query))
                    .slice(0, 25);

                await interaction.respond(filtered.map((name) => ({name, value: name})));
            }

            return;
        }

        // Chat command handling.
        if (interaction.isChatInputCommand() && interaction.isCommand()) {
            const command = interaction as ChatInputCommandInteraction;

            if (command.commandName === 'ping') {
                await executePingCommand(command);
            } else if (command.commandName === 'rank') {
                await executeRankCommand(command);
            } else if (command.commandName === 'counter') {
                await executeCounterCommand(command);
            }
        }
    } catch (error) {
        console.log(error);
    }
};
