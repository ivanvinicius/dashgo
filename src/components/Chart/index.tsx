import dynamic from 'next/dynamic'
import { Text } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'

import { chartOptions } from '../../utils/apexChart/chartOptions'

interface IChartProps {
  title: string
  series: ApexOptions['series']
}

/**
 * It loads the chart on client side, to avoid an error which says 'window is
 * not defined' on browser. This error occurs because some properties used by the
 * chart like window, are not available on server side (Node layer).
 *
 * The function dynamic is responsible to make lazy loading.
 */
const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export function Chart({ title, series }: IChartProps) {
  return (
    <>
      <Text fontSize="lg" mb="4">
        {title}
      </Text>

      <ApexChart
        options={chartOptions}
        series={series}
        type="area"
        height={200}
        pb="4"
      />
    </>
  )
}
