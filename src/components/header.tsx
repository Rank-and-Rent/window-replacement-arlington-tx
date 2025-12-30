'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMain}>Home Window Replacement</span>
          <span className={styles.logoSub}>of Arlington</span>
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="#windows" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Windows
          </Link>
          <Link href="#brands" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Brands
          </Link>
          <Link href="#about" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="#contact" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className={styles.headerActions}>
          <a href="tel:214-444-4444" className={styles.phone}>
            <span className={styles.phoneLabel}>Call Now</span>
            <span className={styles.phoneNumber}>214-444-4444</span>
          </a>
          <Link href="#contact" className={styles.ctaButton}>
            Free Estimate
          </Link>
        </div>

        <button
          className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}


