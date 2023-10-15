import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
}

export default function Container({ children, className = '', ...others }: ContainerProps) {
  return (
    <div className={`${className} dark:text-neutral-300`} {...others}>
      {children}
    </div>
  );
}