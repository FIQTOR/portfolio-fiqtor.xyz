'use client'
import { createContext, useState } from 'react'
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

    return (
        <ContainerContext.Provider value={{ fullPathName, setFullPathName }}>
            {children}
        </ContainerContext.Provider>
    );
}