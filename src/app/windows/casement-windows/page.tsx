import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Casement Window Replacement Arlington TX | Maximum Ventilation',
  description: 'Premium casement windows in Arlington, TX. Crank-out design for unobstructed views and superior airflow. Andersen, Pella & JELD-WEN. Call 817-592-8870.',
  keywords: 'casement windows Arlington TX, crank out windows, replacement windows, modern windows Arlington',
}

export default function CasementWindowsPage() {
  const content = {
    title: 'Casement Window Replacement in Arlington, TX',
    subtitle: 'Unmatched Ventilation and Contemporary Elegance',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070',
    
    intro: "Casement windows represent the pinnacle of window ventilation technology. Hinged on one side and opening outward with a smooth crank mechanism, they capture and direct breezes into your Arlington home with unmatched efficiency. Their expansive, unobstructed glass areas flood interiors with natural light while providing stunning views of your landscape. For homeowners seeking windows that combine contemporary aesthetics with practical functionality, casement windows deliver on every front.",
    
    sections: [
      {
        heading: 'The Casement Advantage: Full-Width Ventilation',
        content: 'Unlike sliding or hung windows that open only partially, casement windows swing open completely—creating a full, unobstructed opening that captures every available breeze. This design proves especially valuable during Arlington\'s pleasant spring and fall months when outdoor temperatures make air conditioning unnecessary. Position casement windows on adjacent walls to create cross-ventilation patterns that naturally cool your home. The outward-opening design also acts as a wind scoop, funneling breezes indoors even when prevailing winds don\'t blow directly toward your window opening. No other window style delivers comparable ventilation efficiency.',
      },
      {
        heading: 'Engineered for Superior Energy Performance',
        content: 'When closed, casement windows achieve the tightest seal of any operable window style. The crank mechanism pulls the sash firmly against the frame, compressing weatherstripping to create an air-tight barrier. This compression seal significantly outperforms the sliding seals found in double-hung or sliding windows. In Arlington\'s climate, where air conditioning represents the largest portion of summer energy bills, this superior seal translates directly to lower cooling costs. The National Fenestration Rating Council consistently rates quality casement windows among the top performers for air infiltration resistance—a critical specification when selecting windows for Texas homes.',
      },
      {
        heading: 'Unobstructed Views and Maximum Daylight',
        content: 'Casement windows feature larger glass areas than comparable double-hung windows because they don\'t require a meeting rail in the center. This design maximizes your view and allows more natural light to flood your interiors. For Arlington homes overlooking golf courses, greenbelt areas, or mature landscaping, casement windows frame these views like living artwork. The single sash design also simplifies the glass cleaning process—there are no rails or muntins to clean around. Many homeowners pair casement windows with picture windows to create dramatic window walls that blur the boundary between indoor and outdoor living spaces.',
      },
      {
        heading: 'Contemporary Aesthetics Meet Timeless Appeal',
        content: 'While casement windows work beautifully in traditional homes, they particularly complement contemporary and modern architectural styles popular in newer Arlington neighborhoods. Their clean lines and minimal visual interruption appeal to homeowners who appreciate modern design principles. Floor-to-ceiling casement installations create stunning vertical elements that add architectural interest to otherwise plain facades. They also work exceptionally well in hard-to-reach locations like above kitchen sinks or in stairwell landings, where the convenient crank operation eliminates the need to reach or stretch to open windows.',
      },
      {
        heading: 'Enhanced Security Features',
        content: 'Casement windows provide exceptional security when closed. The hook-shaped lock embeds into the frame, making it nearly impossible to force open from outside. Many models feature multi-point locking systems that secure the window at multiple locations along the sash perimeter. This design proves far more resistant to break-in attempts than windows that merely have a latch holding two sashes together. For Arlington homes in areas where security is a priority, casement windows offer peace of mind along with their other benefits. Impact-resistant glass options provide additional protection against severe weather and potential intruders.',
      },
      {
        heading: 'Ideal Applications Throughout Your Home',
        content: 'Casement windows excel in specific locations where other window styles struggle. They\'re perfect above kitchen sinks, where you can easily crank them open while standing at the counter. In bathrooms, they provide ventilation and privacy simultaneously—open the window wide while frosted or textured glass maintains your privacy. They work beautifully in master bedroom suites, where large casement or casement-awning combinations create luxurious spa-like atmospheres. Narrow casements fit perfectly in tight spaces like between bathtubs and shower enclosures or flanking fireplaces, maximizing natural light in areas where wider windows won\'t fit.',
      },
    ],
    
    features: [
      'Swing open up to 90 degrees for full ventilation',
      'Tightest seal of any operable window type',
      'Easy crank operation ideal for hard-to-reach locations',
      'Larger glass area than comparable hung windows',
      'Unobstructed views with no center rail',
      'Multi-point locking for enhanced security',
      'Contemporary design complements modern architecture',
      'Available in left-hand and right-hand hinges',
      'Optional between-the-glass blinds (select models)',
      'Exceptional energy efficiency ratings',
    ],
    
    brands: [
      {
        name: 'Andersen 400 Series Casement',
        description: 'Andersen\'s 400 Series casement windows are legendary for their smooth operation and lasting durability. The Fibrex composite frame resists warping even in Texas\'s temperature extremes, while the precision-engineered hardware ensures effortless crank operation year after year. Available in dozens of exterior colors and multiple interior finishes.',
      },
      {
        name: 'Pella 350 Series Casement',
        description: 'Pella\'s 350 Series delivers outstanding casement window performance with their exclusive ComfortTrack system that enhances weatherstripping durability. These windows feature an easy-clean design and can be specified with integral between-the-glass blinds that never need dusting—perfect for kitchens and hard-to-reach installations.',
      },
      {
        name: 'JELD-WEN Siteline Casement',
        description: 'For those who love the warmth of wood, JELD-WEN\'s Siteline casement windows feature authentic pine construction with their proprietary AuraLast water-repellent treatment. These windows combine old-world craftsmanship with modern performance, offering superior energy efficiency and lasting beauty.',
      },
    ],
    
    faq: [
      {
        question: 'Can casement windows be installed in windy areas?',
        answer: 'Yes, but orientation matters. Install casement windows so they open away from prevailing winds—this prevents wind from catching the open sash like a sail. Your window consultant will help determine optimal hinge placement during the design consultation.',
      },
      {
        question: 'Do casement windows interfere with window screens?',
        answer: 'Casement windows use exterior screens that remain in place when the window opens. The screen mounts on the exterior and the window opens inward against it, or some mount on tracks. This design ensures you always have insect protection while enjoying ventilation.',
      },
      {
        question: 'Are casement windows more expensive than double-hung?',
        answer: 'Casement windows typically cost slightly more than comparable double-hung windows due to their more complex hardware. However, their superior energy efficiency often offsets the initial price difference through lower utility bills over the window\'s lifetime.',
      },
      {
        question: 'How do I clean casement windows?',
        answer: 'Casement windows are among the easiest to clean. Simply open the window fully and you can easily reach both sides from inside your home. Some models offer a removable sash feature that lets you bring the entire window inside for thorough cleaning.',
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


