import { Box, Container, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'

const Privacy = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box minH="100vh" pt="80px" pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center" mb={8}>
            Gizlilik Politikası
          </Heading>
          
          <Text color={textColor}>
            Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </Text>

          <VStack spacing={6} align="stretch">
            <Box>
              <Heading as="h2" size="lg" mb={4}>
                1. Veri Toplama
              </Heading>
              <Text color={textColor}>
                Shlimazlbot, Discord sunucunuzda çalışırken sadece gerekli olan minimum veriyi toplar. Bu veriler sunucu ID'si, kanal ID'leri ve bot komutlarının kullanımı ile ilgili temel bilgilerdir.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                2. Veri Kullanımı
              </Heading>
              <Text color={textColor}>
                Toplanan veriler sadece bot'un düzgün çalışması için kullanılır. Bu veriler üçüncü taraflarla paylaşılmaz ve ticari amaçlarla kullanılmaz.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                3. Veri Güvenliği
              </Heading>
              <Text color={textColor}>
                Verilerinizin güvenliği bizim için önemlidir. Tüm veriler şifrelenmiş olarak saklanır ve güvenli sunucularda barındırılır.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                4. Çerezler
              </Heading>
              <Text color={textColor}>
                Web sitemizde çerez kullanılmamaktadır. Bot'un Discord üzerindeki kullanımı için herhangi bir çerez veya benzeri takip teknolojisi kullanılmaz.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                5. İletişim
              </Heading>
              <Text color={textColor}>
                Gizlilik politikamız hakkında sorularınız için Discord sunucumuza katılabilir veya GitHub üzerinden bize ulaşabilirsiniz.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Privacy 