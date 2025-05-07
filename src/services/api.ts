import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

export const botService = {
  // Bot durumunu kontrol et
  getBotStatus: async () => {
    try {
      const response = await api.get('/api/bot/status')
      return response.data
    } catch (error) {
      console.error('Bot durumu alınamadı:', error)
      throw error
    }
  },

  // Sunucu listesini al
  getGuilds: async () => {
    try {
      const response = await api.get('/api/bot/guilds')
      return response.data
    } catch (error) {
      console.error('Sunucu listesi alınamadı:', error)
      throw error
    }
  },

  // Müzik kontrolü
  controlMusic: async (guildId: string, action: string, data?: any) => {
    try {
      const response = await api.post(`/api/bot/music/${guildId}/${action}`, data)
      return response.data
    } catch (error) {
      console.error('Müzik kontrolü başarısız:', error)
      throw error
    }
  },

  // Sunucu ayarlarını al
  getGuildSettings: async (guildId: string) => {
    try {
      const response = await api.get(`/api/bot/guilds/${guildId}/settings`)
      return response.data
    } catch (error) {
      console.error('Sunucu ayarları alınamadı:', error)
      throw error
    }
  },

  // Sunucu ayarlarını güncelle
  updateGuildSettings: async (guildId: string, settings: any) => {
    try {
      const response = await api.put(`/api/bot/guilds/${guildId}/settings`, settings)
      return response.data
    } catch (error) {
      console.error('Sunucu ayarları güncellenemedi:', error)
      throw error
    }
  }
}

export default api 