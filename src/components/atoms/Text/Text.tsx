import React from 'react'
import clsx from 'clsx'
import styles from './Text.module.scss';

type HeadlineProps = {
   children?: React.ReactNode
   className?: string
}

type BodyProps = {
   /**
    *  @default regular
    */
   type?: 'regular' | 'bold'
   children?: React.ReactNode
   className?: string
}

function H1({ children, className }: HeadlineProps) {
   return (
      <h1 className={clsx(styles.h1, className)}>{children}</h1>
   )
}

function H2({ children, className }: HeadlineProps) {
   return (
      <h1 className={clsx(styles.h2, className)}>{children}</h1>
   )
}

function H3({ children, className }: HeadlineProps) {
   return (
      <h1 className={clsx(styles.h3, className)}>{children}</h1>
   )
}

function H4({ children, className }: HeadlineProps) {
   return (
      <h1 className={clsx(styles.h4, className)}>{children}</h1>
   )
}

function H5({ children, className }: HeadlineProps) {
   return (
      <h1 className={clsx(styles.h5, className)}>{children}</h1>
   )
}

function H6({ children, className }: HeadlineProps) {
   return (
      <h1 className={clsx(styles.h6, className)}>{children}</h1>
   )
}

function body12({ children, className, type = 'regular' }: BodyProps) {
   return (
      <p className={clsx(styles.body12, type == 'regular' ? styles.bodyRegular : styles.bodyBold, className)}>
         {children}
      </p>
   )
}

function body14({ children, className, type = 'regular' }: BodyProps) {
   return (
      <p className={clsx(styles.body14, type == 'regular' ? styles.bodyRegular : styles.bodyBold, className)}>
         {children}
      </p>
   )
}

function body16({ children, className, type = 'regular' }: BodyProps) {
   return (
      <p className={clsx(styles.body16, type == 'regular' ? styles.bodyRegular : styles.bodyBold, className)}>
         {children}
      </p>
   )
}

function body18({ children, className, type = 'regular' }: BodyProps) {
   return (
      <p className={clsx(styles.body18, type == 'regular' ? styles.bodyRegular : styles.bodyBold, className)}>
         {children}
      </p>
   )
}

const Text = {
   H1, H2, H3, H4, H5, H6,
   body12, body14, body16, body18
}

export default Text