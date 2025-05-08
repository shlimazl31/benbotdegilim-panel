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
  useBreakpointValue
} from '@chakra-ui/react'
import { FaMusic, FaRobot, FaListUl, FaFilm, FaShieldAlt, FaCheckCircle, FaPlus } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

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
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 })

  return (
    <Box minH="100vh" bg="surface" py={10}>
      <Container maxW="6xl">
        <VStack spacing={10} align="center" textAlign="center">
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            bgGradient="linear(to-r, brand.400, brand.600)"
            bgClip="text"
          >
            Shlimazlbot: Modern Discord Müzik Botu
          </Heading>
          <Text fontSize="xl" color="muted" maxW="2xl">
            Sunucunda yüksek kaliteli müzik, playlist yönetimi, film komutları ve daha fazlası! Açık kaynak, hızlı ve tamamen ücretsiz.
          </Text>
          <Button
            as={RouterLink}
            to="/invite"
            size="lg"
            leftIcon={<FaPlus />}
            colorScheme="brand"
            px={8}
            fontSize="lg"
            variant="solid"
            shadow="md"
          >
            Beni Sunucuna Ekle
          </Button>
        </VStack>

        <Heading mt={16} mb={6} size="lg" color="brand.400" textAlign="center">
          Özellikler
        </Heading>
        <SimpleGrid columns={gridColumns} spacing={8} mb={16}>
          {features.map((f, i) => (
            <Box key={i} p={6} bg="background" rounded="xl" shadow="lg" textAlign="center" border="1px solid" borderColor="brand.900">
              <Icon as={f.icon} w={10} h={10} color="brand.500" mb={4} />
              <Text fontWeight={600} fontSize="xl" mb={2}>{f.title}</Text>
              {typeof f.desc === 'string' ? (
                <Text color="muted">{f.desc}</Text>
              ) : (
                <Text color="muted">{f.desc}</Text>
              )}
            </Box>
          ))}
        </SimpleGrid>

        <Heading mb={6} size="md" color="brand.400" textAlign="center">
          Komutlar
        </Heading>
        <VStack spacing={8} align="stretch" mb={8}>
          {commandCategories.map((cat, i) => (
            <Box key={i} bg="background" rounded="xl" shadow="md" p={6} border="1px solid" borderColor="brand.900">
              <Heading size="md" mb={3} color="brand.400" display="flex" alignItems="center">
                <span style={{ fontSize: 24, marginRight: 8 }}>{cat.emoji}</span> {cat.title}
              </Heading>
              <List spacing={2}>
                {cat.commands.map((c, j) => (
                  <ListItem key={j}>
                    <ListIcon as={FaCheckCircle} color="brand.400" />
                    <b>{c.cmd}</b> — {c.desc}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}

export default Home 