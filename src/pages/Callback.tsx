import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Box, Spinner, Text, VStack } from '@chakra-ui/react'

const Callback = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      // Token'ı localStorage'a kaydet
      localStorage.setItem('discord_token', token)
      // Dashboard'a yönlendir
      navigate('/dashboard')
    } else {
      // Token yoksa login sayfasına yönlendir
      navigate('/login')
    }
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