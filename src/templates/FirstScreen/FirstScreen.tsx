import Header from 'components/organisms/Header';
import styles from './FirstScreen.module.scss';

function FirstScreen() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.wrapper__inner}>
            <Header />
         </div>
      </div>
   )
}

export default FirstScreen