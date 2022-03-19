import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import Head from 'next/head'

import { Chart } from '../components/Chart'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { chartSeries } from '../utils/apexChart/chartSeries'

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>dashgo | Dashboard</title>
      </Head>

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={['6', '8']} bg="gray.800" borderRadius="8" pb="4">
            <Chart title="Inscritos" series={chartSeries.weeklySubscribers} />
          </Box>

          <Box p={['6', '8']} bg="gray.800" borderRadius="8" pb="4">
            <Chart title="Taxa de abertura" series={chartSeries.openingRate} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
