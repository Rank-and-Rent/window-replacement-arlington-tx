import Link from 'next/link'
import styles from './footer.module.css'

const windowTypes = [
  { name: 'Double-Hung Windows', slug: '/windows/double-hung-windows' },
  { name: 'Single-Hung Windows', slug: '/windows/single-hung-windows' },
  { name: 'Casement Windows', slug: '/windows/casement-windows' },
  { name: 'Awning Windows', slug: '/windows/awning-windows' },
  { name: 'Sliding Windows', slug: '/windows/sliding-windows' },
  { name: 'Picture Windows', slug: '/windows/picture-windows' },
  { name: 'Bay & Bow Windows', slug: '/windows/bay-bow-windows' },
  { name: 'Special Shape Windows', slug: '/windows/special-shape-windows' },
]

const brands = [
  { name: 'Andersen Windows', slug: '#brands' },
  { name: 'Pella Windows', slug: '#brands' },
  { name: 'JELD-WEN Windows', slug: '#brands' },
]

const locations = [
  { name: 'Fort Worth', slug: '/locations/fort-worth' },
  { name: 'Dallas', slug: '/locations/dallas' },
  { name: 'Grand Prairie', slug: '/locations/grand-prairie' },
  { name: 'Irving', slug: '/locations/irving' },
  { name: 'Mansfield', slug: '/locations/mansfield' },
  { name: 'Euless', slug: '/locations/euless' },
  { name: 'Bedford', slug: '/locations/bedford' },
  { name: 'Hurst', slug: '/locations/hurst' },
  { name: 'Grapevine', slug: '/locations/grapevine' },
  { name: 'Carrollton', slug: '/locations/carrollton' },
  { name: 'Plano', slug: '/locations/plano' },
  { name: 'Richardson', slug: '/locations/richardson' },
  { name: 'Lewisville', slug: '/locations/lewisville' },
  { name: 'Denton', slug: '/locations/denton' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
              Arlington&apos;s trusted window replacement experts. Authorized dealer for 
              Andersen, Pella, and JELD-WEN windows. Quality installations backed by 
              industry-leading warranties.
            </p>
            <div className={styles.contactBlock}>
              <a href="tel:214-444-4444" className={styles.phone}>
                214-444-4444
              </a>
              <address className={styles.address}>
                1250 E Copeland Rd #530<br />
                Arlington, TX 76011
              </address>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Window Styles</h4>
            <ul className={styles.linkList}>
              {windowTypes.slice(0, 6).map((type) => (
                <li key={type.slug}>
                  <Link href={type.slug} className={styles.link}>
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <ul className={styles.linkList} style={{ marginTop: 0 }}>
              {windowTypes.slice(6).map((type) => (
                <li key={type.slug}>
                  <Link href={type.slug} className={styles.link}>
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className={styles.columnTitle} style={{ marginTop: '2rem' }}>
              Our Brands
            </h4>
            <ul className={styles.linkList}>
              {brands.map((brand) => (
                <li key={brand.slug}>
                  <Link href={brand.slug} className={styles.link}>
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Service Areas</h4>
            <ul className={styles.linkList}>
              {locations.slice(0, 7).map((location) => (
                <li key={location.slug}>
                  <Link href={location.slug} className={styles.link}>
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <ul className={styles.linkList} style={{ marginTop: 0 }}>
              {locations.slice(7).map((location) => (
                <li key={location.slug}>
                  <Link href={location.slug} className={styles.link}>
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className={styles.columnTitle} style={{ marginTop: '2rem' }}>
              Quick Links
            </h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="#about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className={styles.link}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#contact" className={styles.link}>
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} Home Window Replacement Service of Arlington. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="#" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

