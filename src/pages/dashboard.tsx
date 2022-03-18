import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

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

const chartOptions = {
  fill: {
    colors: [theme.colors.pink[500]],
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'vertical',
      shadeIntensity: 0.6,
      opacityFrom: 0.9,
      opacityTo: 0.2
    }
  },
  stroke: {
    colors: [theme.colors.pink[500]]
  },
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-01-01T08:30:00.000Z',
      '2022-02-01T08:30:00.000Z',
      '2022-03-02T09:30:00.000Z',
      '2022-04-01T08:30:00.000Z',
      '2022-05-01T08:30:00.000Z',
      '2022-06-01T08:30:00.000Z'
    ]
  }
} as ApexOptions

const weekSubscribersSeries = [
  {
    name: 'series1',
    data: [200, 170, 290, 250, 270, 310]
  }
]

const openingRateSeries = [
  {
    name: 'series1',
    data: [300, 390, 290, 120, 250, 200]
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

            <Chart
              options={chartOptions}
              series={weekSubscribersSeries}
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
              series={openingRateSeries}
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
