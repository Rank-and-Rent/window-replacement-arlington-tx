import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import DoorsSection from '@/components/doors-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window & Door Replacement Euless TX | Expert Window Installation',
  description: 'Top window and door replacement in Euless, TX. Andersen, Pella, JELD-WEN, Marvin dealer. Serving all Euless neighborhoods. Free estimate: 817-592-8870.',
  keywords: 'window and door replacement Euless TX, Euless windows, window installation Euless, replacement windows',
}

export default function EulessPage() {
  const content = {
    intro: 'Euless occupies a strategic position at the geographic center of the Dallas-Fort Worth metroplex—a welcoming mid-cities community where small-town friendliness coexists with big-city amenities. From established neighborhoods dating to the 1950s and 60s to newer developments near Bear Creek Parkway, Euless homes reflect diverse architectural styles and homeowner priorities. Our window and door replacement services serve this variety expertly, bringing premium solutions to every Euless neighborhood regardless of home age or style.',
    
    whyUs: 'Euless residents value neighborly service without pretense—straightforward communication, honest pricing, and work you can trust. We deliver through experienced teams who respect your home and your time. As an authorized dealer for three premium window manufacturers, we offer genuine choice rather than pushing single-brand solutions. Our consultation process considers Euless-specific factors: replacement windows for homes built during various construction eras, energy efficiency crucial for mid-cities location without tree canopy, noise reduction for homes near DFW Airport or Highway 121, and budget-conscious options that never compromise essential quality.',
    
    services: 'Euless\'s housing stock spans seven decades of construction, presenting unique challenges and opportunities. We excel at matching replacement windows to each era: wood windows for 1950s-60s homes requiring period-appropriate restoration, vinyl upgrades for 1970s-80s properties with failing aluminum frames, and contemporary solutions for newer construction. Our full-service approach handles everything from single-window replacements following hail damage to comprehensive whole-house replacements improving comfort and property value. We work efficiently, completing most Euless projects in one to two days while maintaining strict quality standards.',
    
    neighborhoods: 'Our Euless service area is comprehensive: the established neighborhoods north of Highway 10, the family communities around Texas Star Golf Course, the developments near Bear Creek and Fuller Heights, areas throughout south Euless, and everywhere between. Euless residents throughout the city\'s compact 16-square-mile footprint receive identical professional service regardless of property location or project size.',
    
    commitment: 'Euless built its identity around being a great place to raise families and build community—values we share completely. We treat your Euless home with the same care we\'d want for our own families\' homes. We communicate honestly about timeframes, costs, and what to expect. We work cleanly, protecting your property and removing all debris. We stand behind our installations with comprehensive warranties honoring our commitment long after installation completes. When Euless neighbors recommend our services to friends, we know we\'ve earned the trust this tight-knit community places in local businesses that do things right.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Euless"
          state="TX"
          image="/locations/window-replacement-euless-tx-1.jpg"
        />
        <LocationContent city="Euless" content={content} />
        <WindowsSection />
        <DoorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

