import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

import { useSidebarDrawer } from '../../hooks/SidebarDrawer'

import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBar } from './SearchBar'

export function Header() {
  const { onOpen } = useSidebarDrawer()

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
      alignItems="center"
    >
      {!isWideScreen && (
        <IconButton
          aria-label="Open drawer navigation"
          display="flex"
          mr="3"
          fontSize="24"
          variant="unstyled"
          icon={<Icon as={RiMenuLine} alignSelf="center" />}
          onClick={onOpen}
        />
      )}

      <Logo />

      {isWideScreen && <SearchBar />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showUserInfo={isWideScreen} />
      </Flex>
    </Flex>
  )
}
