import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  VStack
} from '@chakra-ui/react'
import Link from 'next/link'
import Head from 'next/head'
import { RiCloseLine, RiSaveLine } from 'react-icons/ri'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as y from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'

import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { LargeHeading } from '../../components/Heading/LargeHeading'
import { Sidebar } from '../../components/Sidebar'
import { api } from '../../services/api'
import { queryClient } from '../../services/reactQueryClient'

interface ICreateUserFormData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

const createUserFormSchema = y.object().shape({
  name: y.string().required('Nome obrigatório'),
  email: y.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: y.string().min(6, 'Senha deve conter no mínimo 6 dígitos'),
  passwordConfirmation: y
    .string()
    .oneOf([null, y.ref('password')], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const router = useRouter()

  const createUser = useMutation(
    async (user: ICreateUserFormData) => {
      await api.post('/users', {
        user: {
          ...user,
          created_at: new Date()
        }
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users'])
      }
    }
  )

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<ICreateUserFormData> = async (data) => {
    await createUser.mutateAsync(data)

    router.push('/users')
  }

  return (
    <Box>
      <Head>
        <title>dashgo | Criar usuário</title>
      </Head>

      <Header />

      <Flex w="100%" mx="auto" my="6" px="6" maxW={1480}>
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
        >
          <LargeHeading title="Criar usuário" />

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={['6', '8']}>
            <SimpleGrid width="100%" spacing={['6', '8']} minChildWidth="240px">
              <Input
                name="name"
                label="Nome completo"
                {...register('name')}
                error={errors.name}
              />
              <Input
                type="email"
                name="email"
                label="E-mail"
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid width="100%" spacing={['6', '8']} minChildWidth="240px">
              <Input
                type="password"
                name="password"
                label="Senha"
                {...register('password')}
                error={errors.password}
              />
              <Input
                type="password"
                name="passwordConfirmation"
                label="Confirmação da senha"
                {...register('passwordConfirmation')}
                error={errors.passwordConfirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button
                  as="a"
                  colorScheme="whiteAlpha"
                  leftIcon={<Icon as={RiCloseLine} fontSize="20" />}
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                isLoading={isSubmitting}
                colorScheme="pink"
                leftIcon={<Icon as={RiSaveLine} fontSize="20" />}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
