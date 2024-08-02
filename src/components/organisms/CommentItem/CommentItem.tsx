import React from 'react';
import styles from './CommentItem.module.scss';
import Text from 'components/atoms/Text';

// img
import UserImg from 'assets/images/user.jpeg';
import clsx from 'clsx';

type CommentItemProps = {
   authorAvatar?: string
   authorName: string
   authorCity: string
   comment: string
   className?: string
}

function CommentItem(props: CommentItemProps) {
   const {
      authorAvatar,
      authorName,
      authorCity,
      comment,
      className,
   } = props;

   return (
      <div className={clsx(styles.commentCard, className)}>
         <div className={styles.commentCard__head}>
            <img className={styles.commentCard__authorAvatar} src={authorAvatar ? authorAvatar : UserImg} alt="Author avatar" />
            <div className={styles.commentCard__authorInfo}>
               <Text.H6 className={styles.commentCard__authorName}>
                  {authorName}
               </Text.H6>
               <Text.body12 className={styles.commentCard__authorCity}>
                  {authorCity}
               </Text.body12>
            </div>
         </div>
         <Text.body14 className={styles.commentCard__comment}>
            {comment}
         </Text.body14>
      </div>
   )
}

export default CommentItem