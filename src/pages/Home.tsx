import {
  Container,
  VStack,
  Text,
  Box,
  Heading,
  Button,
  SimpleGrid,
  Icon,
  List,
  ListItem,
  ListIcon,
  useBreakpointValue,
  HStack,
  Image,
  useColorModeValue,
  Skeleton,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { FaMusic, FaRobot, FaListUl, FaFilm, FaShieldAlt, FaCheckCircle, FaPlus, FaDiscord, FaGithub, FaServer, FaClock, FaCircle } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { useBotStatus } from '../hooks/useBotStatus'

const features = [
  {
    icon: FaMusic,
    title: 'Yüksek Kaliteli Müzik',
    desc: 'YouTube ve Spotify desteğiyle kesintisiz müzik keyfi.'
  },
  {
    icon: FaListUl,
    title: 'Playlist Yönetimi',
    desc: 'Çalma listeleri oluştur, sırayı düzenle, karıştır.'
  },
  {
    icon: FaFilm,
    title: 'Film Komutları',
    desc: 'Film arama, kategoriye göre listeleme ve rastgele öneriler.'
  },
  {
    icon: FaShieldAlt,
    title: 'Gelişmiş Moderasyon',
    desc: 'Sunucunu korumak için moderasyon komutları.'
  },
  {
    icon: FaRobot,
    title: 'Akıllı ve Hızlı',
    desc: 'Modern altyapı, hızlı yanıt ve 7/24 aktif.'
  },
  {
    icon: FaPlus,
    title: 'Açık Kaynak & GitHub',
    desc: (<a href="https://github.com/shlimazl31/benbotdegilimbotu" target="_blank" rel="noopener noreferrer" style={{ color: '#7f1fff', textDecoration: 'underline' }}>Kaynak Kodu</a>)
  }
]

const commandCategories = [
  {
    emoji: '🎵',
    title: 'Müzik Komutları',
    commands: [
      { cmd: '/join', desc: 'Ses kanalına katılır' },
      { cmd: '/play', desc: 'YouTube veya Spotify\'dan müzik çalar' },
      { cmd: '/search', desc: 'YouTube\'da şarkı arar' },
      { cmd: '/pause', desc: 'Şarkıyı duraklatır' },
      { cmd: '/resume', desc: 'Duraklatılmış şarkıyı devam ettirir' },
      { cmd: '/stop', desc: 'Müziği durdurur' },
      { cmd: '/skip', desc: 'Sıradaki şarkıya geçer' },
      { cmd: '/previous', desc: 'Önceki şarkıya döner' },
      { cmd: '/leave', desc: 'Bot ses kanalından ayrılır' },
      { cmd: '/lyrics', desc: 'Şarkı sözlerini gösterir' },
      { cmd: '/247', desc: '24/7 modunu açar/kapatır' },
    ]
  },
  {
    emoji: '📑',
    title: 'Sıra Yönetimi',
    commands: [
      { cmd: '/queue', desc: 'Şarkı sırasını gösterir' },
      { cmd: '/clear', desc: 'Sırayı temizler' },
      { cmd: '/shuffle', desc: 'Sırayı karıştırır' },
      { cmd: '/loop', desc: 'Tekrar modunu ayarlar (şarkı/sıra/kapalı)' },
      { cmd: '/move', desc: 'Sıradaki şarkıyı taşır' },
    ]
  },
  {
    emoji: '⚙️',
    title: 'Gelişmiş Kontroller',
    commands: [
      { cmd: '/volume', desc: 'Ses seviyesini ayarlar (1-100)' },
      { cmd: '/seek', desc: 'Şarkının belirli bir saniyesine atlar' },
      { cmd: '/nowplaying', desc: 'Çalan şarkının detaylı bilgilerini gösterir' },
      { cmd: '/autoplay', desc: 'Otomatik oynatma modunu açar/kapatır' },
    ]
  },
  {
    emoji: '📋',
    title: 'Playlist Özellikleri',
    commands: [
      { cmd: '/playlist play', desc: 'YouTube veya Spotify playlistlerini çalar' },
      { cmd: '/playlist info', desc: 'Playlist bilgilerini gösterir' },
    ]
  },
  {
    emoji: '🎬',
    title: 'Film Komutları',
    commands: [
      { cmd: '/film ara', desc: 'Film arama' },
      { cmd: '/film kategori', desc: 'Kategoriye göre film listesi' },
      { cmd: '/filmdetay', desc: 'Film hakkında detaylı bilgi' },
      { cmd: '/rastgelefilm', desc: 'Rastgele film önerisi' },
    ]
  },
  {
    emoji: '🎧',
    title: 'DJ Sistemi',
    commands: [
      { cmd: '/dj ayarla', desc: 'DJ rolünü ayarlar' },
      { cmd: '/dj kaldır', desc: 'DJ rolünü kaldırır' },
      { cmd: '/dj bilgi', desc: 'DJ rolü bilgilerini gösterir' },
    ]
  },
  {
    emoji: '👮',
    title: 'Moderasyon',
    commands: [
      { cmd: '/purge', desc: 'Belirtilen sayıda mesajı siler (1-100)' },
    ]
  },
  {
    emoji: '🔍',
    title: 'Genel',
    commands: [
      { cmd: '/help', desc: 'Tüm komutları ve açıklamalarını gösterir' },
      { cmd: '/ping', desc: 'Bot gecikmesini gösterir' },
      { cmd: '/stats', desc: 'Bot istatistiklerini gösterir' },
    ]
  },
]

const Home = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const { status, loading, error } = useBotStatus()

  console.log('Home sayfası status:', status)

  const formatUptime = (uptime: number) => {
    // İlk 5 basamak saniye, son 3 basamak salise
    const seconds = Math.floor(uptime / 1000)
    const milliseconds = uptime % 1000

    const days = Math.floor(seconds / (24 * 60 * 60))
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60))
    const minutes = Math.floor((seconds % (60 * 60)) / 60)
    
    const parts = []
    if (days > 0) parts.push(`${days} gün`)
    if (hours > 0) parts.push(`${hours} saat`)
    if (minutes > 0) parts.push(`${minutes} dakika`)
    
    return parts.join(' ') || '0 dakika'
  }

  return (
    <Box bg={bgColor} minH="100vh" pt="80px">
      {/* Hero Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, purple.400, pink.400)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Shlimazlbot
          </Heading>
          <Text fontSize="xl" color={textColor} maxW="2xl">
            Discord sunucunuz için en iyi müzik deneyimi. Yüksek kaliteli ses, kolay kullanım ve ücretsiz!
          </Text>
          <HStack spacing={4}>
            <Button
              leftIcon={<FaDiscord />}
              colorScheme="purple"
              size="lg"
              as="a"
              href="https://benbotdegilim.online/invite"
              target="_blank"
            >
              Botu Ekle
            </Button>
            <Button
              leftIcon={<FaGithub />}
              variant="outline"
              size="lg"
              as="a"
              href="https://github.com/shlimazl31/benbotdegilimbotu/"
              target="_blank"
            >
              GitHub
            </Button>
          </HStack>
        </VStack>
      </Container>

      {/* Features Section */}
      <Box py={20} bg={useColorModeValue('white', 'gray.800')}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading textAlign="center">Özellikler</Heading>
            <HStack spacing={8} wrap="wrap" justify="center">
              <FeatureCard
                title="Yüksek Kalite"
                description="En yüksek ses kalitesi ile müzik keyfi"
                icon="🎵"
              />
              <FeatureCard
                title="Kolay Kullanım"
                description="Basit komutlar ile hızlı kontrol"
                icon="🎮"
              />
              <FeatureCard
                title="Ücretsiz"
                description="Tüm özellikler tamamen ücretsiz"
                icon="💎"
              />
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW="container.xl">
          <VStack spacing={4}>
            {error && (
              <Text color="red.500" fontSize="sm">
                Hata: {error}
              </Text>
            )}
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <GridItem>
                <StatCard
                  title="Aktif Sunucu"
                  value={status?.guilds || 0}
                  icon={<FaServer />}
                />
              </GridItem>
              <GridItem>
                <StatCard
                  title="Uptime"
                  value={status?.uptime ? formatUptime(status.uptime) : '0 dakika'}
                  icon={<FaClock />}
                />
              </GridItem>
              <GridItem>
                <StatCard
                  title="Durum"
                  value={status?.status === 'online' ? '🟢 Çevrimiçi' : '🔴 Çevrimdışı'}
                  icon={<FaCircle />}
                />
              </GridItem>
            </Grid>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <Box
      p={8}
      bg={useColorModeValue('white', 'gray.700')}
      rounded="xl"
      shadow="lg"
      maxW="sm"
      textAlign="center"
    >
      <Text fontSize="4xl" mb={4}>
        {icon}
      </Text>
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text color={useColorModeValue('gray.600', 'gray.400')}>{description}</Text>
    </Box>
  )
}

const StatCard = ({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) => {
  return (
    <Box textAlign="center" p={6}>
      <Heading size="xl" mb={2} color="purple.400">
        {value}
      </Heading>
      <HStack spacing={2} justify="center">
        <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
        <Box color="purple.400">
          {icon}
        </Box>
      </HStack>
    </Box>
  );
};

export default Home 