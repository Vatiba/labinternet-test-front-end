import Header from 'components/organisms/Header';
import styles from './FirstScreen.module.scss';
import Text from 'components/atoms/Text';
import Container from 'components/atoms/Container';
import Button from 'components/atoms/Button';

function FirstScreen() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.wrapper__inner}>
            <Header />
            <Container className={styles.main}>
               <Text.H4 className={styles.main__title}>
                  Говорят, никогда не поздно сменить профессию
               </Text.H4>
               <Text.body16 className={styles.main__subTitle}>
                  Сделай круто тестовое задание и у тебя получится
               </Text.body16>
               <Button type='gray' className={styles.main__btn}>
                  Проще простого!
               </Button>
            </Container>
         </div>
      </div>
   )
}

export default FirstScreen