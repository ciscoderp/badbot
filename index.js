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

client.login(
  "MTA2MjE4MjAwNzgxMzE5Nzg4NQ.G9IVGa.47nykhCTXZk7RZzvuAu2T1k-1i1_4-86QZVc9w"
);
