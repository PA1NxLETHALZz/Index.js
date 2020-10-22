const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.on("message", (message) => {
 
  // This code runs when the event is triggered
 
});

client.on("message", (message) => {
 
  if (message.content.startsWith("ping")) {
   
    message.channel.send("pong!");
   
  } else

  if (message.content.startsWith("foo")) {
   
    message.channel.send("bar!");
  }
 
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
