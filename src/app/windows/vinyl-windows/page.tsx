import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Vinyl Windows Replacement Arlington TX | Low Maintenance, Energy Efficient',
  description: 'Premium vinyl replacement windows in Arlington, TX. Low-maintenance, energy-efficient, and durable. Andersen, Pella & JELD-WEN vinyl options. Everything priced including installation. Call 817-592-8870.',
  keywords: 'vinyl windows Arlington TX, vinyl replacement windows, low maintenance windows, energy efficient vinyl windows, Andersen vinyl windows, Pella vinyl windows, JELD-WEN vinyl windows',
}

export default function VinylWindowsPage() {
  const content = {
    title: 'Vinyl Windows Replacement in Arlington, TX',
    subtitle: 'Low-Maintenance Excellence with Superior Energy Performance',
    heroImage: '/window-types/vinyl-arlington-tx.jpg',

    intro: "Vinyl windows have revolutionized residential construction across Arlington, offering homeowners an unbeatable combination of energy efficiency, low maintenance, and exceptional durability. Unlike traditional wood or aluminum windows that require regular painting and maintenance, modern vinyl windows from premium manufacturers like Andersen, Pella, and JELD-WEN provide decades of trouble-free performance with minimal upkeep. Their advanced cellular structure creates superior thermal barriers that dramatically reduce heating and cooling costs, making them an intelligent choice for Arlington's hot climate.",

    sections: [
      {
        heading: 'Why Vinyl Windows Excel in Arlington\'s Climate',
        content: 'Arlington\'s extreme temperature swings and intense summer heat make vinyl windows an ideal choice for homeowners seeking maximum energy efficiency. The multi-chambered vinyl frames create multiple insulating air pockets that prevent heat transfer far better than single-wall aluminum frames. Modern vinyl windows achieve U-factors as low as 0.20, meaning they lose just 20% of the heat they would through an uninsulated opening. This translates to significant savings on your Arlington utility bills—many homeowners report 30-40% reductions in cooling costs during summer months. The frames never rust, rot, or warp like wood, and they never need painting like aluminum.',
      },
      {
        heading: 'Advanced Construction for Lasting Performance',
        content: 'Today\'s premium vinyl windows feature sophisticated multi-chambered frame designs that maximize insulation while maintaining structural integrity. The cellular construction creates multiple air spaces within the frame that act as thermal breaks, preventing heat from conducting through the window material. High-performance vinyl formulations include UV stabilizers that prevent yellowing and degradation from Arlington\'s intense sun exposure. Reinforced corners and heavy-duty hardware ensure smooth operation for decades. Many models feature fusion-welded corners that create monolithic frame joints stronger than the surrounding material. This advanced construction explains why quality vinyl windows carry 20-25 year warranties from manufacturers like Andersen and Pella.',
      },
      {
        heading: 'Maintenance-Free Beauty That Lasts',
        content: 'One of vinyl windows\' greatest advantages is their virtually maintenance-free nature. Unlike wood windows that require annual painting and staining, or aluminum windows that need periodic repainting to prevent corrosion, vinyl windows maintain their beauty year after year with only occasional cleaning. The smooth, non-porous surface resists dirt, mildew, and corrosion. Homeowners never need to worry about paint cracking, peeling, or fading. In Arlington\'s dusty environment, vinyl windows stay looking new longer than any other material. The low-maintenance characteristics make them particularly attractive for busy families, investors, and anyone who prefers spending time enjoying their home rather than maintaining it.',
      },
      {
        heading: 'Energy Efficiency That Pays for Itself',
        content: 'Modern vinyl windows incorporate multiple energy-saving technologies that deliver measurable financial benefits in Arlington\'s climate. Multi-pane insulated glass units with Low-E coatings reflect heat back into your home during winter and away from it during summer. Argon gas fills between panes provide additional insulation. Thermal breaks in the frames prevent heat conduction. The result is windows that can reduce your annual heating and cooling costs by $400-$800 or more, depending on your home\'s size and local utility rates. Many vinyl window models qualify for federal and state energy efficiency rebates, further improving their value proposition. In Arlington\'s hot summers, the superior insulating properties keep indoor temperatures comfortable while reducing air conditioning runtime.',
      },
      {
        heading: 'Design Flexibility for Any Arlington Home',
        content: 'Vinyl windows are available in virtually every style and configuration imaginable, ensuring you can find options that complement any architectural style found in Arlington. From traditional single-hung and double-hung designs that blend seamlessly with historic homes, to contemporary casement and awning styles that suit modern architecture, vinyl technology accommodates every aesthetic preference. The material accepts a wide range of exterior colors and finishes, including wood-grain textures that closely mimic authentic wood. Interior color options allow you to coordinate with your home\'s decor. Custom sizing ensures perfect fit for any opening. Whether your Arlington home was built in the 1950s or 2020s, vinyl windows provide the design flexibility to maintain architectural authenticity.',
      },
      {
        heading: 'Environmental Benefits and Sustainability',
        content: 'Vinyl windows contribute to environmental sustainability in several important ways. The material is 100% recyclable, and many manufacturers use recycled content in their formulations. The superior energy efficiency reduces fossil fuel consumption and greenhouse gas emissions associated with heating and cooling. Long service life (40+ years with proper care) means fewer resources consumed for replacement over time compared to shorter-lived alternatives. Low-VOC formulations minimize indoor air quality concerns during installation. Many vinyl window manufacturers participate in environmental certification programs that ensure responsible manufacturing practices. Choosing vinyl windows allows Arlington homeowners to reduce their carbon footprint while enjoying superior comfort and performance.',
      },
    ],

    features: [
      'Multi-chambered frames for superior insulation',
      'Never needs painting or staining',
      'Resists rust, rot, and warping',
      '20-25 year manufacturer warranties',
      'Available in all window styles and sizes',
      'ENERGY STAR certified models available',
      'UV-resistant formulations',
      'Smooth, easy-to-clean surfaces',
      'Superior sound insulation',
      'Environmentally friendly and recyclable',
    ],

    brands: [
      {
        name: 'Andersen 200 Series Vinyl',
        description: 'Andersen\'s entry-level vinyl line offers exceptional value with their signature Fibrex composite construction. These windows feature multi-chambered frames, fusion-welded corners, and advanced weatherstripping for superior performance in Arlington\'s climate.',
      },
      {
        name: 'Pella 150 Series Vinyl',
        description: 'Pella\'s vinyl windows combine affordability with premium features like their exclusive EnduraClad finish and multi-pane insulated glass. The smooth vinyl surfaces resist fading and staining while providing excellent energy efficiency.',
      },
      {
        name: 'JELD-WEN Premium Vinyl',
        description: 'JELD-WEN\'s Premium Vinyl collection delivers outstanding performance with fusion-welded frames and advanced glass packages. Their AuraLast wood-grain finish provides authentic wood appearance with vinyl\'s low-maintenance benefits.',
      },
    ],

    faq: [
      {
        question: 'Do vinyl windows look as good as wood windows?',
        answer: 'Modern vinyl windows are virtually indistinguishable from wood windows, especially when finished with wood-grain textures. Many homeowners cannot tell the difference from the exterior. The smooth lines and authentic finishes make vinyl windows suitable for any Arlington home style.',
      },
      {
        question: 'Are vinyl windows energy efficient?',
        answer: 'Absolutely. Modern vinyl windows with multi-pane insulated glass and Low-E coatings achieve excellent energy ratings. They typically reduce heating and cooling costs by 30-40% compared to older single-pane windows in Arlington\'s climate.',
      },
      {
        question: 'How long do vinyl windows last?',
        answer: 'Quality vinyl windows from Andersen, Pella, and JELD-WEN typically last 30-40 years or more with proper care. The frames never rot, rust, or warp, and the glass maintains its insulating properties indefinitely.',
      },
      {
        question: 'Do vinyl windows require maintenance?',
        answer: 'Vinyl windows are virtually maintenance-free. They never need painting, staining, or caulking. Occasional cleaning with mild soap and water is all that\'s required to keep them looking new.',
      },
      {
        question: 'Are vinyl windows environmentally friendly?',
        answer: 'Yes, modern vinyl windows are environmentally responsible. The material is 100% recyclable, many contain recycled content, and their superior energy efficiency reduces carbon emissions from heating and cooling.',
      },
      {
        question: 'How much do vinyl windows cost with installation?',
        answer: 'Vinyl window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
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