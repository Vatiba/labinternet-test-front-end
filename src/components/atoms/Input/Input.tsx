import { forwardRef, InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Input.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
   return (
      <input
         {...props}
         className={clsx(className, styles.input)}
         ref={ref}
      />
   )
})

export default Input