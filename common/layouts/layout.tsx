'use client'
import { ReactNode, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface ContainerProps {
    children: ReactNode;
    pageNameProp?: string;
    className?: string;
    [propName: string]: ReactNode | string | undefined;
}

export default function Container({ children, pageNameProp, className = '', ...others }: ContainerProps) {
    const [pageName, setPageName] = useState((pageNameProp) ? pageNameProp : '');

    function handleNavigation (value: string) {
        setPageName(value);
    }
    return (
        <>
            <Navbar pageName={pageName} handleNavigation={handleNavigation} />
            <div className={`${className} dark:text-neutral-300`} {...others}>
                {children}
            </div>
            <Footer />
        </>
    );
}