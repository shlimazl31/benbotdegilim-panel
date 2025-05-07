import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Button,
  Heading,
} from '@chakra-ui/react'
import { FaDiscord } from 'react-icons/fa'

const Login = () => {
  const handleDiscordLogin = () => {
    // Discord OAuth2 URL'sini buraya ekleyin
    const clientId = 'YOUR_CLIENT_ID'
    const redirectUri = 'http://localhost:5173/callback'
    const scope = 'identify guilds'
    const discordUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=code&scope=${encodeURIComponent(scope)}`
    
    window.location.href = discordUrl
  }

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6" align="center">
          <Heading size="lg">Discord ile Giriş Yap</Heading>
          <Text color="gray.600" textAlign="center">
            Botunuzu yönetmek için Discord hesabınızla giriş yapın
          </Text>
        </Stack>

        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Button
              leftIcon={<FaDiscord />}
              colorScheme="purple"
              size="lg"
              onClick={handleDiscordLogin}
            >
              Discord ile Giriş Yap
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default Login 