'use client'

import { motion } from 'framer-motion'
import styles from './contact-section.module.css'

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.contentColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>Get Started Today</span>
            <h2 className={styles.title}>
              Schedule Your Free In-Home Consultation
            </h2>
            <p className={styles.description}>
              Discover how new windows can transform your home&apos;s beauty, comfort, 
              and energy efficiency. Our expert consultants will visit your home, 
              assess your needs, and provide a detailed, no-obligation estimate.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Call Us Directly</span>
                <a href="tel:214-444-4444" className={styles.contactValue}>
                  214-444-4444
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Visit Our Showroom</span>
                <address className={styles.contactValue}>
                  1250 E Copeland Rd #530<br />
                  Arlington, TX 76011
                </address>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Business Hours</span>
                <span className={styles.contactValue}>
                  Mon - Fri: 8am - 6pm<br />
                  Sat: 9am - 4pm
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.formColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className={styles.form}>
              <h3 className={styles.formTitle}>Request Your Free Estimate</h3>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.formLabel}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.formLabel}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="windowCount" className={styles.formLabel}>
                  Number of Windows
                </label>
                <select
                  id="windowCount"
                  name="windowCount"
                  className={styles.formSelect}
                  required
                >
                  <option value="">Select quantity</option>
                  <option value="1-5">1-5 windows</option>
                  <option value="6-10">6-10 windows</option>
                  <option value="11-20">11-20 windows</option>
                  <option value="20+">20+ windows</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={styles.formTextarea}
                  placeholder="Tell us about your project, window preferences, or any questions..."
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Request Free Estimate
              </button>

              <p className={styles.formDisclaimer}>
                By submitting this form, you agree to receive communications 
                from our team. We respect your privacy and will never share 
                your information.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


