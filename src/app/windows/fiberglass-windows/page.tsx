import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Fiberglass Windows Replacement Arlington TX | Ultimate Strength & Insulation',
  description: 'Premium fiberglass replacement windows in Arlington, TX. Maximum strength, superior insulation, and authentic wood appearance. Everything priced including installation.',
  keywords: 'fiberglass windows Arlington TX, fiberglass replacement windows, strong windows, insulated fiberglass windows',
  alternates: {
    canonical: 'https://homewindowreplacementarlington.com/windows/fiberglass-windows',
  },
}

export default function FiberglassWindowsPage() {
  const content = {
    title: 'Fiberglass Windows Replacement in Arlington, TX',
    subtitle: 'Ultimate Strength and Insulation with Authentic Wood-Like Beauty',
    heroImage: '/window-types/fiberglass-arlington-tx.jpg',

    intro: "Arlington homeowners seeking the pinnacle of window performance choose fiberglass for its unmatched combination of structural strength, superior thermal efficiency, and authentic wood aesthetics. In a city with diverse architecture from historic bungalows to modern developments, fiberglass windows provide the ultimate durability and energy performance that discerning Arlington residents demand.",

    sections: [
      {
        heading: 'Unrivaled Structural Strength for Arlington Homes',
        content: 'Fiberglass is fundamentally stronger than any other window frame material, making it ideal for Arlington\'s occasional severe weather and hail storms. The material\'s tensile strength exceeds steel while maintaining flexibility that prevents cracking during temperature extremes. Unlike vinyl that can become brittle or wood that warps, fiberglass maintains perfect alignment and smooth operation year-round in Arlington\'s variable climate.',
      },
      {
        heading: 'Superior Thermal Performance Reduces Costs',
        content: 'Fiberglass\'s naturally low thermal conductivity creates exceptional insulating properties that significantly reduce energy costs in Arlington\'s hot summers. The material conducts heat 500 times slower than aluminum and far better than wood, creating a natural thermal barrier. Arlington homeowners typically see 35-45% reductions in heating and cooling costs with fiberglass windows.',
      },
      {
        heading: 'Authentic Wood Beauty Without Maintenance',
        content: 'Modern fiberglass windows replicate the natural beauty of wood with stunning accuracy, yet require none of the maintenance that authentic wood demands in Arlington\'s climate. Advanced manufacturing creates wood-grain textures virtually indistinguishable from real wood, perfect for Arlington\'s historic neighborhoods while eliminating annual refinishing requirements.',
      },
      {
        heading: 'Moisture Resistance for Texas Climate',
        content: 'Fiberglass is inherently moisture-resistant, making it perfect for Arlington\'s humid summers and occasional heavy rains. Unlike wood that absorbs moisture and rots, fiberglass remains impervious to water damage. The material never needs sealing or protective treatments, preventing mold and mildew growth that can compromise indoor air quality.',
      },
      {
        heading: 'Design Flexibility and Customization',
        content: 'Fiberglass\'s workability allows manufacturers to create virtually any window style, size, or configuration. The material accommodates complex curves and irregular shapes that would be difficult with other materials. Available in unlimited color options, fiberglass windows match Arlington\'s diverse architectural styles from traditional ranch homes to contemporary designs.',
      },
      {
        heading: 'Environmental and Health Advantages',
        content: 'Fiberglass represents a responsible choice for environmentally conscious Arlington homeowners. The material is 100% recyclable and requires no toxic preservatives. Long service life means fewer replacements over time, reducing manufacturing impacts. For families concerned about health and environmental impact, fiberglass windows provide premium performance with lower ecological footprint.',
      },
    ],

    features: [
      'Ultimate strength and impact resistance',
      'Superior thermal insulation properties',
      'Authentic wood-like appearance',
      'Zero maintenance exterior finish',
      'Complete moisture resistance',
      '20-25 year manufacturer warranties',
      'Unlimited color and finish options',
      'Compatible with all glass types',
      'Exceptional dimensional stability',
      'Environmentally responsible material',
    ],

    brands: [
      {
        name: 'Andersen Fiberglass Collection',
        description: 'Andersen pioneered fiberglass window technology with their proprietary formulations. Their fiberglass windows combine structural superiority with authentic wood aesthetics and comprehensive performance features.',
      },
      {
        name: 'Pella Fiberglass Windows',
        description: 'Pella\'s fiberglass windows feature their exclusive EnduraClad protection system and advanced insulated glass technology. The result is fiberglass performance with superior weather resistance and energy efficiency.',
      },
      {
        name: 'JELD-WEN AuraLast Fiberglass',
        description: 'JELD-WEN\'s AuraLast fiberglass technology provides authentic wood beauty with fiberglass strength and durability. Their comprehensive warranty program reflects confidence in the material\'s longevity.',
      },
    ],

    faq: [
      {
        question: 'How strong are fiberglass windows?',
        answer: 'Fiberglass is stronger than any other window frame material. It exceeds steel in tensile strength while maintaining flexibility, making it ideal for large installations and impact-prone areas in Arlington.',
      },
      {
        question: 'Are fiberglass windows energy efficient?',
        answer: 'Extremely. Fiberglass\'s low thermal conductivity creates superior insulation. Combined with advanced glass packages, fiberglass windows can reduce energy costs by 35-45% in Arlington\'s climate.',
      },
      {
        question: 'Do fiberglass windows require maintenance?',
        answer: 'Fiberglass windows require minimal maintenance—just occasional cleaning. They never need painting, staining, or sealing, and they resist fading, cracking, moisture damage, and insect infestation.',
      },
      {
        question: 'How long do fiberglass windows last?',
        answer: 'Quality fiberglass windows last 30-40 years or more with proper care. The material resists degradation indefinitely and maintains its performance and appearance throughout its service life.',
      },
      {
        question: 'Do fiberglass windows look like real wood?',
        answer: 'Yes, modern fiberglass windows can be finished to look exactly like real wood, including staining and painting to match any wood tone. The wood-grain textures are virtually indistinguishable from authentic wood.',
      },
      {
        question: 'How much do fiberglass windows cost with installation?',
        answer: 'Fiberglass window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
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