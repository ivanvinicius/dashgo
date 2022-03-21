import { Box, Flex, SimpleGrid, Spinner } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Chart } from '../components/Chart'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { chartSeries } from '../utils/apexChart/chartSeries'

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowChart(true), 500)

    // Cleaning the timeout between re-renders to avoid loops
    return () => clearTimeout(timer)
  }, [])

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
          <Box
            display="flex"
            flexDirection="column"
            p={['6', '8']}
            bg="gray.800"
            borderRadius="8"
            pb="4"
          >
            {showChart ? (
              <Chart title="Inscritos" series={chartSeries.weeklySubscribers} />
            ) : (
              <Spinner color="pink.500" alignSelf="center" size="xl" />
            )}
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            p={['6', '8']}
            bg="gray.800"
            borderRadius="8"
            pb="4"
          >
            {showChart ? (
              <Chart
                title="Taxa de abertura"
                series={chartSeries.openingRate}
              />
            ) : (
              <Spinner color="pink.500" alignSelf="center" size="xl" />
            )}
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
