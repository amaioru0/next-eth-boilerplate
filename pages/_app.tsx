import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import customTheme from "../styles/theme";
import NProgress from 'nprogress'
import Router from 'next/router';

import "styles/globals.css";

import type { AppProps } from 'next/app'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
