import {
  Box,
  Container,
  VStack,
  Text,
  Heading,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react'
import { FaDiscord } from 'react-icons/fa'
import { useEffect } from 'react'

const Support = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://discord.com/channels/1341164136079294487/1376864043406725180'
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg={bgColor} pt="80px">
      <Container maxW="container.sm" textAlign="center">
        <Box
          bg={cardBg}
          py={12}
          px={8}
          rounded="2xl"
          shadow="xl"
          border="1px"
          borderColor={borderColor}
        >
          <VStack spacing={8}>
            <FaDiscord size={64} color="#5865F2" />
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="purple.500"
              size="xl"
            />
            <Heading
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, purple.400, pink.400)"
              bgClip="text"
            >
              Discord Destek Sistemine Yönlendiriliyorsunuz...
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              Destek talebiniz için Discord sunucumuza yönlendirileceksiniz. Lütfen bekleyin...
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}

export default Support 