import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { SearchBar } from './SearchBar'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mt="4"
      px="6"
      mx="auto"
      align="center"
    >
      <Logo />
      <SearchBar />
      <NotificationNav />
    </Flex>
  )
}
