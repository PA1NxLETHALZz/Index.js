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

import discord

from discord.ext.commands import commands,has_permissions, MissingPermissions

import json

with open('reports.json', encoding='utf-8') as f:

  try:
    report = json.load(f)

  except ValueError:

    report = {}

    report['users'] = []

client = discord.ext.commands.Bot(command_prefix = '?')

@client.command(pass_context = True)

@has_permissions(manage_roles=True, ban_members=True)

async def warn(ctx,user:discord.User,*reason:str):

  if not reason:

    await client.say("Please provide a reason")

    return
  reason = ' '.join(reason)

  for current_user in report['users']:
  
    if current_user['name'] == user.name:
    
      current_user['reasons'].append(reason)

      break

  else:
  
    report['users'].append({
     
      'name':user.name,
     
      'reasons': [reason,]
     
    })

  with open('reports.json','w+') as f:

    json.dump(report,f)

@client.command(pass_context = True)

async def warnings(ctx,user:discord.User):

  for current_user in report['users']:
  
    if user.name == current_user['name']:
    
      await client.say(f"{user.name} has been reported {len(current_user['reasons'])} times : {','.join(current_user['reasons'])}")

      break
  else:
  
    await client.say(f"{user.name} has never been reported")  

@warn.error

async def kick_error(error, ctx):

  if isinstance(error, MissingPermissions):
  
      text = "Sorry {}, you do not have permissions to do that!".format(ctx.message.author)

      await client.send_message(ctx.message.channel, text)   

client.run("BOT_TOKEN")

});

client.on("message", (message) => {
 
  if (message.content.startsWith("Ping")) {
   
    message.channel.send("Pong!");
   
  } else

  if (message.content.startsWith("Foo")) {
   
    message.channel.send("Bar!");
  }
 
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
