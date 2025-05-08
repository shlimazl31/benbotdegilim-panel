import { Box, Heading, Text, Container, VStack, Icon } from '@chakra-ui/react'
import { FaGavel } from 'react-icons/fa'

const Terms = () => {
  return (
    <Box minH="80vh" display="flex" alignItems="center" justifyContent="center" bg="gray.50">
      <Container maxW="2xl" py={12} px={6} bg="white" rounded="xl" shadow="lg">
        <VStack spacing={6} align="start">
          <Icon as={FaGavel} w={10} h={10} color="purple.500" />
          <Heading size="lg" bgGradient="linear(to-r, purple.400, purple.600)" bgClip="text">
            📄 KULLANIM ŞARTLARI (Terms of Service)
          </Heading>
          <Text color="gray.500" fontSize="sm">Son güncelleme: Mayıs 2025</Text>
          <Text color="gray.700">
            Shlimazlbot, Discord üzerinde çalışan açık kaynaklı bir müzik botudur. Botu kullanarak aşağıdaki şartları kabul etmiş olursunuz.
          </Text>
          <Text color="gray.700">
            <b>1. Hizmet Tanımı</b><br/>
            Shlimazlbot, kullanıcıların Discord sunucularında müzik dinlemesine ve bazı yardımcı komutları kullanmasına olanak sağlar. Hobi amaçlı geliştirilmektedir ve ticari bir hizmet değildir.
            <br/><br/>
            <b>2. Kullanım Koşulları</b><br/>
            Bot, yalnızca Discord'un Topluluk Kuralları ve Hizmet Şartları ile uyumlu şekilde kullanılmalıdır.<br/>
            Bot yasa dışı, zararlı, istismar edici, spam içeren ya da sunucuları bozucu şekilde kullanılamaz.<br/>
            Geliştirici, botun tüm işlevlerini haber vermeden değiştirme veya kaldırma hakkını saklı tutar.
            <br/><br/>
            <b>3. Sorumluluk Reddi</b><br/>
            Bot “olduğu gibi” sunulmaktadır.<br/>
            Herhangi bir veri kaybı, kesinti, komutun beklenmeyen şekilde çalışması ya da botun kullanımı sırasında doğabilecek diğer sorunlardan geliştirici sorumlu tutulamaz.
            <br/><br/>
            <b>4. Güncellemeler</b><br/>
            Bu şartlar zamanla değiştirilebilir. Önemli değişikliklerde, GitHub sayfası üzerinden duyuru yapılır.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Terms 