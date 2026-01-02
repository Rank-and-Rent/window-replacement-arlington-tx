import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import DoorsSection from '@/components/doors-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window & Door Replacement Fort Worth TX | Professional Installation',
  description: 'Expert window and door replacement in Fort Worth, TX. Andersen, Pella, JELD-WEN, Marvin. Serving all Fort Worth neighborhoods. Free estimate: 817-592-8870.',
  keywords: 'window replacement Fort Worth, door installation Fort Worth, Fort Worth windows doors',
}

export default function FortWorthPage() {
  const content = {
    intro: 'Fort Worth stands as the crown jewel of North Texas—a vibrant blend of Western heritage and metropolitan sophistication where historic Stockyards meet modern skyscrapers. Our window replacement services honor Fort Worth\'s architectural diversity, from turn-of-the-century craftsman bungalows in Fairmount to contemporary estates in Westover Hills. With over two decades serving Cowtown, we understand the unique challenges Fort Worth\'s climate and varied architectural styles present.',
    
    whyUs: 'Fort Worth homeowners demand quality that matches their city\'s reputation, and we deliver. We offer Andersen, Pella, and JELD-WEN, we bring Fort Worth residents access to America\'s finest window manufacturers. Our installation teams undergo continuous training to ensure every window performs flawlessly through Texas heat waves and occasional winter freezes. We\'re locally owned and operated, which means when you call, you reach someone who knows Fort Worth neighborhoods, understands local building codes, and takes pride in serving fellow Fort Worth families.',
    
    services: 'From energy-efficient double-hung replacements in historic neighborhoods to floor-to-ceiling picture windows capturing skyline views from high-rise condos, we handle every window type and application. Fort Worth\'s architectural landscape spans over 150 years—Victorian mansions, mid-century ranches, Prairie-style homes, and cutting-edge contemporary designs. Our extensive experience means we can match period-appropriate windows for historic renovations or specify ultra-modern configurations for new construction. We serve residential clients throughout Fort Worth, from single-window bathroom updates to complete whole-house replacement projects involving dozens of units.',
    
    neighborhoods: 'We proudly serve every Fort Worth neighborhood and zip code: the tree-lined streets of Fairmount and Berkeley Place, the family-friendly communities of Ridglea Hills and Tanglewood, the prestigious estates of Westover Hills and Rivercrest, the revitalized urban lofts of Sundance Square and West 7th, the growing suburbs of Alliance and Westworth Village, and everything in between. Our service area extends throughout Tarrant County, ensuring Fort Worth residents city-wide enjoy equal access to premium window replacement services.',
    
    commitment: 'Fort Worth built its reputation on straight talk and quality workmanship—values we share completely. When we provide an estimate, it\'s comprehensive and honest, covering every aspect of your project without hidden fees or surprise charges. When we schedule installation, we show up on time and complete the job professionally. When we say our work is warrantied, we mean it—backed by both manufacturer coverage and our own workmanship guarantee. Fort Worth deserves window replacement services as dependable as the city itself, and that\'s precisely what we deliver.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Fort Worth"
          state="TX"
          image="/locations/window-replacement-fort-worth-tx-1.jpg"
        />
        <LocationContent city="Fort Worth" content={content} />
        <WindowsSection />
        <DoorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

