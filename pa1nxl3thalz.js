const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('Ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'Ping') {

       message.reply('Pong');

       }

});

client.on("message", (message) => {
 
  // This code runs when the event is triggered
 
});

client.on("message", (message) => {
 
  if (message.content.startsWith("Ping")) {
   
    message.channel.send("Pong!");
   
  } else

  if (message.content.startsWith("Foo")) {
   
    message.channel.send("Bar!");
  }
 
});

// Set the prefix

const prefix = "!";

client.on("message", (message) => {
 
  // Exit and stop if it's not there
 
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "Ping")) {
   
    message.channel.send("pong!");
   
  } else
   
  if (message.content.startsWith(prefix + "foo")) {
   
    message.channel.send("bar!");
   
  }
 
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
