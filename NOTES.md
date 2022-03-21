1. Criando uma promise de loading
```js
await new Promise(resolve => setTimeout(resolve, 2000))
```

2. Pegando erros do formulário, através do React Hook Form de forma nativa
```js 
// SignIn form page
const { register, formState } = useForm()

 <Input
  name="password"
  {...register('password', {
    minLength: { value: 6, message: 'Senha deve conter 6 dígitos' }
  })}
  error={formState.errors.password}
/>

// Input Component with ChakraUi
import { FieldError } from 'react-hook-form'

interface Props {
  error: FieldError
}

return (
  <FormControl isInvalid={!!error}>
    {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
  </FormControl>
)
```