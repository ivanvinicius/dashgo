import { useDisclosure, UseDisclosureProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface ISidebarDrawerProviderProps {
  children: ReactNode
}

const SidebarDrawerContext = createContext<UseDisclosureProps>(
  {} as UseDisclosureProps
)

function SidebarDrawerProvider({ children }: ISidebarDrawerProviderProps) {
  const { asPath } = useRouter()
  const disclosure = useDisclosure()

  /**
   * By default, the drawer stays open when a redirect occours, then we need
   * to implement this method to watch the urlPath, and close the drawer when
   * its change
   */
  useEffect(() => {
    disclosure.onClose()
  }, [asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

function useSidebarDrawer(): UseDisclosureProps {
  const context = useContext(SidebarDrawerContext)

  if (!context) {
    throw new Error(
      'useSidebarDrawer hook must be wrapped by SidebarDrawerProvider.'
    )
  }

  return context
}

export { SidebarDrawerProvider, useSidebarDrawer }
