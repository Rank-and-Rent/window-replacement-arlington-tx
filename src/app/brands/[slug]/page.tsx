import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactSection from '@/components/contact-section'
import { brandsData } from '@/data'
import styles from '../brand.module.css'

interface BrandPageProps {
  params: { slug: string }
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = brandsData.find((b) => b.slug === params.slug)

  if (!brand) {
    return (
      <>
        <Header />
        <div className={styles.page}>
          <div className={styles.container}>
            <h1>Brand Not Found</h1>
            <p>The brand you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/">Return to Home</Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const faqs = [
    {
      question: `What makes ${brand.name} windows and doors a good choice for Arlington, TX homes?`,
      answer: `${brand.name} windows and doors are engineered to perform excellently in Texas climates, including Arlington, TX. They provide superior energy efficiency to reduce cooling costs during hot summers, durability to withstand intense sun and occasional severe weather, and aesthetic options that complement Arlington\'s diverse architectural styles. ${brand.name} products are backed by comprehensive warranties and installed by our certified professionals.`,
    },
    {
      question: `How long does ${brand.name} window and door installation take in Arlington?`,
      answer: `Most ${brand.name} window replacement projects in Arlington, TX are completed within 1 to 3 days, depending on the number of units and complexity. Door installations typically take 4 to 8 hours per unit. We provide detailed timelines during your free consultation and work efficiently to minimize disruption to your daily routine while ensuring meticulous installation quality.`,
    },
    {
      question: `What warranty coverage comes with ${brand.name} products?`,
      answer: `${brand.name} provides comprehensive warranty coverage on their windows and doors, typically including limited lifetime warranties on many product lines. Warranty specifics vary by collection and may cover glass, materials, and finish. Our installations in Arlington, TX include both the manufacturer\'s warranty and our own craftsmanship guarantee for complete peace of mind.`,
    },
    {
      question: `Are ${brand.name} windows energy efficient enough for Arlington summers?`,
      answer: `Yes, ${brand.name} offers numerous high-performance window options specifically designed for hot climates like Arlington, TX. Features like Low-E glass coatings, argon gas fills, advanced weatherstripping, and multi-pane construction significantly reduce heat transfer and UV radiation. Many ${brand.name} products exceed ENERGY STAR requirements and can substantially lower your cooling costs throughout Arlington&apos;s long, hot summers.`,
    },
  ]

  const relatedServices = [
    { name: 'Window Replacement', slug: '/windows/double-hung-windows' },
    { name: 'Entry Door Installation', slug: '/doors/entry-door-installation' },
    { name: 'Energy-Efficient Windows', slug: '/windows/casement-windows' },
    { name: 'Patio Door Installation', slug: '/doors/patio-door-installation' },
  ]

  return (
    <>
      <Header />
      <div className={styles.page}>
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <div className={styles.container}>
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#brands">Brands</Link></li>
              <li aria-current="page">{brand.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1>{brand.name}</h1>
                <p className={styles.heroSubtitle}>Premium {brand.name} Installation in Arlington, TX</p>
              </div>
              <div className={styles.heroImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.image}
                  alt={`${brand.name} windows and doors`}
                  width="400"
                  height="300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Prominent Brand Logo */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="px-6 lg:px-12">
            <div className="flex items-center justify-center max-w-6xl mx-auto">
              <div className="text-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-20 lg:h-24 w-auto mx-auto mb-4"
                />
                <h2 className="text-xl lg:text-2xl font-serif text-gray-800">Authorized {brand.name.split(' ')[0]} Dealer</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.description}>
              <h2>About {brand.name}</h2>
              <p>{brand.description}</p>
            </div>

            {/* Product Categories */}
            <div className={styles.productCategories}>
              <h2 className={styles.sectionTitle}>{brand.name} Products We Install</h2>
              <div className={styles.categoriesGrid}>
                <div className={styles.categoryCard}>
                  <h3>Windows</h3>
                  <ul>
                    <li><Link href="/windows/double-hung-windows">Double-Hung Windows</Link></li>
                    <li><Link href="/windows/single-hung-windows">Single-Hung Windows</Link></li>
                    <li><Link href="/windows/casement-windows">Casement Windows</Link></li>
                    <li><Link href="/windows/awning-windows">Awning Windows</Link></li>
                    <li><Link href="/windows/sliding-windows">Sliding Windows</Link></li>
                    <li><Link href="/windows/picture-windows">Picture Windows</Link></li>
                    <li><Link href="/windows/bay-bow-windows">Bay & Bow Windows</Link></li>
                    <li><Link href="/windows/special-shape-windows">Specialty Shapes</Link></li>
                  </ul>
                </div>
                <div className={styles.categoryCard}>
                  <h3>Doors</h3>
                  <ul>
                    <li><Link href="/doors/entry-door-installation">Entry Doors</Link></li>
                    <li><Link href="/doors/patio-door-installation">Patio Doors</Link></li>
                    <li><Link href="/doors/french-door-installation">French Doors</Link></li>
                    <li><Link href="/doors/sliding-glass-door-installation">Sliding Glass Doors</Link></li>
                    <li><Link href="/doors/storm-door-installation">Storm Doors</Link></li>
                    <li><Link href="/doors/custom-door-installation">Custom Doors</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className={styles.whyChoose}>
              <h2 className={styles.sectionTitle}>Why Choose {brand.name} for Your Arlington Home</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefit}>
                  <h3>Energy Efficiency</h3>
                  <p>{brand.name} windows and doors feature advanced insulation technology to keep your Arlington home comfortable year-round while reducing energy costs.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Durability</h3>
                  <p>Built to withstand Texas weather, {brand.name} products resist fading, warping, and deterioration even in Arlington&apos;s intense sun and humidity.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Aesthetic Excellence</h3>
                  <p>With numerous styles, colors, and finishes available, {brand.name} offers design options that perfectly complement your Arlington home&apos;s architecture.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Professional Installation</h3>
                  <p>Our certified installers are trained in {brand.name} best practices, ensuring your windows and doors perform optimally for decades.</p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className={styles.faqs}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions About {brand.name} in Arlington, TX</h2>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Related Services */}
            <div className={styles.relatedServices}>
              <h2 className={styles.sectionTitle}>Related Services</h2>
              <div className={styles.servicesGrid}>
                {relatedServices.map((service) => (
                  <Link key={service.slug} href={service.slug} className={styles.serviceCard}>
                    <h3>{service.name}</h3>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={styles.brandCta}>
              <h2>Ready to Upgrade to {brand.name}?</h2>
              <p>Get a free consultation and estimate for {brand.name} windows and doors in Arlington, TX. We will share references upon request.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
                <a href="tel:817-592-8870" className={styles.btnSecondary}>Call 817-592-8870</a>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}
