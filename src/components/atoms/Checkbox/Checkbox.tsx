import { forwardRef } from 'react';
import styles from './Checkbox.module.scss';
import clsx from 'clsx';

type CheckBoxProps = {
   id?: string
   checked: boolean
   onChange: (checked: boolean) => void
   className?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>((props, ref) => {

   const {
      id,
      checked,
      onChange,
      className
   } = props;

   return (
      <div className={clsx(styles.checkbox, className)}>
         <input
            className={styles.checkbox__input}
            id={id}
            checked={checked}
            onChange={() => onChange(!checked)}
            type="checkbox"
            ref={ref}
         />
         <label
            htmlFor={id}
            className={styles.checkbox__label}
         />
      </div>
   )
});

export default Checkbox;