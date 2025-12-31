import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Patio Door Installation Arlington TX | Sliding & French Patio Doors',
  description: 'Professional patio door installation in Arlington, TX. Sliding and hinged patio doors from Andersen, Pella, JELD-WEN, and Marvin. Energy-efficient, beautiful, secure. Free estimates. Call 817-592-8870.',
  keywords: 'patio door installation Arlington TX, sliding glass doors, French patio doors, door replacement Arlington',
}

export default function PatioDoorPage() {
  const content = {
    title: 'Patio Door Replacement in Arlington, TX',
    subtitle: 'Connect Indoor and Outdoor Living Spaces',
    heroImage: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2070',
    
    intro: "Patio doors serve as the gateway between your Arlington home's interior and outdoor living spaces, fundamentally shaping how you experience your property. Whether you envision lazy weekend mornings with coffee on the patio, summer evening barbecues with seamless guest flow, or simply bathing your living room in natural Texas light, the right patio door transforms daily life. Modern patio doors from Andersen, Pella, JELD-WEN, and Marvin deliver expansive glass areas for unobstructed views, smooth operation that lasts for decades, and energy efficiency that keeps your home comfortable despite Arlington's temperature extremes.",
    
    sections: [
      {
        heading: 'Sliding vs Hinged: Choosing Your Configuration',
        content: 'The fundamental decision in patio door selection involves operation style. Sliding patio doors glide horizontally on tracks, maximizing usable space since they require no clearance for door swing. This makes them ideal for patios with furniture near the door or smaller outdoor spaces where a swinging door would be impractical. Modern sliding mechanisms feature stainless steel rollers and precision-engineered tracks that ensure smooth, quiet operation even after years of use. Hinged patio doors, including traditional French doors and modern multi-panel folding systems, swing open like standard doors but in much larger configurations. They create dramatic, wide-open passages between spaces and often seal more tightly than sliding units, providing slightly better energy efficiency and weather protection. Arlington homeowners choose sliding doors for contemporary homes and space-constrained situations, while hinged doors suit traditional architecture and situations where the full opening width matters.',
      },
      {
        heading: 'Glass Options for Light, Views, and Privacy',
        content: 'Patio doors are fundamentally about glass, and modern options extend far beyond basic clear panels. Low-E coatings reflect infrared heat while allowing visible light to pass through, dramatically reducing solar heat gain during Arlington summers. Tinted glass further reduces glare and heat while maintaining views. Privacy glass incorporates obscuring patterns or textures that allow light transmission while preventing clear views from outside—perfect for patio doors facing neighboring properties. Impact-resistant glass, becoming increasingly popular in Texas, withstands severe weather and provides additional security against break-ins. Some homeowners select different glass for different panels—clear for the best view, obscure for the operable section. Between-the-glass grilles on select Pella models provide traditional divided-lite appearance without the cleaning hassles of exterior grilles.',
      },
      {
        heading: 'Energy Performance in Texas Heat',
        content: 'A poorly performing patio door can account for significant energy waste in Arlington homes, particularly given the large glass area involved. The best patio doors feature insulated frames, multi-pane glass units with argon or krypton gas fills, and comprehensive weatherstripping systems. Frame material matters tremendously—vinyl and fiberglass naturally insulate better than aluminum, though modern aluminum doors incorporate thermal breaks to improve performance. The threshold design impacts both energy efficiency and water resistance. Quality patio doors use adjustable thresholds that create consistent contact with weatherstripping throughout the year as materials expand and contract with temperature changes. On scorching Arlington summer days when outdoor temperatures exceed 100 degrees, a high-performance patio door prevents radiant heat from turning your living room into an oven while still providing the views and light you installed it for.',
      },
      {
        heading: 'Screen Systems for Texas Outdoor Living',
        content: 'Arlington residents want to enjoy pleasant spring and fall weather without battling mosquitoes and other insects that thrive in North Texas. Patio door screen systems have evolved dramatically beyond flimsy aluminum frames that warp and tear. Retractable screens hide completely when not needed, preserving your views and sliding into protected housings when you want ventilation. They work with both sliding and hinged patio doors. Traditional sliding screens now feature better materials and construction, with fiberglass or metal mesh in sturdy frames that glide smoothly on independent tracks. For hinged patio doors, modern screen doors match the main door\'s swing direction and feature closer mechanisms that prevent slamming. Pet-resistant screens use reinforced mesh that withstands scratching and pushing from dogs. The right screen system extends your patio door\'s usefulness throughout the year.',
      },
      {
        heading: 'Installation Challenges and Solutions',
        content: 'Patio door installation presents unique challenges compared to standard entry doors. The large, heavy units require at least two experienced installers and specialized equipment. Removing old patio doors often reveals rotted sills, settled floors, or water damage that must be addressed before installing new doors. We carefully inspect and remediate any structural issues. The opening must be level and square within tight tolerances—even small deviations cause operational problems. Proper flashing and waterproofing are critical since patio doors experience more direct weather exposure than most entry doors. We install pan flashing under the threshold, properly integrate with any existing drainage systems, and ensure water slopes away from the door. Interior and exterior trim must accommodate expansion and contraction without creating gaps. This attention to detail separates professional installations from handyman jobs.',
      },
      {
        heading: 'Maximizing Your Outdoor Connection',
        content: 'Beyond the door itself, we help Arlington homeowners think holistically about their indoor-outdoor connection. Coordinating interior flooring transitions creates visual continuity. Installing matching sidelights or transoms above expands glass area and natural light. Some homeowners add corner windows adjacent to patio doors, creating wall-to-wall glass that brings the outdoors inside. Covered patios extend usable outdoor space and protect patio doors from direct weather exposure. We discuss these considerations during consultations, helping you maximize your investment. The goal extends beyond simply installing a door—we help create seamless transitions that enhance how you live in your Arlington home.',
      },
    ],
    
    features: [
      'Sliding and hinged patio door configurations',
      'Fiberglass, vinyl, wood, and aluminum options',
      'Multi-point locking systems for security',
      'Low-E and tinted glass options',
      'Retractable and traditional screen systems',
      'Impact-resistant glass available',
      'Custom sizes up to 16 feet wide',
      'Andersen, Pella, JELD-WEN, and Marvin brands',
      'Energy-efficient insulated glass units',
      'Comprehensive warranties on products and installation',
    ],
    
    brands: [
      {
        name: 'Andersen Patio Doors',
        description: 'Andersen offers both sliding and hinged patio doors in their renowned Fibrex composite material. The A-Series and E-Series provide extensive customization while the 400 Series delivers proven performance at accessible prices.',
      },
      {
        name: 'Pella Patio Doors',
        description: 'Pella sliding patio doors glide effortlessly on precision-engineered tracks while their hinged French doors feature between-the-glass blinds and shades. The Architect Series offers premium features while the 250 Series provides excellent value.',
      },
      {
        name: 'JELD-WEN Patio Doors',
        description: 'JELD-WEN patio doors deliver reliability and value with options in vinyl, wood, and aluminum. Their Siteline wood patio doors feature AuraLast protection while their vinyl sliding doors offer low-maintenance performance.',
      },
      {
        name: 'Marvin Patio Doors',
        description: 'Marvin Signature and Marvin Ultimate multi-slide and swinging patio doors represent the pinnacle of custom craftsmanship. Built to your exact specifications with premium materials and unlimited configuration options.',
      },
    ],
    
    faq: [
      {
        question: 'What is better for Arlington homes, sliding or French patio doors?',
        answer: 'Both work excellently in Arlington, TX—the choice depends on your specific situation. Sliding doors save space since they do not swing, making them ideal for patios with nearby furniture. They work well in contemporary homes. French (hinged) doors suit traditional architecture and seal slightly tighter for maximum energy efficiency. They create a dramatic wide-open passage when both panels are open. We help you weigh factors like available space, architectural style, and usage patterns.',
      },
      {
        question: 'How do I prevent my patio door from leaking during heavy rain?',
        answer: 'Quality patio doors properly installed in Arlington, TX should not leak. The key factors include proper pan flashing under the threshold, correct sill slope to shed water away from the home, adequate clearance for drainage, and quality weatherstripping. We pay special attention to these details during installation and can often fix leaking issues in existing doors through proper resealing and adjustment.',
      },
      {
        question: 'Can I install a patio door where I currently have a window?',
        answer: 'Yes, though it requires structural modifications including adding a beam or header to support the load above, removing wall framing, potentially building up the floor to match exterior grade, and ensuring the new opening meets code requirements. This is more involved than simple door replacement but transforms a space. We coordinate with structural engineers when needed for Arlington installations.',
      },
      {
        question: 'How do I secure a patio door against break-ins?',
        answer: 'Modern patio doors in Arlington, TX offer excellent security through multi-point locking systems, reinforced frames, impact-resistant glass, and auxiliary security bars or panels for sliding doors. We recommend doors with locks that engage at three or more points and security bars that prevent lifting the door off its track. Quality installation ensures the frame cannot be pried away from the structure.',
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
