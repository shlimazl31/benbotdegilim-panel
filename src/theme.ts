import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#f5e6ff',
      100: '#d9b3ff',
      200: '#bf80ff',
      300: '#a64dff',
      400: '#8c1aff',
      500: '#7300e6',
      600: '#5900b3',
      700: '#400080',
      800: '#26004d',
      900: '#0d001a',
    },
    background: '#181825',
    surface: '#232136',
    accent: '#7f1fff',
    text: '#e0def4',
    muted: '#6e6a86',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        fontFamily: 'TRT, sans-serif',
      },
    }),
  },
  fonts: {
    heading: 'TRT, sans-serif',
    body: 'TRT, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
        fontFamily: 'TRT, sans-serif',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        fontFamily: 'TRT, sans-serif',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'TRT, sans-serif',
      },
    },
  },
})

export default theme 