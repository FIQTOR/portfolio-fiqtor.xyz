
import { ReactNode } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    [propName: string]: ReactNode | string | undefined;
}

export default function Layout({ children, className = '', ...others }: ContainerProps) {

    return (
        <>
            <Navbar />
            <div className={`${className} dark:text-neutral-300`} {...others}>
                {children}
            </div>
            <Footer />
        </>
    );
}