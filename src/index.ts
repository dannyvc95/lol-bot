import dotenv from 'dotenv';
dotenv.config();

import {
    CacheType,
    Client,
    Events,
    GatewayIntentBits,
    Interaction,
} from 'discord.js';

import './deployCommands';

import {handleInteractionCreate} from './events/interactionCreate';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.once(Events.ClientReady, async (clientReady) => {
    console.log(`Bot logged in as ${clientReady.user.tag}!`);
});

client.on(Events.InteractionCreate, async (interactionCreate: Interaction<CacheType>) => {
    try {
        await handleInteractionCreate(interactionCreate);
    } catch (error) {
        console.error(error);
    }
});

client.on(Events.MessageCreate, async (messageCreate) => {
    try {
        if (messageCreate.content.startsWith('!nox')) {
            return await messageCreate.reply('Hola, Nox no está disponible en este momento.');
        }
    } catch (error) {
        console.error(error);
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
