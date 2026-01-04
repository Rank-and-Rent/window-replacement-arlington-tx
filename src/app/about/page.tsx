'use client'

import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactSection from '@/components/contact-section'
import styles from './about.module.css'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.header}>
              <span className={styles.label}>About Our Service</span>
              <h1 className={styles.title}>Premium Window & Door Services in Arlington, Texas</h1>
              <p className={styles.subtitle}>
                We provide comprehensive window and door installation services throughout Arlington, TX, serving residential properties.
              </p>
            </div>

            <div className={styles.content}>
              <h2>Who We Are</h2>
              <p>
                Window Replacements of Arlington provides comprehensive window and door installation services throughout Arlington, TX. We specialize in residential projects, offering energy-efficient windows, elegant entry doors, and patio door replacements that enhance both comfort and curb appeal.
              </p>

              <h2>How We Help</h2>
              <p>
                We provide comprehensive window and door installation services with attention to detail and quality craftsmanship. Our team understands that windows and doors are significant investments that enhance your home&apos;s energy efficiency, comfort, and value.
              </p>

              <h3>Our Process</h3>
              <ol>
                <li><strong>Initial Consultation</strong> - Share your project details with us through our contact form or by phone</li>
                <li><strong>Project Planning</strong> - We assess your needs and develop a customized solution for your property</li>
                <li><strong>Professional Installation</strong> - Expert installation with attention to detail and quality</li>
                <li><strong>Quality Assurance</strong> - Comprehensive inspection and warranty coverage</li>
              </ol>

              <h2>Why Arlington Homeowners Choose Us</h2>
              <ul>
                <li>Knowledge of local building codes and permit requirements</li>
                <li>Experience with Arlington&apos;s climate considerations</li>
                <li>Premium brands including Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Comprehensive service from consultation through project completion</li>
                <li>Quality craftsmanship and attention to detail</li>
              </ul>

              <h2>Our Service Area</h2>
              <p>
                We serve Arlington, TX and surrounding communities including Fort Worth, Grand Prairie, Mansfield, Irving, Euless, Bedford, Hurst, Grapevine, and North Richland Hills. Our network of professionals is familiar with the unique needs of homes throughout the Dallas-Fort Worth metroplex.
              </p>

              <h2>Educational Resources</h2>
              <p>
                The information provided on this website is educational in nature and designed to help property owners make informed decisions about window and door installations. This content is not engineering advice, legal advice, or construction advice. We recommend consulting with qualified professionals for specific project guidance and obtaining multiple quotes before making decisions.
              </p>

              <div className={styles.ctaBox}>
                <h3>Ready to Start Your Project?</h3>
                <p>Contact us today for a free consultation and estimate for your window or door installation in Arlington, TX.</p>
                <div className={styles.ctaButtons}>
                  <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
                  <a href="tel:817-592-8870" className={styles.btnSecondary}>Call 817-592-8870</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
