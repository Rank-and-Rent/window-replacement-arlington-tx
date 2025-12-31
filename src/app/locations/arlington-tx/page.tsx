import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import DoorsSection from '@/components/doors-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window & Door Replacement Arlington TX | Professional Installation',
  description: 'Quality window and door replacement in Arlington, TX. Andersen, Pella, JELD-WEN, Marvin. Serving all Arlington areas. Free consultation: 817-592-8870.',
  keywords: 'window replacement Arlington TX, door installation Arlington, Arlington windows doors, energy efficient',
}

export default function ArlingtonPage() {
  const content = {
    intro: 'Arlington stands as the seventh-largest city in Texas and the heart of the Dallas-Fort Worth metroplex, home to over 400,000 residents and major attractions including AT&T Stadium, Globe Life Field, and Six Flags Over Texas. This dynamic city blends established neighborhoods with ongoing development, creating diverse housing stock ranging from historic homes in central Arlington to modern builds in growing northern sectors. Our window and door replacement services serve this entire spectrum, providing installations that enhance comfort, energy efficiency, and property values across all Arlington neighborhoods.',
    
    whyUs: 'As Arlington specialists, we understand the unique needs of homes throughout this city. Older neighborhoods near downtown feature mid-century homes where original windows have far exceeded their service life. Growing areas in north and west Arlington showcase newer construction where builders often installed basic windows that homeowners now want to upgrade. The intense Texas sun affects different parts of Arlington differently—south and west-facing windows require maximum UV protection while north-facing windows might prioritize views over solar control. We tailor recommendations to your specific location, exposure, architectural style, and performance goals.',
    
    services: 'Arlington\'s diverse housing demands comprehensive service capabilities. We handle standard double-hung replacements in 1960s ranch homes, custom bay windows adding character to traditional two-stories, impact-resistant windows for storm protection, energy-efficient upgrades reducing cooling costs, and premium door installations enhancing curb appeal and security. We are equally comfortable working on modest starter homes and luxury properties, bringing the same professional approach regardless of project size or budget. Our work spans new construction support for Arlington builders, renovation projects for homeowners updating older properties, and emergency replacements following storm or accident damage.',
    
    neighborhoods: 'We serve every Arlington community: the established neighborhoods surrounding downtown, the family-friendly streets near top-rated schools, the developing areas in north Arlington, neighborhoods throughout south Arlington, properties near the entertainment district, communities around Lake Arlington, and everything in between. Arlington\'s central location means we efficiently serve this entire area from our local base, enabling responsive service and competitive pricing through minimized travel time.',
    
    commitment: 'Arlington homeowners invest significantly in their properties, and they deserve partners who match that commitment. We provide transparent pricing with detailed written estimates, skilled installation by experienced professionals, quality products from manufacturers who stand behind their warranties, and responsive service when questions or concerns arise. Many of our Arlington customers come through referrals from satisfied neighbors—the highest compliment in this tight-knit community. We work daily to earn and maintain the trust Arlington property owners place in us for their window and door projects.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Arlington"
          state="TX"
          image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070"
        />
        <LocationContent city="Arlington" content={content} />
        <WindowsSection />
        <DoorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
