import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { LargeHeading } from '../../components/Heading/LargeHeading'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function ListUser() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" mx="auto" my="6" px="6" maxW={1480}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <LargeHeading title="Usuários" />

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>

                {isWideScreen && (
                  <>
                    <Th>Data de cadastro</Th>
                    <Th w="8" />
                  </>
                )}
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" color="pink.500">
                      Ivan Vinicius Boneti
                    </Text>
                    <Text fontSize="sm" color="gray.300">
                      ivanvinicius@example.com
                    </Text>
                  </Box>
                </Td>

                {isWideScreen && (
                  <>
                    <Td>18 de Março de 2022</Td>
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="pink"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  </>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
