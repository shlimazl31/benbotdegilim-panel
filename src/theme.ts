import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5e8ff',
      100: '#e0bfff',
      200: '#c996ff',
      300: '#b06cff',
      400: '#9842ff',
      500: '#7f1fff',
      600: '#6517cc',
      700: '#4b1199',
      800: '#310b66',
      900: '#180533',
    },
    background: '#181825',
    surface: '#232136',
    accent: '#7f1fff',
    text: '#e0def4',
    muted: '#6e6a86',
  },
  styles: {
    global: {
      body: {
        bg: '#181825',
        color: '#e0def4',
      },
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'xl',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.400',
          },
        },
      },
    },
  },
})

export default theme 