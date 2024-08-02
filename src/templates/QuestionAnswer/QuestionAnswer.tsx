import React from 'react';
import styles from './QuestionAnswer.module.scss';

import Text from 'components/atoms/Text';
import Accordion from 'components/molecules/Accordion';
import Container from 'components/atoms/Container';

function QuestionAnswer() {
   return (
      <section className={styles.QASection}>
         <Container className={styles.QASection__inner}>
            <Text.H4 className={styles.QASection__title}>
               Вопросы и ответы
            </Text.H4>
            <div className={styles.QASection__item}>
               <Accordion
                  label="Подтверждено: сознание наших соотечественников не замутнено пропагандой?"
               >
                  <Text.body16 className={styles.QASection__itemTxt}>
                     В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
                  </Text.body16>
               </Accordion>
            </div>
            <div className={styles.QASection__item}>
               <Accordion
                  label="Прототип нового сервиса - это как трубный призыв?"
               >
                  <Text.body16 className={styles.QASection__itemTxt}>
                     В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
                  </Text.body16>
               </Accordion>
            </div>
            <div className={styles.QASection__item}>
               <Accordion
                  label="Частокол на границе продолжает удивлять?"
               >
                  <Text.body16 className={styles.QASection__itemTxt}>
                     В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
                  </Text.body16>
               </Accordion>
            </div>
            <div className={styles.QASection__item}>
               <Accordion
                  label="Очевидцы сообщают, что слышали грохот грома градущих изменений?"
               >
                  <Text.body16 className={styles.QASection__itemTxt}>
                     В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
                  </Text.body16>
               </Accordion>
            </div>
            <div className={styles.QASection__item}>
               <Accordion
                  label="И по сей день в центральных регионах звучит перекатами печальный"
               >
                  <Text.body16 className={styles.QASection__itemTxt}>
                     В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
                  </Text.body16>
               </Accordion>
            </div>
            <div className={styles.QASection__item}>
               <Accordion
                  label="Нынче никто не может себе позволить инициировать треск "
               >
                  <Text.body16 className={styles.QASection__itemTxt}>
                     В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
                  </Text.body16>
               </Accordion>
            </div>
            <div className={styles.QASection__item}>
               <Accordion
                  label="Высококачественный прототип будущего проекта обнадёживает?"
               >
                  <Text.body16 className={styles.QASection__itemTxt}>
                     В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
                  </Text.body16>
               </Accordion>
            </div>
         </Container>
      </section>
   )
}

export default QuestionAnswer