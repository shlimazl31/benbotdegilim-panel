import { Box, Container, Heading, Text, VStack, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaGavel } from 'react-icons/fa'

const Terms = () => {
  const bgColor = useColorModeValue('background', 'background')
  const cardBg = useColorModeValue('surface', 'surface')
  const textColor = useColorModeValue('text', 'text')

  return (
    <Box minH="100vh" bg={bgColor} py={20}>
      <Container maxW="4xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" mb={8}>
            <Icon as={FaGavel} w={16} h={16} color="brand.500" mb={4} />
            <Heading 
              size="2xl" 
              bgGradient="linear(to-r, brand.400, brand.500)" 
              bgClip="text"
              fontWeight="extrabold"
              pb={2}
            >
              KULLANIM ŞARTLARI
            </Heading>
            <Text color="muted" mt={4}>Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</Text>
          </Box>

          <Box 
            bg={cardBg} 
            p={8} 
            rounded="2xl" 
            shadow="xl"
            borderWidth="1px"
            borderColor="brand.500"
          >
            <VStack spacing={6} align="stretch">
              <Text color={textColor} fontSize="lg">
                ShlimazlBot'u kullanarak, bu kullanım koşullarını kabul etmiş sayılırsınız. Bot, Discord platformu üzerinde çalışan bir hizmettir ve Discord'un kendi kullanım koşullarına tabidir.
              </Text>

              <Box>
                <Heading size="md" color="brand.500" mb={4}>1. Kullanım Kuralları</Heading>
                <Text color={textColor}>
                  Botu kullanırken aşağıdaki kurallara uymanız gerekmektedir:
                </Text>
                <VStack align="start" mt={4} spacing={2}>
                  <Text color={textColor}>• Discord'un topluluk kurallarına uygun davranmak</Text>
                  <Text color={textColor}>• Botu kötüye kullanmamak</Text>
                  <Text color={textColor}>• Diğer kullanıcıların haklarına saygı göstermek</Text>
                  <Text color={textColor}>• Botun güvenliğini tehlikeye atmamak</Text>
                </VStack>
              </Box>

              <Box>
                <Heading size="md" color="brand.500" mb={4}>2. Sorumluluk Reddi</Heading>
                <Text color={textColor}>
                  Bot "olduğu gibi" sunulmaktadır ve herhangi bir garanti verilmemektedir. Botun kullanımından doğabilecek herhangi bir zarardan sorumlu değiliz.
                </Text>
              </Box>

              <Box>
                <Heading size="md" color="brand.500" mb={4}>3. Değişiklikler</Heading>
                <Text color={textColor}>
                  Bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer.
                </Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Terms 