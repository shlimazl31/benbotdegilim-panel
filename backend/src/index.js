import { Client, GatewayIntentBits, Collection } from 'discord.js'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs'
import express from 'express'
import cors from 'cors'

// .env dosyasını yükle
config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Express uygulamasını oluştur
const app = express()
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())

// Callback route'u
app.get('/callback', async (req, res) => {
  const { code } = req.query
  
  if (!code) {
    return res.status(400).json({ error: 'Authorization code is required' })
  }

  try {
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.REDIRECT_URI || 'http://localhost:5173/callback'
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    const tokens = await tokenResponse.json()

    if (!tokenResponse.ok) {
      throw new Error(tokens.error)
    }

    // Kullanıcı bilgilerini al
    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`
      }
    })

    const user = await userResponse.json()

    // Frontend'e yönlendir
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/dashboard?token=${tokens.access_token}`)
  } catch (error) {
    console.error('OAuth error:', error)
    res.status(500).json({ error: 'Authentication failed' })
  }
})

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

// Express sunucusunu başlat
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`)
})

// Bot'u başlat
client.login(process.env.DISCORD_TOKEN) 