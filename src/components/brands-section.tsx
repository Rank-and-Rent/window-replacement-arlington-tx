'use client'

import { motion } from 'framer-motion'
import styles from './brands-section.module.css'

const brands = [
  {
    name: 'Andersen',
    slug: 'andersen',
    tagline: 'Over 120 Years of Excellence',
    description: 'America\'s most recognized window brand, Andersen windows combine exceptional craftsmanship with innovative technology. Their 400 Series, E-Series, and A-Series collections offer unmatched beauty, performance, and energy efficiency for Arlington homeowners who demand the very best.',
    highlights: [
      'Industry-leading Energy Star ratings',
      'Exclusive Fibrex composite material',
      'Limited lifetime warranty',
      'Customizable styles and finishes',
    ],
  },
  {
    name: 'Pella',
    slug: 'pella',
    tagline: 'Innovation Meets Craftsmanship',
    description: 'Pella\'s commitment to quality and innovation has made them a favorite among Texas homeowners for nearly a century. From the budget-friendly 250 Series to the premium Reserve line, Pella offers windows that enhance any Arlington home\'s beauty and performance.',
    highlights: [
      'Patented between-the-glass blinds',
      'Superior noise reduction',
      'Exclusive wood protection system',
      'Architectural authenticity',
    ],
  },
  {
    name: 'JELD-WEN',
    slug: 'jeld-wen',
    tagline: 'Quality at Every Price Point',
    description: 'JELD-WEN delivers exceptional value without compromising on quality or style. Their diverse product lines—from the premium Siteline to the accessible Builders line—ensure every Arlington homeowner can find windows that fit their budget and aesthetic preferences.',
    highlights: [
      'AuraLast wood protection',
      'ImpactGard impact-resistant options',
      'Wide range of price points',
      'Texas-weather durability',
    ],
  },
]

export default function BrandsSection() {
  return (
    <section id="brands" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Authorized Dealer</span>
          <h2 className={styles.title}>America&apos;s Most Trusted Window Brands</h2>
          <p className={styles.subtitle}>
            As an authorized dealer for Andersen, Pella, and JELD-WEN, we bring Arlington 
            homeowners exclusive access to the finest windows on the market. Each brand 
            offers unique advantages, and our experts will help you choose the perfect 
            windows for your home, style, and budget.
          </p>
        </motion.div>

        <div className={styles.brandsGrid}>
          {brands.map((brand, index) => (
            <motion.article
              key={brand.slug}
              className={styles.brandCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.brandHeader}>
                <h3 className={styles.brandName}>{brand.name}</h3>
                <span className={styles.brandTagline}>{brand.tagline}</span>
              </div>
              <p className={styles.brandDescription}>{brand.description}</p>
              <ul className={styles.highlights}>
                {brand.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span className={styles.checkmark}></span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <a href={`#contact`} className={styles.brandCta}>
                Explore {brand.name} Windows
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.guarantee}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.guaranteeContent}>
            <h3 className={styles.guaranteeTitle}>Our Installation Guarantee</h3>
            <p className={styles.guaranteeText}>
              Every window we install comes backed by both the manufacturer&apos;s warranty 
              and our own craftsmanship guarantee. Our certified installers follow 
              rigorous protocols to ensure your windows perform flawlessly for decades 
              to come.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


