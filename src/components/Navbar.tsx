import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('white', 'white');

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      backdropFilter="blur(20px)"
      bg={bg}
      borderBottom="1px"
      borderColor={borderColor}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between" px={4}>
        <Flex 
          as={RouterLink} 
          to="/"
          alignItems="center" 
          position="relative"
          cursor="pointer"
          role="group"
        >
          <Box 
            transition="all 0.2s"
            _groupHover={{
              transform: 'scale(1.05)',
            }}
          >
            <Image
              src="/Shlimazlbot-logo.png"
              alt="Shlimazlbot Logo"
              h="140px"
              objectFit="contain"
            />
          </Box>
          <Text
            position="absolute"
            left="100%"
            top="50%"
            transform="translateY(-50%)"
            ml={4}
            fontSize="lg"
            fontWeight="bold"
            color={textColor}
            opacity={0}
            transition="all 0.3s ease"
            whiteSpace="nowrap"
            _groupHover={{
              opacity: 1,
              left: "calc(100% + 10px)",
            }}
          >
            Ana Sayfa
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Stack direction="row" spacing={4}>
            <Button
              as={RouterLink}
              to="/commands"
              variant="ghost"
            >
              Komutlar
            </Button>
            <Button
              as={RouterLink}
              to="/features"
              variant="ghost"
            >
              Özellikler
            </Button>
            <Button
              as={RouterLink}
              to="/support"
              variant="ghost"
            >
              Destek
            </Button>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
} 