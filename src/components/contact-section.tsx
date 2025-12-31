'use client'

import { motion } from 'framer-motion'
import { servicesData } from '@/data'
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
                <a href="tel:817-592-8870" className={styles.contactValue}>
                  817-592-8870
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Address</span>
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
              
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                  placeholder="John Smith"
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
                  placeholder="(817) 592-8870"
                  required
                />
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
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.formLabel}>
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className={styles.formSelect}
                  required
                >
                  <option value="">Select a service</option>
                  <optgroup label="Windows">
                    {servicesData.filter(s => s.category === 'Windows').map(service => (
                      <option key={service.slug} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Doors">
                    {servicesData.filter(s => s.category === 'Doors').map(service => (
                      <option key={service.slug} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </optgroup>
                  <option value="Not Sure">Not Sure / Multiple Services</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="address" className={styles.formLabel}>
                  Property Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className={styles.formInput}
                  placeholder="123 Main St, Arlington, TX 76011"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="timeline" className={styles.formLabel}>
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className={styles.formSelect}
                  required
                >
                  <option value="">Select a timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="Within 3 months">Within 3 months</option>
                  <option value="Within 6 months">Within 6 months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="Just researching">Just researching</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="description" className={styles.formLabel}>
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className={styles.formTextarea}
                  placeholder="Tell us about your project or any questions you have..."
                  required
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


