import { ReactNode } from 'react'
import { Box, Text, Stack } from '@chakra-ui/react'

interface INavSectionProps {
  title: string
  children: ReactNode
}

export function NavSection({ title, children }: INavSectionProps) {
  return (
    <Box>
      <Text
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="small"
        color="gray.400"
      >
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}
