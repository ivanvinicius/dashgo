import { Button } from '@chakra-ui/react'

interface IPaginationItemProps {
  isCurrentPage?: boolean
  pageNumber: number
}

export function PaginationItem({
  isCurrentPage = false,
  pageNumber
}: IPaginationItemProps) {
  if (isCurrentPage) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bgColor="gray.700"
      _hover={{ bgColor: 'gray.500' }}
    >
      {pageNumber}
    </Button>
  )
}
