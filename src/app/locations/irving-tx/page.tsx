import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import DoorsSection from '@/components/doors-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window & Door Replacement Irving TX | Professional Window Services',
  description: 'Expert window and door replacement in Irving, TX. Andersen, Pella, JELD-WEN, Marvin authorized dealer. Serving all Irving neighborhoods. Call 817-592-8870 for free estimate.',
  keywords: 'window and door replacement Irving TX, Irving windows, window installation Irving, energy efficient windows Irving',
}

export default function IrvingPage() {
  const content = {
    intro: 'Irving pulses with international energy—a globally connected city where Fortune 500 headquarters neighbor diverse residential communities reflecting cultures from six continents. From Las Colinas high-rises overlooking scenic lakes to traditional single-family neighborhoods throughout North and South Irving, this dynamic city demands window solutions that match its sophistication. Our replacement services bring Irving homeowners premium options backed by expert installation that ensures windows perform beautifully through every Texas season.',
    
    whyUs: 'Irving\'s residents include executives, entrepreneurs, and families from around the world who expect services meeting global quality standards. We deliver through exclusive partnerships with Andersen, Pella, and JELD-WEN—manufacturers whose reputations span continents. Our consultation process accommodates busy schedules common in Irving\'s professional community, offering evening and weekend appointments. We understand Irving-specific considerations: sound reduction for homes near DFW Airport flight paths, energy efficiency crucial for homes under Texas summer sun, security features for both high-rise and ground-level properties, and architectural requirements for Las Colinas\' distinctive building styles.',
    
    services: 'Irving\'s architectural diversity—from Las Colinas luxury condos to Valley Ranch estates, from North Irving\'s established neighborhoods to South Irving\'s family-friendly communities—requires comprehensive window expertise. We handle every application: high-rise replacements coordinating with building management and HOA requirements, single-family home upgrades from single-window replacements to complete replacements, townhome renovations navigating shared-wall considerations, and new construction installations. Our selection spans all window types, from classic double-hungs maintaining traditional neighborhood character to contemporary floor-to-ceiling glass maximizing skyline views.',
    
    neighborhoods: 'Our Irving service area is comprehensive: the prestigious communities of Las Colinas and Valley Ranch, the established neighborhoods of North and South Irving, the family-oriented streets near Cimarron Park and Heritage District, the growing areas around Toyota Music Factory, the apartments and condos throughout the city. Whether you live in Irving\'s historic core or newest development, you receive the same professional service and quality installation.',
    
    commitment: 'Irving built its reputation by attracting world-class companies through reliable infrastructure and professional services. We embrace the same commitment in window and door replacement—reliable scheduling that respects your time, professional installation that protects your investment, transparent pricing without hidden charges, and warranties we honor without excuses. Irving residents juggle demanding careers and busy family lives; the last thing you need is home improvement projects that create stress. We deliver smooth, professional experiences from initial consultation through final walkthrough, ensuring your window and door replacement enhances rather than disrupts your life.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Irving"
          state="TX"
          image="https://www.irvingtexas.com/wp-content/uploads/2019/05/las-colinas-canal-walk-1.jpg"
        />
        <LocationContent city="Irving" content={content} />
        <WindowsSection />
        <DoorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

