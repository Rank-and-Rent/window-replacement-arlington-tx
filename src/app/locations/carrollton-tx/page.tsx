import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window Replacement Carrollton TX | Expert Installation',
  description: 'Professional window replacement in Carrollton, TX. Andersen, Pella & JELD-WEN windows. Serving all Carrollton areas. Free consultation: 817-592-8870.',
  keywords: 'window replacement Carrollton TX, Carrollton windows, window installation Carrollton, energy efficient windows',
}

export default function CarrolltonPage() {
  const content = {
    intro: 'Carrollton stretches across three counties and multiple decades of North Texas growth—a diverse, thriving community where established neighborhoods meet contemporary developments. From the historic Carrollton Square district to master-planned communities near Josey Ranch Lake, from townhomes near the DART line to single-family estates throughout the city, Carrollton homes reflect every residential architectural style the region offers. Our window replacement services match this diversity, bringing premium solutions to every property type and homeowner budget.',
    
    whyUs: 'Carrollton\'s residents include professionals commuting throughout the metroplex, retirees enjoying the community\'s excellent amenities, and families attracted by strong schools. This diversity demands flexible service we readily provide—evening and weekend consultations accommodating work schedules, detailed technical explanations for research-oriented homeowners, straightforward recommendations for those preferring expert guidance. We offer Andersen, Pella, and JELD-WEN, we offer genuine choice among premium manufacturers rather than limiting options. Carrollton homeowners consistently mention they appreciate our patient consultation process that educates rather than pressures.',
    
    services: 'Carrollton\'s extensive geographic footprint and varied housing stock—from 1950s original homes to brand-new construction—means we handle every conceivable window application. We excel at matching replacement windows to each construction era, navigating homeowner association requirements in planned communities, coordinating townhome projects with shared-wall considerations, and executing large-scale projects in executive properties. Our service range includes emergency replacements, insurance claim assistance, single-window replacements, room-by-room upgrades, and comprehensive whole-house transformations. Whether your Carrollton home needs one window or fifty, you receive equal professional attention.',
    
    neighborhoods: 'We serve throughout Carrollton\'s 37-square-mile expanse: the historic areas near downtown Carrollton Square, the established neighborhoods around Perry Elementary and Rosemeade Park, the family communities near Indian Creek and Castle Hills, the developments around Josey Ranch Lake, the townhome communities near DART stations, the newer constructions in eastern Carrollton. Distance never determines service quality—every Carrollton resident receives prompt, professional attention regardless of location within the city.',
    
    commitment: 'Carrollton built its success through intentional planning, quality development, and commitment to livability. We bring identical principles to window replacement—careful planning ensuring appropriate solutions, quality products and installation, and commitment to customer satisfaction extending beyond installation day. We communicate transparently about project scope, timeline, and investment. We work cleanly and efficiently, respecting your property and schedule. We stand behind our work with comprehensive warranties we honor without hesitation. Carrollton deserves window replacement services matching the city\'s own high standards, and meeting that expectation drives everything we do.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Carrollton"
          state="TX"
          image="/locations/carrollton-tx-window-replacement.jpg"
        />
        <LocationContent city="Carrollton" content={content} />
        <WindowsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

