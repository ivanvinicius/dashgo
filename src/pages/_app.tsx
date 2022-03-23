import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { AppProvider } from '../hooks'
import { theme } from '../styles/theme'
import { makeMirageServer } from '../services/mirage'
import { queryClient } from '../services/reactQueryClient'

if (process.env.NODE_ENV === 'development') {
  makeMirageServer()
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
