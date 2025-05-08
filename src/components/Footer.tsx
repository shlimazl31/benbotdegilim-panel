import { Box, Text, Link, Stack } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as="footer" py={6} bg="surface" textAlign="center" mt={8} borderTop="1px solid" borderColor="brand.900">
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center" align="center">
        <Link href="https://benbotdegilim.online/terms" isExternal color="brand.400" fontWeight="bold">
          Kullanım Şartları
        </Link>
        <Text color="muted">|</Text>
        <Link href="https://benbotdegilim.online/privacy" isExternal color="brand.400" fontWeight="bold">
          Gizlilik Politikası
        </Link>
      </Stack>
      <Text mt={2} color="muted" fontSize="sm">
        © {new Date().getFullYear()} Shlimazlbot. Tüm hakları saklıdır.
      </Text>
    </Box>
  )
}

export default Footer 