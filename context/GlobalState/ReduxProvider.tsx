'use client'

import { Provider } from "react-redux"
import { ReactNode } from "react"

interface ProviderReduxProps {
  store: any;
  children: ReactNode;
}

export function Providers({ store, children }: ProviderReduxProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}