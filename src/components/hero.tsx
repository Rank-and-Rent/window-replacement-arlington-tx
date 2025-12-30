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
            durability with our expert window replacement services. Authorized dealer for 
            Andersen, Pella, and JELD-WEN—three of America&apos;s most trusted window brands.
          </p>
          
          <div className={styles.actions}>
            <Link href="#contact" className={styles.primaryBtn}>
              Get Your Free Estimate
            </Link>
            <Link href="#windows" className={styles.secondaryBtn}>
              Explore Our Windows
            </Link>
          </div>
          
          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>25+</span>
              <span className={styles.trustLabel}>Years Experience</span>
            </div>
            <div className={styles.trustDivider}></div>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>5,000+</span>
              <span className={styles.trustLabel}>Windows Installed</span>
            </div>
            <div className={styles.trustDivider}></div>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>100%</span>
              <span className={styles.trustLabel}>Satisfaction</span>
            </div>
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


