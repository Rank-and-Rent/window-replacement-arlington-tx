import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window Replacement Mansfield TX | Quality Installation Services',
  description: 'Professional window replacement in Mansfield, TX. Premium Andersen, Pella & JELD-WEN windows. Serving all Mansfield areas. Free consultation: 214-444-4444.',
  keywords: 'window replacement Mansfield TX, Mansfield windows, window installation Mansfield, energy efficient windows',
}

export default function MansfieldPage() {
  const content = {
    intro: 'Mansfield embodies the best of suburban Texas living—master-planned communities with excellent schools, abundant parks, and strong neighborhood connections. From newer subdivisions expanding southward to established areas near historic downtown, Mansfield homes reflect families\' commitment to quality and long-term value. Our window replacement services align perfectly with these priorities, delivering installations that enhance comfort, reduce energy costs, and maintain your home\'s value for decades to come.',
    
    whyUs: 'Mansfield homeowners research thoroughly before making significant home investments—exactly the approach we appreciate and reward. We provide detailed information about every window option, explaining differences between brands, materials, and glass packages in clear terms without pressure or sales tactics. Our product selection focuses on windows engineered for Texas climate: superior solar heat rejection to ease air conditioning loads during endless summer months, excellent insulation to handle occasional winter freezes, and durable construction that withstands temperature extremes and severe weather. Mansfield families expect value that extends beyond initial price, and quality windows from premium manufacturers deliver exactly that.',
    
    services: 'Mansfield\'s predominant residential character—primarily single-family homes in subdivisions developed from the 1990s forward—means we frequently work with builder-grade windows reaching end-of-life. Upgrading from basic aluminum or vinyl to premium Andersen, Pella, or JELD-WEN windows transforms home performance dramatically. We also serve Mansfield\'s older neighborhoods near downtown, where period homes may require custom solutions maintaining architectural integrity. Our services include energy audits identifying which windows lose the most heat and cooling, phased replacement plans spreading costs across multiple years, and whole-house projects completed in days rather than weeks.',
    
    neighborhoods: 'We serve throughout Mansfield\'s expanding footprint: the established communities around Mansfield ISD schools, the newer master-planned developments in western and southern Mansfield, the areas near Mansfield National Golf Club, the neighborhoods surrounding Mansfield\'s parks and recreation facilities. Our service extends to every Mansfield zip code, ensuring residents city-wide enjoy access to professional window replacement regardless of neighborhood age or home size.',
    
    commitment: 'Mansfield\'s family-oriented culture values reliability, honesty, and standing behind your word—principles guiding every aspect of our business. We schedule installations around your family\'s routine, protecting kids\' nap times and avoiding disruption to homework hours. We maintain job sites safely, securing work areas when children are present. We communicate clearly throughout projects, answering questions patiently and explaining our process thoroughly. We back our work with comprehensive warranties and respond promptly when service is needed. Mansfield families deserve window replacement services as dependable as the community you\'ve chosen for your home.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Mansfield"
          state="TX"
          image="https://www.mansfieldtexas.gov/ImageRepository/Document?documentId=11450"
        />
        <LocationContent city="Mansfield" content={content} />
        <WindowsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

