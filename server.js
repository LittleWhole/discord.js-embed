module.exports = class Embed {
  constructor(title, description, footer, timestamp, color) {
    title = this.title
    description = this.description
    footer = this.footer
    timestamp = this.timestamp
    color = this.color
  }
  embed(title, description, footer, timestamp, color) {
    const Discord = require('discord.js');
<<<<<<< HEAD
    if (timestamp === false) return new Discord.MessageEmbed()
=======
    if (timestamp === false) return new Discord.RichEmbed()
>>>>>>> 541405bc2385454a614d9120d4b8142aade900c6
    .setTitle(title)
    .setDescription(description)
    .setFooter(footer)
    .setColor(color);
<<<<<<< HEAD
    else return new Discord.MessageEmbed()
=======
    else return new Discord.RichEmbed()
>>>>>>> 541405bc2385454a614d9120d4b8142aade900c6
    .setTitle(title)
    .setDescription(description)
    .setFooter(footer)
    .setColor(color)
    .setTimestamp();
  } 
}