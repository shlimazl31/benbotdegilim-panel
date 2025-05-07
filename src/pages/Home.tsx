import {
  Container,
  Heading,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaMusic, FaServer, FaRobot } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

const Feature = ({ title, text, icon }: { title: string; text: string; icon: any }) => {
  return (
    <Stack
      align="center"
      textAlign="center"
      p={6}
      bg={useColorModeValue('white', 'gray.800')}
      rounded="xl"
      shadow="lg"
    >
      <Icon as={icon} w={10} h={10} color="purple.500" />
      <Text fontWeight={600}>{title}</Text>
      <Text color="gray.600">{text}</Text>
    </Stack>
  )
}

const Home = () => {
  return (
    <Container maxW="1200px" py={10}>
      <Stack spacing={8} align="center" textAlign="center">
        <Heading
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          bgGradient="linear(to-r, purple.400, purple.600)"
          bgClip="text"
        >
          Discord Sunucunuz İçin En İyi Müzik Botu
        </Heading>
        <Text fontSize="xl" color="gray.600" maxW="800px">
          BenBotDegilim ile sunucunuzda yüksek kaliteli müzik çalın, çalma listeleri oluşturun
          ve müzik deneyiminizi yönetin.
        </Text>
        <Button
          as={RouterLink}
          to="/login"
          size="lg"
          colorScheme="purple"
          px={8}
          fontSize="lg"
        >
          Hemen Başla
        </Button>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={20}>
        <Feature
          icon={FaMusic}
          title="Yüksek Kaliteli Ses"
          text="En iyi ses kalitesiyle müzik çalın ve sunucunuzda harika bir deneyim yaşayın."
        />
        <Feature
          icon={FaServer}
          title="Kolay Yönetim"
          text="Kullanıcı dostu panel ile botunuzu kolayca yönetin ve özelleştirin."
        />
        <Feature
          icon={FaRobot}
          title="Güçlü Özellikler"
          text="Çalma listeleri, ses efektleri ve daha fazlası ile müzik deneyiminizi zenginleştirin."
        />
      </SimpleGrid>
    </Container>
  )
}

export default Home 