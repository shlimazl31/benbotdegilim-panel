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
  Badge,
} from '@chakra-ui/react';
import { FaMusic, FaListUl, FaCog, FaFilm, FaHeadphones, FaShieldAlt, FaSearch, FaCheckCircle, FaYoutube, FaSpotify } from 'react-icons/fa';

const features = [
  {
    icon: FaMusic,
    title: 'Müzik Özellikleri',
    description: 'Yüksek kaliteli müzik deneyimi için gelişmiş özellikler',
    items: [
      'YouTube ve Spotify desteği',
      'Yüksek kaliteli ses çalma',
      'Şarkı sözleri görüntüleme',
      '24/7 kesintisiz müzik',
      'Otomatik oynatma modu',
      'Gelişmiş ses kontrolü',
    ]
  },
  {
    icon: FaListUl,
    title: 'Sıra Yönetimi',
    description: 'Müzik sıranızı kolayca yönetin',
    items: [
      'Sınırsız sıra uzunluğu',
      'Sıra karıştırma',
      'Tekrar modları (şarkı/sıra)',
      'Sıra düzenleme',
      'Sıra temizleme',
    ]
  },
  {
    icon: FaYoutube,
    title: 'YouTube Entegrasyonu',
    description: 'YouTube\'un tüm özelliklerini kullanın',
    items: [
      'Video arama',
      'Playlist desteği',
      'Canlı yayın desteği',
      'Video bilgileri',
      'Otomatik video önerileri',
    ]
  },
  {
    icon: FaSpotify,
    title: 'Spotify Entegrasyonu',
    description: 'Spotify\'ın zengin müzik kütüphanesine erişin',
    items: [
      'Şarkı arama',
      'Playlist desteği',
      'Albüm desteği',
      'Sanatçı bilgileri',
      'Spotify önerileri',
    ]
  },
  {
    icon: FaFilm,
    title: 'Film Özellikleri',
    description: 'Film arama ve öneriler için gelişmiş sistem',
    items: [
      'Detaylı film arama',
      'Kategori bazlı listeleme',
      'Film detayları',
      'Rastgele film önerileri',
      'IMDb puanları',
    ]
  },
  {
    icon: FaHeadphones,
    title: 'DJ Sistemi',
    description: 'Sunucunuz için özel DJ yönetimi',
    items: [
      'DJ rolü yönetimi',
      'Özel DJ komutları',
      'DJ yetkilendirme',
      'DJ istatistikleri',
    ]
  },
  {
    icon: FaShieldAlt,
    title: 'Moderasyon',
    description: 'Sunucunuzu yönetmek için moderasyon araçları',
    items: [
      'Toplu mesaj silme',
      'Yetki yönetimi',
      'Sunucu istatistikleri',
    ]
  },
  {
    icon: FaCog,
    title: 'Gelişmiş Özellikler',
    description: 'Ek özellikler ve kontroller',
    items: [
      'Ses seviyesi kontrolü',
      'Şarkı atlama',
      'Detaylı şarkı bilgileri',
      'Bot istatistikleri',
      'Gecikme kontrolü',
    ]
  }
];

const Features = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box bg={bgColor} minH="100vh" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading>Özellikler</Heading>
            <Text color={textColor} maxW="2xl">
              Shlimazlbot, Discord sunucunuz için ihtiyacınız olan tüm özellikleri sunar.
              Yüksek kaliteli müzik, film önerileri ve moderasyon araçları ile sunucunuzu
              daha eğlenceli hale getirin.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {features.map((feature, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={6}
                rounded="xl"
                shadow="lg"
                border="1px"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
              >
                <VStack align="start" spacing={4}>
                  <Heading size="md" display="flex" alignItems="center">
                    <Icon as={feature.icon} mr={2} color="purple.400" />
                    {feature.title}
                  </Heading>
                  <Text color={textColor}>{feature.description}</Text>
                  <List spacing={2} width="100%">
                    {feature.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} color={textColor}>
                        <ListIcon as={FaCheckCircle} color="purple.400" />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Box textAlign="center" mt={8}>
            <Badge colorScheme="purple" fontSize="lg" p={2} borderRadius="md">
              Tüm özellikler tamamen ücretsiz!
            </Badge>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Features; 