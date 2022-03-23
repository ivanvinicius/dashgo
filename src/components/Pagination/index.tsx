import { Stack, Box, Text } from '@chakra-ui/react'

import { PaginationItem } from './PaginationItem'

interface IPaginationProps {
  totalCountOfRegister: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...[to - from]]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0)
}

export function Pagination({
  totalCountOfRegister,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: IPaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegister / registersPerPage)

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage > 1
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount + lastPage)) //eslint-disable-line
      : []

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
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem pageNumber={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.500" mx="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => (
            <PaginationItem key={page} pageNumber={page} />
          ))}

        <PaginationItem pageNumber={currentPage} isCurrentPage />

        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem key={page} pageNumber={page} />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.500" mx="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem pageNumber={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}
