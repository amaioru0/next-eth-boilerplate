import { extendTheme, theme } from "@chakra-ui/react";
import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { colors } from "utils/constants";

// const customTheme = {
  
// }

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    teal: {
      100: "#d6eaea",
      200: "#add5d5",
      300: "#83c1bf",
      400: "#5aacaa",
      500: "#319795",
      600: "#277977",
      700: "#1d5b59",
      800: "#143c3c",
      900: "#0a1e1e",
    },
    blue: "#0070f3",
  },
};

const Button: ComponentStyleConfig = {
    // The styles all button have in common
    baseStyle: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderRadius: 'base', // <-- border radius is same for all variants and sizes
    },
    // Two sizes: sm and md
    sizes: {
      sm: {
        fontSize: 'sm',
        px: 4, // <-- px is short for paddingLeft and paddingRight
        py: 3, // <-- py is short for paddingTop and paddingBottom
      },
      md: {
        fontSize: 'md',
        px: 6, // <-- these values are tokens from the design system
        py: 4, // <-- these values are tokens from the design system
      },
    },
    // Two variants: outline and solid
    variants: {
      outline: {
        border: '2px solid',
        borderColor: colors.primary,
        color: colors.primary,
      },
      solid: {
        bg: colors.primary,
        color: colors.secondary,
      },
    },
    // The default size and variant values
    defaultProps: {
      size: 'md',
      variant: 'outline',
    },
  }

export default extendTheme({
    customTheme,
    components: {
        Button,
      },
});