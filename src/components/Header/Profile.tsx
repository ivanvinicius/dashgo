import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Ivan Vinicius Boneti</Text>
        <Text color="gray.300" fontSize="small">
          ivanvinicius@example.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Ivan Vinicius Boneti"
        src="https://github.com/ivanvinicius.png"
      />
    </Flex>
  )
}
