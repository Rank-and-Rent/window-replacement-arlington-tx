'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
        <div className={styles.gradient}></div>
      </div>
      
      <div className={styles.content}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.tagline}>Arlington&apos;s Premier Window Experts</span>
          
          <h1 className={styles.title}>
            Transform Your Home with
            <span className={styles.highlight}> Premium Windows</span>
          </h1>
          
          <p className={styles.description}>
            Experience the perfect combination of beauty, energy efficiency, and lasting
            durability with our expert window replacement services in Arlington, TX. We carry all four of
            America&apos;s most trusted window brands: Andersen, Pella, JELD-WEN, and Marvin.
          </p>
          
          <div className={styles.actions}>
            <Link href="#contact" className={styles.primaryBtn}>
              Get Your Free Estimate
            </Link>
            <Link href="#windows" className={styles.secondaryBtn}>
              Explore Our Windows
            </Link>
          </div>
          
        </motion.div>
      </div>
      
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span>Scroll to explore</span>
        <div className={styles.scrollLine}></div>
      </motion.div>
    </section>
  )
}


