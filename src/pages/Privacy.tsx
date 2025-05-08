import { Box, Heading, Text, Container, VStack, Icon, Link } from '@chakra-ui/react'
import { FaUserSecret } from 'react-icons/fa'

const Privacy = () => {
  return (
    <Box minH="80vh" display="flex" alignItems="center" justifyContent="center" bg="gray.50">
      <Container maxW="2xl" py={12} px={6} bg="white" rounded="xl" shadow="lg">
        <VStack spacing={6} align="start">
          <Icon as={FaUserSecret} w={10} h={10} color="purple.500" />
          <Heading size="lg" bgGradient="linear(to-r, purple.400, purple.600)" bgClip="text">
            🔒 GİZLİLİK POLİTİKASI (Privacy Policy)
          </Heading>
          <Text color="gray.500" fontSize="sm">Son güncelleme: Mayıs 2025</Text>
          <Text color="gray.700">
            Shlimazlbot, kullanıcı gizliliğine önem verir. Botun çalışabilmesi için sadece sınırlı teknik veri toplanır.
          </Text>
          <Text color="gray.700">
            <b>1. Toplanan Veriler</b><br/>
            Aşağıdaki veriler yalnızca geçici olarak ve teknik amaçlarla toplanır:<br/>
            - Kullanıcı ID'si<br/>
            - Komut geçmişi<br/>
            - Bot log kayıtları (örneğin: hata mesajları, yürütme zamanı)<br/>
            Bu veriler kalıcı olarak saklanmaz ve üçüncü taraflarla paylaşılmaz.
            <br/><br/>
            <b>2. Kalıcılık ve Veri Saklama</b><br/>
            Shlimazlbot hiçbir kişisel veriyi kalıcı olarak saklamaz. Tüm veriler, yalnızca işlem süresince RAM üzerinde geçici olarak tutulur.
            <br/><br/>
            <b>3. Şeffaflık ve Açık Kaynak</b><br/>
            Shlimazlbot açık kaynak kodludur ve herkesin erişimine açıktır.<br/>
            Kaynak koduna GitHub üzerinden ulaşabilirsiniz.<br/>
            <Link href="https://github.com/shlimazl31/benbotdegilimbotu" color="purple.600" isExternal>
              https://github.com/shlimazl31/benbotdegilimbotu
            </Link>
            <br/><br/>
            <b>4. Üçüncü Taraflar</b><br/>
            Toplanan veriler hiçbir şekilde üçüncü taraflara satılmaz, devredilmez veya pazarlama amacıyla kullanılmaz.
            <br/><br/>
            <b>5. İletişim</b><br/>
            Şu anda özel bir iletişim destek kanalı bulunmamaktadır. Bot hobi amaçlı geliştirildiğinden doğrudan destek sunulmamaktadır.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Privacy 