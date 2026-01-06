'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactSection from '@/components/contact-section'
import BrandsSection from '@/components/brands-section'
import { brandsData } from '@/data/index'
import styles from './brands.module.css'
import type { Metadata } from 'next'

// Note: Since this is a client component, metadata is handled in layout.tsx
// Canonical URL is set in the root layout

export default function BrandsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>Premium Window & Door Brands</h1>
            <p className={styles.heroSubtitle}>
              We partner with the industry&apos;s leading manufacturers to bring Arlington homeowners
              the finest quality windows and doors available. Each brand offers unique benefits
              tailored to different needs and preferences.
            </p>
          </div>
        </section>

        {/* Prominent Brand Logos */}
        <section className="py-16 lg:py-20">
          <div className="px-6 lg:px-12">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
              <Link href="/brands/andersen-windows-doors" className="hover:opacity-80 transition-opacity">
                <img
                  src="/andersen-windows-and-doors-arlington-tx-logo.png"
                  alt="Andersen Windows & Doors"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
              <Link href="/brands/pella-windows-doors" className="hover:opacity-80 transition-opacity">
                <img
                  src="/pella-windows-and-doors-arlington-tx-logo.png"
                  alt="Pella Windows & Doors"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
              <Link href="/brands/jeld-wen-windows-doors" className="hover:opacity-80 transition-opacity">
                <img
                  src="/jeld-wen-windows-and-doors-arlington-tx-logo.png"
                  alt="Jeld-Wen Windows & Doors"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
              <Link href="/brands/marvin-windows-doors" className="hover:opacity-80 transition-opacity">
                <img
                  src="/marvin-windows-and-doors-arlington-tx-logo.png"
                  alt="Marvin Windows & Doors"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Brands Grid */}
        <section className={styles.brandsSection}>
          <div className={styles.container}>
            <div className={styles.brandsGrid}>
              {brandsData.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  className={styles.brandCard}
                >
                  <div className={styles.brandImage}>
                    <Image
                      src={brand.image}
                      alt={`${brand.name} windows and doors`}
                      width={300}
                      height={150}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  <h2 className={styles.brandName}>{brand.name}</h2>
                  <p className={styles.brandDescription}>{brand.description}</p>
                  <span className={styles.learnMore}>Learn More</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Premium Brands */}
        <section className={styles.whySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why Choose Premium Brands</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Superior Energy Efficiency</h3>
                <p>
                  Premium brands use advanced glass coatings and insulation technology
                  to significantly reduce your energy bills.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Comprehensive Warranties</h3>
                <p>
                  Top manufacturers stand behind their products with extensive warranty
                  coverage for peace of mind.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Texas-Tested Durability</h3>
                <p>
                  These products are designed to withstand extreme heat, UV exposure,
                  and the occasional severe weather Texas brings.
                </p>
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
