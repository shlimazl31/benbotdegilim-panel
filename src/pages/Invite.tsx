import { useEffect } from 'react'
import { Box, Container, VStack, Spinner, Text, useColorModeValue } from '@chakra-ui/react'
import { FaDiscord } from 'react-icons/fa'

const Invite = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://discord.com/oauth2/authorize?client_id=562958427404632075&permissions=8&integration_type=0&scope=bot+applications.commands'
    }, 1500)
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
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, purple.400, pink.400)"
              bgClip="text"
            >
              Discord'a yönlendiriliyorsunuz...
            </Text>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              Botu sunucunuza eklemek için Discord'a yönlendirileceksiniz.
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}

export default Invite 