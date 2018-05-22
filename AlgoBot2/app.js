//Require Dependencies
const discord = require('discord.js');
const fs = require('fs');
//Config Files
const login_config = require('./config.json');
//Initialize Bot
const client = new discord.Client();

//Help Command (showing startsWith element)
client.on('message', message => {
  if (message.author.bot) return;
  let prefix = '!';
  if (message.content.startsWith(prefix) && message.content === '!help') {
    message.channel.send(
      'Public Command:[ dm , avt , whats my id , whats this server , am i the admin ]'
    );
    message.channel.send(
      '-------------------------------------------------------------------------------------------'
    );
    message.channel.send('Admin Commnad:[ ping ]');
  }
});

//Return the Channel name of the sender
client.on('message', message => {
  if (message.content === 'whats this server') {
    message.channel.send(message.guild.name);
  }
});

//Return the username of the sender
client.on('message', message => {
  if (message.content === 'whats my id') {
    message.channel.send(message.member.user.username);
  }
});

//Check if the sender of the message if the @Owner
client.on('message', message => {
  if (message.content === 'am i the admin') {
    message.channel.send(
      message.member.roles.some(find => ['Owner', 'Programmer', 'Back-End Dev.', 'Front-End Dev.'].includes(
        find.name
      ))
    );
  }
});
//DM the sender of the message
client.on('message', message => {
  if (message.content === 'dm') {
    message.author.send("'Yo! What'Up!");
  }
});
//Retrieve the Avartar URL of the sender
client.on('message', message => {
  if (message.content === 'avt') {
    message.reply(message.author.avatarURL);
  }
});
//Respond to Ping only if the sender is Mod or ME!
client.on('message', message => {
  if (
    message.author.username === 'alexlo0612' &&
    (message.content === 'ping' &&
      message.member.roles.some(
        role => ['Owner', 'Programmer', 'Back-End Dev.', 'Front-End Dev.'].includes(
          role.name
        ) == true
      ))
  ) {
    message.channel.send('Pong!');
  }
});

//Server Greeting!
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(
    `Greeting from team The Algorithm: Welcome to the server, ${member}`
  );
});

//Auth Bot
client.login(login_config.token);