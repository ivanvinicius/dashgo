import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

type refType = HTMLInputElement

interface IInputBaseProps extends ChakraInputProps {
  name: string
  label?: string
  error: FieldError
}

const InputBase: ForwardRefRenderFunction<refType, IInputBaseProps> = (
  { name, label, error, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        ref={ref}
        {...rest}
        size="lg"
        bgColor="gray.900"
        variant="filled"
        focusBorderColor="pink.500"
        _hover={{
          bgColor: 'gray.900'
        }}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
