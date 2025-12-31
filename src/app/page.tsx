import Header from '@/components/header'
import Hero from '@/components/hero'
import WindowsSection from '@/components/windows-section'
import DoorsSection from '@/components/doors-section'
import BrandsSection from '@/components/brands-section'
import FeaturesSection from '@/components/features-section'
import ProcessSection from '@/components/process-section'
import TestimonialsSection from '@/components/testimonials-section'
import AboutSection from '@/components/about-section'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WindowsSection />
        <DoorsSection />
        <BrandsSection />
        <FeaturesSection />
        <ProcessSection />
        <TestimonialsSection />
        <AboutSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Home Window Replacement Service of Arlington',
            image: 'https://homewindowreplacementarlington.com/og-image.jpg',
            '@id': 'https://homewindowreplacementarlington.com',
            url: 'https://homewindowreplacementarlington.com',
            telephone: '817-592-8870',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '1250 E Copeland Rd #530',
              addressLocality: 'Arlington',
              addressRegion: 'TX',
              postalCode: '76011',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 32.7357,
              longitude: -97.1081,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '16:00',
              },
            ],
            sameAs: [],
            priceRange: '$$',
            description:
              'Arlington\'s premier window replacement service. Authorized dealer for Andersen, Pella, and JELD-WEN windows. Expert installation of double-hung, casement, bay, bow, and specialty windows. Free estimates.',
            areaServed: [
              {
                '@type': 'City',
                name: 'Arlington',
                '@id': 'https://en.wikipedia.org/wiki/Arlington,_Texas',
              },
              {
                '@type': 'City',
                name: 'Fort Worth',
              },
              {
                '@type': 'City',
                name: 'Dallas',
              },
              {
                '@type': 'City',
                name: 'Grand Prairie',
              },
              {
                '@type': 'City',
                name: 'Mansfield',
              },
              {
                '@type': 'City',
                name: 'Irving',
              },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Window Replacement Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Double-Hung Window Installation',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Casement Window Installation',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Bay Window Installation',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Bow Window Installation',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Picture Window Installation',
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}

