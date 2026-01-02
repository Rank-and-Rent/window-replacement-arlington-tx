import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Sliding Glass Door Installation Arlington TX | Modern Patio Doors',
  description: 'Professional sliding glass door installation in Arlington, TX. Space-saving, contemporary designs with expansive glass. Andersen, Pella, JELD-WEN, Marvin. Free estimates. Call 214-444-4444.',
  keywords: 'sliding glass door installation Arlington TX, patio doors, sliding doors, glass door replacement',
}

export default function SlidingGlassDoorPage() {
  const content = {
    title: 'Sliding Glass Door Installation',
    subtitle: 'Contemporary Design Meets Effortless Operation',
    heroImage: '/windows/double-hung-windows-arlington-tx.webp',
    
    intro: "Sliding glass doors represent the contemporary evolution of patio access, combining clean modern aesthetics with practical space-saving operation. Unlike traditional swinging doors that require clearance radius, sliding glass doors glide horizontally on precision tracks, making them perfect for Arlington homes with furniture near the patio opening or limited outdoor deck space. Modern sliding systems deliver whisper-quiet operation, exceptional energy efficiency, and expansive glass areas that blur the boundary between inside and outside.",
    
    sections: [
      {
        heading: 'Two-Panel, Three-Panel, and Multi-Slide Configurations',
        content: 'The classic two-panel sliding glass door remains the most common configuration—one stationary panel and one that slides open, typically 6 to 8 feet wide overall. Three-panel doors increase the opening width to 9 to 12 feet with two stationary panels flanking a central sliding panel, or two sliding panels meeting in the center. For Arlington homeowners seeking dramatic wide-open spaces, multi-slide doors feature multiple panels that stack neatly to one or both sides, creating openings up to 50 feet wide. These systems transform entire walls into movable glass, perfect for luxury homes and indoor-outdoor entertaining. Each panel glides independently on precision tracks with stainless steel rollers. The installation complexity and cost increase with panel count, but the dramatic effect can justify the investment for the right property.',
      },
      {
        heading: 'Frame Materials and Performance',
        content: 'Sliding glass door frames must support significant glass weight while providing structural integrity and smooth operation for years. Vinyl frames deliver excellent insulation and require zero maintenance, making them popular for Arlington homes. They resist warping in Texas heat and never need painting. Aluminum frames provide strength for large openings and work well in contemporary architecture, though they conduct heat unless featuring thermal breaks. Wood frames offer natural beauty for traditional homes but require more maintenance to protect against moisture and sun exposure. Fiberglass frames combine strength, insulation, and low maintenance in premium products. Marvin\'s Ultrex fiberglass and Andersen\'s Fibrex composite materials represent the best of both worlds—wood-like appearance with superior durability. The frame material you select impacts both performance and long-term maintenance requirements.',
      },
      {
        heading: 'Track Systems and Operating Mechanisms',
        content: 'The track system determines how smoothly your sliding door operates, especially years after installation. Quality systems feature tandem stainless steel roller assemblies that distribute weight evenly and resist corrosion from moisture. The track itself should be extruded aluminum with smooth, precisely machined surfaces. Ball-bearing rollers provide smoother operation than simple wheels. Adjustable rollers allow fine-tuning as your home settles over time. The lift-and-slide mechanism found on premium doors like Marvin and some Andersen models represents the pinnacle of sliding door technology—a simple lift on the handle raises the door panel slightly, reducing friction to almost nothing. The door glides with fingertip pressure then drops back onto weatherstripping when closed for an airtight seal. This technology makes operating even massive glass panels effortless.',
      },
      {
        heading: 'Energy Efficiency and Climate Control',
        content: 'Large glass areas in sliding doors once represented energy efficiency nightmares, but modern technology has transformed performance. Low-E coatings selectively reflect infrared heat while transmitting visible light, dramatically reducing solar heat gain. In Arlington summer sun, this technology can reduce heat transmission by 50 percent or more compared to uncoated glass. Argon or krypton gas fills between glass panes provide additional insulation. Quality frames incorporate thermal breaks that prevent heat conduction through metal components. Multiple weatherstripping contact points seal the sliding panel against air infiltration when closed. Many ENERGY STAR certified sliding glass doors now perform comparably to walls in terms of insulation value. The investment in high-performance doors pays dividends in reduced cooling costs throughout Arlington\'s long, hot summers.',
      },
      {
        heading: 'Security Systems for Large Glass Openings',
        content: 'Securing a sliding glass door requires different approaches than traditional hinged doors. The track must prevent lifting the door panel off its rails—quality doors feature anti-lift blocks or special track designs that make removal impossible without breaking glass. Sliding panels incorporate heavy-duty locks that engage the frame at multiple points. Auxiliary foot locks at the base provide additional security. Security bars placed in the track behind the sliding panel provide simple but effective backup security. Impact-resistant glass makes breaking through impractical. Modern Pella and Andersen sliding doors incorporate locking systems that rival the security of hinged doors while maintaining smooth operation. For Arlington homes in areas with property crime concerns, these features provide protection without visible security bars that compromise aesthetics.',
      },
      {
        heading: 'Screen Solutions for Ventilation',
        content: 'Enjoying Arlington\'s pleasant spring and fall weather requires good screens to keep out insects while allowing breezes. Traditional sliding screens on separate tracks provide simple, reliable operation but consume space and impact aesthetics even when open. Retractable screen systems hide completely in side housings when not needed, preserving unobstructed views. They deploy with a simple pull and retract automatically when released. These systems work with both two-panel and multi-slide doors. Pet-resistant screen mesh withstands scratching and pushing from curious dogs and cats. Motorized screen systems on large multi-slide doors deploy with button or remote control. The right screen solution extends the usefulness of your patio doors throughout the year, allowing natural ventilation during the months when Arlington weather makes it pleasant.',
      },
    ],
    
    features: [
      'Two-panel, three-panel, and multi-slide configurations',
      'Vinyl, aluminum, wood, and fiberglass frame options',
      'Low-E and tinted glass for energy efficiency',
      'Stainless steel roller systems',
      'Anti-lift security features',
      'Retractable and sliding screen options',
      'Sizes from 6 to 50 feet wide',
      'Andersen, Pella, JELD-WEN, and Marvin brands',
      'Impact-resistant glass available',
      'Lifetime warranties on many models',
    ],
    
    brands: [
      {
        name: 'Andersen Sliding Doors',
        description: 'Andersen A-Series and 400 Series sliding patio doors feature their durable Fibrex composite frames with smooth operation and extensive customization options. The E-Series offers premium wood interiors with aluminum-clad exteriors.',
      },
      {
        name: 'Pella Sliding Doors',
        description: 'Pella 350 and 250 Series sliding patio doors deliver reliable performance with their exclusive between-the-glass blinds option. The Architect Series provides premium features for discerning Arlington homeowners.',
      },
      {
        name: 'JELD-WEN Sliding Doors',
        description: 'JELD-WEN offers sliding patio doors in vinyl and wood with dependable operation and competitive pricing. Their Siteline wood doors and Premium Vinyl series provide options for various budgets.',
      },
      {
        name: 'Marvin Multi-Slide Doors',
        description: 'Marvin Ultimate Multi-Slide doors create breathtaking wall-to-wall glass with up to 10 panels. Precision-engineered for effortless operation even on massive configurations. Built to order with unlimited customization.',
      },
    ],
    
    faq: [
      {
        question: 'How long do sliding glass doors last in Arlington, TX?',
        answer: 'Quality sliding glass doors from Andersen, Pella, JELD-WEN, or Marvin typically last 20 to 30 years in Arlington, TX with proper maintenance. Vinyl and fiberglass models often outlast this since they resist warping and rotting. The track and roller system may need adjustment or replacement over time, but the door structure itself should perform for decades.',
      },
      {
        question: 'Why does my sliding door stick or drag when opening?',
        answer: 'Sticking or difficult operation in Arlington sliding doors usually indicates worn rollers, dirty tracks, or settling that has pushed the door out of alignment. Debris in the track, damaged rollers, or frame warping can all cause issues. Professional adjustment, roller replacement, or track cleaning often restores smooth operation without full door replacement.',
      },
      {
        question: 'Can I install a sliding glass door where I have a wall?',
        answer: 'Yes, though it requires structural modifications in your Arlington, TX home. A beam or header must support the load above, wall framing is removed, and the floor may need adjustment to match exterior grade. Permits are required for this type of modification. We coordinate with structural engineers when needed and handle all permit requirements.',
      },
      {
        question: 'What is the most energy-efficient sliding glass door?',
        answer: 'The most energy-efficient sliding glass doors in Arlington, TX feature Low-E coated triple-pane glass with argon fills, insulated vinyl or fiberglass frames, and comprehensive weatherstripping. Look for NFRC ratings and ENERGY STAR certification. Brands like Andersen, Pella, and Marvin offer high-performance options that dramatically outperform standard doors.',
      },
    ],
  }

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title={content.title}
          subtitle={content.subtitle}
          image={content.heroImage}
        />
        <ServiceContent content={content} />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
