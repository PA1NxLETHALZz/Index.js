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

client.on("message", (message) => {
 
  if (message.content.startsWith("Ping")) {
   
    message.channel.send("Pong!");
   
  } else

  if (message.content.startsWith("Foo")) {
   
    message.channel.send("Bar!");
  }
 
});

case 'dm':
  mentiondm = message.mentions.users.first();
  message.channel.bulkDelete(1);
  if (!message.member.roles.cache.some(role => role.name === "Owner")) return message.channel.send('Beep Boing: This command is way too powerful for you to use!');
  if (mentiondm == null) return message.reply('Beep Boing: No user to send message to!');
  mentionMessage = message.content.slice(3);
  mentiondm.send(mentionMessage);
  console.log('Message Sent!')
  break;

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
