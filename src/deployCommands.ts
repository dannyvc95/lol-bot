import {REST, Routes} from 'discord.js';
import {config} from 'dotenv';
import {pingCommand} from './commands/ping';


config();

const commands = [
    pingCommand.toJSON(),
];

const rest = new REST({version: '10'}).setToken(process.env.DISCORD_BOT_TOKEN!);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        console.log(commands.map(({name}) => name));

        await rest.put(
            Routes.applicationCommands(process.env.DISCORD_CLIENT_ID!),
            {body: commands},
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
