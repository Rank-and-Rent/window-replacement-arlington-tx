import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Single-Hung Window Replacement Arlington TX | Affordable Quality',
  description: 'Budget-friendly single-hung windows in Arlington, TX. Classic reliability with modern efficiency. Andersen, Pella & JELD-WEN options. Free estimate: 817-592-8870.',
  keywords: 'single hung windows Arlington, affordable replacement windows, window installation Texas, energy efficient windows',
}

export default function SingleHungWindowsPage() {
  const content = {
    title: 'Single-Hung Windows',
    subtitle: 'Time-Tested Reliability Meets Affordable Excellence',
    heroImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070',
    
    intro: "Single-hung windows embody the principle that simplicity often equals reliability. As one of the most economical window styles available, they deliver outstanding performance without unnecessary complexity. For Arlington homeowners seeking to maximize their renovation budget while still enjoying quality windows from premium manufacturers, single-hung windows represent an intelligent choice that won't compromise your home's appearance or comfort.",
    
    sections: [
      {
        heading: 'Understanding Single-Hung Window Design',
        content: 'The single-hung window features a fixed upper sash and an operable lower sash that slides vertically. This straightforward design has fewer moving parts than double-hung windows, which translates to enhanced durability and reduced maintenance requirements over the window\'s lifespan. The simplicity also contributes to a tighter seal—with only one moving sash, there\'s less opportunity for air infiltration around weatherstripping. For Arlington homes where upper-floor windows rarely open anyway, single-hung units provide all the functionality you need at a significantly lower cost than their double-hung counterparts.',
      },
      {
        heading: 'Cost-Effectiveness Without Compromise',
        content: 'Single-hung windows typically cost 10-20% less than comparable double-hung models, but this price difference doesn\'t indicate inferior quality. You\'re simply paying for the functionality you actually use. The savings can be substantial when replacing multiple windows throughout your Arlington home. Many homeowners channel these savings into upgrades like Low-E glass coatings, argon gas fills, or premium exterior colors—enhancements that deliver tangible benefits in energy efficiency and curb appeal. The reduced complexity also means less that can malfunction over time, potentially reducing future maintenance needs.',
      },
      {
        heading: 'Ideal Applications in Arlington Homes',
        content: 'Single-hung windows excel in specific scenarios common throughout Arlington. They\'re perfect for second-story bedrooms where you rarely need to clean exterior glass or access upper ventilation. They work beautifully in rooms with window air conditioning units, where the fixed upper sash provides a stable mounting surface. Rental properties benefit from their durability and lower initial investment. Historic homes often employed single-hung windows originally, making them ideal for renovation projects seeking period authenticity. In any application where operational simplicity matters more than full ventilation flexibility, single-hung windows shine.',
      },
      {
        heading: 'Energy Performance That Competes',
        content: 'Don\'t assume that lower cost means lower performance. Modern single-hung windows from Andersen, Pella, and JELD-WEN feature the same advanced glass packages, frame materials, and weatherstripping systems as their premium counterparts. They achieve identical U-factors and Solar Heat Gain Coefficients when specified with equivalent glazing options. In Arlington\'s hot climate, selecting single-hung windows with Low-E coatings and argon gas between panes delivers exceptional thermal performance that keeps cooling costs down during brutal summer months. The ENERGY STAR program certifies many single-hung models, confirming their ability to reduce heating and cooling expenses.',
      },
      {
        heading: 'Maintenance and Longevity Advantages',
        content: 'The reduced mechanical complexity of single-hung windows translates directly to exceptional longevity. With half as many balance systems, locks, and pivot points compared to double-hung windows, there are simply fewer components that can wear out or require adjustment. The fixed upper sash never needs cleaning from the interior—a minor inconvenience for ground-floor windows but a significant safety advantage for higher installations. Quality single-hung windows from top manufacturers routinely provide 25-30 years of trouble-free service in Arlington\'s climate. Vinyl and fiberglass frames never need painting, while wood options require only the same periodic refinishing that your home\'s other exterior wood surfaces demand.',
      },
      {
        heading: 'Aesthetic Versatility for Any Home Style',
        content: 'Single-hung windows complement every architectural style found in Arlington, from traditional ranch homes to contemporary designs. The proportions mirror double-hung windows perfectly, so most observers can\'t distinguish between the two from the exterior. This makes single-hung windows an excellent choice when you want to replace some windows economically while maintaining visual consistency across your home\'s facade. They\'re available in the full spectrum of exterior colors, grid patterns, and frame materials, ensuring you can match your home\'s architectural character whether it was built in 1950 or 2020.',
      },
    ],
    
    features: [
      'Lower cost than double-hung windows by 10-20%',
      'Fixed upper sash provides excellent seal',
      'Fewer moving parts means enhanced durability',
      'Available in vinyl, wood, fiberglass, and composite',
      'Full range of glass performance options',
      'Compatible with standard window screens',
      'Multiple color and finish choices',
      'Historic replication options available',
      'ENERGY STAR certified models',
      'Excellent for second-story installations',
    ],
    
    brands: [
      {
        name: 'Andersen 200 Series',
        description: 'Andersen\'s most affordable line doesn\'t sacrifice the quality the brand is known for. The 200 Series single-hung windows feature Fibrex composite construction and come with Andersen\'s renowned warranty coverage, delivering premium performance at a competitive price point.',
      },
      {
        name: 'Pella 150 Series',
        description: 'Pella\'s entry-level single-hung windows offer remarkable value. These vinyl windows incorporate many features found in more expensive lines, including quality weatherstripping and optional upgraded glass packages. They\'re ideal for budget-conscious Arlington homeowners who refuse to compromise on brand reputation.',
      },
      {
        name: 'JELD-WEN Premium Vinyl',
        description: 'JELD-WEN\'s Premium Vinyl single-hung windows balance affordability with solid performance. Their fusion-welded frames and quality hardware ensure years of reliable operation. Multiple interior and exterior color options let you customize the appearance to match your home perfectly.',
      },
    ],
    
    faq: [
      {
        question: 'Can I clean the outside of single-hung windows easily?',
        answer: 'For first-floor windows, exterior cleaning is straightforward from outside. Some single-hung models offer tilt-in lower sashes for easier cleaning. For second-story windows, you may need a ladder or professional window cleaning service, though this is typically needed infrequently.',
      },
      {
        question: 'Are single-hung windows less secure than double-hung?',
        answer: 'No. Single-hung windows often provide equal or better security because the fixed upper sash cannot be compromised. The operable lower sash accepts the same locking mechanisms as double-hung windows. We recommend multi-point locks for enhanced security in any window style.',
      },
      {
        question: 'Will single-hung windows look different from my double-hung windows?',
        answer: 'From the exterior, single-hung and double-hung windows are virtually indistinguishable. Both feature the same proportions and design elements. You can mix window types throughout your home based on functionality needs without affecting curb appeal.',
      },
      {
        question: 'How much money can I save by choosing single-hung over double-hung?',
        answer: 'Single-hung windows typically cost 10-20% less than comparable double-hung models. For a whole-house replacement project of 15 windows, this could mean savings of $1,500-$3,000 or more, depending on the specific models and features selected.',
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


