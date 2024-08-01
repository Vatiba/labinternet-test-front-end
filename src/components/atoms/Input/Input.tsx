import React, { forwardRef, HTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Input.module.scss';

type InputProps = HTMLAttributes<HTMLInputElement> & {
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }: InputProps, ref) => {
   return (
      <input
         {...props}
         className={clsx(className, styles.input)}
         ref={ref}
      />
   )
})

export default Input