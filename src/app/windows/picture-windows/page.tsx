import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Picture Window Replacement Arlington TX | Stunning Views',
  description: 'Large picture windows in Arlington, TX. Fixed glass for maximum light and unobstructed views. Energy efficient. Andersen, Pella & JELD-WEN. Call 817-592-8870.',
  keywords: 'picture windows Arlington TX, fixed windows, large windows, view windows Texas, energy efficient glass',
}

export default function PictureWindowsPage() {
  const content = {
    title: 'Picture Window Replacement in Arlington, TX',
    subtitle: 'Frame Your World with Uninterrupted Views',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
    
    intro: "Picture windows do exactly what their name suggests—they frame views like artwork, transforming outdoor landscapes into living focal points within your Arlington home. As fixed, non-operable units, they eliminate the moving parts and weatherstripping complexities that can compromise other window types, resulting in maximum energy efficiency, expansive glass areas, and unobstructed views that connect your interior spaces with the beauty outside.",
    
    sections: [
      {
        heading: 'Maximum Daylight Without Compromise',
        content: 'Picture windows achieve something no operable window can match: absolutely uninterrupted glass from edge to edge. Without operating mechanisms, meeting rails, or sash divisions, the entire opening becomes a transparent portal flooding your Arlington home with natural light. This matters significantly for interior spaces where natural illumination affects both ambiance and functionality. Living rooms facing north can overcome limited direct sunlight with large picture windows. Home offices benefit from abundant daylight that reduces eye strain and improves productivity. In rooms with limited wall space for windows, a single large picture window often provides more useful light than multiple smaller operable units.',
      },
      {
        heading: 'Superior Energy Efficiency by Design',
        content: 'Fixed windows achieve the highest energy efficiency ratings of any window type because they have no moving parts that can wear, warp, or develop air leaks. The glass is sealed permanently into the frame, creating a continuous thermal barrier that resists heat transfer far better than windows with operational components. For Arlington homeowners focused on minimizing cooling costs during brutal summer months, picture windows specified with Low-E coatings, argon gas fills, and quality frames can achieve U-factors as low as 0.20—exceptional performance that translates directly to lower energy bills. The absence of weatherstripping that can compress, crack, or deteriorate means picture windows maintain their efficiency ratings year after year.',
      },
      {
        heading: 'Architectural Impact and Design Versatility',
        content: 'Picture windows serve as architectural focal points that define spaces and establish design themes. A soaring picture window in a two-story great room creates drama while connecting the interior to outdoor views. Wide picture windows flanked by operable casement or double-hung units provide both ventilation and expansive views. Horizontal picture windows emphasize room width and complement modern ranch-style architecture throughout Arlington. When positioning picture windows, consider both interior and exterior impact—these large glass areas become prominent facade elements that influence your home\'s curb appeal and interior ambiance simultaneously.',
      },
      {
        heading: 'Perfect Pairings with Operable Windows',
        content: 'Picture windows rarely stand alone—they typically anchor window compositions that combine fixed and operable units for optimal functionality. The classic combination places a large picture window in the center with flanking casement or double-hung windows providing ventilation. This configuration maximizes views and light while maintaining airflow control. Transom picture windows above standard operable units bring natural light deep into spaces while preserving privacy and wall space at functional heights. In great rooms and living areas, floor-to-ceiling combinations of picture windows and French doors create stunning transitions to outdoor living spaces—all the view and light of a wall of windows with practical ventilation and access where you need it.',
      },
      {
        heading: 'Glass Technology and Performance Options',
        content: 'Because picture windows don\'t open, homeowners often invest more in advanced glass technologies that deliver measurable benefits. Triple-pane glass packages provide outstanding insulation and sound reduction—valuable for Arlington homes near busy streets or flight paths. Solar control glass options reject heat while allowing visible light to pass through, keeping rooms bright without the solar heat gain that forces air conditioners to work harder. Impact-resistant glass specifications provide hurricane protection and enhanced security. Decorative glass options including textured, stained, or art glass transform picture windows into stunning design elements. Without operational constraints, picture windows accommodate specialized glass that might prove impractical in operable units.',
      },
      {
        heading: 'Practical Considerations and Maintenance',
        content: 'The primary practical consideration with picture windows is exterior cleaning access. Unlike tilt-in or removable sash windows, picture window exteriors must be cleaned from outside. For ground-floor installations this presents no challenge, but second-story picture windows may require professional cleaning services. Some homeowners mitigate this by specifying glass treatments that resist dirt accumulation and water spotting. The maintenance payoff? Picture windows have essentially nothing to wear out—no balances to fail, no weatherstripping to replace, no cranks or locks to adjust. A quality picture window will provide decades of maintenance-free service, making them ideal for hard-to-reach installations like clerestory locations or two-story great room applications.',
      },
    ],
    
    features: [
      'Fixed design provides maximum energy efficiency',
      'Unobstructed views with no rails or muntins',
      'Largest glass areas of any window type',
      'Virtually maintenance-free operation',
      'No moving parts to wear out or fail',
      'Available in virtually unlimited sizes',
      'Perfect for pairing with operable windows',
      'Ideal for clerestory and high-wall installations',
      'Accepts specialized glass packages',
      'Superior sound insulation possible',
    ],
    
    brands: [
      {
        name: 'Andersen 400 Series Picture',
        description: 'Andersen picture windows feature their renowned Fibrex composite frames that remain stable even in the largest sizes. The precision manufacturing ensures perfect glass-to-frame seals that last for decades. Available in numerous sizes and shapes, including custom configurations for unique architectural applications.',
      },
      {
        name: 'Pella 350 Series Fixed',
        description: 'Pella\'s fixed windows deliver exceptional clarity through their high-quality glass and narrow frame profiles. These windows can be specified with their most advanced glass packages including triple-pane and specialized coatings. The vinyl frames require zero maintenance while providing excellent thermal performance.',
      },
      {
        name: 'JELD-WEN Premium Fixed',
        description: 'JELD-WEN offers picture windows in both vinyl and wood configurations, giving you flexibility to match your Arlington home\'s aesthetic. Their large units feature reinforced frames that maintain structural integrity even in sizes exceeding eight feet. Custom shapes available for distinctive architectural details.',
      },
    ],
    
    faq: [
      {
        question: 'Where are picture windows most effective?',
        answer: 'Picture windows work beautifully in living rooms, dining rooms, and master bedrooms where views and natural light take priority over ventilation. They\'re ideal for walls facing attractive landscapes, golf courses, or mature trees. Pair them with operable windows for rooms requiring ventilation.',
      },
      {
        question: 'How do I clean the outside of large picture windows?',
        answer: 'Ground-floor picture windows can be cleaned from outside using a ladder and standard window cleaning supplies. For second-story installations, consider professional cleaning services or telescoping cleaning tools. Some homeowners specify water-repellent glass treatments that reduce cleaning frequency.',
      },
      {
        question: 'Can picture windows include decorative elements?',
        answer: 'Yes. Picture windows accommodate numerous decorative options including simulated divided lites, genuine divided lites, stained glass, textured glass, and custom art glass. The fixed design doesn\'t compromise decorative elements like operable windows might.',
      },
      {
        question: 'Are picture windows more affordable than operable windows?',
        answer: 'Generally yes, because they have no operating hardware, locking mechanisms, or complex weatherstripping systems. However, picture windows are often specified in larger sizes that increase overall cost. The energy savings from their superior efficiency can offset any price difference over the window\'s lifetime.',
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


