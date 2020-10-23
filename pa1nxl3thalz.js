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

if (cmd === `!dm`) {
 
 let dUser =
     
  message.guild.member(message.mentions.users.first()) ||
     
  message.guild.members.get(args[0]);
 
 if (!dUser) return message.channel.send("Can't find user!");
 
 if (!message.member.hasPermission('ADMINISTRATOR'))
  
  return message.reply("You can't you that command!");
 
 let dMessage = args.join(' ').slice(22);
 
 if (dMessage.length < 1) return message.reply('You must supply a message!');

 dUser.send(`${dUser} A moderator from WP Coding Club sent you: ${dMessage}`);

 message.author.send(
  
  `${message.author} You have sent your message to ${dUser}`
  
 );
 
}

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
