import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
  useColorModeValue,
  Select,
  useToast,
} from '@chakra-ui/react'
import { FaPlay, FaPause, FaStop, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { botService } from '../services/api'

interface Guild {
  id: string
  name: string
  icon: string
}

interface BotStatus {
  isPlaying: boolean
  currentSong?: {
    title: string
    artist: string
    duration: string
  }
  volume: number
}

const Dashboard = () => {
  const [selectedGuild, setSelectedGuild] = useState<string>('')
  const [guilds, setGuilds] = useState<Guild[]>([])
  const [botStatus, setBotStatus] = useState<BotStatus>({
    isPlaying: false,
    volume: 50,
  })
  const toast = useToast()

  useEffect(() => {
    loadGuilds()
  }, [])

  useEffect(() => {
    if (selectedGuild) {
      loadBotStatus()
    }
  }, [selectedGuild])

  const loadGuilds = async () => {
    try {
      const response = await botService.getGuilds()
      setGuilds(response)
      if (response.length > 0) {
        setSelectedGuild(response[0].id)
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Sunucu listesi yüklenemedi',
        status: 'error',
        duration: 3000,
      })
    }
  }

  const loadBotStatus = async () => {
    try {
      const response = await botService.getBotStatus()
      setBotStatus(response)
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Bot durumu alınamadı',
        status: 'error',
        duration: 3000,
      })
    }
  }

  const handleMusicControl = async (action: string) => {
    try {
      await botService.controlMusic(selectedGuild, action)
      loadBotStatus()
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Müzik kontrolü başarısız',
        status: 'error',
        duration: 3000,
      })
    }
  }

  return (
    <Container maxW="1200px" py={8}>
      <VStack spacing={8} align="stretch">
        <HStack justify="space-between">
          <Heading size="lg">Bot Kontrol Paneli</Heading>
          <Select
            value={selectedGuild}
            onChange={(e) => setSelectedGuild(e.target.value)}
            maxW="300px"
          >
            {guilds.map((guild) => (
              <option key={guild.id} value={guild.id}>
                {guild.name}
              </option>
            ))}
          </Select>
        </HStack>

        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem
            colSpan={{ base: 3, md: 2 }}
            bg={useColorModeValue('white', 'gray.700')}
            p={6}
            rounded="lg"
            shadow="md"
          >
            <VStack spacing={4} align="stretch">
              <Heading size="md">Şu An Çalan</Heading>
              <Box p={4} bg="gray.50" rounded="md">
                {botStatus.currentSong ? (
                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">{botStatus.currentSong.title}</Text>
                    <Text color="gray.600">{botStatus.currentSong.artist}</Text>
                    <Text color="gray.500">{botStatus.currentSong.duration}</Text>
                  </VStack>
                ) : (
                  <Text>Şu anda müzik çalmıyor</Text>
                )}
              </Box>
              <HStack spacing={4}>
                <Button
                  leftIcon={<FaPlay />}
                  colorScheme="purple"
                  onClick={() => handleMusicControl('play')}
                  isDisabled={!selectedGuild}
                >
                  Çal
                </Button>
                <Button
                  leftIcon={<FaPause />}
                  colorScheme="purple"
                  variant="outline"
                  onClick={() => handleMusicControl('pause')}
                  isDisabled={!selectedGuild || !botStatus.isPlaying}
                >
                  Duraklat
                </Button>
                <Button
                  leftIcon={<FaStop />}
                  colorScheme="purple"
                  variant="outline"
                  onClick={() => handleMusicControl('stop')}
                  isDisabled={!selectedGuild || !botStatus.isPlaying}
                >
                  Durdur
                </Button>
              </HStack>
            </VStack>
          </GridItem>

          <GridItem
            colSpan={{ base: 3, md: 1 }}
            bg={useColorModeValue('white', 'gray.700')}
            p={6}
            rounded="lg"
            shadow="md"
          >
            <VStack spacing={4} align="stretch">
              <Heading size="md">Ses Kontrolü</Heading>
              <HStack spacing={4}>
                <Icon as={FaVolumeMute} />
                <Box flex={1} h="2" bg="gray.200" rounded="full">
                  <Box
                    w={`${botStatus.volume}%`}
                    h="100%"
                    bg="purple.500"
                    rounded="full"
                  />
                </Box>
                <Icon as={FaVolumeUp} />
              </HStack>
            </VStack>
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem
            bg={useColorModeValue('white', 'gray.700')}
            p={6}
            rounded="lg"
            shadow="md"
          >
            <VStack spacing={4} align="stretch">
              <Heading size="md">Çalma Listesi</Heading>
              <Box p={4} bg="gray.50" rounded="md">
                <Text>Çalma listesi boş</Text>
              </Box>
            </VStack>
          </GridItem>

          <GridItem
            bg={useColorModeValue('white', 'gray.700')}
            p={6}
            rounded="lg"
            shadow="md"
          >
            <VStack spacing={4} align="stretch">
              <Heading size="md">Sunucu Ayarları</Heading>
              <Box p={4} bg="gray.50" rounded="md">
                <Text>Sunucu ayarları burada görüntülenecek</Text>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  )
}

export default Dashboard 