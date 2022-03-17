import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboard2Line,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="small"
            color="gray.400"
          >
            Geral
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center" color="pink.400">
              <Icon as={RiDashboard2Line} fontSize="22" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="22" />
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="small"
            color="gray.400"
          >
            Automação
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="22" />
              <Text ml="4" fontWeight="medium">
                Formulários
              </Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="22" />
              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
