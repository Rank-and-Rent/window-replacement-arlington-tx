import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window Replacement Plano TX | Premium Window Services',
  description: 'Expert window replacement in Plano, TX. Authorized Andersen, Pella & JELD-WEN dealer. Serving all Plano areas. Free estimate: 214-444-4444.',
  keywords: 'window replacement Plano TX, Plano windows, window installation Plano, luxury windows Texas',
}

export default function PlanoPage() {
  const content = {
    intro: 'Plano represents the pinnacle of planned suburban development—a prosperous, forward-thinking community where corporate headquarters, excellent schools, and meticulously maintained neighborhoods create exceptional quality of life. From historic homes in Old Town to contemporary estates in West Plano, from luxury high-rises near Legacy to family neighborhoods throughout East Plano, Plano properties reflect residents\' high expectations and commitment to excellence. Our window replacement services match these standards, delivering premium installations worthy of Plano\'s finest homes.',
    
    whyUs: 'Plano homeowners expect superior quality in every home improvement—a standard we meet through exclusive partnerships with Andersen, Pella, and JELD-WEN. These manufacturers share Plano\'s commitment to excellence, building windows that combine cutting-edge technology with exceptional craftsmanship. Our consultation process provides the detailed technical information Plano\'s professional community appreciates—U-factors, SHGC ratings, argon vs. krypton gas fills, frame material thermal properties. We also understand Plano-specific considerations: master-planned community architectural guidelines, luxury home custom requirements, energy efficiency crucial for large properties, and sound reduction valuable near major thoroughfares.',
    
    services: 'Plano\'s architectural diversity—from Old Town\'s historic character to West Plano\'s executive estates, from Legacy\'s urban sophistication to East Plano\'s family-oriented subdivisions—demands comprehensive capabilities we\'ve refined over decades. We excel at luxury installations in custom homes, historic preservation projects maintaining period authenticity, contemporary solutions for modern architecture, and practical upgrades for established neighborhoods. Our services include complex whole-house projects coordinating multiple window types, sophisticated smart home integrations, impact-resistant specifications for severe weather protection, and acoustic solutions for homes near Dallas North Tollway or President George Bush Turnpike.',
    
    neighborhoods: 'We serve throughout Plano\'s expansive 72-square-mile footprint: the charming historic district near Downtown Plano, the prestigious neighborhoods of West Plano, the corporate corridor surrounding Legacy, the family communities throughout East Plano, the developments near Arbor Hills Nature Preserve, areas around Plano\'s excellent parks and recreation facilities. Plano\'s size creates logistical complexity we manage expertly, ensuring residents city-wide receive prompt, professional service matching Plano\'s reputation for excellence.',
    
    commitment: 'Plano built its reputation through refusing to compromise quality in planning, development, or community services. We embrace identical principles. Our installations reflect meticulous attention to detail because Plano homes demand nothing less. Our communication maintains professionalism matching Plano\'s business culture. Our warranties provide comprehensive protection backed by premier manufacturers and our own commitment to customer satisfaction. When Plano residents invest in window replacement, they expect results justifying that investment—enhanced comfort, improved aesthetics, measurable energy savings, and lasting value. Delivering exactly that remains our unwavering commitment.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Plano"
          state="TX"
          image="https://www.plano.gov/ImageRepository/Document?documentID=27822"
        />
        <LocationContent city="Plano" content={content} />
        <WindowsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

