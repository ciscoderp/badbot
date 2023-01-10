require("dotenv").config();
const { Client, IntentsBitField } = require(`discord.js`);

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✅ ${c.user.username} connected to Discord`);
});

client.on("interactionCreate", (i) => {
  if (!i.isChatInputCommand()) return;
  if (i.commandName === "hey") {
    i.reply("Hay");
  }
});

client.login(process.env.TOKEN);
