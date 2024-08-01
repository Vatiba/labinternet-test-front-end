import styles from './Checkbox.module.scss';

type CheckBoxProps = {
   id?: string
   checked: boolean
   onChange: (checked: boolean) => void
}

const Checkbox = (props: CheckBoxProps) => {

   const {
      id,
      checked,
      onChange,
   } = props;

   return (
      <div className={styles.checkbox}>
         <input
            className={styles.checkbox__input}
            id={id}
            checked={checked}
            onChange={() => onChange(!checked)}
            type="checkbox"
         />
         <label
            htmlFor={id}
            className={styles.checkbox__label}
         />
      </div>
   )
}

export default Checkbox;