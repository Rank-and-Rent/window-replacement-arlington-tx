import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'French Door Installation Arlington TX | Interior & Exterior French Doors',
  description: 'Professional French door installation in Arlington, TX. Classic elegance with glass panels. Interior and exterior installations. Andersen, Pella, JELD-WEN, Marvin. Call 817-592-8870.',
  keywords: 'French door installation Arlington TX, French doors, glass panel doors, door installation',
}

export default function FrenchDoorPage() {
  const content = {
    title: 'French Door Replacement in Arlington, TX',
    subtitle: 'Timeless Elegance with Modern Performance',
    heroImage: '/windows/double-hung-windows-arlington-tx.webp',
    
    intro: "French doors have graced elegant homes for centuries, and their enduring popularity testifies to their timeless appeal. These classic double doors with distinctive glass panels flood interiors with natural light while creating visual connections between spaces. Whether installed as exterior patio doors opening onto Arlington gardens or as interior doors separating living areas, French doors add architectural sophistication and traditional charm that never goes out of style.",
    
    sections: [
      {
        heading: 'Interior vs Exterior French Doors',
        content: 'French doors serve beautifully in both interior and exterior applications, though the specifications differ significantly. Exterior French doors feature insulated glass, robust weatherstripping, multipoint locking systems, and weather-resistant materials engineered for Texas climate extremes. They function as a primary barrier against weather and intrusion. Interior French doors emphasize aesthetics over weather protection, often featuring single-pane or decorative glass, lighter construction, and simpler hardware. They separate spaces like dining rooms from living rooms, home offices from hallways, or master suites from private sitting areas while maintaining visual connection and light flow. Many Arlington homeowners install both—exterior French doors to the patio and interior French doors between formal spaces.',
      },
      {
        heading: 'Glass Patterns and Privacy Considerations',
        content: 'The glass is what makes French doors distinctive, and modern options extend far beyond plain clear panels. Traditional true divided lites feature individual glass panes separated by wooden muntins—authentic and beautiful but challenging to clean and less energy efficient. Simulated divided lites use a single insulated glass unit with decorative grilles attached to the surface or suspended between panes, providing traditional aesthetics with modern performance. Clear glass maximizes views and light transmission, perfect for doors facing private yards or beautiful views. Textured and frosted glass patterns provide privacy while still transmitting light—essential for street-facing doors or bathroom applications. Arlington homeowners often select clear glass for the upper portion of doors with obscure glass below for privacy when seated. The specific pattern choice dramatically impacts the door\'s character, from formal and traditional to casual and contemporary.',
      },
      {
        heading: 'Configuration and Swing Options',
        content: 'French doors typically feature two panels of equal size, though unequal configurations are available. Active and inactive panel configurations allow daily use through one panel while both panels open for moving furniture or hosting gatherings. Inswing doors open into your Arlington home, keeping hinges protected from weather but requiring interior clearance. Outswing doors preserve interior space and shed water better but expose hinges unless protected by overhangs. Some situations demand specific configurations—building codes may require outswing for certain exterior applications, while furniture placement might dictate inswing. We evaluate your specific situation, considering factors like prevailing weather direction, interior space constraints, and local code requirements.',
      },
      {
        heading: 'Frame Materials and Finishes',
        content: 'French door frames come in wood, fiberglass, steel, and composite materials, each with distinct advantages. Wood frames offer authentic traditional beauty with the warmth and character only natural materials provide. Mahogany, oak, and fir are popular choices, though they require periodic refinishing to maintain weather protection. Fiberglass frames replicate wood grain remarkably well while resisting warping, rotting, and insect damage even in humid Texas conditions. Steel frames provide maximum security and excellent energy efficiency, though they limit design flexibility compared to wood or fiberglass. Marvin\'s composite Ultrex material combines fiberglass strength with unlimited paint finish options. Finishes range from factory-applied paints in dozens of colors to natural stains that showcase wood grain to aluminum-clad exteriors that eliminate painting forever.',
      },
      {
        heading: 'Security Features for Exterior Installations',
        content: 'Large glass areas in French doors raise understandable security concerns, but modern designs address these thoroughly. Multipoint locking systems engage the door at the top, middle, and bottom rather than just the handle location, distributing force and making kick-ins virtually impossible. Impact-resistant glass withstands significant force without shattering into dangerous shards. Surface-mounted deadbolts with one-inch throws secure the active panel while shoot bolts or surface bolts lock the inactive panel top and bottom. Pella offers between-the-glass blinds that never need cleaning and cannot be tampered with from outside. Some Arlington homeowners add security film to glass or select decorative glass that obscures interior views while maintaining light transmission. Properly installed French doors with modern security features provide peace of mind without compromising aesthetics.',
      },
      {
        heading: 'Professional Installation Precision',
        content: 'French door installation demands precision since any misalignment affects both operation and appearance. The rough opening must be perfectly square and level. With two panels meeting in the center, even slight variations become obvious—gaps appear uneven and panels may not align properly. We use laser levels and precision shims to achieve perfect alignment. The inactive panel mounts first, establishing the reference for the active panel. Weatherstripping must seal consistently around the entire perimeter and where panels meet. Hardware installation follows exact manufacturer specifications since French doors rely on precise alignment between locks, strikes, and shoot bolts. Interior and exterior trim must account for material expansion and contraction while maintaining clean reveals. Our meticulous approach ensures your French doors operate smoothly and seal tightly from day one.',
      },
    ],
    
    features: [
      'Interior and exterior applications',
      'Inswing and outswing configurations',
      'Wood, fiberglass, steel, and composite options',
      'Clear, textured, and Low-E glass selections',
      'True divided and simulated divided lites',
      'Multi-point locking systems',
      'Impact-resistant glass available',
      'Custom sizes and configurations',
      'Andersen, Pella, JELD-WEN, and Marvin brands',
      'Lifetime warranties on many components',
    ],
    
    brands: [
      {
        name: 'Andersen French Doors',
        description: 'Andersen A-Series and E-Series French doors offer extensive customization in wood and Fibrex composite materials. Their 400 Series provides proven performance with numerous style options at accessible pricing.',
      },
      {
        name: 'Pella French Doors',
        description: 'Pella Architect Series French doors feature premium materials and between-the-glass blinds. Their Designer Series and 350 Series provide beauty and performance across various price points with their exclusive EnduraClad finish.',
      },
      {
        name: 'JELD-WEN French Doors',
        description: 'JELD-WEN Siteline wood French doors deliver authentic wood beauty with AuraLast protection. Their Aurora fiberglass French doors provide low-maintenance alternatives that resist warping in Texas weather.',
      },
      {
        name: 'Marvin French Doors',
        description: 'Marvin Ultimate and Signature French doors represent custom craftsmanship at its finest. Every door is built to order with your choice of wood species, finish, glass, and hardware for truly one-of-a-kind results.',
      },
    ],
    
    faq: [
      {
        question: 'What is the difference between French doors and patio doors?',
        answer: 'French doors are a type of patio door. The term French door specifically refers to double doors with glass panels, typically hinged. Patio door is the broader category that includes both French (hinged) doors and sliding glass doors. In Arlington, TX, homeowners use French doors for both interior applications and as exterior patio doors.',
      },
      {
        question: 'Do French doors provide good insulation for Arlington summers?',
        answer: 'Modern exterior French doors in Arlington, TX feature insulated glass units, weatherstripping, and insulated frames that provide excellent thermal performance. Quality French doors often exceed the energy efficiency of sliding patio doors due to better sealing. Look for ENERGY STAR rated models with Low-E glass for best summer cooling efficiency.',
      },
      {
        question: 'How much space do I need for French doors to open?',
        answer: 'French doors require clearance equal to the door width plus a few inches for comfortable operation. A standard 6-foot wide French door set needs approximately 6 feet of clearance in the swing direction. Furniture placement and room layout in Arlington homes must accommodate this swing radius. Alternatively, sliding French door systems are available that provide French door aesthetics without the space requirements.',
      },
      {
        question: 'Can French doors be used as a main entry door?',
        answer: 'Absolutely. French doors make stunning main entry doors for Arlington, TX homes, particularly in traditional and luxury architecture. They provide a grand entrance, flood foyers with natural light, and create impressive curb appeal. Ensure exterior French doors used as entries include robust security features and proper weather protection.',
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
