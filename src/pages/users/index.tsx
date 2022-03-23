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
  useBreakpointValue,
  Spinner,
  Link as ChakraLink
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { useState } from 'react'

import { useUsers } from '../../services/hooks/users/useUsers'
import { useUserDetail } from '../../services/hooks/users/useUserDetail'
import { Header } from '../../components/Header'
import { LargeHeading } from '../../components/Heading/LargeHeading'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function ListUser() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error } = useUsers({ page })
  const isWideScreen = useBreakpointValue({ base: false, lg: true })

  // Just an example of how to use React Query Prefecth
  async function handlePrefecthUser(userId: string) {
    return useUserDetail({ userId })
  }

  return (
    <Box>
      <Head>
        <title>dashgo | Usuários</title>
      </Head>

      <Header />

      <Flex w="100%" mx="auto" my="6" px="6" maxW={1480}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Flex>
              <LargeHeading title="Usuários" />
              {!isLoading && isFetching && (
                <Spinner alignSelf="center" ml="4" color="gray.700" size="md" />
              )}
            </Flex>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner color="pink.500" alignSelf="center" size="xl" />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter os dados</Text>
            </Flex>
          ) : (
            <>
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
                  {data.users.map(({ id, name, email, formattedCreatedAt }) => (
                    <Tr key={id}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <ChakraLink
                            href="#"
                            color="pink.500"
                            onMouseEnter={() => handlePrefecthUser(id)}
                          >
                            <Text fontWeight="bold">{name}</Text>
                          </ChakraLink>
                          <Text fontSize="sm" color="gray.300">
                            {email}
                          </Text>
                        </Box>
                      </Td>

                      {isWideScreen && (
                        <>
                          <Td>{formattedCreatedAt}</Td>
                          <Td>
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="pink"
                              leftIcon={
                                <Icon as={RiPencilLine} fontSize="16" />
                              }
                            >
                              Editar
                            </Button>
                          </Td>
                        </>
                      )}
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
