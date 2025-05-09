import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const Privacy = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box bg={bgColor} minH="100vh" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="start">
          <Heading>Gizlilik Politikası</Heading>
          
          <Text color={textColor}>
            Bu gizlilik politikası, Shlimazlbot'un nasıl veri topladığını ve kullandığını açıklar.
          </Text>

          <VStack spacing={4} align="start">
            <Heading size="md">1. Toplanan Veriler</Heading>
            <Text color={textColor}>
              • Sunucu ID'si ve temel sunucu bilgileri<br />
              • Bot kullanım istatistikleri<br />
              • Komut kullanım verileri<br />
              • Hata raporları ve performans metrikleri
            </Text>

            <Heading size="md">2. Veri Kullanımı</Heading>
            <Text color={textColor}>
              • Toplanan veriler sadece bot'un işlevselliğini iyileştirmek için kullanılır<br />
              • Sunucu yönetimi ve moderasyon özellikleri için gerekli veriler saklanır<br />
              • Kullanıcı deneyimini geliştirmek için anonim istatistikler toplanır
            </Text>

            <Heading size="md">3. Veri Güvenliği</Heading>
            <Text color={textColor}>
              • Tüm veriler güvenli sunucularda saklanır<br />
              • Veriler şifrelenerek korunur<br />
              • Düzenli güvenlik güncellemeleri yapılır
            </Text>

            <Heading size="md">4. Veri Paylaşımı</Heading>
            <Text color={textColor}>
              • Kullanıcı verileri üçüncü taraflarla paylaşılmaz<br />
              • Yasal zorunluluklar dışında veri paylaşımı yapılmaz<br />
              • Veriler sadece bot'un geliştirilmesi için kullanılır
            </Text>

            <Heading size="md">5. Kullanıcı Hakları</Heading>
            <Text color={textColor}>
              • Verilerinizin nasıl kullanıldığını öğrenme hakkına sahipsiniz<br />
              • Verilerinizin silinmesini talep edebilirsiniz<br />
              • Veri toplama işlemlerini reddedebilirsiniz
            </Text>

            <Heading size="md">6. İletişim</Heading>
            <Text color={textColor}>
              Gizlilik politikamız hakkında sorularınız için Discord sunucumuza katılabilir veya GitHub üzerinden iletişime geçebilirsiniz.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Privacy; 