import React, { useRef } from 'react';

// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Comments.module.scss';

import Slider, { Settings } from "react-slick";
import Container from 'components/atoms/Container';
import CommentItem from 'components/organisms/CommentItem';

// images & icons
import TrashImg1 from 'assets/trashimg/1.png';
import TrashImg2 from 'assets/trashimg/2.png';
import RightIcon from 'assets/icons/right.svg';
import clsx from 'clsx';


let settings: Settings = {
   dots: true,
   infinite: true,
   autoplay: false,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: false,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 1,
         }
      }
   ]
};

function Comments() {
   const slider = useRef<Slider>(null);

   return (
      <section className={styles.comments}>
         <Container className={styles.comments__inner}>
            <button
               className={clsx(styles.comments__btn, styles.comments__btnLeft)}
               onClick={() => slider?.current?.slickPrev()}
            >
               <img className={styles.comments__btnLeftIcon} src={RightIcon} alt="Left" />
            </button>
            <button
               className={clsx(styles.comments__btn, styles.comments__btnRight)}
               onClick={() => slider?.current?.slickNext()}
            >
               <img className={styles.comments__btnRightIcon} src={RightIcon} alt="Left" />
            </button>
            <div className={styles.comments__sliderWrapper}>
               <Slider ref={slider} {...settings}>
                  <CommentItem
                     className={styles.comments__item}
                     authorName='Константинов Михаил Павлович'
                     authorCity='Санкт-Петербург'
                     comment='Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы'
                  />
                  <CommentItem
                     className={styles.comments__item}
                     authorAvatar={TrashImg1}
                     authorName='Константинов Михаил Павлович'
                     authorCity='Санкт-Петербург'
                     comment='Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'
                  />
                  <CommentItem
                     className={styles.comments__item}
                     authorAvatar={TrashImg2}
                     authorName='Константинов Михаил Павлович'
                     authorCity='Санкт-Петербург'
                     comment='Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.'
                  />
               </Slider>
            </div>
         </Container>
      </section>
   )
}

export default Comments