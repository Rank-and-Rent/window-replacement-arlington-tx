'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './gallery-section.module.css'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600',
    alt: 'Modern home with large picture windows in Arlington',
    span: 'large',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=400',
    alt: 'Double-hung windows in classic Texas home',
    span: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-600573472591-ee6b68d14c68?q=80&w=400',
    alt: 'Bay window installation in Arlington living room',
    span: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400',
    alt: 'Casement windows with garden view',
    span: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600',
    alt: 'Luxury home exterior with custom windows',
    span: 'large',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=400',
    alt: 'Contemporary window design in Dallas-Fort Worth home',
    span: 'small',
  },
]

export default function GallerySection() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Find Your Inspiration</span>
          <h2 className={styles.title}>See Our Work Across Arlington</h2>
          <p className={styles.subtitle}>
            Our product lines are meticulously selected through a combination of 
            quality craftsmanship and innovative design—delivering windows that 
            transform homes throughout the Dallas-Fort Worth metroplex.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.gridItem} ${image.span === 'large' ? styles.large : ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={image.span === 'large' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

