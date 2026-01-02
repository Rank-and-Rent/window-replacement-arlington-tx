'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from '../about/about.module.css'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.header}>
              <span className={styles.label}>Legal</span>
              <h1 className={styles.title}>Terms of Service</h1>
              <p className={styles.subtitle}>Last Updated: December 31, 2025</p>
            </div>

            <div className={styles.content}>
              <h2>Service Description</h2>
              <p>
                This website provides information about window and door installation services in Arlington, TX. We provide educational resources and project consultation to help property owners make informed decisions.
              </p>

              <h2>No Direct Installation Services</h2>
              <p>
                We provide consultation and project planning services. Installation work is performed by qualified professionals with appropriate expertise and certifications.
              </p>

              <h2>User Responsibilities</h2>
              <p>When using our service, you agree to:</p>
              <ul>
                <li>Provide accurate information about your project</li>
                <li>Obtain multiple quotes for comparison</li>
                <li>Check references and credentials independently</li>
                <li>Verify all contractor qualifications and insurance</li>
                <li>Ensure all necessary permits are obtained</li>
              </ul>

              <h2>Educational Content Only</h2>
              <p>
                Information provided on this website is educational in nature. It is not engineering advice, legal advice, or construction advice. Consult with qualified professionals for specific project guidance.
              </p>

              <h2>No Warranties or Guarantees</h2>
              <p>
                We make no warranties or guarantees about the work performed by independent contractors. Any warranties or guarantees related to installation work are provided solely by the contractor and manufacturer.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                We are not liable for the quality, timeliness, or outcome of work performed by independent contractors. Property owners assume all risk when hiring contractors for installation work.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our service after changes constitutes acceptance of the modified terms.
              </p>

              <h2>Contact Us</h2>
              <p>Questions about these terms? Contact us at:</p>
              <p>Phone: 817-592-8870<br />Email: info@homewindowreplacementarlington.com</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
