import { Box, Flex, SimpleGrid } from '@chakra-ui/react'

import { Chart } from '../components/Chart'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { chartSeries } from '../utils/apexChart/chartSeries'

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
            <Chart title="Inscritos" series={chartSeries.weeklySubscribers} />
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Chart title="Taxa de abertura" series={chartSeries.openingRate} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
