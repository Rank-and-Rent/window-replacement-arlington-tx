import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Entry Door Installation Arlington TX | Andersen, Pella, JELD-WEN, Marvin',
  description: 'Professional entry door installation in Arlington, TX. Fiberglass, steel, and wood entry doors from top manufacturers. Enhanced security, energy efficiency, and curb appeal. Call 214-444-4444 for free estimate.',
  keywords: 'entry door installation Arlington TX, front door replacement, Andersen doors, Pella doors, JELD-WEN doors, Marvin doors',
}

export default function EntryDoorPage() {
  const content = {
    title: 'Entry Door Installation',
    subtitle: 'Transform Your Home with a Beautiful, Secure Entry',
    heroImage: '/windows/double-hung-windows-arlington-tx.webp',
    
    intro: "Your entry door is more than just a functional barrier between your home and the outside world. It is the first impression visitors have of your Arlington home, a critical security feature protecting your family and belongings, and a significant factor in your home's energy efficiency. A premium entry door from Andersen, Pella, JELD-WEN, or Marvin combines all three elements—stunning aesthetics, robust security, and superior insulation—while requiring minimal maintenance for decades.",
    
    sections: [
      {
        heading: 'Materials That Match Your Arlington Home and Lifestyle',
        content: 'The choice of entry door material profoundly impacts both performance and maintenance requirements. Fiberglass doors have surged in popularity across Arlington for excellent reason—they resist warping, rotting, and rust while offering exceptional energy efficiency and realistic wood-grain textures. Many homeowners cannot distinguish quality fiberglass from real wood without touching it. Steel doors provide maximum security and excellent insulation at a competitive price point, though they require proper paint maintenance in Texas heat. Solid wood doors deliver unmatched natural beauty and traditional charm, perfect for historic Arlington homes or luxury properties where authentic materials matter most. Modern wood doors feature advanced treatments that resist moisture and insects far better than older generations.',
      },
      {
        heading: 'Security Features for Peace of Mind',
        content: 'Modern entry doors incorporate security technologies that would have seemed like science fiction just a decade ago. Today\'s premium doors feature reinforced steel frames, multi-point locking systems that engage at three or more points along the jamb, and impact-resistant glass that meets strict safety standards. The lock itself represents just one element of security—the frame, hinges, and door construction all contribute to break-in resistance. Three-inch screws anchor hinges deep into wall studs rather than just trim. Strike plates extend four or more inches with multiple fastening points. Fiberglass and steel doors resist kick-in attempts that would splinter wood. For Arlington homes in areas experiencing property crime, these features provide tangible protection.',
      },
      {
        heading: 'Energy Efficiency That Reduces Your Bills',
        content: 'Your entry door represents one of the largest penetrations in your home\'s thermal envelope, making it a critical factor in energy consumption. A poorly sealed or uninsulated door forces your HVAC system to work overtime during Arlington\'s scorching summers and occasional winter freezes. Premium entry doors feature polyurethane foam cores that provide superior insulation compared to traditional hollow-core doors. Quality weatherstripping creates an airtight seal when closed. Magnetic weatherstripping, found on many Andersen and Pella models, works similarly to refrigerator door seals for exceptional performance. Double or triple-pane glass units in door lites minimize heat transfer while still allowing natural light. Our Arlington customers consistently report noticeable reductions in drafts and energy costs after replacing old doors with modern high-performance units.',
      },
      {
        heading: 'Design Options for Every Architectural Style',
        content: 'Arlington homes span an incredible range of architectural styles, from historic Craftsman bungalows in older neighborhoods to sleek contemporary designs in new developments. Entry doors must complement these diverse aesthetics. Traditional six-panel doors suit Colonial and ranch-style homes. Mission-style doors with clean lines match Craftsman architecture. Glass-rich modern doors with sidelights create stunning contemporary statements. Rustic doors with iron hardware complement Hill Country and Texas farmhouse styles. Most manufacturers offer dozens of glass options—from privacy-preserving obscure patterns to clear glass that frames your entry. Decorative glass adds personality while sidelights and transoms expand the opening visually and physically. We help Arlington homeowners navigate these choices to find doors that enhance their specific home\'s character.',
      },
      {
        heading: 'The Installation Process: Precision Matters',
        content: 'A premium door performs only as well as its installation. The process begins with precise measurement of your existing opening, accounting for any settling or structural changes since the home was built. We remove the old door and inspect the rough opening for rot, settling, or damage. The sill must slope correctly to shed water. Shims level and square the new door frame perfectly—even slight misalignment causes operational issues and premature wear. We use low-expansion foam insulation that fills gaps without bowing the frame. Exterior trim receives proper flashing and sealant to prevent water intrusion. Interior trim is carefully fit and finished. Every door is adjusted for smooth operation and tested with specialized tools to verify proper weatherstripping contact around the entire perimeter. This meticulous process explains why our installations come with comprehensive workmanship warranties.',
      },
      {
        heading: 'Smart Technology Integration',
        content: 'The latest entry doors seamlessly integrate with smart home technology increasingly popular among Arlington homeowners. Smart locks allow keyless entry via smartphone, temporary codes for guests or service providers, and remote lock status verification when you are away from home. Some systems integrate with whole-home automation to adjust lighting and temperature when you arrive. Video doorbells mount beautifully on modern entry systems. Ring and Nest compatibility is standard on quality doors. For families juggling work, school, and activities, smart entry systems eliminate lost key emergencies and the security risks of hiding spare keys. We work with doors designed to accommodate current and future smart technology without compromising security or aesthetics.',
      },
    ],
    
    features: [
      'Fiberglass, steel, and wood material options',
      'Multi-point locking systems for enhanced security',
      'Energy-efficient foam core construction',
      'Andersen, Pella, JELD-WEN, and Marvin brands',
      'Customizable glass and hardware options',
      'Impact-resistant glass available',
      'Smart lock compatibility',
      'Weather-resistant finishes for Texas climate',
      'Sidelights and transom configurations',
      'Lifetime limited warranties on many models',
    ],
    
    brands: [
      {
        name: 'Andersen Entry Doors',
        description: 'Andersen fiberglass entry doors combine their renowned Fibrex technology with beautiful designs. Their doors resist warping and rotting while offering wood-like aesthetics with virtually no maintenance. Available in numerous styles and finishes.',
      },
      {
        name: 'Pella Entry Doors',
        description: 'Pella entry doors feature their exclusive fiberglass and steel options with advanced security features. Their EnduraClad finish resists fading and scratching while their insulated cores deliver exceptional energy efficiency for Arlington homes.',
      },
      {
        name: 'JELD-WEN Entry Doors',
        description: 'JELD-WEN offers exceptional value in entry doors with their Aurora fiberglass and steel collections. AuraLast wood doors provide authentic wood beauty with advanced protection. Wide range of styles and price points to fit any budget.',
      },
      {
        name: 'Marvin Entry Doors',
        description: 'Marvin Signature entry doors represent the pinnacle of custom craftsmanship. Available in wood, fiberglass, and composite materials with unlimited customization options. Every door is built to order with meticulous attention to detail.',
      },
    ],
    
    faq: [
      {
        question: 'How long does entry door installation take in Arlington?',
        answer: 'Most entry door installations in Arlington, TX are completed in 4 to 8 hours. Complex installations with sidelights, transoms, or structural modifications may require a full day or more. We provide accurate timelines during your consultation and work efficiently to minimize disruption.',
      },
      {
        question: 'Do I need a permit to replace my entry door in Arlington?',
        answer: 'In most cases, replacing an entry door in an existing opening does not require a permit in Arlington, TX. However, if you are changing the size of the opening or making structural modifications, permits may be necessary. We help navigate local building requirements and coordinate with Arlington building officials when needed.',
      },
      {
        question: 'What is the best entry door material for Texas weather?',
        answer: 'Fiberglass and steel doors perform exceptionally well in Arlington, TX climate. Fiberglass resists warping and cracking in temperature extremes while requiring minimal maintenance. Steel offers maximum security and excellent insulation. Both outperform wood in terms of weather resistance, though premium wood doors with proper finishes also perform well with regular maintenance.',
      },
      {
        question: 'How much do entry doors cost in Arlington?',
        answer: 'Entry door costs in Arlington, TX vary widely based on material, size, brand, and features. Basic steel doors start around $800 to $1,200 installed. Quality fiberglass doors typically range from $1,500 to $3,500 installed. Premium wood or custom doors can range from $3,000 to $8,000 or more. We provide detailed quotes based on your specific selections and installation requirements.',
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
