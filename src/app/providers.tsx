// app/providers.tsx
'use client'
import ArrivalWindowContextProvider from "../context/MyContext"

import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ArrivalWindowContextProvider><ChakraProvider>{children}</ChakraProvider></ArrivalWindowContextProvider>
}