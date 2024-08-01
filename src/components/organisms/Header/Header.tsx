import React, { useState } from 'react';
import Container from 'components/atoms/Container';
import styles from './Header.module.scss';

// icons
import LogoIcon from 'assets/icons/logo.svg';
import Text from 'components/atoms/Text';
import Drawer from 'components/molecules/Drawer';
import BurgerButton from 'components/molecules/BurgerButton';

const Header = () => {
   const [isOpened, setIsOpened] = useState(false);

   return (
      <>
         <header className={styles.header}>
            <Container className={styles.header__inner}>
               <div className={styles.header__logoWrapper}>
                  <img className={styles.header__logo} src={LogoIcon} alt="Logo" />
                  <Text.H5 className={styles.header__logoTxt}>
                     testLab
                  </Text.H5>
               </div>
               <nav className={styles.header__nav}>
                  <Text.bodyLink16 className={styles.header__navItem} href='#'>
                     Как это работает
                  </Text.bodyLink16>
                  <Text.bodyLink16 className={styles.header__navItem} href='#'>
                     3-й блок
                  </Text.bodyLink16>
                  <Text.bodyLink16 className={styles.header__navItem} href='#'>
                     Вопросы и ответы
                  </Text.bodyLink16>
                  <Text.bodyLink16 className={styles.header__navItem} href='#'>
                     Форма
                  </Text.bodyLink16>
               </nav>
               <BurgerButton
                  isActive={isOpened}
                  onClick={() => setIsOpened(prev => !prev)}
                  className={styles.burgerBtn}
                  stickCN={isOpened ? styles.burgerBtnStick : undefined}
               />
            </Container>
         </header>
         <Drawer
            anchor='right'
            isOpened={isOpened}
            onClose={() => setIsOpened(false)}
         >
            hello
         </Drawer>
      </>
   )
}

export default Header