import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import Chart from 'react-apexcharts'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const chartOptions = {}
const chartSeries = [
  {
    name: 'series1',
    data: [21, 30, 10, 45, 54, 89, 98, 33]
  }
]

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

            {/* <Chart
              options={chartOptions}
              series={chartSeries}
              type="area"
              height={160}
            /> */}
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
