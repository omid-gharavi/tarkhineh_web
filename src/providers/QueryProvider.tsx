'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
};

const client = new QueryClient()

export default function QueryProvider({ children }: Props) {
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}