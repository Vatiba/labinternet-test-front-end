import HowItWorkItem from 'components/molecules/HowItWorkItem';
import styles from './HowItsWork.module.scss';

// icons & images
import WaitingIcon from 'assets/icons/waiting.svg';
import DeliveryTruckIcon from 'assets/icons/delivery-truck.svg';
import SecureIcon from 'assets/icons/secure.svg';
import MoneyBagsIcon from 'assets/icons/money-bags.svg';
import HowItsWorkImg from 'assets/images/howItswork.png';

import Container from 'components/atoms/Container';
import Text from 'components/atoms/Text';

function HowItsWork() {
   return (
      <section className={styles.howitWork}>
         <Container>
            <Text.H4 className={styles.howitWork__title}>
               Как это работает
            </Text.H4>
            <div className={styles.row}>
               <div className={styles.col}>
                  <HowItWorkItem
                     icon={WaitingIcon}
                     title='Прочитай задание внимательно'
                     desc='Думаю у тебя не займет это больше двух-трех минут'
                  />
               </div>
               <div className={styles.col}>
                  <HowItWorkItem
                     icon={DeliveryTruckIcon}
                     title='Изучи весь макет заранее'
                     desc='Подумай как это будет работать на разных разрешениях и при скролле '
                  />
               </div>
               <div className={styles.col}>
                  <HowItWorkItem
                     icon={SecureIcon}
                     title='Сделай хорошо'
                     desc='Чтобы мы могли тебе доверить подобные задачи в будущем'
                  />
               </div>
               <div className={styles.col}>
                  <HowItWorkItem
                     icon={MoneyBagsIcon}
                     title='Получи предложение'
                     desc='Ну тут все просто, не я придумал правила, но думаю так и будет)))'
                  />
               </div>
            </div>
            <div className={styles.secondBlock}>
               <div className={styles.secondBlock__imgWrap}>
                  <img className={styles.secondBlock__img} src={HowItsWorkImg} alt="How it work" />
               </div>
               <div className={styles.secondBlock__info}>
                  <Text.H5 className={styles.secondBlock__title}>
                     Круто, ты дошел до третьего блока
                  </Text.H5>
                  <Text.body16 className={styles.secondBlock__desc1}>
                     63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
                  </Text.body16>
                  <Text.body16 className={styles.secondBlock__desc2}>
                     Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
                  </Text.body16>
               </div>
            </div>
         </Container>
      </section>
   )
}

export default HowItsWork