import { forwardRef, ForwardRefRenderFunction } from 'react'
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

type refType = HTMLInputElement

interface IInputBaseProps extends ChakraInputProps {
  name: string
  label?: string
}

const InputBase: ForwardRefRenderFunction<refType, IInputBaseProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
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
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
