import { Box, Container, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'

const Terms = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box minH="100vh" pt="80px" pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center" mb={8}>
            Kullanım Şartları
          </Heading>
          
          <Text color={textColor}>
            Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </Text>

          <VStack spacing={6} align="stretch">
            <Box>
              <Heading as="h2" size="lg" mb={4}>
                1. Genel Hükümler
              </Heading>
              <Text color={textColor}>
                Shlimazlbot'u kullanarak bu şartları kabul etmiş sayılırsınız. Bot'u kullanmaya devam ettiğiniz sürece bu şartlara uymayı kabul etmiş olursunuz.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                2. Hizmet Kullanımı
              </Heading>
              <Text color={textColor}>
                Bot'u kullanırken Discord'un kullanım şartlarına ve topluluk kurallarına uymayı kabul edersiniz. Bot'u kötüye kullanım, spam veya zararlı amaçlarla kullanmak yasaktır.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                3. Sorumluluk Reddi
              </Heading>
              <Text color={textColor}>
                Bot "olduğu gibi" sunulmaktadır. Hizmetin kesintisiz veya hatasız olacağı garanti edilmez. Bot'un kullanımından doğabilecek herhangi bir zarardan sorumlu değiliz.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                4. Değişiklikler
              </Heading>
              <Text color={textColor}>
                Bu kullanım şartlarını herhangi bir zamanda değiştirme hakkımız saklıdır. Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Terms 