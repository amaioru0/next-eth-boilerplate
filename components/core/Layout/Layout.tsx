import { FC } from 'react'
import { Flex } from '@chakra-ui/layout'
import NavBar from './NavBar';

import Head from 'next/head'
// import { useWallet } from '../../context/wallet-provider'


const Footer = () => {
    return <Flex height="10%"></Flex>
  }

const Layout: FC<any> = ({ children }) => {
  // const { activateBrowserWallet, account } = useWallet()

  //Uncomment this if you want the wallet to connect as soon as the website loads
  // useEffect(() => {
  //   try {
  //     activateBrowserWallet()
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }, [activateBrowserWallet])

  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta name="description" content="Ethereum + Next.js DApp Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout;
