import React from 'react';
import styles from './Container.module.scss';
import clsx from 'clsx';

type ContainerProps = {
   children: React.ReactNode
   className?: string
}

const Container = ({ children, className }: ContainerProps) => {
   return (
      <div className={clsx(styles.container, className)}>
         {children}
      </div>
   )
}

export default Container