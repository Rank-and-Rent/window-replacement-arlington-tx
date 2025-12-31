import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import DoorsSection from '@/components/doors-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window & Door Replacement Grand Prairie TX | Expert Installation',
  description: 'Top-rated window and door replacement in Grand Prairie, TX. Andersen, Pella, JELD-WEN, Marvin windows. Serving all Grand Prairie areas. Free estimate: 817-592-8870.',
  keywords: 'window and door replacement Grand Prairie TX, Grand Prairie windows, window installation Grand Prairie',
}

export default function GrandPrairiePage() {
  const content = {
    intro: 'Grand Prairie bridges the Dallas-Fort Worth metroplex both geographically and culturally—a diverse, growing community where longtime residents and new arrivals build futures together. From established neighborhoods surrounding Mountain Creek Lake to newer developments spreading westward, Grand Prairie homes reflect practical Texas sensibility combined with modern expectations for comfort and efficiency. Our window and door replacement services honor this balance, delivering quality installations that enhance both your home\'s appearance and its year-round livability.',
    
    whyUs: 'Grand Prairie homeowners appreciate straightforward value—quality products, honest pricing, and reliable service without unnecessary complications. We deliver exactly that through our partnerships with Andersen, Pella, and JELD-WEN, manufacturers known for building windows that last decades, not just years. Our installation crews respect your time and property, completing most projects in one to two days with minimal disruption to your routine. We understand Grand Prairie\'s close-knit community; many of our customers come from referrals by neighbors who trust us enough to recommend our services to friends and family.',
    
    services: 'Grand Prairie\'s housing stock spans from modest post-war ranches to modern two-story family homes, and we serve every architectural style with equal expertise. Whether you\'re replacing a single broken window in your guest bedroom, upgrading all windows before selling, or completing a comprehensive whole-house replacement to slash energy bills, we bring the same attention to detail and commitment to quality. Our window selection includes energy-efficient options specifically chosen for Texas climate conditions—Low-E glass that blocks heat without dimming interiors, multi-chambered frames that resist thermal transfer, and weatherstripping systems designed to maintain their seal through countless heating and cooling cycles.',
    
    neighborhoods: 'We serve every Grand Prairie neighborhood: the established communities around Dalworth Park and Alexander Elementary, the family-friendly streets near Mountain Creek Lake, the newer developments in western Grand Prairie, the apartments and townhomes throughout the city. Our service extends throughout Grand Prairie\'s 72-square-mile footprint, ensuring residents city-wide receive equal access to professional window and door replacement services. Distance doesn\'t matter—if you\'re in Grand Prairie, we\'re here to help.',
    
    commitment: 'Grand Prairie residents value honesty and dependability, and these principles guide every customer interaction. When we schedule your consultation, we arrive on time and prepared. When we provide an estimate, it includes everything—no hidden fees appear later. When we install your windows, we protect your home as carefully as we would our own. When we say we stand behind our work, we mean it—call us with any questions or concerns, and we\'ll make it right. Grand Prairie deserves window and door replacement services built on integrity, and that\'s precisely what we provide.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Grand Prairie"
          state="TX"
          image="https://www.gptx.org/ImageRepository/Document?documentID=4822"
        />
        <LocationContent city="Grand Prairie" content={content} />
        <WindowsSection />
        <DoorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

