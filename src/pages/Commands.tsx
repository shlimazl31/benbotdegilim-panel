import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  SimpleGrid,
  Icon,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaMusic, FaListUl, FaCog, FaFilm, FaHeadphones, FaShieldAlt, FaSearch, FaCheckCircle } from 'react-icons/fa';

const commandCategories = [
  {
    icon: FaMusic,
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
    icon: FaListUl,
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
    icon: FaCog,
    title: 'Gelişmiş Kontroller',
    commands: [
      { cmd: '/volume', desc: 'Ses seviyesini ayarlar (1-100)' },
      { cmd: '/seek', desc: 'Şarkının belirli bir saniyesine atlar' },
      { cmd: '/nowplaying', desc: 'Çalan şarkının detaylı bilgilerini gösterir' },
      { cmd: '/autoplay', desc: 'Otomatik oynatma modunu açar/kapatır' },
    ]
  },
  {
    icon: FaListUl,
    title: 'Playlist Özellikleri',
    commands: [
      { cmd: '/playlist play', desc: 'YouTube veya Spotify playlistlerini çalar' },
      { cmd: '/playlist info', desc: 'Playlist bilgilerini gösterir' },
    ]
  },
  {
    icon: FaFilm,
    title: 'Film Komutları',
    commands: [
      { cmd: '/film ara', desc: 'Film arama' },
      { cmd: '/film kategori', desc: 'Kategoriye göre film listesi' },
      { cmd: '/filmdetay', desc: 'Film hakkında detaylı bilgi' },
      { cmd: '/rastgelefilm', desc: 'Rastgele film önerisi' },
    ]
  },
  {
    icon: FaHeadphones,
    title: 'DJ Sistemi',
    commands: [
      { cmd: '/dj ayarla', desc: 'DJ rolünü ayarlar' },
      { cmd: '/dj kaldır', desc: 'DJ rolünü kaldırır' },
      { cmd: '/dj bilgi', desc: 'DJ rolü bilgilerini gösterir' },
    ]
  },
  {
    icon: FaShieldAlt,
    title: 'Moderasyon',
    commands: [
      { cmd: '/purge', desc: 'Belirtilen sayıda mesajı siler (1-100)' },
    ]
  },
  {
    icon: FaSearch,
    title: 'Genel',
    commands: [
      { cmd: '/help', desc: 'Tüm komutları ve açıklamalarını gösterir' },
      { cmd: '/ping', desc: 'Bot gecikmesini gösterir' },
      { cmd: '/stats', desc: 'Bot istatistiklerini gösterir' },
    ]
  },
];

const Commands = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box bg={bgColor} minH="100vh" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading textAlign="center">Komutlar</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {commandCategories.map((category, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={6}
                rounded="xl"
                shadow="lg"
                border="1px"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
              >
                <Heading size="md" mb={4} display="flex" alignItems="center">
                  <Icon as={category.icon} mr={2} color="purple.400" />
                  {category.title}
                </Heading>
                <List spacing={2}>
                  {category.commands.map((command, cmdIndex) => (
                    <ListItem key={cmdIndex} color={textColor}>
                      <ListIcon as={FaCheckCircle} color="purple.400" />
                      <Text as="span" fontWeight="bold">{command.cmd}</Text>
                      <Text as="span" ml={2}>— {command.desc}</Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Commands; 