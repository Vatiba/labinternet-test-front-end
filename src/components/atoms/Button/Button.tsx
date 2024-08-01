import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes } from 'react'
import styles from './Button.module.scss';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
   children: React.ReactNode
   /**
    * @default primary
    */
   type?: 'primary' | 'gray'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, type = 'primary', className, ...props }, ref) => {
   return (
      <button
         {...props}
         ref={ref}
         className={clsx(className, styles.btn, {
            [styles.btn_primary]: type == 'primary',
            [styles.btn_gray]: type == 'gray'
         })}
      >
         {children}
      </button>
   )
});

export default Button