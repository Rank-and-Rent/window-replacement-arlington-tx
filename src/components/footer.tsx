import Link from 'next/link'
import { servicesData, locationsData, brandsData } from '@/data'
import styles from './footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMain}>Home Window Replacement</span>
              <span className={styles.logoSub}>of Arlington</span>
            </Link>
            <p className={styles.brandDescription}>
              Arlington&apos;s trusted window and door replacement experts. Andersen, Pella, JELD-WEN, and Marvin. Quality installations backed by
              industry-leading warranties.
            </p>
            <div className={styles.contactBlock}>
              <a href="tel:817-592-8870" className={styles.phone}>
                817-592-8870
              </a>
              <address className={styles.address}>
                1250 E Copeland Rd #530<br />
                Arlington, TX 76011
              </address>
              <p className={styles.hours}>
                Open 24/7<br />
                Available for Emergency Service
              </p>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Window Services</h4>
            <ul className={styles.linkList}>
              {windowServices.map((service) => (
                <li key={service.slug}>
                  <Link href={service.route} className={styles.link}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Door Services</h4>
            <ul className={styles.linkList}>
              {doorServices.map((service) => (
                <li key={service.slug}>
                  <Link href={service.route} className={styles.link}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className={styles.columnTitle} style={{ marginTop: '2rem' }}>
              Brands
            </h4>
            <ul className={styles.linkList}>
              {brandsData.map((brand) => (
                <li key={brand.slug}>
                  <Link href={brand.route} className={styles.link}>
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Service Areas</h4>
            <ul className={styles.linkList}>
              {locationsData.map((location) => (
                <li key={location.slug}>
                  <Link href={location.route} className={styles.link}>
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={styles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.link}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className={styles.link}>
                  Sitemap
                </Link>
              </li>
            </ul>

            <h4 className={styles.columnTitle} style={{ marginTop: '2rem' }}>
              Find Us
            </h4>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps?q=1250+E+Copeland+Rd+%23530,+Arlington,+TX+76011&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '4px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Home Window Replacement Service of Arlington location map"
              ></iframe>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.disclosure}>
            We partner with trusted fulfillment experts to match you with qualified window and door contractors and provide comprehensive project coordination services.
          </p>
          <p className={styles.copyright}>
            &copy; {currentYear} Home Window Replacement Service of Arlington. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
