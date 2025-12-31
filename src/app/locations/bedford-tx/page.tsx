import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import DoorsSection from '@/components/doors-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window & Door Replacement Bedford TX | Professional Installation',
  description: 'Quality window and door replacement in Bedford, TX. Andersen, Pella, JELD-WEN, Marvin windows. Serving all Bedford areas. Free consultation: 817-592-8870.',
  keywords: 'window and door replacement Bedford TX, Bedford windows, window installation Bedford, energy efficient windows',
}

export default function BedfordPage() {
  const content = {
    intro: 'Bedford epitomizes mid-cities living at its finest—a well-established community where tree-lined streets, excellent parks, and strong neighborhood pride create an enviable quality of life. From the historic homes near Old Bedford Road to the well-maintained neighborhoods throughout this compact city, Bedford properties reflect homeowners\' commitment to preservation and improvement. Our window and door replacement services honor this dedication, providing installations that enhance both comfort and curb appeal while respecting each home\'s architectural character.',
    
    whyUs: 'Bedford homeowners maintain their properties thoughtfully, understanding that consistent upgrades preserve value and livability. We match this mindset through partnerships with manufacturers building windows designed to last decades. Our experience with Bedford\'s predominantly mid-century housing stock means we understand common challenges: replacing original steel casements with modern equivalents, upgrading aluminum sliders to energy-efficient vinyl, and matching replacement windows to neighborhood aesthetics. We work efficiently, respecting busy schedules while never rushing quality. Bedford residents consistently tell us they appreciate our straightforward approach—clear communication, honest pricing, and reliable service without unnecessary complications.',
    
    services: 'Bedford\'s architectural consistency—mostly ranch-style and traditional two-story homes built from the 1950s through 1980s—creates efficiency in our service delivery. We stock window sizes and configurations common to Bedford neighborhoods, often reducing lead times for standard replacements. However, we also handle unique applications: custom sizes for non-standard openings, bay and bow windows adding dimension to flat facades, specialty shapes for distinctive architectural details. Our service scope ranges from emergency single-window and door replacements following storm damage to carefully planned whole-house upgrades completed systematically over multiple visits.',
    
    neighborhoods: 'We serve every Bedford neighborhood: the established communities near Bedford Boys Ranch, the family-friendly streets around Central Park, the areas surrounding Bedford\'s excellent schools, neighborhoods throughout north and south Bedford. Bedford\'s compact nine-square-mile footprint means we\'re never far away, enabling responsive service when you need it. Whether your project involves a single window or your entire home, you receive our complete attention and professional expertise.',
    
    commitment: 'Bedford\'s strong sense of community extends to relationships between residents and local businesses. We value these connections, knowing our reputation depends on every installation meeting expectations. We arrive when scheduled, complete work as promised, clean thoroughly before leaving, and respond promptly if questions arise. Our warranties provide genuine protection, and we honor them without hesitation. Many of our Bedford customers come through neighbor referrals—the highest compliment in a close-knit community where reputation matters. We work every day to deserve the trust Bedford homeowners place in us.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Bedford"
          state="TX"
          image="https://www.bedfordtx.gov/ImageRepository/Document?documentID=4523"
        />
        <LocationContent city="Bedford" content={content} />
        <WindowsSection />
        <DoorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

