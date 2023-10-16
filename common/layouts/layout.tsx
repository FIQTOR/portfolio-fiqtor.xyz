'use client'
import { createContext, useContext, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface ContextProps {
    fullPathName: string;
    setFullPathName: (titles: string) => void;
}

export const ContainerContext = createContext<ContextProps>({
    fullPathName: '',
    setFullPathName: () => { },
});

interface ContainerProps {
    children: ReactNode;
    pageName?: string;
    className?: string;
    [propName: string]: ReactNode | string | undefined;
}

export default function Container({ children, pageName = '/', className = '', ...others }: ContainerProps) {
    const pathName = usePathname()
    const [fullPathName, setFullPathName] = useState(pageName)

    return (
        <ContainerContext.Provider value={{ fullPathName, setFullPathName}}>
            <Navbar />
            <div className={`${className} dark:text-neutral-300`} {...others}>
                {children}
            </div>
            <Footer />
        </ContainerContext.Provider>
    );
}