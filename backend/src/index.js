import { Client, GatewayIntentBits, Collection } from 'discord.js'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs'

// .env dosyasını yükle
config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Discord client'ı oluştur
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
  ],
})

// Komutları yükle
client.commands = new Collection()
const commandsPath = join(__dirname, 'commands')
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
  const filePath = join(commandsPath, file)
  const command = await import(filePath)
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command)
  }
}

// Event'leri yükle
const eventsPath = join(__dirname, 'events')
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
  const filePath = join(eventsPath, file)
  const event = await import(filePath)
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args))
  } else {
    client.on(event.name, (...args) => event.execute(...args))
  }
}

// Bot'u başlat
client.login(process.env.DISCORD_TOKEN) 