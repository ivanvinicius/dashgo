import { Button } from '@chakra-ui/react'

interface IPaginationItemProps {
  number: number
  isCurrentPage?: boolean
  onPageChange: (page: number) => void
}

export function PaginationItem({
  number,
  isCurrentPage = false,
  onPageChange
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
        {number}
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
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}
