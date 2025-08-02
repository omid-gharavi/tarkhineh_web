'use client'

import { OnlineStatusInternet } from "@/providers/online-status"
import { useContext } from "react"

export default function useOnlineStatus() {
    const context = useContext(OnlineStatusInternet)
    if (!context) return;
    return context
}