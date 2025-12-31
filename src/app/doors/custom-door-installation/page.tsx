import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Custom Door Installation Arlington TX | Unique Designs Built to Order',
  description: 'Professional custom door installation in Arlington, TX. One-of-a-kind designs built to your exact specifications. Premium materials, expert craftsmanship. Call 817-592-8870 for consultation.',
  keywords: 'custom door installation Arlington TX, custom doors, unique doors, handcrafted doors',
}

export default function CustomDoorPage() {
  const content = {
    title: 'Custom Door Replacement in Arlington, TX',
    subtitle: 'One-of-a-Kind Designs Built to Your Vision',
    heroImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070',
    
    intro: "Standard doors serve most homes well, but exceptional Arlington properties deserve extraordinary entrances that make unique architectural statements. Custom doors transform entries from functional necessities into works of art, perfectly tailored to your home's architecture, your personal style, and your specific requirements. Whether you envision a massive pivot door with hand-forged hardware, an arched entry with custom leaded glass, or a modern door with one-of-a-kind geometric patterns, custom door fabrication makes the impossible possible.",
    
    sections: [
      {
        heading: 'When Custom Doors Make Sense',
        content: 'Custom doors solve problems and create opportunities that standard doors simply cannot address. Non-standard opening sizes—whether taller, wider, arched, or irregular—require custom fabrication. Historic Arlington homes with original openings that do not match modern sizing need custom doors to fit properly without expensive structural modifications. Architectural visions that demand specific materials, finishes, glass patterns, or hardware combinations often exceed what manufacturers stock. Luxury homes seeking distinctive entries that set them apart need custom designs. Security requirements beyond standard residential applications sometimes necessitate custom engineering. If your project involves any of these factors, custom doors may be your best or only practical option. The investment typically proves worthwhile for properties where the entry door significantly impacts overall aesthetics or property value.',
      },
      {
        heading: 'Material Selection and Sourcing',
        content: 'Custom doors open virtually unlimited material possibilities. Exotic hardwoods like mahogany, teak, sapele, and walnut deliver warmth and character impossible to replicate in other materials. Each species offers distinct grain patterns, color tones, and working properties. Reclaimed wood from old Arlington buildings or barns provides authentic character and sustainability. Steel doors can be fabricated to custom sizes and configurations for security-focused applications. Bronze and copper provide permanence and develop beautiful patinas over time. Modern composite materials allow complex shapes and profiles. Glass can be integrated in custom configurations—from full-lite contemporary designs to traditional multi-lite patterns. The material selection process considers aesthetics, durability, maintenance requirements, security needs, and budget. We work with specialty suppliers and craftspeople to source materials that bring your vision to life.',
      },
      {
        heading: 'Design Development and Collaboration',
        content: 'Creating a custom door begins with understanding your vision, your home, and the practical requirements the door must meet. We examine your existing architecture to understand proportions, style elements, and material palettes. Many Arlington homeowners bring inspiration photos, sketches, or specific doors they have seen and admired. We translate these ideas into workable designs that respect your home\'s character while incorporating your personal preferences. Computer renderings show how proposed designs will look in your specific opening. We discuss hardware options, glass selections, finish choices, and operational mechanisms. This collaborative process ensures the final design exceeds expectations while remaining buildable within budget and timeline constraints. For significant projects, we may consult with architects to ensure the door integrates seamlessly with overall property design.',
      },
      {
        heading: 'Fabrication and Quality Control',
        content: 'Custom door fabrication requires master-level woodworking and metalworking skills honed over decades. Skilled craftspeople select premium materials, mill components to precise specifications, join elements using traditional techniques reinforced with modern adhesives and fasteners, and finish surfaces to exhibition quality. Glass is cut to exact dimensions and installed with proper sealants and retention systems. Hardware is fitted and adjusted for smooth operation. The completed door undergoes rigorous quality control—checking for proper dimensions, square and flat construction, finish quality, hardware operation, and adherence to architectural drawings. This process takes weeks or even months depending on complexity, but the result is an heirloom-quality door that enhances your Arlington home for generations.',
      },
      {
        heading: 'Installation of Custom Units',
        content: 'Installing custom doors demands even more precision than standard door installation since custom units are built to fit specific openings without the tolerances standard doors allow. The opening must match specifications exactly. We often template the actual opening before fabrication to ensure perfect fit. Custom doors frequently weigh significantly more than standard units, requiring additional installers and sometimes specialized equipment. Hinges and mounting must accommodate these weights. For pivot doors, concealed pivot hardware must be precisely located and installed. Glass panels may require additional blocking or support. Clearances must account for custom hardware that may project further than standard locksets. We treat custom door installations as precision millwork projects rather than commodity replacements, ensuring these significant investments install flawlessly.',
      },
      {
        heading: 'Investment Considerations',
        content: 'Custom doors represent the premium tier of door projects, with costs varying enormously based on size, materials, complexity, and hardware selections. A basic custom wood door for a standard opening might cost three thousand to six thousand dollars. Elaborate designs with exotic woods, custom glass, and high-end hardware can easily exceed fifteen thousand dollars. Massive pivot doors or multi-panel custom entries can reach thirty thousand dollars or more. For luxury Arlington properties, these costs align appropriately with overall property values and renovation budgets. The investment delivers a unique door that elevates your entire property, serves for decades with proper care, and often becomes a signature feature that defines your home\'s character. We provide detailed quotes that break down costs so you understand exactly where your investment goes.',
      },
    ],
    
    features: [
      'Unlimited design possibilities',
      'Custom sizes and shapes including arched, circular, and irregular',
      'Exotic and domestic hardwood options',
      'Steel, bronze, and specialty metal fabrication',
      'Custom glass with artistic and functional patterns',
      'High-end hardware and finish options',
      'Pivot, swing, and specialty operating mechanisms',
      'Integration with smart home technology',
      'Heirloom-quality craftsmanship',
      'Built to order for your specific opening',
    ],
    
    brands: [
      {
        name: 'Marvin Custom Doors',
        description: 'Marvin Signature Ultimate doors offer virtually unlimited customization options. Choose wood species, finish, glass, size, shape, and hardware to create truly one-of-a-kind entries. Every door is built to order with meticulous craftsmanship.',
      },
      {
        name: 'Specialty Door Craftspeople',
        description: 'We partner with master door craftspeople and fabricators who specialize in custom one-off creations. These artisans handle projects requiring traditional joinery, hand-forged hardware, artistic glass work, or authentic historic replication.',
      },
    ],
    
    faq: [
      {
        question: 'How long does it take to get a custom door in Arlington?',
        answer: 'Custom door timelines in Arlington, TX vary significantly based on complexity. Simple custom wood doors may take 4 to 8 weeks from design approval to installation. Complex projects with custom glass, special hardware, or intricate fabrication can take 12 to 16 weeks or longer. We provide realistic timelines during planning and keep you updated throughout fabrication.',
      },
      {
        question: 'Can you match an existing historic door design?',
        answer: 'Yes, replicating historic door designs is one of the most rewarding custom door applications. We can match old doors for Arlington historic homes using traditional joinery techniques, period-appropriate hardware, and authentic materials. This allows homeowners to maintain architectural integrity while benefiting from modern weatherstripping and performance features.',
      },
      {
        question: 'What is a pivot door and why would I want one?',
        answer: 'Pivot doors rotate on a central or offset pivot point rather than traditional side hinges, allowing for much larger and heavier doors than conventional hinged designs. They create dramatic modern entrances and can span openings up to 12 feet tall or more. Pivot doors make striking statements in contemporary Arlington, TX homes.',
      },
      {
        question: 'How much does a custom door cost compared to standard doors?',
        answer: 'Custom doors in Arlington, TX typically cost two to five times more than comparable standard doors, with highly complex projects costing even more. However, for non-standard openings, custom doors may cost less than modifying the opening to fit standard sizes. The investment delivers a unique door that perfectly matches your vision and home.',
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
