import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Awning Window Replacement Arlington TX | Rain-Proof Ventilation',
  description: 'Awning windows in Arlington, TX. Top-hinged design for ventilation during rain. Perfect for bathrooms. Andersen, Pella & JELD-WEN. Free estimate: 214-444-4444.',
  keywords: 'awning windows Arlington TX, rain windows, bathroom windows, ventilation windows Texas',
}

export default function AwningWindowsPage() {
  const content = {
    title: 'Awning Windows',
    subtitle: 'Ventilate Your Home Rain or Shine',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070',
    
    intro: "Awning windows offer a unique advantage that sets them apart from every other operable window style: they provide ventilation even during rain. Hinged at the top and opening outward, the sash creates a protective awning that shields the opening from weather while allowing fresh air to flow freely. This practical design makes awning windows the intelligent choice for bathrooms, kitchens, and any Arlington space where year-round ventilation matters.",
    
    sections: [
      {
        heading: 'Weather-Resistant Ventilation Technology',
        content: 'Arlington\'s spring and summer months bring frequent afternoon thunderstorms—beautiful to watch but frustrating when you need fresh air in your home. Awning windows solve this dilemma elegantly. Even during moderate rainfall, you can keep these windows open without water entering your home. The outward-angled sash acts like a miniature roof, directing water away from the opening. This feature proves invaluable in bathrooms where moisture control remains critical regardless of weather, and in kitchens where cooking odors need to escape even on rainy days. During Texas\'s humid summers, this ability to maintain airflow during storms prevents moisture buildup that can lead to mold and mildew.',
      },
      {
        heading: 'Privacy Without Sacrifice',
        content: 'Awning windows excel in applications where privacy and ventilation must coexist. Bathroom installations are their natural habitat—position an awning window high on the wall, and you enjoy complete privacy even when the window is fully open. The elevated placement and outward-opening design prevent sight lines into your private spaces while still providing excellent airflow. This makes them ideal for shower areas, master bathroom water closets, and ground-floor bathrooms facing streets or neighboring properties. Combine awning windows with textured or frosted glass for additional privacy without blocking natural light.',
      },
      {
        heading: 'Architectural Versatility and Style',
        content: 'While awning windows often serve functional purposes, they also contribute significantly to your home\'s aesthetic appeal. Contemporary Arlington homes frequently feature horizontal banks of awning windows that create clean, modern lines and flood interiors with natural light. Transom awning windows above doors add character while providing natural ventilation. Clerestory awning windows placed high on walls bring daylight deep into home interiors without compromising privacy or wall space needed for furniture. Their horizontal proportions contrast beautifully with taller hung windows, letting designers create dynamic window compositions that add visual interest to facades.',
      },
      {
        heading: 'Energy Efficiency Through Design',
        content: 'Like casement windows, awning windows achieve exceptional energy efficiency through their compression seal design. When closed, the crank mechanism pulls the sash tight against the frame, creating an air-tight seal that resists infiltration far better than sliding window designs. This matters significantly in Arlington\'s climate, where summer cooling costs dominate energy bills. Modern awning windows from premium manufacturers incorporate Low-E glass coatings and argon gas fills that further enhance thermal performance. Many models achieve U-factors below 0.30, placing them among the most energy-efficient windows available. The superior seal also provides excellent noise reduction—valuable for homes near busy streets or flight paths.',
      },
      {
        heading: 'Perfect Pairings with Other Window Styles',
        content: 'Awning windows rarely stand alone—they typically complement other window styles to create functional and beautiful compositions. Pair awning windows below picture windows to add ventilation to stunning view walls. Place them above casement windows to maximize vertical glass area while maintaining ventilation flexibility. Install them as transoms over entry doors to bring natural light into foyers without sacrificing security. In basement applications, awning windows provide egress compliance while resisting water infiltration during heavy rains. Their modest proportions make them ideal for filling unusual spaces where standard window sizes won\'t fit, ensuring every wall in your Arlington home can enjoy natural light and fresh air.',
      },
      {
        heading: 'Operation and Maintenance Simplicity',
        content: 'Awning windows operate via the same reliable crank mechanism found in casement windows. This hardware proves particularly user-friendly in hard-to-reach installations like above kitchen sinks or in high wall placements. The crank provides mechanical advantage, making even large awning windows easy to open and close with minimal effort. Quality models feature multi-point locking systems that secure the window firmly when closed. Maintenance requirements remain minimal—an occasional wipe-down of glass and hardware lubrication every few years typically suffices. The outward-opening design means no complex balance systems that can wear out, and the simplicity of construction translates to decades of reliable operation.',
      },
    ],
    
    features: [
      'Provides ventilation even during rain',
      'Top-hinged design opens outward and upward',
      'Ideal for bathrooms and high-wall installations',
      'Excellent privacy while maintaining airflow',
      'Compression seal delivers superior energy efficiency',
      'Easy crank operation from inside',
      'Works beautifully in window combinations',
      'Available in vinyl, wood, fiberglass, and composite',
      'Multi-point locking for security when closed',
      'Minimal maintenance requirements',
    ],
    
    brands: [
      {
        name: 'Andersen 400 Series Awning',
        description: 'Andersen\'s awning windows feature the same exceptional Fibrex composite construction as their casement line. The low-maintenance frames resist rot, corrosion, and warping even in Texas humidity, while precision-engineered hardware ensures smooth operation for decades. Available in numerous sizes to fit virtually any application.',
      },
      {
        name: 'Pella 250 Series Awning',
        description: 'Pella delivers outstanding value with their 250 Series awning windows. These vinyl-frame units incorporate high-quality weatherstripping and can be specified with upgraded glass packages for enhanced energy performance. The clean design works beautifully in both traditional and contemporary Arlington homes.',
      },
      {
        name: 'JELD-WEN Premium Awning',
        description: 'JELD-WEN offers awning windows in both vinyl and wood-clad configurations, giving you flexibility to match your home\'s aesthetic preferences. Their fusion-welded vinyl frames provide lasting strength, while wood-clad options deliver timeless beauty with modern performance features.',
      },
    ],
    
    faq: [
      {
        question: 'Where are awning windows most commonly installed?',
        answer: 'Awning windows excel in bathrooms (especially above showers or tubs), kitchens (often above sinks), basements (for egress and ventilation), and as clerestory windows in great rooms or hallways. They also work well stacked above or below other window styles.',
      },
      {
        question: 'Can awning windows be locked securely?',
        answer: 'Yes. Quality awning windows feature multi-point locks that secure the sash at multiple locations when closed. When locked, they\'re extremely difficult to open from outside, making them suitable even for accessible ground-floor installations.',
      },
      {
        question: 'Do awning windows interfere with curtains or blinds?',
        answer: 'Because awning windows open outward, they don\'t interfere with interior window treatments. You can install curtains, blinds, or shades inside without affecting window operation. Some models also offer between-the-glass blinds.',
      },
      {
        question: 'How far do awning windows open?',
        answer: 'Most awning windows open to approximately 45 degrees from the frame, though this varies by model and manufacturer. This opening angle provides excellent ventilation while preventing the sash from extending too far from your home\'s exterior—important for installations near walkways or patios.',
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


