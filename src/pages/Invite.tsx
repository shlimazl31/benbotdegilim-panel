import { useEffect } from 'react'
import { Box, Container, VStack, Spinner, Text } from '@chakra-ui/react'

const Invite = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://discord.com/oauth2/authorize?client_id=562958427404632075&permissions=8&integration_type=0&scope=bot+applications.commands'
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Box minH="80vh" display="flex" alignItems="center" justifyContent="center" bg="surface">
      <Container maxW="container.sm" textAlign="center" bg="background" py={12} px={8} rounded="2xl" shadow="2xl" border="1px solid" borderColor="brand.800">
        <VStack spacing={8}>
          <Spinner thickness="4px" speed="0.65s" emptyColor="brand.100" color="brand.500" size="xl" />
          <Text fontSize="2xl" fontWeight="bold" bgGradient="linear(to-r, brand.400, brand.600)" bgClip="text">
            Davet linkine yönlendiriliyorsunuz...
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Invite 