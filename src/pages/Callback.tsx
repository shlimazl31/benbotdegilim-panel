import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Box, Spinner, Text, VStack } from '@chakra-ui/react'

const Callback = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const code = searchParams.get('code')
    
    if (!code) {
      navigate('/login')
      return
    }

    const handleCallback = async () => {
      try {
        const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
          method: 'POST',
          body: new URLSearchParams({
            client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
            client_secret: import.meta.env.VITE_DISCORD_CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: 'https://benbotdegilim.online/callback'
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })

        const tokens = await tokenResponse.json()

        if (!tokenResponse.ok) {
          throw new Error(tokens.error)
        }

        // Token'ı localStorage'a kaydet
        localStorage.setItem('discord_token', tokens.access_token)
        
        // Dashboard'a yönlendir
        navigate('/dashboard')
      } catch (error) {
        console.error('OAuth error:', error)
        navigate('/login')
      }
    }

    handleCallback()
  }, [searchParams, navigate])

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={4}>
        <Spinner size="xl" color="purple.500" />
        <Text>Giriş yapılıyor...</Text>
      </VStack>
    </Box>
  )
}

export default Callback 