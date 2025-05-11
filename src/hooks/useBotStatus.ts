import { useState, useEffect } from 'react';

interface BotStatus {
  status: string;
  uptime: number;
  guilds: number;
  ping: number;
}

export const useBotStatus = () => {
  const [status, setStatus] = useState<BotStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        console.log('API isteği başlatılıyor...');
        
        // API isteği için timeout ekle
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 saniye timeout

        const response = await fetch('https://173.212.247.209:3000/api/bot/status', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        clearTimeout(timeoutId);
        console.log('API yanıt durumu:', response.status);
        
        if (!response.ok) {
          throw new Error(`API yanıt vermedi: ${response.status}`);
        }

        const data = await response.json();
        console.log('Ham API yanıtı:', data);

        // Veri kontrolü ve dönüşümü
        if (!data || typeof data !== 'object') {
          console.error('Geçersiz API yanıtı:', data);
          throw new Error('Geçersiz API yanıtı');
        }

        // Gerekli alanların varlığını kontrol et
        if (!('status' in data) || !('uptime' in data) || !('guilds' in data)) {
          console.error('Eksik veri alanları:', data);
          throw new Error('API yanıtında eksik alanlar var');
        }

        // API'den gelen veriyi doğrudan kullan
        const formattedData = {
          status: String(data.status),
          uptime: Number(data.uptime),
          guilds: Number(data.guilds),
          ping: Number(data.ping)
        };

        console.log('İşlenmiş veri:', formattedData);
        setStatus(formattedData);
        setError(null); // Başarılı durumda hata mesajını temizle
      } catch (err) {
        console.error('API hatası:', err);
        
        // Hata mesajını daha anlaşılır hale getir
        let errorMessage = 'Bir hata oluştu';
        if (err instanceof Error) {
          if (err.name === 'AbortError') {
            errorMessage = 'API yanıt vermedi (zaman aşımı)';
          } else if (err.message.includes('Failed to fetch')) {
            errorMessage = 'API\'ye bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.';
          } else {
            errorMessage = err.message;
          }
        }
        
        setError(errorMessage);
        
        // Hata durumunda mevcut durumu koru
        if (!status) {
          setStatus({
            status: 'offline',
            uptime: 0,
            guilds: 0,
            ping: 0
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    // Her 30 saniyede bir güncelle
    const interval = setInterval(fetchStatus, 30000);

    return () => clearInterval(interval);
  }, []);

  return { status, loading, error };
}; 