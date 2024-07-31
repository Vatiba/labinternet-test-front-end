import React, { AnchorHTMLAttributes, HTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import styles from './Text.module.scss';

type HeadlineProps = HTMLAttributes<HTMLHeadingElement> & {
   children?: React.ReactNode
   className?: string
}

type BodyProps = HTMLAttributes<HTMLParagraphElement> & {
   /**
    *  @default regular
    */
   fontWeight?: 'regular' | 'bold'
   children?: React.ReactNode
   className?: string
}

type BodyLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
   /**
    *  @default regular
    */
   fontWeight?: 'regular' | 'bold'
   children?: React.ReactNode
   className?: string
}

const H1 = forwardRef<HTMLHeadingElement, HeadlineProps>(({ children, className, ...props }, ref) => (
   <h1 {...props} className={clsx(styles.h1, className)} ref={ref} >
      {children}
   </h1>
));

const H2 = forwardRef<HTMLHeadingElement, HeadlineProps>(({ children, className, ...props }, ref) => (
   <h1 {...props} className={clsx(styles.h2, className)} ref={ref} >
      {children}
   </h1>
));

const H3 = forwardRef<HTMLHeadingElement, HeadlineProps>(({ children, className, ...props }, ref) => (
   <h1 {...props} className={clsx(styles.h3, className)} ref={ref} >
      {children}
   </h1>
));

const H4 = forwardRef<HTMLHeadingElement, HeadlineProps>(({ children, className, ...props }, ref) => (
   <h1 {...props} className={clsx(styles.h4, className)} ref={ref} >
      {children}
   </h1>
));

const H5 = forwardRef<HTMLHeadingElement, HeadlineProps>(({ children, className, ...props }, ref) => (
   <h1 {...props} className={clsx(styles.h5, className)} ref={ref} >
      {children}
   </h1>
));

const H6 = forwardRef<HTMLHeadingElement, HeadlineProps>(({ children, className, ...props }, ref) => (
   <h1 {...props} className={clsx(styles.h6, className)} ref={ref} >
      {children}
   </h1>
));

const body12 = forwardRef<HTMLParagraphElement, BodyProps>(({ children, className, fontWeight = 'regular', ...props }, ref) => {
   return (
      <p
         className={clsx(styles.body12, fontWeight == 'regular' ? styles.bodyRegular : styles.bodyBold, className)}
         ref={ref}
         {...props}
      >
         {children}
      </p>
   )
})

const body14 = forwardRef<HTMLParagraphElement, BodyProps>(({ children, className, fontWeight = 'regular', ...props }, ref) => {
   return (
      <p
         className={clsx(styles.body14, fontWeight == 'regular' ? styles.bodyRegular : styles.bodyBold, className)}
         ref={ref}
         {...props}
      >
         {children}
      </p>
   )
})

const body16 = forwardRef<HTMLParagraphElement, BodyProps>(({ children, className, fontWeight = 'regular', ...props }, ref) => {
   return (
      <p
         className={clsx(styles.body16, fontWeight == 'regular' ? styles.bodyRegular : styles.bodyBold, className)}
         ref={ref}
         {...props}
      >
         {children}
      </p>
   )
})

const body18 = forwardRef<HTMLParagraphElement, BodyProps>(({ children, className, fontWeight = 'regular', ...props }, ref) => {
   return (
      <p
         className={clsx(styles.body18, fontWeight == 'regular' ? styles.bodyRegular : styles.bodyBold, className)}
         ref={ref}
         {...props}
      >
         {children}
      </p>
   )
})

const bodyLink12 = forwardRef<HTMLAnchorElement, BodyLinkProps>(({ children, className, fontWeight = 'regular', ...props }, ref) => {
   return (
      <a
         className={clsx(styles.body12, fontWeight == 'regular' ? styles.bodyRegular : styles.bodyBold, className)}
         ref={ref}
         {...props}
      >
         {children}
      </a>
   )
})

const bodyLink14 = forwardRef<HTMLAnchorElement, BodyLinkProps>(({ children, className, fontWeight = 'regular', ...props }, ref) => {
   return (
      <a
         className={clsx(styles.body14, fontWeight == 'regular' ? styles.bodyRegular : styles.bodyBold, className)}
         ref={ref}
         {...props}
      >
         {children}
      </a>
   )
})

const bodyLink16 = forwardRef<HTMLAnchorElement, BodyLinkProps>(({ children, className, fontWeight = 'regular', ...props }, ref) => {
   return (
      <a
         className={clsx(styles.body16, fontWeight == 'regular' ? styles.bodyRegular : styles.bodyBold, className)}
         ref={ref}
         {...props}
      >
         {children}
      </a>
   )
})

const bodyLink18 = forwardRef<HTMLAnchorElement, BodyLinkProps>(({ children, className, fontWeight = 'regular', ...props }, ref) => {
   return (
      <a
         className={clsx(styles.body18, fontWeight == 'regular' ? styles.bodyRegular : styles.bodyBold, className)}
         ref={ref}
         {...props}
      >
         {children}
      </a>
   )
})
const Text = {
   H1, H2, H3, H4, H5, H6,
   body12, body14, body16, body18,
   bodyLink12, bodyLink14, bodyLink16, bodyLink18
}

export default Text