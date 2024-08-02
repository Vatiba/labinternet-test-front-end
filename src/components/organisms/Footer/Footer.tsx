import React from 'react';
import styles from './Footer.module.scss'
import Container from 'components/atoms/Container';
import Text from 'components/atoms/Text';

function Footer() {
   return (
      <footer className={styles.footer}>
         <Container>
            <Text.body18 className={styles.footer__txt}>
               © 2021 Лаборатория интернет
            </Text.body18>
         </Container>
      </footer>
   )
}

export default Footer