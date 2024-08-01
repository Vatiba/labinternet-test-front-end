import React from 'react';
import styles from './CommentItem.module.scss';
import Text from 'components/atoms/Text';

type CommentItemProps = {
   authorAvatar: string
   authorName: string
   authorCity: string
   comment: string
}

function CommentItem(props: CommentItemProps) {
   const {
      authorAvatar,
      authorName,
      authorCity,
      comment,
   } = props;

   return (
      <div className={styles.commentCard}>
         <div className={styles.commentCard__head}>
            <img className={styles.commentCard__authorAvatar} src={authorAvatar} alt="Author avatar" />
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