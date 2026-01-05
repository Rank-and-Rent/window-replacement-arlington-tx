import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Bay & Bow Window Replacement Arlington TX | Architectural Elegance',
  description: 'Custom bay and bow windows in Arlington, TX. Add space and drama to your home. Andersen, Pella & JELD-WEN. Expert installation. Call 817-592-8870.',
  keywords: 'bay windows Arlington TX, bow windows, bay window installation, architectural windows Texas',
}

export default function BayBowWindowsPage() {
  const content = {
    title: 'Bay & Bow Window Replacement in Arlington, TX',
    subtitle: 'Transform Walls into Architectural Statements',
    heroImage: '/windows/double-hung-windows-arlington-tx.webp',
    
    intro: "Bay and bow windows don't simply occupy walls—they extend beyond them, creating alcoves that add both physical space and architectural drama to Arlington homes. These multi-window combinations project outward from your home's facade, providing panoramic views, abundant natural light, and distinctive curb appeal that makes your home stand out in any neighborhood. Beyond their aesthetic impact, they create functional spaces perfect for reading nooks, breakfast areas, or plant displays.",
    
    sections: [
      {
        heading: 'Understanding Bay vs. Bow Window Configurations',
        content: 'While often mentioned together, bay and bow windows feature distinct designs. Bay windows typically consist of three windows—a large center picture window flanked by smaller double-hung or casement windows at 30-45 degree angles. This angular configuration creates a polygonal projection with defined corners. Bow windows comprise four or more windows (often five or six) arranged in a gentle curve, creating a rounded projection with softer lines. Both styles expand interior space and provide commanding views, but bay windows offer a more traditional appearance while bow windows lean toward elegant sophistication. Arlington homeowners often choose bay windows for kitchens and breakfast nooks, reserving bow windows for living rooms and master bedrooms where their sweeping curves complement larger spaces.',
      },
      {
        heading: 'Adding Square Footage Without Major Construction',
        content: 'Bay and bow windows represent one of the most cost-effective ways to increase your Arlington home\'s usable square footage. The projection—typically 12-24 inches beyond your exterior wall—creates alcove space that serves numerous functions. Transform this area into a cozy window seat with storage beneath. Create a breakfast nook complete with built-in bench seating. Design a home office workspace with natural light that reduces eye strain. Showcase your plant collection in a sun-drenched display. House your extensive book collection in custom shelving that wraps the window. Unlike room additions that require foundation work, framing, and extensive construction, bay and bow windows install much like standard window replacements while delivering genuine additional living space.',
      },
      {
        heading: 'Panoramic Views and Natural Light',
        content: 'The angular or curved arrangement of bay and bow windows captures views from multiple directions simultaneously. In a standard flat window, you see only what\'s directly in front. Bay and bow windows let you observe your front yard, street, and neighboring properties all at once—like having wraparound views without moving. This expansive visibility makes rooms feel connected to the outdoors while flooding interiors with natural light from multiple angles. The angled side windows capture morning or afternoon sun even when the center window doesn\'t face the sun directly. For corner lot homes in Arlington, bay or bow windows placed strategically can capture views in three directions, maximizing the advantages of your lot\'s orientation.',
      },
      {
        heading: 'Curb Appeal That Commands Attention',
        content: 'Few home improvements make as dramatic an exterior statement as bay or bow windows. They create three-dimensional architectural interest on otherwise flat facades, adding depth and character that catches the eye. Traditional homes gain charm and period authenticity. Ranch-style homes acquire visual interest that breaks up long, horizontal lines. Contemporary designs benefit from the geometric interplay between the projection and the flat wall. The impact extends beyond the windows themselves—the roof above the projection (often copper or shingle) becomes an architectural detail, while the foundation beneath may incorporate brick, stone, or decorative skirting. This complexity transforms a simple window replacement into a signature design element that elevates your entire home\'s appearance.',
      },
      {
        heading: 'Structural Considerations and Professional Installation',
        content: 'Bay and bow windows require more complex installation than standard windows because they project beyond your home\'s structure. The assembly must be properly supported from below (typically with knee braces or posts extending to the foundation) and weatherproofed above with a dedicated roof structure. The side walls where the window meets your home\'s exterior require careful flashing and sealing to prevent water infiltration. Interior finishing includes soffit work beneath the window and trim work at the sides. This complexity makes professional installation absolutely essential—improper installation can lead to structural issues, water damage, or energy efficiency problems. Our certified installers have completed hundreds of bay and bow window projects throughout Arlington, ensuring your investment performs flawlessly for decades.',
      },
      {
        heading: 'Customization Options and Configurations',
        content: 'Bay and bow windows offer extensive customization to match your home\'s style and your functional needs. Choose between casement or double-hung side windows based on your ventilation preferences. Select roof styles including shed, gable, or hip configurations that complement your home\'s architecture. Specify interior finishing details including window seats with storage, shelving, or simply finished alcoves. Decide on seat depth—deeper projections create more dramatic spaces but require more structural support. Select from vinyl, wood, fiberglass, or hybrid frame materials that balance aesthetics, maintenance, and budget considerations. This flexibility ensures your bay or bow window becomes a custom feature tailored to your Arlington home rather than a one-size-fits-all addition.',
      },
    ],
    
    features: [
      'Adds 12-24 inches of interior space',
      'Panoramic views from multiple angles',
      'Increases natural light from multiple directions',
      'Creates dramatic curb appeal and exterior interest',
      'Perfect for window seats and reading nooks',
      'Available in three, four, five, or six-window configurations',
      'Choose casement or double-hung side windows',
      'Custom interior finishing options',
      'Multiple roof style choices',
      'Extensive frame material options',
    ],
    
    brands: [
      {
        name: 'Andersen 400 Series Bay/Bow',
        description: 'Andersen\'s bay and bow windows feature factory-assembled construction with their durable Fibrex composite frames. The structural headers and support systems are engineered specifically for Texas weather conditions. Available with numerous interior finish options and exterior color choices that coordinate perfectly with other Andersen windows throughout your home.',
      },
      {
        name: 'Pella Architect Series Bay/Bow',
        description: 'Pella\'s premium bay and bow windows combine structural integrity with elegant design. Choose from wood or fiberglass frames with countless finish options. The integrated structural components ensure proper weight distribution and weatherproofing. Custom configurations available to fit virtually any opening size or projection depth.',
      },
      {
        name: 'JELD-WEN Custom Bay/Bow',
        description: 'JELD-WEN offers both standard and custom bay and bow configurations in vinyl, wood, or hybrid construction. Their reinforced frame systems provide excellent structural support even in Texas wind loads. The factory cable system maintains proper geometry over time, preventing sagging that can affect operation and energy efficiency.',
      },
    ],
    
    faq: [
      {
        question: 'How much does a bay or bow window cost?',
        answer: 'Bay and bow windows with installation typically range from $2,500-$6,000, depending on size, configuration, frame material, and glass options. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material, like wood clad windows. We do not sell windows without installation.',
      },
      {
        question: 'Can bay or bow windows be added to any home?',
        answer: 'Most homes can accommodate bay or bow windows, but structural feasibility varies by wall construction, foundation type, and clearance from property lines. We provide free consultations to assess your specific situation and recommend appropriate configurations.',
      },
      {
        question: 'Do bay and bow windows increase energy bills?',
        answer: 'Not if properly installed and specified. Modern bay and bow windows with quality glass packages often improve energy efficiency compared to old flat windows they replace, despite their larger glass area. Proper installation and insulation of the projection are critical.',
      },
      {
        question: 'How long does bay or bow window installation take?',
        answer: 'A typical bay or bow window installation requires 1-2 days, depending on the complexity and any required structural modifications. This includes exterior siding work, interior finishing, and complete cleanup. We coordinate all aspects so you only work with one company from start to finish.',
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


