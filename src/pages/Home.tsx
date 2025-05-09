import {
  Container,
  VStack,
  Text,
  Box,
  Heading,
  Button,
  HStack,
  useColorModeValue,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { FaDiscord, FaGithub, FaServer, FaClock, FaCircle } from 'react-icons/fa'
import { useBotStatus } from '../hooks/useBotStatus'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const { status, error } = useBotStatus()

  console.log('Home sayfası status:', status)

  const formatUptime = (uptime: number) => {
    const seconds = Math.floor(uptime / 1000)

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
              as={RouterLink}
              to="/invite"
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