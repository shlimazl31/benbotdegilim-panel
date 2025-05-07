import { Box, Flex, Button, Heading, Spacer } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaDiscord } from 'react-icons/fa'

const Navbar = () => {
  return (
    <Box bg="purple.600" px={4} py={3}>
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading size="md" color="white">
          BenBotDegilim
        </Heading>
        <Spacer />
        <Flex gap={4}>
          <Button
            as={RouterLink}
            to="/"
            variant="ghost"
            color="white"
            _hover={{ bg: 'purple.500' }}
          >
            Ana Sayfa
          </Button>
          <Button
            as={RouterLink}
            to="/dashboard"
            variant="ghost"
            color="white"
            _hover={{ bg: 'purple.500' }}
          >
            Panel
          </Button>
          <Button
            leftIcon={<FaDiscord />}
            colorScheme="purple"
            variant="solid"
            as={RouterLink}
            to="/login"
          >
            Giriş Yap
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 