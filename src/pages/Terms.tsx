import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const Terms = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box bg={bgColor} minH="100vh" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="start">
          <Heading>Kullanım Şartları</Heading>
          
          <Text color={textColor}>
            Shlimazlbot'u kullanarak aşağıdaki şartları kabul etmiş sayılırsınız:
          </Text>

          <VStack spacing={4} align="start">
            <Heading size="md">1. Hizmet Kullanımı</Heading>
            <Text color={textColor}>
              • Bot, Discord platformunda müzik çalma ve moderasyon hizmetleri sunar.<br />
              • Bot'un kullanımı tamamen ücretsizdir.<br />
              • Bot'un kullanımı için Discord sunucunuzda yönetici veya bot yönetme yetkisine sahip olmanız gerekir.
            </Text>

            <Heading size="md">2. Sorumluluk Reddi</Heading>
            <Text color={textColor}>
              • Bot'un kullanımından doğabilecek herhangi bir sorundan kullanıcılar sorumludur.<br />
              • Bot'un kesintisiz çalışacağı garanti edilmez.<br />
              • Bot'un kullanımından doğabilecek veri kayıplarından sorumlu değiliz.
            </Text>

            <Heading size="md">3. Gizlilik</Heading>
            <Text color={textColor}>
              • Bot, sadece sunucu istatistiklerini ve temel kullanım verilerini toplar.<br />
              • Toplanan veriler sadece bot'un işlevselliği için kullanılır.<br />
              • Kullanıcı verileri üçüncü taraflarla paylaşılmaz.
            </Text>

            <Heading size="md">4. Değişiklikler</Heading>
            <Text color={textColor}>
              • Bu kullanım şartları zaman zaman güncellenebilir.<br />
              • Önemli değişiklikler Discord sunucumuzda duyurulacaktır.
            </Text>

            <Heading size="md">5. İletişim</Heading>
            <Text color={textColor}>
              Sorularınız ve önerileriniz için Discord sunucumuza katılabilir veya GitHub üzerinden iletişime geçebilirsiniz.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Terms; 