import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window Replacement Dallas TX | Premium Installation Services',
  description: 'Professional window replacement in Dallas, TX. Authorized Andersen, Pella & JELD-WEN dealer. Serving all Dallas areas. Free consultation: 214-444-4444.',
  keywords: 'window replacement Dallas, Dallas windows, window installation Dallas TX, energy efficient windows Dallas',
}

export default function DallasPage() {
  const content = {
    intro: 'Dallas represents the economic and cultural heartbeat of North Texas—a sprawling metropolis where gleaming downtown towers overlook historic neighborhoods dating back over 175 years. Our window replacement services match Dallas\'s architectural ambition, serving everything from Highland Park mansions and Lakewood Tudor revivals to modern lofts in Uptown and contemporary estates throughout North Dallas. We bring the same level of excellence Dallas businesses bring to their industries, ensuring your home receives window solutions worthy of the Big D.',
    
    whyUs: 'Dallas homeowners expect the best, and settling for anything less simply isn\'t the Dallas way. We partner exclusively with premium manufacturers—Andersen, Pella, and JELD-WEN—because Dallas homes deserve windows that perform as impressively as they appear. Our consultation process considers Dallas-specific factors: intense summer heat that tests window efficiency, occasional severe weather requiring impact-resistant options, diverse architectural styles demanding period-appropriate solutions, and HOA requirements in master-planned communities. We understand Dallas because we\'ve served this market for over two decades, completing thousands of installations from Oak Cliff to Far North Dallas.',
    
    services: 'Dallas\'s vast geographic footprint encompasses virtually every architectural style American residential construction has produced. We handle them all—replacing original steel casements in 1920s Lakewood bungalows with historically accurate wood replicas, upgrading inefficient aluminum sliders in 1970s Richardson ranches to energy-saving vinyl double-hungs, installing floor-to-ceiling window walls in contemporary Turtle Creek high-rises, and everything between. Our window selection spans eight operational styles, three premium brands, and countless configuration options, ensuring we match your exact requirements regardless of home style, age, or budget.',
    
    neighborhoods: 'Our service area encompasses all Dallas neighborhoods and surrounding communities: the prestigious enclaves of Highland Park and University Park, the historic charm of Lakewood, East Dallas, and Oak Cliff, the family-oriented suburbs of Lake Highlands and Far North Dallas, the urban sophistication of Uptown, Downtown, and Deep Ellum, the established communities throughout Richardson, the newer developments in North Dallas and beyond. If you call Dallas home, we serve your neighborhood with the same commitment to excellence regardless of zip code.',
    
    commitment: 'Dallas built its reputation through innovation, hard work, and refusing to accept second-best. We embody these same principles in every window replacement project. Our estimates reflect realistic costs without lowball pricing that leads to shortcuts. Our installation crews treat your Dallas home with the respect it deserves—protecting flooring, removing debris, and leaving spaces cleaner than we found them. Our warranties provide genuine protection backed by both manufacturer reputation and our own commitment to making things right. When you choose us for your Dallas window replacement, you\'re partnering with professionals who understand that your home represents your most significant investment and deserves to be treated accordingly.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Dallas"
          state="TX"
          image="https://www.visitdallas.com/imager/s3_us-west-1_amazonaws_com/dallascitynews/production/Dallas-Skyline-Margaret-Hunt-Hill-Bridge_51fd2f39e39a6f861a0ba5bd5c66dadf.jpg"
        />
        <LocationContent city="Dallas" content={content} />
        <WindowsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

