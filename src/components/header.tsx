'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { servicesData, locationsData, brandsData } from '@/data'
import styles from './header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300)
  }

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, dropdown: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    } else if (e.key === 'Escape') {
      setActiveDropdown(null)
    }
  }

  // Split services into windows and doors
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')
  
  // Top 8 locations for dropdown (main city first, then most populous)
  const topLocations = locationsData.slice(0, 8)

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMain}>Home Window Replacement</span>
          <span className={styles.logoSub}>of Arlington</span>
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          {/* Windows Dropdown */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => handleMouseEnter('windows')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={styles.navLink}
              onKeyDown={(e) => handleKeyDown(e, 'windows')}
              aria-expanded={activeDropdown === 'windows'}
              aria-haspopup="true"
            >
              Windows
            </button>
            {activeDropdown === 'windows' && (
              <div 
                className={styles.dropdownMenu}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {windowServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.route}
                    className={styles.dropdownItem}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  href="/windows"
                  className={`${styles.dropdownItem} ${styles.viewAll}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  View All Windows
                </Link>
              </div>
            )}
          </div>

          {/* Doors Dropdown */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => handleMouseEnter('doors')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={styles.navLink}
              onKeyDown={(e) => handleKeyDown(e, 'doors')}
              aria-expanded={activeDropdown === 'doors'}
              aria-haspopup="true"
            >
              Doors
            </button>
            {activeDropdown === 'doors' && (
              <div 
                className={styles.dropdownMenu}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {doorServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.route}
                    className={styles.dropdownItem}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  href="/doors"
                  className={`${styles.dropdownItem} ${styles.viewAll}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  View All Doors
                </Link>
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => handleMouseEnter('locations')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={styles.navLink}
              onKeyDown={(e) => handleKeyDown(e, 'locations')}
              aria-expanded={activeDropdown === 'locations'}
              aria-haspopup="true"
            >
              Locations
            </button>
            {activeDropdown === 'locations' && (
              <div 
                className={styles.dropdownMenu}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {topLocations.map((location) => (
                  <Link
                    key={location.slug}
                    href={location.route}
                    className={styles.dropdownItem}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {location.name}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  className={`${styles.dropdownItem} ${styles.viewAll}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  View All {locationsData.length} Locations
                </Link>
              </div>
            )}
          </div>

          {/* Brands Dropdown */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => handleMouseEnter('brands')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={styles.navLink}
              onKeyDown={(e) => handleKeyDown(e, 'brands')}
              aria-expanded={activeDropdown === 'brands'}
              aria-haspopup="true"
            >
              Brands
            </button>
            {activeDropdown === 'brands' && (
              <div 
                className={styles.dropdownMenu}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {brandsData.map((brand) => (
                  <Link
                    key={brand.slug}
                    href={brand.route}
                    className={styles.dropdownItem}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {brand.name}
                  </Link>
                ))}
                <Link
                  href="/brands"
                  className={`${styles.dropdownItem} ${styles.viewAll}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  View All Brands
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className={styles.headerActions}>
          <a href="tel:817-592-8870" className={styles.phone}>
            <span className={styles.phoneLabel}>Call Now</span>
            <span className={styles.phoneNumber}>817-592-8870</span>
          </a>
          <Link href="/contact" className={styles.ctaButton}>
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
      
      {/* Mobile Sticky Call Button */}
      <div className={styles.mobileCallButton}>
        <a href="tel:817-592-8870" className={styles.mobileCallLink}>
          CALL NOW: 817-592-8870
        </a>
      </div>
    </header>
  )
}


