import { ElementType } from 'react'
import { Icon, Link, Text, LinkProps } from '@chakra-ui/react'

interface INavLinkProps extends LinkProps {
  icon: ElementType
  children: string
  active?: boolean
}

export function NavLink({
  icon,
  children,
  active = false,
  ...rest
}: INavLinkProps) {
  return (
    <Link
      {...rest}
      display="flex"
      alignItems="center"
      color={active ? 'pink.400' : ''}
    >
      <Icon as={icon} fontSize="22" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
