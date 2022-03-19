import { ReactNode } from 'react'

import { SidebarDrawerProvider } from './SidebarDrawer'

interface IAppProvider {
  children: ReactNode
}

export function AppProvider({ children }: IAppProvider) {
  return <SidebarDrawerProvider>{children}</SidebarDrawerProvider>
}
