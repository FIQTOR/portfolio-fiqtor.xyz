'use client'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    [propName: string]: ReactNode | string | undefined;
}

export default function Container({ children, className = '', ...others }: ContainerProps) {
    const pathName = usePathname()
    return (
        <>
            <Navbar pathName={pathName} />
            <div className={`${className} dark:text-neutral-300`} {...others}>
                {children}
            </div>
            <Footer />
        </>
    );
}