import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Double-Hung Window Replacement Arlington TX | Expert Installation',
  description: 'Professional double-hung window installation in Arlington, TX. Tilt-in cleaning, superior ventilation, and classic style. Andersen, Pella & JELD-WEN. Call 817-592-8870 for free estimate.',
  keywords: 'double hung windows Arlington TX, replacement windows, tilt-in windows, window installation Arlington',
}

export default function DoubleHungWindowsPage() {
  const content = {
    title: 'Double-Hung Window Replacement in Arlington, TX',
    subtitle: 'Classic Design Meets Modern Performance',
    heroImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070',
    
    intro: "Double-hung windows represent the perfect marriage of traditional aesthetics and contemporary functionality. As Arlington's most popular window style, they grace both historic homes and modern new construction throughout the Dallas-Fort Worth metroplex. Their timeless appeal lies not just in their classic appearance, but in their remarkable versatility and ease of maintenance.",
    
    sections: [
      {
        heading: 'Why Arlington Homeowners Choose Double-Hung Windows',
        content: 'The double-hung window has remained a staple of American architecture for centuries, and for good reason. Unlike single-hung windows, both the upper and lower sashes operate independently, providing superior ventilation control. When you open both sashes simultaneously, you harness natural convection—warm air escapes through the top while cool air enters through the bottom, creating efficient air circulation without running your HVAC system. This feature becomes particularly valuable during Arlington\'s pleasant spring and fall months when outdoor temperatures hover in that perfect range.',
      },
      {
        heading: 'Tilt-In Technology: A Game-Changer for Texas Homeowners',
        content: 'Modern double-hung windows feature revolutionary tilt-in sashes that have transformed window maintenance from a precarious outdoor chore into a safe, indoor task. Simply release the sash locks and tilt the window inward to clean both sides from inside your home. For second-story windows in Arlington\'s multi-level homes, this feature isn\'t just convenient—it\'s a safety essential. No more ladders, no more hiring window cleaners, no more water spots you can\'t quite reach. The tilt-in mechanism also provides easy access for seasonal weatherstripping checks, ensuring your windows maintain their energy efficiency year after year.',
      },
      {
        heading: 'Energy Efficiency That Pays for Itself',
        content: 'Today\'s double-hung windows bear little resemblance to their predecessors. Modern iterations feature Low-E glass coatings that reflect infrared heat while allowing visible light to pass through, multi-chambered vinyl or fiberglass frames that break thermal bridges, and triple weatherstripping systems that seal out drafts. In Arlington\'s climate—where summer temperatures regularly exceed 100°F—these features translate directly to lower cooling costs. Our customers typically report 15-25% reductions in their energy bills after replacing old windows with modern double-hung units from Andersen, Pella, or JELD-WEN.',
      },
      {
        heading: 'Architectural Versatility Across Home Styles',
        content: 'Whether your Arlington home features Colonial Revival architecture, Craftsman styling, or contemporary design, double-hung windows adapt beautifully. Traditional homes benefit from true divided lite options that replicate historic muntins, while modern residences can embrace clean, uninterrupted glass for maximum views. The symmetrical design complements virtually any facade, and the vertical proportions naturally draw the eye upward, making rooms feel more spacious. We\'ve installed double-hung windows in everything from 1920s bungalows in downtown Arlington to brand-new builds in the western suburbs.',
      },
      {
        heading: 'Material Options for Every Budget',
        content: 'Double-hung windows come in an array of materials, each with distinct advantages. Vinyl offers the best value with virtually no maintenance and excellent energy efficiency. Wood provides unmatched beauty and traditional charm, perfect for historic preservation projects. Fiberglass delivers superior strength and stability across Texas\'s dramatic temperature swings. Wood-clad options combine a durable exterior with a beautiful wood interior. Our experienced consultants will help you weigh factors like budget, maintenance preferences, architectural requirements, and performance needs to select the ideal material for your Arlington home.',
      },
      {
        heading: 'Professional Installation Makes the Difference',
        content: 'A premium window performs only as well as its installation. Our certified installers follow rigorous protocols established by the National Fenestration Rating Council and each manufacturer. We begin by carefully removing old windows and inspecting the rough opening for rot, settling, or structural issues. The opening is leveled, squared, and properly flashed before the new window is set. We use low-expansion foam insulation to fill gaps without bowing the frame—a critical step that many installers rush or skip entirely. Every window is tested for proper operation and air infiltration before we complete the job. This meticulous approach is why our installations are backed by comprehensive warranties covering both the windows and our workmanship.',
      },
    ],
    
    features: [
      'Both sashes operate independently for flexible ventilation',
      'Tilt-in design for effortless cleaning from inside',
      'Compatible with screens on exterior or interior mounting',
      'Available in numerous colors and finishes',
      'Optional between-the-glass blinds (Pella)',
      'Historic replication options for preservation projects',
      'Impact-resistant glass available for security',
      'Triple-pane options for maximum sound reduction',
      'ENERGY STAR certified models available',
      'Lifetime limited warranties on frames and sashes',
    ],
    
    brands: [
      {
        name: 'Andersen 400 Series',
        description: 'The gold standard in double-hung windows. Andersen\'s Fibrex composite material resists warping, rotting, and corrosion while offering superior energy efficiency. The 400 Series features an intuitive tilt-wash mechanism and comes in dozens of exterior color options.',
      },
      {
        name: 'Pella 250 Series',
        description: 'Exceptional value without compromise. Pella\'s 250 Series vinyl double-hung windows deliver impressive performance at an accessible price point. Available with their exclusive between-the-glass blinds that never need dusting.',
      },
      {
        name: 'JELD-WEN Siteline',
        description: 'For homeowners who love authentic wood windows, JELD-WEN\'s Siteline series offers AuraLast pine that resists rot and termites. These windows combine old-world craftsmanship with modern performance technology.',
      },
    ],
    
    faq: [
      {
        question: 'How long do double-hung windows last?',
        answer: 'Quality double-hung windows from Andersen, Pella, or JELD-WEN typically last 20-30 years with proper maintenance. Vinyl and fiberglass units often last even longer. Our installed windows come with lifetime warranties on many components.',
      },
      {
        question: 'Can I replace just one window, or do I need to replace them all?',
        answer: 'You can absolutely replace windows individually, though many Arlington homeowners choose to replace all windows on one elevation for aesthetic consistency. Replacing all at once often results in volume discounts and a single installation period.',
      },
      {
        question: 'What\'s the difference between new construction and replacement windows?',
        answer: 'New construction windows include a nail fin for installation during building construction. Replacement windows (also called retrofit windows) are designed to fit into existing window openings without disturbing the interior or exterior walls—perfect for occupied homes.',
      },
      {
        question: 'How do I know when my windows need replacing?',
        answer: 'Common signs include difficulty opening or closing, visible gaps or drafts, condensation between panes, rotting frames, high energy bills, and excessive outside noise. If your windows are more than 15-20 years old, replacement is likely a smart investment.',
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


