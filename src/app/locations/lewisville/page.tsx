import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window Replacement Lewisville TX | Expert Window Services',
  description: 'Professional window replacement in Lewisville, TX. Premium Andersen, Pella & JELD-WEN windows. Serving all Lewisville areas. Call 214-444-4444 for free estimate.',
  keywords: 'window replacement Lewisville TX, Lewisville windows, window installation Lewisville, replacement windows',
}

export default function LewisvillePage() {
  const content = {
    intro: 'Lewisville anchors the northwestern Dallas-Fort Worth metroplex—a rapidly growing city where historic Old Town charm meets contemporary development surrounding Lewisville Lake. From established neighborhoods near the lake to master-planned communities expanding northward, from downtown\'s revitalized historic district to newer subdivisions throughout the city, Lewisville properties reflect diverse architectural styles and homeowner priorities. Our window replacement services serve this variety comprehensively, delivering solutions appropriate for every Lewisville home.',
    
    whyUs: 'Lewisville homeowners balance quality expectations with practical budget considerations—a balance we help achieve through comprehensive product selection spanning price points without compromising essential quality. As authorized dealers for Andersen, Pella, and JELD-WEN, we offer options from cost-effective to premium, ensuring every Lewisville resident finds windows matching both performance requirements and financial parameters. We understand Lewisville-specific factors: lake-area humidity requiring moisture-resistant frames, growth-area new construction standards, established neighborhood aesthetic consistency, and energy efficiency crucial throughout Texas summers.',
    
    services: 'Lewisville\'s architectural diversity—from Old Town\'s historic character to Castle Hills\' luxury homes, from lake properties to growing northern developments—demands comprehensive capabilities we bring to every project. We excel at lakefront installations withstanding moisture exposure, historic renovations maintaining period authenticity, new construction specifications, and established neighborhood upgrades. Our services include storm damage repairs common in North Texas, insurance claim coordination, single-window emergencies, room-by-room phased replacements, and complete whole-house transformations improving both comfort and property value.',
    
    neighborhoods: 'We serve throughout Lewisville\'s extensive 36-square-mile area: the historic Old Town district, the lakefront communities near Lewisville Lake, the established neighborhoods around Lewisville High School, the master-planned developments in Castle Hills and Highlands, the growing areas in northern Lewisville, communities near Vista Ridge Mall and Music City Texas. Lewisville\'s geographic spread creates logistical challenges we navigate expertly, ensuring prompt, professional service regardless of property location within the city.',
    
    commitment: 'Lewisville welcomes new residents while honoring longtime families who built the community—inclusivity we practice through equal attention to every customer regardless of project size or budget. Whether your Lewisville home needs basic vinyl replacements or premium wood-clad installations, you receive identical professional consultation, expert installation, and comprehensive support. We communicate clearly about options, pricing, and expectations. We work efficiently and cleanly. We stand behind our installations with warranties we honor without hesitation. Lewisville\'s continued growth depends on businesses delivering quality services that earn resident trust, and earning that trust drives our daily commitment.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Lewisville"
          state="TX"
          image="https://www.cityoflewisville.com/ImageRepository/Document?documentID=7821"
        />
        <LocationContent city="Lewisville" content={content} />
        <WindowsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

