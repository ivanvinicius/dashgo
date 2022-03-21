import { theme } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'

export const chartOptions = {
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
    chart: {
      width: '100%'
    },
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
