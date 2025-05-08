import {
  Container,
  VStack,
  Text,
  Spinner,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://discord.com/oauth2/authorize?client_id=562958427404632075&permissions=8&integration_type=0&scope=bot+applications.commands'
    }, 2000) // 2 saniye sonra yönlendir

    return () => clearTimeout(timer)
  }, [])

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      <Container maxW="container.sm" textAlign="center">
        <VStack spacing={8}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="purple.500"
            size="xl"
          />
          <Text
            fontSize="2xl"
            fontWeight="bold"
            bgGradient="linear(to-r, purple.400, purple.600)"
            bgClip="text"
          >
            Discord'a Yönlendiriliyorsunuz...
          </Text>
          <Text color="gray.500">
            Discord sunucunuza en iyi müzik deneyimini getirmek için hazırlanıyoruz
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home 