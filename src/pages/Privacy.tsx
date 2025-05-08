import { Box, Container, Heading, Text, VStack, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaUserSecret } from 'react-icons/fa'

const Privacy = () => {
  const bgColor = useColorModeValue('background', 'background')
  const cardBg = useColorModeValue('surface', 'surface')
  const textColor = useColorModeValue('text', 'text')

  return (
    <Box minH="100vh" bg={bgColor} py={20}>
      <Container maxW="4xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" mb={8}>
            <Icon as={FaUserSecret} w={16} h={16} color="brand.500" mb={4} />
            <Heading 
              size="2xl" 
              bgGradient="linear(to-r, brand.400, brand.500)" 
              bgClip="text"
              fontWeight="extrabold"
            >
              GİZLİLİK POLİTİKASI
            </Heading>
            <Text color="muted" mt={2}>Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</Text>
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
                ShlimazlBot, kullanıcı gizliliğine önem verir. Botun çalışabilmesi için sadece sınırlı teknik veri toplanır.
              </Text>

              <Box>
                <Heading size="md" color="brand.500" mb={4}>1. Toplanan Veriler</Heading>
                <Text color={textColor} mb={4}>
                  Aşağıdaki veriler yalnızca geçici olarak ve teknik amaçlarla toplanır:
                </Text>
                <VStack align="start" spacing={2}>
                  <Text color={textColor}>• Kullanıcı ID'si</Text>
                  <Text color={textColor}>• Komut geçmişi</Text>
                  <Text color={textColor}>• Bot log kayıtları (örneğin: hata mesajları, yürütme zamanı)</Text>
                </VStack>
                <Text color={textColor} mt={4}>
                  Bu veriler kalıcı olarak saklanmaz ve üçüncü taraflarla paylaşılmaz.
                </Text>
              </Box>

              <Box>
                <Heading size="md" color="brand.500" mb={4}>2. Kalıcılık ve Veri Saklama</Heading>
                <Text color={textColor}>
                  ShlimazlBot hiçbir kişisel veriyi kalıcı olarak saklamaz. Tüm veriler, yalnızca işlem süresince RAM üzerinde geçici olarak tutulur.
                </Text>
              </Box>

              <Box>
                <Heading size="md" color="brand.500" mb={4}>3. Şeffaflık ve Açık Kaynak</Heading>
                <Text color={textColor}>
                  ShlimazlBot açık kaynak kodludur ve herkesin erişimine açıktır.
                </Text>
              </Box>

              <Box>
                <Heading size="md" color="brand.500" mb={4}>4. Üçüncü Taraflar</Heading>
                <Text color={textColor}>
                  Toplanan veriler hiçbir şekilde üçüncü taraflara satılmaz, devredilmez veya pazarlama amacıyla kullanılmaz.
                </Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Privacy 