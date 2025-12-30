'use client'

import { motion } from 'framer-motion'
import styles from './testimonials-section.module.css'

const testimonials = [
  {
    quote: 'The team replaced all 18 windows in our Arlington home in just two days. The difference in our energy bills has been remarkable—down almost 30% this summer.',
    author: 'Michael & Sarah T.',
    location: 'Arlington, TX',
    project: 'Andersen 400 Series Double-Hung',
  },
  {
    quote: 'From the initial consultation to the final walkthrough, everything was professional and thorough. Our Pella casement windows transformed our living room.',
    author: 'Jennifer R.',
    location: 'Grand Prairie, TX',
    project: 'Pella Lifestyle Series Casement',
  },
  {
    quote: 'We had a tight budget but wanted quality. They recommended JELD-WEN windows that fit perfectly. Three years later, they still look and perform like new.',
    author: 'David M.',
    location: 'Mansfield, TX',
    project: 'JELD-WEN Siteline Wood Windows',
  },
]

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Customer Stories</span>
          <h2 className={styles.title}>Trusted by Arlington Homeowners</h2>
          <p className={styles.subtitle}>
            See what our customers say about their window replacement experience. 
            From energy savings to enhanced curb appeal, our work speaks for itself.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.quoteIcon}>&ldquo;</div>
              <blockquote className={styles.quote}>
                {testimonial.quote}
              </blockquote>
              <div className={styles.attribution}>
                <span className={styles.author}>{testimonial.author}</span>
                <span className={styles.location}>{testimonial.location}</span>
                <span className={styles.project}>{testimonial.project}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


