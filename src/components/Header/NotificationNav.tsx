import { Icon, HStack } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function NotificationNav() {
  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      py="2"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="22" />
      <Icon as={RiUserAddLine} fontSize="22" />
    </HStack>
  )
}
