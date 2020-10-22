const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'Ping') {

       message.reply('Pong');

       }

});

static void UpdatePresence()
{
    DiscordRichPresence discordPresence;
    memset(&discordPresence, 0, sizeof(discordPresence));
    discordPresence.state = "Playing Warzone";
    discordPresence.details = "1st - God Tier ";
    discordPresence.startTimestamp = 1507665886;
    discordPresence.endTimestamp = 11507665886;
    discordPresence.largeImageText = "Numbani";
    discordPresence.smallImageText = "God Tier - Level 100";
    discordPresence.partyId = "ae488379-351d-4a4f-ad32-2b9b01c91657";
    discordPresence.partySize = 1;
    discordPresence.partyMax = 100;
    Discord_UpdatePresence(&discordPresence);
}

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
