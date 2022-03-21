import { Flex, Stack, Button } from '@chakra-ui/react'
import Head from 'next/head'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Input } from '../components/Form/Input'

interface ISignInFormData {
  email: string
  password: string
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<ISignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('SIGN IN FORM DATA', data)
  }

  return (
    <Flex w={'100vw'} h={'100vh'} align={'center'} justify={'center'}>
      <Head>
        <title>dashgo | Entrar</title>
      </Head>

      <Flex
        as={'form'}
        onSubmit={handleSubmit(handleSignIn)}
        w={'100%'}
        maxW={360}
        bg={'gray.800'}
        p={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            {...register('email')}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            {...register('password')}
          />
        </Stack>

        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
