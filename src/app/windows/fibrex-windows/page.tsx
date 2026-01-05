import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Fibrex Windows Replacement Arlington TX | Andersen Premium Composite',
  description: 'Andersen Fibrex composite replacement windows in Arlington, TX. Premium performance with wood-like beauty. Energy-efficient and durable. Everything priced including installation. Call 817-592-8870.',
  keywords: 'Fibrex windows Arlington TX, Andersen Fibrex windows, composite windows, premium replacement windows, energy efficient Fibrex windows, durable composite windows',
}

export default function FibrexWindowsPage() {
  const content = {
    title: 'Fibrex Windows Replacement in Arlington, TX',
    subtitle: 'Andersen\'s Premium Composite Technology for Ultimate Performance',
    heroImage: '/window-types/fibrex-arlington-tx.jpg',

    intro: "Andersen's revolutionary Fibrex composite material represents the pinnacle of window frame technology, combining the natural beauty of wood with the superior performance characteristics of modern composites. In Arlington, where homeowners demand both aesthetic excellence and practical performance, Fibrex windows deliver an unmatched combination of wood-like appearance, dimensional stability, and exceptional durability. This proprietary material has transformed window construction, offering Arlington homeowners the best of traditional and modern materials in a single, high-performance package.",

    sections: [
      {
        heading: 'The Science Behind Fibrex Innovation',
        content: 'Fibrex is Andersen\'s proprietary composite material that blends wood fibers with polymers to create a frame material that outperforms both traditional wood and vinyl. The wood fibers provide dimensional stability and natural aesthetics, while the polymer matrix delivers exceptional durability and moisture resistance. Unlike pure wood that can warp, shrink, or expand with humidity changes, Fibrex maintains its shape and integrity year-round. The material is engineered at the molecular level to resist moisture absorption, preventing rot, mold, and mildew. In Arlington\'s humid climate, Fibrex windows maintain perfect alignment and operation without the seasonal adjustments often required of wood frames. The composite nature eliminates wood\'s tendency to conduct heat, creating superior insulating properties.',
      },
      {
        heading: 'Wood-Like Beauty Without the Maintenance',
        content: 'Fibrex windows capture the authentic warmth and natural beauty of real wood while eliminating the maintenance headaches that come with it. The material can be stained or painted to match any wood tone, from golden oak to deep walnut, creating the traditional aesthetic Arlington homeowners love without the annual painting, sealing, or refinishing requirements. Unlike wood that weathers and fades over time, Fibrex maintains its color and finish indefinitely. The smooth, non-porous surface resists dirt and stains exceptionally well, staying looking new with minimal care. Homeowners can enjoy the classic appeal of wood windows without the time, cost, and environmental impact of maintaining them. Fibrex even accepts traditional wood stains and finishes, allowing for customization that perfectly matches your Arlington home\'s existing woodwork.',
      },
      {
        heading: 'Superior Strength and Durability',
        content: 'Fibrex\'s composite construction delivers exceptional strength that exceeds both wood and vinyl alternatives. The material resists impact damage far better than traditional wood frames, making it ideal for active families and areas prone to hail or severe weather. Unlike vinyl that can dent or crack under stress, Fibrex maintains its structural integrity indefinitely. The frames are precisely extruded to tight tolerances, ensuring smooth operation and perfect alignment for decades. In Arlington\'s extreme temperature swings, Fibrex windows maintain their performance without warping or binding. The material\'s resistance to moisture and insects eliminates common wood window problems. Andersen backs their Fibrex windows with comprehensive warranties that reflect the material\'s exceptional longevity—many Fibrex windows are still performing perfectly after 25+ years of service.',
      },
      {
        heading: 'Energy Efficiency That Performs',
        content: 'Fibrex\'s low thermal conductivity creates excellent insulating properties that enhance overall window energy performance. When combined with Andersen\'s advanced multi-pane insulated glass units, Fibrex windows achieve superior U-factors and Solar Heat Gain Coefficients that dramatically reduce heating and cooling costs. The material\'s stability ensures weatherstripping maintains perfect contact year-round, preventing air infiltration that compromises efficiency. In Arlington\'s hot summers, Fibrex windows with Low-E glass and argon fills can reduce cooling costs by 35-45% compared to older windows. The dimensional stability also prevents gaps from forming around the frame that would allow heat transfer. Many Fibrex window configurations qualify for ENERGY STAR certification and utility rebate programs, making them an economical choice despite their premium positioning.',
      },
      {
        heading: 'Craftsmanship and Quality Assurance',
        content: 'Every Fibrex window undergoes rigorous quality control processes that ensure exceptional performance and longevity. The frames are extruded with precision machinery that maintains consistent quality across every window. Fusion-welded corners create monolithic joints that are stronger than the surrounding material. Hardware is engineered specifically for Fibrex frames, ensuring smooth operation and security. Andersen\'s manufacturing facilities incorporate advanced quality assurance systems that test every component. The result is windows that not only look beautiful but perform flawlessly in Arlington\'s demanding climate. Homeowners can confidently invest in Fibrex windows knowing they represent the highest standard in window construction. The material\'s consistency also means replacement windows match existing Fibrex installations perfectly, maintaining aesthetic continuity.',
      },
      {
        heading: 'Environmental Responsibility',
        content: 'Fibrex represents a sustainable approach to window manufacturing that balances performance with environmental responsibility. The wood fibers in Fibrex come from sustainably harvested sources, and the material incorporates recycled content in its polymer matrix. Fibrex windows require no toxic treatments or preservatives like traditional wood windows. The exceptional durability reduces the environmental impact of replacement over time—Fibrex windows often outlast multiple generations of lesser materials. The superior energy efficiency reduces carbon emissions from heating and cooling. Andersen\'s manufacturing processes emphasize resource efficiency and waste reduction. For environmentally conscious Arlington homeowners, Fibrex windows provide premium performance with a significantly lower ecological footprint than traditional wood windows treated with chemical preservatives.',
      },
    ],

    features: [
      'Proprietary composite material technology',
      'Wood-like beauty without maintenance',
      'Superior strength and impact resistance',
      'Exceptional dimensional stability',
      'Advanced energy efficiency',
      'Resists rot, mold, and moisture',
      '25+ year manufacturer warranties',
      'Fusion-welded corner construction',
      'Available in unlimited wood tones',
      'Environmentally responsible manufacturing',
    ],

    brands: [
      {
        name: 'Andersen 100 Series Fibrex',
        description: 'Andersen\'s premium Fibrex line offers the ultimate in window performance with their signature composite technology. These windows feature multi-pane insulated glass, advanced weatherstripping, and comprehensive warranties.',
      },
      {
        name: 'Andersen 200 Series Fibrex',
        description: 'Andersen\'s mid-range Fibrex windows provide exceptional value with the same composite construction and performance features as higher-end lines. Perfect for homeowners seeking premium quality at accessible pricing.',
      },
      {
        name: 'Andersen 300 Series Fibrex',
        description: 'Andersen\'s luxury Fibrex collection offers the most advanced features available, including impact-resistant glass options, premium hardware, and unlimited customization for discerning Arlington homeowners.',
      },
    ],

    faq: [
      {
        question: 'What makes Fibrex different from regular wood windows?',
        answer: 'Fibrex is a composite material that combines wood fibers with polymers, offering wood-like beauty without warping, rotting, or requiring maintenance. It maintains perfect dimensions year-round and resists moisture damage that destroys traditional wood.',
      },
      {
        question: 'Do Fibrex windows look like real wood?',
        answer: 'Yes, Fibrex windows can be finished to look exactly like real wood, including staining and painting to match any wood tone. Many people cannot distinguish Fibrex from authentic wood without touching it.',
      },
      {
        question: 'How long do Fibrex windows last?',
        answer: 'Fibrex windows are engineered to last 25-30 years or more with proper care. The composite material resists degradation and maintains its performance indefinitely, unlike wood that eventually rots or vinyl that may crack.',
      },
      {
        question: 'Are Fibrex windows expensive?',
        answer: 'Fibrex windows represent premium quality and come at a higher price point than basic materials. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
      },
      {
        question: 'Do Fibrex windows require maintenance?',
        answer: 'Fibrex windows require minimal maintenance—just occasional cleaning. They never need painting, staining, or sealing like wood windows, and they resist fading, cracking, and moisture damage.',
      },
      {
        question: 'Are Fibrex windows energy efficient?',
        answer: 'Absolutely. Fibrex\'s composite construction provides excellent insulation, and when combined with Andersen\'s advanced glass packages, Fibrex windows can reduce energy costs by 35-45% in Arlington\'s climate.',
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