import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AppProvider } from '../hooks'
import { theme } from '../styles/theme'
import { makeMirageServer } from '../services/mirage'

if (process.env.NODE_ENV === 'development') {
  makeMirageServer()
}

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}
