import styles from './HowItWorkItem.module.scss';
import Text from 'components/atoms/Text';


type HowItWorkItemProps = {
   icon: string
   title: string
   desc: string
}

const HowItWorkItem = (props: HowItWorkItemProps) => {
   const {
      icon,
      title,
      desc
   } = props;

   return (
      <div className={styles.card}>
         <img className={styles.card__img} src={icon} alt="Icon" />
         <div className={styles.card__info}>
            <Text.H6 className={styles.card__title}>
               {title}
            </Text.H6>
            <Text.body14 className={styles.card__desc}>
               {desc}
            </Text.body14>
         </div>
      </div>
   )
}

export default HowItWorkItem