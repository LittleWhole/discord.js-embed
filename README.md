# Introduction
`discord.js-embed` is a very simple package designed to help make `discord.js` embeds easier.
# Installation
To install `discord.js-embed`, type into the console `npm install discord.js-embed`. If your `package.json` does not update, you can manually edit your `package.json`.
# Documentation
`embed(title, description, footer, color, timestamp);`

* `title` - the title of the embed (String)
* `description` the description of the embed (String)
* `footer` the footer of the embed (String)
* `color` the color of the embed (String)
* `timestamp` whether or not the embed should have a timestamp (Boolean)
```JavaScript
const Discord = require('discord.js')
const client = new Discord.Client();
const Embed = require('discord.js-embed');
const embed = new Embed();

client.on('message', async message => {
  let myEmbed = embed.embed("This is an embed!", "This is the description of the embed", "This is the footer of the embed", "#ffffff", true);
  message.channel.send({embed: myEmbed});
});
```

If you want to add fields to your embed, you can use the `discord.js` function `addField()`:
```JavaScript
client.on('message', async message => {
  let myEmbed = embed.embed("This is an embed!", "This is the description of the embed", "This is the footer of the embed", "#ffffff", true).addField("This is the field name", "This is the field text", true);
  message.channel.send({embed: myEmbed});
});
```
