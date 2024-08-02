import { ChangeEvent, forwardRef, InputHTMLAttributes, useImperativeHandle, useRef, useState } from 'react';
import styles from './OutlineInput.module.scss';
import Input from 'components/atoms/Input';
import clsx from 'clsx';

// icons
import CheckIcon from 'assets/icons/check-circle.svg';
import CancelIcon from 'assets/icons/cancel-circle.svg';

type OutlineInputProps = InputHTMLAttributes<HTMLInputElement> & {
   label: string
   helperText?: string
   /** @default false  */
   isError?: boolean
   /** @default false  */
   isSuccess?: boolean
}

const OutlineInput = forwardRef<HTMLInputElement, OutlineInputProps>((props, ref) => {
   const {
      label,
      helperText,
      isError = false,
      isSuccess = false,
      value,
      onChange,
      ...rest
   } = props;
   const [isLabelActive, setIsLabelActive] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);

   useImperativeHandle(ref, () => inputRef.current!, []); // to catch coming forward ref 

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.value) setIsLabelActive(true);
      else setIsLabelActive(false);
      onChange?.(e);
   }

   return (
      <div className={styles.outlineInput}>
         <div
            className={clsx(styles.outlineInput__inner, {
               [styles.outlineInput__inner_error]: isError
            })}
            onClick={() => inputRef.current?.focus()}
         >
            <div className={styles.outlineInput__labelinput}>
               <Input
                  className={styles.outlineInput__input}
                  id={label}
                  ref={inputRef}
                  onChange={(e) => handleInputChange(e)}
                  {...rest}
               />
               <label
                  className={clsx(styles.outlineInput__label, {
                     [styles.outlineInput__label_active]: isLabelActive
                  })}
                  htmlFor={label}
               >
                  {label}
               </label>
            </div>
            {
               isSuccess ? <img src={CheckIcon} alt="success" />
                  : isError ? <img src={CancelIcon} alt="error" />
                     : null
            }
         </div>
         {
            isError && helperText ?
               <span className={styles.outlineInput__helperText}>
                  {helperText}
               </span>
               : null
         }
      </div>
   )
})

export default OutlineInput