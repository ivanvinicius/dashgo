import { Heading } from '@chakra-ui/react'

interface ILargeHeadingProps {
  title: string
}

export function LargeHeading({ title }: ILargeHeadingProps) {
  return (
    <Heading size="lg" fontWeight="normal">
      {title}
    </Heading>
  )
}
