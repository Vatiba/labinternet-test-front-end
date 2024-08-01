import { forwardRef, HTMLAttributes } from 'react';
import styles from './BurgerButton.module.scss';
import clsx from 'clsx';

type BurgerButtonProps = HTMLAttributes<HTMLButtonElement> & {
   isActive: boolean
   stickCN?: string
}

const BurgerButton = forwardRef<HTMLButtonElement, BurgerButtonProps>(({ isActive, className, stickCN, ...props }, ref) => {
   return (
      <button
         {...props}
         className={clsx(styles.btn, className)}
         ref={ref}
      >
         <span className={clsx(styles.btn__stick, styles.btn__stickTop, stickCN, {
            [styles.btn__stickTop_active]: isActive
         })} />
         <span className={clsx(styles.btn__stick, styles.btn__stickBottom, stickCN, {
            [styles.btn__stickBottom_active]: isActive
         })} />
      </button>
   )
})

export default BurgerButton