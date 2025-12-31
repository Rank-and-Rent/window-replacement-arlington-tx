'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from '../about/about.module.css'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.header}>
              <span className={styles.label}>Legal</span>
              <h1 className={styles.title}>Privacy Policy</h1>
              <p className={styles.subtitle}>Last Updated: December 31, 2025</p>
            </div>

            <div className={styles.content}>
              <h2>Information We Collect</h2>
              <p>When you contact us for window or door installation services in Arlington, TX, we may collect:</p>
              <ul>
                <li>Name and contact information (email, phone number)</li>
                <li>Property information and project details</li>
                <li>Communication preferences</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information you provide to:</p>
              <ul>
                <li>Connect you with licensed window and door installation professionals</li>
                <li>Coordinate consultations and estimates</li>
                <li>Communicate about your project</li>
                <li>Improve our services</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Licensed contractors for project matching and estimates</li>
                <li>Service providers who assist with our operations</li>
                <li>As required by law or to protect our rights</li>
              </ul>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2>Contact Us</h2>
              <p>If you have questions about this privacy policy or your personal information, please contact us at:</p>
              <p>Phone: 817-592-8870<br />Email: info@homewindowreplacementarlington.com</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
