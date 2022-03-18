import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { chartOptions } from '../utils/apexChart/chartOptions'
import { chartSeries } from '../utils/apexChart/chartSeries'

/**
 * It loads the chart on client side, to avoid an error which says 'window is
 * not defined' on browser. This error occurs because some properties used by the
 * chart like window, are not available on server side (Node layer).
 *
 * The function dynamic is responsible to make lazy loading.
 */
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" mx="auto" my="6" px="6" maxW={1480}>
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>

            <Chart
              options={chartOptions}
              series={chartSeries.weeklySubscribers}
              type="area"
              height={200}
              pb="4"
            />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart
              options={chartOptions}
              series={chartSeries.openingRate}
              type="area"
              height={200}
              pb="4"
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
