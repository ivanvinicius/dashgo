import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { AppProvider } from '../hooks'
import { theme } from '../styles/theme'
import { makeMirageServer } from '../services/mirage'

if (process.env.NODE_ENV === 'development') {
  makeMirageServer()
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  )
}
