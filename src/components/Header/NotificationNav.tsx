import { Flex, Icon, HStack } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

import { Profile } from './Profile'

export function NotificationNav() {
  return (
    <Flex align="center" ml="auto">
      <HStack
        spacing="8"
        mx="8"
        pr="8"
        py="2"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine} fontSize="22" />
        <Icon as={RiUserAddLine} fontSize="22" />
      </HStack>

      <Profile />
    </Flex>
  )
}
