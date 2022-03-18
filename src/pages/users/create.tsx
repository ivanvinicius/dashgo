import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  VStack
} from '@chakra-ui/react'
import { RiCloseLine, RiSaveLine } from 'react-icons/ri'

import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export default function CreateUser() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" mx="auto" my="6" px="6" maxW={1480}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid width="100%" spacing="8" minChildWidth="240px">
              <Input name="name" label="Nome completo" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>
            <SimpleGrid width="100%" spacing="8" minChildWidth="240px">
              <Input name="password" label="Senha" type="password" />
              <Input
                name="passwordConfirmation"
                label="Confirmação da senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button
                colorScheme="pink"
                leftIcon={<Icon as={RiSaveLine} fontSize="20" />}
              >
                Salvar
              </Button>
              <Button
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={RiCloseLine} fontSize="20" />}
              >
                Cancelar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}
