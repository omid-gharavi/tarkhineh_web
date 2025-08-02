'use client'

import React, { createContext, Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from "react"
import { toast } from "sonner";

export const OnlineStatusInternet = createContext<{
    status: boolean,
    setStatus: SetStateAction<Dispatch<boolean>>
} | undefined>(undefined);

interface Props {
    children: Readonly<React.ReactNode>
}

export default function OnlineStatus({ children }: Props) {
    const [status, setStatus] = useState<boolean>(() =>
        typeof window !== 'undefined' ? navigator.onLine : true
    );
    const hasBeenOffline = useRef<boolean>(false);

    useEffect(() => {
        const handleOnline = () => {
            setStatus(true);
            if (hasBeenOffline) {
                toast.success('متصل شد');
            }
        };

        const handleOffline = () => {
            setStatus(false);
            hasBeenOffline.current = true;
            toast.error('اتصال قطع شد');
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, [hasBeenOffline])

    return (
        <OnlineStatusInternet.Provider value={{ status, setStatus }}>
            {children}
        </OnlineStatusInternet.Provider>
    )
}