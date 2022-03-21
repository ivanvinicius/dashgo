import { cloneElement, ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface IActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMactchExactHref?: boolean
}

export function ActiveLink({
  children,
  shouldMactchExactHref = false,
  ...rest
}: IActiveLinkProps) {
  const { asPath } = useRouter()

  let isActive = false

  if (shouldMactchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (
    !shouldMactchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {/* Clone the children element, changing the color attribute by isActive prop */}
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}
