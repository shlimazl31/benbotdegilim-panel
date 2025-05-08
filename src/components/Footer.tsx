import { Box, Text, Link, Stack } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as="footer" py={6} bg="gray.100" textAlign="center" mt={8}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center" align="center">
        <Link href="https://benbotdegilim.online/terms" isExternal color="purple.600" fontWeight="bold">
          Kullanım Şartları
        </Link>
        <Text color="gray.400">|</Text>
        <Link href="https://benbotdegilim.online/privacy" isExternal color="purple.600" fontWeight="bold">
          Gizlilik Politikası
        </Link>
      </Stack>
      <Text mt={2} color="gray.500" fontSize="sm">
        © {new Date().getFullYear()} BenBotDegilim. Tüm hakları saklıdır.
      </Text>
    </Box>
  )
}

export default Footer 