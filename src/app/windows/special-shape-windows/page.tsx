import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Special Shape Window Replacement Arlington TX | Custom Design',
  description: 'Custom special shape windows in Arlington, TX. Circles, arches, triangles, octagons & more. Architectural accents. Andersen, Pella & JELD-WEN. Call 817-592-8870.',
  keywords: 'special shape windows Arlington TX, custom windows, arched windows, round windows, architectural windows Texas',
}

export default function SpecialShapeWindowsPage() {
  const content = {
    title: 'Special Shape Window Replacement in Arlington, TX',
    subtitle: 'Custom Geometry for Distinctive Architecture',
    heroImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070',
    
    intro: "Special shape windows break free from rectangular conventions to create architectural statements that define spaces and establish your Arlington home's unique character. From dramatic arched transoms to geometric octagons, from delicate radius windows to commanding circular features, specialty windows transform ordinary openings into design focal points that capture attention and flood interiors with natural light in unexpected ways.",
    
    sections: [
      {
        heading: 'The World of Specialty Window Shapes',
        content: 'Special shape windows encompass an extensive array of geometric possibilities limited only by manufacturing capabilities and structural requirements. Arched windows—including full round tops, elliptical curves, and eyebrow variants—bring classical elegance to entryways and great rooms. Circle windows create nautical or contemporary flair while providing natural light in otherwise windowless walls. Triangle windows fit perfectly in gable ends and A-frame designs. Pentagon, hexagon, and octagon shapes echo Victorian-era architecture or establish geometric themes in modern designs. Trapezoid windows solve awkward angular spaces. Cathedral window combinations pair arched tops with rectangular bottoms for soaring vertical impact. Each shape serves both aesthetic and functional purposes, bringing light to specific spaces while creating architectural interest.',
      },
      {
        heading: 'Architectural Applications Throughout Your Home',
        content: 'Special shape windows solve design challenges while creating opportunities for architectural expression. Use arched transoms above entry doors to bring natural light into foyers while maintaining privacy and security at ground level. Install circle or oval windows in stairwell landings to illuminate these often-dark transitional spaces. Fit triangle windows into gable ends to finish attic conversions or bonus rooms. Place octagon or hexagon windows in bathrooms where their geometric interest provides style without sacrificing privacy. Create stunning focal points in two-story great rooms with cathedral window combinations that draw the eye upward. Even smaller specialty windows make significant impact—a single well-placed round window can transform a powder room from ordinary to memorable.',
      },
      {
        heading: 'Combining Shapes for Maximum Impact',
        content: 'Special shape windows often work most effectively in combination with standard rectangular windows or with each other. The classic Palladian window arrangement pairs an arched window above two rectangular side windows, creating a tripartite composition with historical resonance. Sunburst designs radiate sectioned glass from a central point, often filling entire gable ends with light and pattern. Eyebrow windows crown standard rectangular windows with gentle curves that soften architectural lines. Combination cathedral windows merge arched tops with rectangular bottoms, creating soaring vertical elements perfect for great rooms and master suites. These complex arrangements require careful planning and expert installation, but the architectural impact justifies the additional complexity for Arlington homeowners seeking truly distinctive homes.',
      },
      {
        heading: 'Operable vs. Fixed Special Shape Windows',
        content: 'Most special shape windows are fixed units—their custom geometries make operable mechanisms impractical or prohibitively expensive. This fixed design actually offers advantages: superior energy efficiency without weatherstripping complexities, uninterrupted views, and lower costs. However, some shapes accommodate operation. Arched windows can feature operable lower sections with fixed curved tops. Large circle windows occasionally incorporate casement or awning sections. When ventilation matters in locations requiring specialty shapes, we can design window combinations that pair fixed special shapes with adjacent operable windows, delivering both the distinctive geometry you want and the ventilation you need.',
      },
      {
        heading: 'Glass Options and Decorative Possibilities',
        content: 'Special shape windows provide exceptional opportunities for decorative glass treatments that enhance their architectural impact. Simulated divided lites create muntins patterns that echo historic designs—sunburst patterns in arched windows, radiating segments in circular windows, or traditional grid patterns in any shape. Genuine divided lite options deliver authentic appearance with actual separate glass panes. Stained glass inserts transform special shape windows into custom artwork. Textured or obscure glass provides privacy in bathrooms or entry sidelights while still admitting natural light. The combination of unusual shape and decorative glass creates truly one-of-a-kind features that become defining elements of your Arlington home\'s character.',
      },
      {
        heading: 'Custom Fabrication and Precision Installation',
        content: 'Special shape windows require meticulous fabrication and installation. Each window is custom-built to exact specifications—there are no standard sizes pulled from warehouse inventory. Manufacturers construct frames using curved or angled components, bend glass or cut it to match geometric requirements, and engineer weatherproofing systems appropriate for each shape. Installation demands equal precision. Openings must be framed to exact dimensions and angles. Flashing and waterproofing follow contours rather than simple rectangles. Interior and exterior trim must be cut to match curves or angles perfectly. This complexity requires experienced installers who understand the unique challenges each shape presents. Our team has installed hundreds of specialty windows throughout Arlington, ensuring your custom features perform as beautifully as they appear.',
      },
    ],
    
    features: [
      'Unlimited custom shapes and sizes available',
      'Perfect for gables, entryways, and stairwells',
      'Creates distinctive architectural character',
      'Brings natural light to unusual spaces',
      'Available in all frame materials',
      'Accepts decorative glass options',
      'Most shapes available as fixed or operable',
      'Can be combined with standard windows',
      'Historic replication options for older homes',
      'Energy efficient despite custom configurations',
    ],
    
    brands: [
      {
        name: 'Andersen Specialty Windows',
        description: 'Andersen offers extensive special shape capabilities including radius, geometric, and custom configurations. Their Fibrex composite material bends and shapes to create curves while maintaining structural integrity. Virtually unlimited size and shape options ensure your vision becomes reality.',
      },
      {
        name: 'Pella Architect Series Specialty',
        description: 'Pella\'s specialty window line includes numerous standard special shapes plus true custom capabilities. Choose from wood, fiberglass, or composite frames. Their advanced manufacturing technology creates precise curves and angles while maintaining the energy efficiency and weatherproofing expected from premium windows.',
      },
      {
        name: 'JELD-WEN Custom Shapes',
        description: 'JELD-WEN manufactures special shape windows in vinyl, wood, and aluminum configurations. Their AuraLast wood treatment allows custom shapes to maintain beauty and structural integrity even in Texas humidity. From simple arches to complex geometric combinations, their custom shop handles unique specifications.',
      },
    ],
    
    faq: [
      {
        question: 'How much do special shape windows cost?',
        answer: 'Specialty windows typically cost 25-100% more than comparable rectangular windows due to custom fabrication requirements. Simple arched transoms might add $300-500, while complex custom shapes could cost $1,500-3,000 or more depending on size, material, and complexity.',
      },
      {
        question: 'Can special shape windows be energy efficient?',
        answer: 'Yes. Modern specialty windows achieve excellent energy efficiency despite their custom configurations. They accept the same Low-E glass, gas fills, and advanced frame materials as standard windows. Fixed special shapes often outperform operable rectangular windows.',
      },
      {
        question: 'How long does it take to receive custom shape windows?',
        answer: 'Custom fabrication typically requires 6-10 weeks from order to delivery, longer than standard windows. Complex shapes or busy seasons may extend lead times. We recommend ordering specialty windows early in renovation projects to avoid delays.',
      },
      {
        question: 'Can special shape windows match my home\'s existing windows?',
        answer: 'Yes. We can match frame materials, colors, glass types, and grille patterns to coordinate perfectly with your existing windows. This ensures specialty windows enhance rather than clash with your home\'s overall design.',
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


