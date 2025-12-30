import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Sliding Window Replacement Arlington TX | Modern Efficiency',
  description: 'Contemporary sliding windows in Arlington, TX. Space-saving design with smooth operation. Andersen, Pella & JELD-WEN. Free consultation: 214-444-4444.',
  keywords: 'sliding windows Arlington TX, gliding windows, modern windows, space saving windows Texas',
}

export default function SlidingWindowsPage() {
  const content = {
    title: 'Sliding Windows',
    subtitle: 'Sleek Horizontal Operation for Contemporary Living',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070',
    
    intro: "Sliding windows epitomize modern window design—clean horizontal lines, effortless operation, and space-efficient functionality that works beautifully in contemporary Arlington homes. Moving horizontally on tracks rather than swinging or lifting, they provide excellent ventilation without protruding into your living space or outdoor areas. Their wide proportions make them ideal for capturing expansive views while flooding interiors with natural light.",
    
    sections: [
      {
        heading: 'Space-Saving Design for Modern Living',
        content: 'Sliding windows solve a common challenge in contemporary home design: maximizing ventilation and views while minimizing the space required for window operation. Unlike casement or awning windows that swing outward, or double-hung windows that require clearance for operation, sliding windows simply glide horizontally along their tracks. This makes them perfect for locations where space is at a premium—above kitchen counters, behind furniture, or opening onto patios and balconies where an outward-swinging sash would interfere with outdoor living areas. In tighter Arlington lots where homes sit closer together, sliding windows provide ventilation without extending into neighboring yards.',
      },
      {
        heading: 'Contemporary Aesthetics and Architectural Appeal',
        content: 'The horizontal proportions of sliding windows align perfectly with modern architectural principles. Wide, low-profile frames create an emphasis on horizontal lines that make rooms feel more spacious and connected to outdoor spaces. This design aesthetic particularly complements mid-century modern homes, contemporary ranch-style residences, and new construction throughout Arlington\'s developing neighborhoods. Sliding windows work beautifully in banks—three, four, or even five units side-by-side create stunning window walls that blur the boundary between indoor and outdoor living. Their clean sight lines and minimal frame profiles maximize glass area, allowing architecture and landscape to take center stage.',
      },
      {
        heading: 'User-Friendly Operation and Maintenance',
        content: 'Sliding windows operate with remarkable ease. Quality models glide smoothly on precision-engineered tracks using nylon or stainless steel rollers that require minimal effort to move. This effortless operation makes them ideal for locations where you open and close windows frequently, like in kitchens above counters or in family rooms opening to patios. The horizontal operation also puts less strain on hardware compared to large casement windows, potentially extending service life. Maintenance remains straightforward—both sashes typically remove easily for cleaning, and track maintenance involves occasional vacuuming and lubrication. Modern sliding windows have largely overcome the air infiltration issues that plagued older models, achieving respectable energy efficiency ratings.',
      },
      {
        heading: 'Ventilation Control and Airflow Management',
        content: 'Sliding windows provide flexible ventilation options. Standard configurations feature one operable and one fixed sash, giving you ventilation across half the window opening. You can specify exactly which side operates based on your room layout and prevailing breezes. Some models offer both sashes operable from the center, creating a large central opening that\'s ideal for drawing cross-breezes through Arlington homes during pleasant weather. The horizontal opening naturally captures breezes at sitting or standing height—exactly where you want airflow when relaxing or working. Pair sliding windows on opposite walls to create effective cross-ventilation patterns that naturally cool homes during spring and fall.',
      },
      {
        heading: 'Material Options and Frame Configurations',
        content: 'Modern sliding windows come in the full range of frame materials, each offering distinct advantages. Vinyl sliding windows deliver excellent value with minimal maintenance and good energy efficiency—ideal for budget-conscious Arlington homeowners. Fiberglass frames provide superior strength and stability, resisting warping even in Texas temperature extremes. Aluminum frames offer the slimmest profiles and maximum glass area, perfect for contemporary designs where minimalism matters. Wood and wood-clad options bring natural warmth and timeless beauty. Frame widths vary significantly between manufacturers and product lines, so if minimal sight lines matter to your design vision, we\'ll help you select models that maximize glass area.',
      },
      {
        heading: 'Security Considerations and Enhancements',
        content: 'Sliding windows have historically been considered less secure than other operable window types, but modern designs have addressed these concerns effectively. Quality sliding windows now feature multi-point locking systems that secure the sash at several locations along the meeting rail. Secondary blocking systems prevent the sash from being lifted out of the track even when unlocked. Foot-locks that engage from the base of the window provide additional security. For Arlington homes where security ranks as a top priority, we can specify impact-resistant glass and advanced locking systems that provide peace of mind without compromising the windows\' sleek appearance.',
      },
    ],
    
    features: [
      'Horizontal gliding operation saves space',
      'No interference with outdoor living areas',
      'Wide proportions ideal for expansive views',
      'Smooth roller system for effortless operation',
      'Both sashes remove easily for cleaning',
      'Contemporary design complements modern architecture',
      'Available in vinyl, fiberglass, aluminum, and wood',
      'Multi-point locking systems available',
      'Excellent for kitchen and patio applications',
      'Optional dual-operable configurations',
    ],
    
    brands: [
      {
        name: 'Andersen 400 Series Gliding',
        description: 'Andersen\'s gliding windows feature their proven Fibrex composite frames that resist expansion and contraction even in extreme Texas weather. The precision-engineered tandem roller system ensures smooth, quiet operation for years. Available in numerous sizes including extra-wide configurations for stunning view walls.',
      },
      {
        name: 'Pella 250 Series Sliding',
        description: 'Pella\'s vinyl sliding windows deliver outstanding performance at an attractive price point. The reinforced frame construction and quality weatherstripping provide good energy efficiency, while the clean contemporary styling works beautifully in modern Arlington homes. Multiple color options available.',
      },
      {
        name: 'JELD-WEN Aluminum Sliding',
        description: 'For ultra-modern aesthetics, JELD-WEN\'s aluminum sliding windows feature remarkably slim profiles that maximize glass area. These windows are powder-coated for lasting beauty and corrosion resistance. The commercial-grade track system ensures smooth operation even with large, heavy sashes.',
      },
    ],
    
    faq: [
      {
        question: 'Are sliding windows energy efficient?',
        answer: 'Modern sliding windows achieve good energy efficiency, though generally not quite matching the performance of casement or awning windows. Specify models with quality weatherstripping, Low-E glass, and gas fills to optimize thermal performance for Arlington\'s climate.',
      },
      {
        question: 'How do I clean sliding window tracks?',
        answer: 'Vacuum tracks regularly to remove dirt and debris. Occasionally wipe tracks with a damp cloth and mild cleaner, then apply silicone spray lubricant to rollers and tracks. Many sliding windows allow both sashes to be removed completely for thorough cleaning.',
      },
      {
        question: 'Can sliding windows be screened?',
        answer: 'Yes, sliding windows accept removable screens on the exterior. The screen typically mounts on the side opposite the operating sash, ensuring you always have insect protection when the window is open for ventilation.',
      },
      {
        question: 'What sizes are available in sliding windows?',
        answer: 'Sliding windows range from compact 36-inch units to expansive 8-foot-wide or larger configurations. We can also create custom sizes for unique architectural applications. The horizontal proportions make sliding windows ideal for wide, low openings where vertical windows won\'t fit.',
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


