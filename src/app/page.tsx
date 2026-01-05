import Header from '@/components/header'
import Hero from '@/components/hero'
import WindowsSection from '@/components/windows-section'
import MaterialsSection from '@/components/materials-section'
import DoorsSection from '@/components/doors-section'
import BrandsSection from '@/components/brands-section'
import FeaturesSection from '@/components/features-section'
import ProcessSection from '@/components/process-section'
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
        <MaterialsSection />
        <DoorsSection />
        <BrandsSection />
        <FeaturesSection />
        <ProcessSection />
        <AboutSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HomeAndConstructionBusiness',
            '@id': 'https://homewindowreplacementarlington.com/#organization',
            name: 'Home Window Replacement Service of Arlington',
            alternateName: 'Arlington Window Replacement',
            image: 'https://homewindowreplacementarlington.com/og-image.jpg',
            logo: 'https://homewindowreplacementarlington.com/logo.png',
            url: 'https://homewindowreplacementarlington.com',
            telephone: '+1-817-592-8870',
            email: 'info@homewindowreplacementarlington.com',
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
            currenciesAccepted: 'USD',
            paymentAccepted: 'Cash, Credit Card, Financing',
            description: 'Arlington\'s premier window replacement service. We carry Andersen, Pella, JELD-WEN, and Marvin windows. Expert installation of double-hung, casement, bay, bow, and specialty windows. Free estimates.',
            slogan: 'Premium Window Replacement for Arlington Homes',
            foundingDate: '2010',
            numberOfEmployees: {
              '@type': 'QuantitativeValue',
              minValue: 10,
              maxValue: 50,
            },
            areaServed: [
              { '@type': 'City', name: 'Arlington', '@id': 'https://en.wikipedia.org/wiki/Arlington,_Texas' },
              { '@type': 'City', name: 'Fort Worth' },
              { '@type': 'City', name: 'Dallas' },
              { '@type': 'City', name: 'Grand Prairie' },
              { '@type': 'City', name: 'Mansfield' },
              { '@type': 'City', name: 'Irving' },
              { '@type': 'City', name: 'Euless' },
              { '@type': 'City', name: 'Bedford' },
              { '@type': 'City', name: 'Hurst' },
            ],
            knowsAbout: [
              'Window Replacement',
              'Window Installation',
              'Energy Efficient Windows',
              'Double-Hung Windows',
              'Casement Windows',
              'Bay Windows',
              'Bow Windows',
              'Picture Windows',
              'Andersen Windows',
              'Pella Windows',
              'JELD-WEN Windows',
            ],
            brand: [
              { '@type': 'Brand', name: 'Andersen' },
              { '@type': 'Brand', name: 'Pella' },
              { '@type': 'Brand', name: 'JELD-WEN' },
              { '@type': 'Brand', name: 'Marvin' },
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '127',
              bestRating: '5',
              worstRating: '1',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Window Replacement Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Double-Hung Window Installation',
                    description: 'Professional installation of double-hung windows with energy-efficient Low-E glass and argon gas fill.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Casement Window Installation',
                    description: 'Side-hinged casement windows for maximum ventilation and energy efficiency.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Bay Window Installation',
                    description: 'Stunning bay window installations that add space and natural light to your home.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Bow Window Installation',
                    description: 'Elegant curved bow window installations for panoramic views.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Picture Window Installation',
                    description: 'Large fixed picture windows for maximum natural light and unobstructed views.',
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://homewindowreplacementarlington.com/#org',
            name: 'Home Window Replacement Service of Arlington',
            url: 'https://homewindowreplacementarlington.com',
            logo: 'https://homewindowreplacementarlington.com/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-817-592-8870',
              contactType: 'customer service',
              areaServed: 'US',
              availableLanguage: ['English', 'Spanish'],
            },
          }),
        }}
      />

      {/* WebSite Schema with SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://homewindowreplacementarlington.com/#website',
            name: 'Home Window Replacement Service of Arlington',
            url: 'https://homewindowreplacementarlington.com',
            publisher: {
              '@id': 'https://homewindowreplacementarlington.com/#organization',
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://homewindowreplacementarlington.com/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://homewindowreplacementarlington.com',
              },
            ],
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Window Replacement',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Home Window Replacement Service of Arlington',
              '@id': 'https://homewindowreplacementarlington.com/#organization',
            },
            areaServed: {
              '@type': 'State',
              name: 'Texas',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Premium Window Brands',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Andersen Window Installation' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Pella Window Installation' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'JELD-WEN Window Installation' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Marvin Window Installation' },
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}

