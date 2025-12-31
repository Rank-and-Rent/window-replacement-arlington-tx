import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window & Door Replacement North Richland Hills TX | Professional Service',
  description: 'Quality window and door replacement in North Richland Hills, TX. Andersen, Pella, JELD-WEN. Serving all NRH areas. Free consultation: 817-592-8870.',
  keywords: 'window replacement North Richland Hills TX, NRH windows, door installation North Richland Hills',
}

export default function NorthRichlandHillsPage() {
  const content = {
    intro: 'North Richland Hills combines suburban tranquility with urban convenience, offering residents excellent schools, abundant parks, and easy access to both Fort Worth and Dallas. This well-established community features predominantly single-family homes built from the 1960s through recent years, creating diverse window and door replacement needs. From ranch-style homes in older neighborhoods to contemporary builds in newer developments, our services address the full spectrum of NRH housing stock.',
    
    whyUs: 'North Richland Hills homeowners value quality and reliability, seeking contractors who deliver professional results without unnecessary complications. We match this straightforward approach with clear communication, honest pricing, and installations that enhance both appearance and performance. Our familiarity with NRH housing patterns allows us to anticipate common needs and provide informed recommendations specific to your neighborhood and home age.',
    
    services: 'Our North Richland Hills services include energy-efficient window replacements that reduce cooling costs in Texas heat, door installations that enhance security and curb appeal, custom solutions for non-standard openings, and storm damage replacements. We work with top manufacturers including Andersen, Pella, JELD-WEN, and Marvin to ensure you receive quality products backed by comprehensive warranties.',
    
    neighborhoods: 'We serve all North Richland Hills areas including neighborhoods near NRH2O, communities throughout the city, properties near Smithfield Road, areas surrounding excellent schools, and developments throughout this well-maintained city. NRH\'s convenient location allows us to provide responsive service with competitive pricing.',
    
    commitment: 'North Richland Hills residents expect professional service, and we deliver through experienced installers, quality products, attention to detail, and follow-through on commitments. We treat every NRH home with care and respect, completing installations that homeowners proudly show to neighbors and recommend to friends.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="North Richland Hills"
          state="TX"
          image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073"
        />
        <LocationContent city="North Richland Hills" content={content} />
        <WindowsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
