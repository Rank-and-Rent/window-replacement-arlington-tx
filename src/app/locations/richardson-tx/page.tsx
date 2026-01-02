import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window Replacement Richardson TX | Professional Installation',
  description: 'Quality window replacement in Richardson, TX. Andersen, Pella & JELD-WEN windows. Serving all Richardson areas. Free consultation: 817-592-8870.',
  keywords: 'window replacement Richardson TX, Richardson windows, window installation Richardson, energy efficient windows',
}

export default function RichardsonPage() {
  const content = {
    intro: 'Richardson blends established character with forward-thinking innovation—a mature inner-ring suburb where mid-century neighborhoods surround the thriving Telecom Corridor employment center. From ranch-style homes in Canyon Creek to townhomes near the DART line, from apartment communities serving UT Dallas students to single-family properties throughout the city, Richardson\'s residential diversity reflects decades of steady, thoughtful growth. Our window replacement services serve this variety expertly, bringing appropriate solutions to every Richardson property type and architectural style.',
    
    whyUs: 'Richardson residents value practical solutions delivering measurable benefits—exactly our approach to window replacement. We focus on tangible improvements: quantifiable energy savings through modern glazing technology, enhanced comfort from superior insulation and weatherstripping, increased home value through quality installations, and lasting durability from premium manufacturers. Richardson\'s location within the urban core means many properties face challenges we address effectively: traffic noise requiring sound-reducing glass packages, older construction demanding custom sizing, rental properties needing cost-effective solutions, and owner-occupied homes deserving premium upgrades.',
    
    services: 'Richardson\'s predominant mid-century housing stock—primarily 1950s-1980s ranch-style and two-story traditional homes—creates common replacement needs we\'ve addressed thousands of times. We excel at upgrading original aluminum windows to modern vinyl or composite, matching replacement window styles to neighborhood aesthetics, and navigating homeowner association requirements throughout the city. We also serve Richardson\'s newer developments and multi-family properties. Our service scope includes single-window replacements, phased replacement plans spreading investment across multiple years, and comprehensive whole-house projects transforming both performance and appearance.',
    
    neighborhoods: 'We serve throughout Richardson\'s compact 28-square-mile area: the established neighborhoods around Canyon Creek and Northrich Elementary, the communities near Heights Park and Richland College, areas surrounding UT Dallas and the Telecom Corridor, developments near Bush Turnpike, townhome and condo communities near DART stations. Richardson\'s urban density means we\'re always nearby, enabling responsive scheduling and efficient project completion. Every Richardson neighborhood receives identical professional service regardless of property age or type.',
    
    commitment: 'Richardson built its success through pragmatic planning and steady, sustainable growth—values we embody in every window project. We provide realistic timelines without over-promising. We quote fair prices reflecting actual project costs. We install windows correctly the first time, avoiding shortcuts that create future problems. We respond promptly when service is needed, understanding that your time matters. We back our work comprehensively, knowing our reputation depends on every satisfied customer. Richardson deserves window replacement services as reliable and straightforward as the community itself, and delivering exactly that guides our daily operations.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Richardson"
          state="TX"
          image="/locations/richardson-tx-window-replacement.jpg"
        />
        <LocationContent city="Richardson" content={content} />
        <WindowsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

