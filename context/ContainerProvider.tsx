'use client'
import { createContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react';

interface ContextProps {
    fullPathName: string;
    setFullPathName: (titles: string) => void;
}

export const ContainerContext = createContext<ContextProps>({
    fullPathName: '',
    setFullPathName: () => { },
});

interface ContainerContextProps {
    children: ReactNode;
}

export default function ContainerProvider({ children }: ContainerContextProps) {
    const pathName = usePathname()
    const [fullPathName, setFullPathName] = useState(pathName)

    useEffect(() => {
        setFullPathName(pathName + window.location.hash);
    }, [])

    return (
        <ContainerContext.Provider value={{ fullPathName, setFullPathName }}>
            {children}
        </ContainerContext.Provider>
    );
}