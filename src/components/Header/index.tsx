import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBar } from './SearchBar'

export function Header() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })

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

      {isWideScreen && <SearchBar />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showUserInfo={isWideScreen} />
      </Flex>
    </Flex>
  )
}
