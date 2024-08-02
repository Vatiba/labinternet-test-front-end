import React, { useState } from 'react';
import Container from 'components/atoms/Container';
import Drawer from 'components/molecules/Drawer';
import BurgerButton from 'components/molecules/BurgerButton';
import Text from 'components/atoms/Text';
import clsx from 'clsx';
import styles from './Header.module.scss';

// icons
import LogoIcon from 'assets/icons/logo.svg';
import RighIcon from 'assets/icons/right.svg';

const Header = () => {
   const [isOpened, setIsOpened] = useState(false);

   return (
      <>
         <header className={styles.header}>
            <Container className={styles.header__inner}>
               <div className={styles.header__logoWrapper}>
                  <img className={styles.header__logo} src={LogoIcon} alt="Logo" />
                  <Text.H5 className={clsx(styles.header__logoTxt, {
                     [styles.header__logoTxt_black]: isOpened
                  })}>
                     testLab
                  </Text.H5>
               </div>
               <nav className={styles.header__nav}>
                  <Text.bodyLink16 className={styles.header__navItem} href='#howitswork'>
                     Как это работает
                  </Text.bodyLink16>
                  <Text.bodyLink16 className={styles.header__navItem} href='#thirdBlock'>
                     3-й блок
                  </Text.bodyLink16>
                  <Text.bodyLink16 className={styles.header__navItem} href='#QA'>
                     Вопросы и ответы
                  </Text.bodyLink16>
                  <Text.bodyLink16 className={styles.header__navItem} href='#sendForm'>
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
            drawerStyle={{ width: '100vw' }}
         >
            <Container>
               <nav className={styles.drawer}>
                  <a className={styles.drawer__item} href='#howitswork' onClick={() => setIsOpened(false)}>
                     <span className={styles.drawer__itemTxt}>
                        Как это работает
                     </span>
                     <img src={RighIcon} alt="Go" />
                  </a>
                  <a className={styles.drawer__item} href='#thirdBlock' onClick={() => setIsOpened(false)}>
                     <span className={styles.drawer__itemTxt}>
                        3-й блок
                     </span>
                     <img src={RighIcon} alt="Go" />
                  </a>
                  <a className={styles.drawer__item} href='#QA' onClick={() => setIsOpened(false)}>
                     <span className={styles.drawer__itemTxt}>
                        Вопросы и ответы
                     </span>
                     <img src={RighIcon} alt="Go" />
                  </a>
                  <a className={styles.drawer__item} href='#sendForm' onClick={() => setIsOpened(false)}>
                     <span className={styles.drawer__itemTxt}>
                        Форма
                     </span>
                     <img src={RighIcon} alt="Go" />
                  </a>
               </nav>
            </Container>
         </Drawer>
      </>
   )
}

export default Header