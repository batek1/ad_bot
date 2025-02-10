const { Client, Intents } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const PORT = 8080;

// Konfiguracja klienta Discord
const client = new Client({
  checkUpdate: false,
});

// Serwer HTTP do utrzymania aktywności na Render (dla darmowego tieru)
app.get('/', (req, res) => {
  res.send('Self-bot działa na Render! 🚀');
});

app.listen(PORT, () => {
  console.log(`Serwer pingujący działa na porcie ${PORT}`);
});

// Obsługa zdarzeń Discorda
client.once('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}!`);
});

// Reklama serwera
const serverAd = `
# ZAPRASZAM DO WSPÓŁPRACY NAD GRĄ W ROBLOX
**więcej informacji na pv -> alfonzo54821**
`;

// Lista użytkowników partnerstwa i ich czas ostatniego partnerstwa
const partneringUsers = new Map();
const partnershipTimestamps = new Map();



  // reklamowanie serwera
  const channelId_programming = '1252290252328927353';
  const channelId_global = '1252285992396918835';
  const zimoweall = '1252286465635782657';
  const zimowethematic = '1252289621274923152';
  const zimowetech = '1252290035953438794';
  const zimowe6h = '1252301768394543207';
  setInterval(async () => {
    const channel = client.channels.cache.get(channelId_programming);
    const channel_global = client.channels.cache.get(channelId_global);
    const zimoweall1 = client.channels.cache.get(zimoweall);
    const zimowethematic1 = client.channels.cache.get(zimowethematic);
    const zimowetech1 = client.channels.cache.get(zimowetech);
    const zimowe6h1 = client.channels.cache.get(zimowe6h);
    if (channel) {
      await channel.send(serverAd);
      await channel_global.send(serverAd);
      await zimoweall1.send(serverAd);
      await zimowethematic1.send(serverAd);
      await zimowetech1.send(serverAd);
    } else {
      console.error(`Nie znaleziono kanału o ID ${channelId_programming}`);
    }
  }, 11 * 60 * 1000); // 11 minut w milisekundach
});


// Logowanie do Discorda
client.login(process.env.DISCORD_TOKEN);
