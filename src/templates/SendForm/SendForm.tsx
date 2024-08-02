import { useState } from 'react'
import styles from './SendForm.module.scss';
import Container from 'components/atoms/Container';
import Text from 'components/atoms/Text';
import OutlineInput from 'components/molecules/OutlineInput';
import Button from 'components/atoms/Button';
import Checkbox from 'components/atoms/Checkbox';


function SendForm() {
   const [checked, setChecked] = useState(false);

   return (
      <section className={styles.sendForm}>
         <Container className={styles.sendForm__inner}>
            <Text.H4 className={styles.sendForm__title} id='sendForm'>
               Отправь форму
            </Text.H4>
            <form className={styles.row}>
               <div className={styles.col}>
                  <OutlineInput
                     label='Имя'
                  />
               </div>
               <div className={styles.col}>
                  <OutlineInput
                     label='Телефон'
                  />
               </div>
               <div className={styles.col}>
                  <label htmlFor="checkbox" className={styles.checkboxTxt}>
                     <Checkbox
                        id='checkbox'
                        checked={checked}
                        onChange={() => setChecked(prev => !prev)}
                        className={styles.checkbox}
                     />

                     Согласен, отказываюсь
                  </label>
               </div>
               <div className={styles.col}>
                  <Button className={styles.submitBtn}>
                     Отправить
                  </Button>
               </div>
            </form>
         </Container>
      </section>
   )
}

export default SendForm