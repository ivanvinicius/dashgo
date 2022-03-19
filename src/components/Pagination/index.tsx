import { Stack, Box } from '@chakra-ui/react'

import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justifyContent="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="4">
        <PaginationItem pageNumber={1} isCurrentPage />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
      </Stack>
    </Stack>
  )
}
