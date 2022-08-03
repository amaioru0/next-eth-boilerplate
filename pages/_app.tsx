import type { AppProps } from 'next/app'
import Router from 'next/router';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
// import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui'
import customTheme from "../styles/theme";
import NProgress from 'nprogress'
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
// import "styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {


  //This is currently using the public alchemy ID. Please add your own to avoid being rate limited
  //Docs can be found here: https://wagmi.sh/docs/providers/alchemy
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [
      alchemyProvider(),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'Eth Next.js Boilerplate',
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })

  return(
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider theme={customTheme}>
          {/* <ThemeEditorProvider> */}
            <CSSReset />
            <Component {...pageProps} />
          {/* </ThemeEditorProvider> */}
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
