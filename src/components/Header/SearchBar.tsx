import { Flex, Icon, Input } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export function SearchBar() {
  return (
    <Flex
      as="label"
      htmlFor="search"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      align="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        id="search"
        name="search"
        type="text"
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{
          color: 'gray.400'
        }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  )
}
