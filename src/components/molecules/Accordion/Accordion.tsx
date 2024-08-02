import React, { useRef, useState } from 'react';
import styles from './Accordion.module.scss';
import clsx from 'clsx';

// icons
import PlusCircleIcon from 'assets/icons/plus-circle.svg';

export type AccordionProps = {
   children: React.ReactNode;
   label: React.ReactNode;
   onClick?: Function
};

function Accordion(props: AccordionProps) {
   const {
      children,
      label,
      onClick,
   } = props;

   const [isExpanded, setIsExpanded] = useState(false);
   const contentRef = useRef<null | HTMLParagraphElement>(null);

   return (
      <div className={styles.accordion}>
         <button
            className={clsx(styles.accordion__btn)}
            type="button"
            onClick={() => {
               onClick?.();
               setIsExpanded(prev => !prev)
            }}
         >
            <span className={styles.accordion__text}>
               {label}
            </span>
            <img
               className={clsx(
                  styles.accordion__openIcon,
                  {
                     [styles.accordion__openIcon_active]: isExpanded
                  }
               )}
               src={PlusCircleIcon}
               alt='open'
            />
         </button>
         <div
            ref={contentRef}
            style={{
               height:
                  isExpanded ?
                     contentRef.current?.scrollHeight : '0px'
            }}
            className={clsx({
               [styles.accordion__notExpanded]: !isExpanded,
               [styles.accordion__expanded]: isExpanded,
            })}
         >
            {children}
         </div>
      </div >
   );
}

export default Accordion;
