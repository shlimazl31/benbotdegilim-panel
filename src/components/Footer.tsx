import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box as="footer" py={6} borderTop="1px" borderColor={borderColor}>
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(3, 1fr)" gap={4} alignItems="center">
          <GridItem>
            <Stack direction="row" spacing={4} color={textColor}>
              <Link as={RouterLink} to="/terms" _hover={{ textDecoration: 'none', color: 'purple.400' }}>
                Kullanım Şartları
              </Link>
              <Text>|</Text>
              <Link as={RouterLink} to="/privacy" _hover={{ textDecoration: 'none', color: 'purple.400' }}>
                Gizlilik Politikası
              </Link>
            </Stack>
          </GridItem>

          <GridItem textAlign="center">
            <Text>© 2024 Shlimazlbot. Tüm hakları saklıdır.</Text>
          </GridItem>

          <GridItem textAlign="right">
            <Stack direction="row" spacing={6} justify="flex-end">
              <Link href="https://benbotdegilim.online/invite" isExternal>
                <FaDiscord size="20px" />
              </Link>
              <Link href="https://github.com/shlimazl31/benbotdegilimbotu/" isExternal>
                <FaGithub size="20px" />
              </Link>
              <Link href="https://x.com/ichbinshlimazl" isExternal>
                <FaTwitter size="20px" />
              </Link>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer; 