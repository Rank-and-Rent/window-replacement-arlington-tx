import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Aluminum Windows Replacement Arlington TX | Durable, Modern Design',
  description: 'High-quality aluminum replacement windows in Arlington, TX. Durable, sleek, and energy-efficient. Andersen, Pella & JELD-WEN aluminum options. Everything priced including installation. Call 817-592-8870.',
  keywords: 'aluminum windows Arlington TX, aluminum replacement windows, durable windows, modern aluminum windows, Andersen aluminum windows, Pella aluminum windows, JELD-WEN aluminum windows',
  alternates: {
    canonical: 'https://homewindowreplacementarlington.com/windows/aluminum-windows',
  },
}

export default function AluminumWindowsPage() {
  const content = {
    title: 'Aluminum Windows Replacement in Arlington, TX',
    subtitle: 'Sleek, Durable Performance with Modern Thermal Efficiency',
    heroImage: '/window-types/aluminum-arlington-tx.jpg',

    intro: "Aluminum windows have evolved significantly from the poorly insulated models of past decades. Today's premium aluminum windows from manufacturers like Andersen, Pella, and JELD-WEN feature advanced thermal breaks and insulated glass that deliver excellent energy performance alongside aluminum's inherent strengths of durability and sleek aesthetics. In Arlington, where both style and climate resilience matter, modern aluminum windows provide an attractive alternative to traditional materials, offering crisp lines, exceptional strength, and the ability to create large, unobstructed glass areas that enhance your home's connection to the outdoors.",

    sections: [
      {
        heading: 'Thermal Break Technology for Energy Efficiency',
        content: 'Modern aluminum windows incorporate thermal break technology that dramatically improves their insulating properties. A thermal break is a non-conductive material (typically polyurethane or composite) inserted between the interior and exterior aluminum sections of the frame. This creates an insulating barrier that prevents heat from conducting through the metal. The result is windows that achieve U-factors comparable to vinyl and fiberglass options while maintaining aluminum\'s sleek appearance and structural strength. In Arlington\'s hot climate, thermally broken aluminum windows can reduce cooling costs by 25-35% compared to older single-pane aluminum windows. Many models qualify for ENERGY STAR certification, confirming their efficiency credentials.',
      },
      {
        heading: 'Unmatched Durability and Strength',
        content: 'Aluminum\'s fundamental properties make it exceptionally well-suited for Arlington\'s demanding climate. The material never rusts, rots, or warps like wood, and it maintains its structural integrity indefinitely. Aluminum windows are virtually indestructible— they resist impact damage far better than vinyl or wood options. This makes them ideal for high-traffic areas, homes with children or pets, and properties in areas prone to hail or severe weather. The frames are extruded to precise tolerances, ensuring smooth operation and perfect alignment. Aluminum\'s strength allows for larger window units and thinner sightlines that maximize glass area while maintaining structural stability. With proper maintenance (primarily periodic repainting of exterior surfaces), quality aluminum windows provide 40+ years of service.',
      },
      {
        heading: 'Sleek, Contemporary Aesthetics',
        content: 'Aluminum windows excel at delivering the clean, minimalist aesthetic that complements modern and contemporary Arlington homes. The material\'s ability to be extruded into thin, precise profiles creates narrow sightlines that maximize glass area and create an unobstructed view of the outdoors. Aluminum accepts a wide range of exterior finishes, from natural silver and bronze tones to custom powder-coated colors that match your home\'s palette. The smooth, linear appearance integrates beautifully with modern architecture, steel accents, and glass-heavy designs. Unlike wood windows that can swell or shrink with humidity changes, aluminum maintains perfectly straight lines year-round. For Arlington homeowners seeking a sophisticated, maintenance-light window solution, aluminum provides the perfect balance of form and function.',
      },
      {
        heading: 'Low Maintenance with Periodic Refinishing',
        content: 'While aluminum windows require more maintenance than vinyl options, they still offer excellent long-term value with minimal care requirements. The frames themselves never corrode or degrade, but exterior finishes benefit from periodic repainting (typically every 8-12 years depending on Arlington\'s sun exposure). Interior surfaces usually require no maintenance beyond occasional cleaning. Hardware operates smoothly without lubrication for many years. The non-porous surface resists mold, mildew, and staining exceptionally well. Compared to wood windows that require annual painting and sealing, aluminum windows represent a significant maintenance savings. Many homeowners find the trade-off of periodic repainting for aluminum\'s superior durability and sleek appearance to be highly worthwhile.',
      },
      {
        heading: 'Versatility for Any Window Style',
        content: 'Aluminum\'s workability allows it to be formed into virtually any window configuration, from traditional double-hung and casement designs to contemporary sliding and fixed panels. The material\'s strength enables large window assemblies that would be impractical with other materials. Aluminum windows work beautifully in both new construction and replacement applications, adapting to existing opening sizes with precision. They accommodate all major glass types, from single-pane for cost-conscious applications to triple-pane insulated units for maximum energy efficiency. In Arlington, aluminum windows are particularly popular for patio doors, large fixed windows, and commercial-style openings. The material\'s compatibility with impact-resistant glass makes it suitable for hurricane-prone areas while maintaining its aesthetic appeal.',
      },
      {
        heading: 'Environmental and Recycling Advantages',
        content: 'Aluminum is one of the most environmentally responsible building materials available. It\'s 100% recyclable without loss of quality—recycled aluminum requires just 5% of the energy needed to produce new aluminum from raw ore. Many aluminum window manufacturers use significant amounts of recycled content in their products. The material\'s longevity reduces the environmental impact of replacement over time. Aluminum windows contribute to sustainable building practices by enabling larger glass areas that maximize natural light and reduce the need for artificial lighting. For environmentally conscious Arlington homeowners, aluminum windows represent a responsible choice that balances performance, aesthetics, and ecological impact.',
      },
    ],

    features: [
      'Thermal break technology for energy efficiency',
      'Exceptional strength and impact resistance',
      'Sleek, contemporary appearance',
      'Narrow sightlines maximize glass area',
      'Available in unlimited color options',
      '40+ year lifespan with proper maintenance',
      'Resists rust, rot, and corrosion',
      'Compatible with all glass types',
      'Smooth, precise operation',
      'Environmentally recyclable',
    ],

    brands: [
      {
        name: 'Andersen Aluminum Series',
        description: 'Andersen combines their expertise in window design with advanced aluminum extrusion technology. Their aluminum windows feature comprehensive thermal breaks and premium hardware for exceptional performance and longevity.',
      },
      {
        name: 'Pella Aluminum Windows',
        description: 'Pella\'s aluminum windows incorporate their signature EnduraClad protection and advanced thermal barrier systems. The result is aluminum performance with superior weather resistance and energy efficiency.',
      },
      {
        name: 'JELD-WEN Aluminum Collection',
        description: 'JELD-WEN offers premium aluminum windows with fusion-welded construction and comprehensive thermal breaks. Their extensive color selection ensures you can match any design aesthetic.',
      },
    ],

    faq: [
      {
        question: 'Do aluminum windows need painting?',
        answer: 'Yes, aluminum windows require periodic exterior painting (typically every 8-12 years) to maintain their appearance and protect the metal from oxidation. However, the frames never rust or corrode, and the maintenance is far less frequent than wood windows.',
      },
      {
        question: 'Are aluminum windows energy efficient?',
        answer: 'Modern aluminum windows with thermal breaks are highly energy efficient, achieving U-factors comparable to vinyl windows. They can reduce heating and cooling costs by 25-35% in Arlington\'s climate when properly specified with insulated glass.',
      },
      {
        question: 'How long do aluminum windows last?',
        answer: 'Quality aluminum windows last 40+ years with proper maintenance. The frames never degrade like wood or vinyl, and with periodic repainting, they maintain their appearance and performance indefinitely.',
      },
      {
        question: 'Are aluminum windows expensive?',
        answer: 'Aluminum windows are moderately priced compared to premium materials. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
      },
      {
        question: 'Can aluminum windows be recycled?',
        answer: 'Yes, aluminum is 100% recyclable without loss of quality. Many aluminum windows contain recycled content, and the frames can be recycled at the end of their service life, making them an environmentally responsible choice.',
      },
      {
        question: 'Do aluminum windows dent or scratch easily?',
        answer: 'Aluminum is quite durable and resistant to dents and scratches. While it can be damaged, it\'s far more impact-resistant than vinyl or wood options. The smooth surface is also easy to repair if minor damage occurs.',
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