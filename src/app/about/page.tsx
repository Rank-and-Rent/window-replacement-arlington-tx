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
              <h1 className={styles.title}>Connecting Arlington Property Owners with Premium Window & Door Installation</h1>
              <p className={styles.subtitle}>
                We specialize in matching homeowners with licensed and insured professionals for quality window and door installations throughout Arlington, TX.
              </p>
            </div>

            <div className={styles.content}>
              <h2>Who We Are</h2>
              <p>
                We specialize in connecting Arlington, TX property owners with licensed and insured window and door installation professionals. Our service focuses on helping you find the right contractor for your specific project needs, whether you are upgrading your home with energy-efficient windows, installing elegant entry doors, or replacing patio doors.
              </p>

              <h2>How We Help</h2>
              <p>
                When you contact us, we work to match your project with qualified installation professionals in the Arlington area. We understand that choosing windows and doors is a significant investment, and finding the right installer is crucial to ensuring quality work.
              </p>

              <h3>Our Process</h3>
              <ol>
                <li><strong>Initial Consultation</strong> - Share your project details with us through our contact form or by phone</li>
                <li><strong>Professional Matching</strong> - We connect you with licensed professionals who specialize in your type of project</li>
                <li><strong>Project Coordination</strong> - Assistance with scheduling consultations and estimates</li>
                <li><strong>Installation Support</strong> - Coordination throughout the installation process</li>
              </ol>

              <h2>Why Arlington Homeowners Choose Us</h2>
              <ul>
                <li>Access to licensed and insured professionals</li>
                <li>Knowledge of local building codes and permit requirements</li>
                <li>Experience with Arlington&apos;s climate considerations</li>
                <li>Connections with authorized dealers for premium brands like Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Coordination support from consultation through project completion</li>
              </ul>

              <h2>Our Service Area</h2>
              <p>
                We serve Arlington, TX and surrounding communities including Fort Worth, Grand Prairie, Mansfield, Irving, Euless, Bedford, Hurst, Grapevine, and North Richland Hills. Our network of professionals is familiar with the unique needs of homes throughout the Dallas-Fort Worth metroplex.
              </p>

              <h2>Educational Resources</h2>
              <p>
                The information provided on this website is educational in nature and designed to help property owners make informed decisions about window and door installations. This content is not engineering advice, legal advice, or construction advice. We recommend consulting with licensed professionals for specific project guidance, verifying contractor licenses and insurance coverage, and obtaining multiple quotes before making decisions.
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
