import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Storm Door Installation Arlington TX | Protect Your Entry Door',
  description: 'Professional storm door installation in Arlington, TX. Protect your entry door and boost energy efficiency. Retractable screens, security options. Free estimates. Call 817-592-8870.',
  keywords: 'storm door installation Arlington TX, security storm doors, storm door replacement',
}

export default function StormDoorPage() {
  const content = {
    title: 'Storm Door Replacement in Arlington, TX',
    subtitle: 'Protect Your Entry and Boost Energy Efficiency',
    heroImage: '/windows/double-hung-windows-arlington-tx.webp',
    
    intro: "Storm doors serve as the unsung heroes of home protection, adding a critical barrier against weather, insects, and wear while extending the life of your entry door. For Arlington homeowners, a quality storm door provides year-round benefits—protecting expensive entry doors from intense Texas sun, allowing fresh air ventilation without security concerns, and adding an extra layer of insulation that reduces energy costs. Modern storm doors have evolved far beyond the flimsy aluminum units of previous generations, now offering robust construction, beautiful designs, and features that complement premium entry doors.",
    
    sections: [
      {
        heading: 'Full-View, High-View, and Mid-View Configurations',
        content: 'Storm door configurations determine both aesthetics and functionality. Full-view storm doors feature a single large glass panel from top to bottom, maximizing light transmission and views while providing a contemporary clean appearance. When the glass retracts or is replaced with a screen, you get maximum ventilation. High-view doors feature a large glass panel above with a narrower panel or decorative element below, balancing light with traditional styling. Mid-view doors split the door with glass on top and a solid panel below, offering more privacy and better matching traditional entry door designs. For Arlington homes with beautiful entry doors you want to showcase, full-view or high-view options keep those doors visible. For security-conscious homeowners, mid-view options provide more privacy while still allowing natural light.',
      },
      {
        heading: 'Retractable Screens: The Game-Changing Feature',
        content: 'Traditional storm doors required swapping glass and screen panels with the seasons—a tedious task many Arlington homeowners simply never did. Retractable screen systems revolutionized storm doors by hiding the screen completely in the top rail when not needed. A simple pull deploys the screen, which stays in place until you retract it. This means you can have glass during winter months for insulation and protection, then deploy the screen during pleasant spring weather for ventilation, and retract it again when you want maximum light and views. The screen never wears from sun exposure since it lives protected most of the time. This single feature transformed storm doors from seasonal inconveniences into year-round assets for Texas homes.',
      },
      {
        heading: 'Frame Materials: Aluminum, Steel, and Composite',
        content: 'Storm door frames must balance strength, durability, and aesthetics while resisting Texas weather extremes. Aluminum frames dominate the market for good reason—they resist rust, require minimal maintenance, hold up well in Arlington heat, and allow for slim profiles that maximize glass area. Modern aluminum storm doors feature thicker, reinforced frames far superior to older lightweight models. Steel frames provide maximum security and durability but require powder coating or painting to prevent rust. Composite and vinyl frames offer excellent insulation and weather resistance with contemporary styling. Frame finish options now include numerous colors and textures, from traditional white to oil-rubbed bronze, satin nickel, and black. We help Arlington homeowners select frames that complement rather than clash with their entry doors.',
      },
      {
        heading: 'Security Features for Storm Doors',
        content: 'Storm doors add a significant security layer to your Arlington home when properly specified. Heavy-duty deadbolts provide independent locking separate from your entry door lock. Continuous hinges that run the full height of the door prevent prying and distribute stress. Laminated or tempered safety glass resists breaking far better than standard glass. Some models offer impact-resistant glass that meets hurricane and severe weather codes. Locking mechanisms should feature hardened steel components rather than soft pot metal. For maximum security, select storm doors with three-point locking systems similar to entry doors. The goal is creating a second barrier that delays and discourages unauthorized entry, buying time for response or deterring break-in attempts entirely.',
      },
      {
        heading: 'Ventilation and Fresh Air Benefits',
        content: 'Storm doors with operable screens allow you to enjoy fresh air in your Arlington home while maintaining security—a benefit impossible with an open entry door. You can leave the entry door open with just the locked storm door providing security, creating cross-ventilation that cools your home naturally during pleasant weather. This is particularly valuable in spring and fall when temperatures hover in the comfortable 60 to 75 degree range. Some storm doors feature self-storing glass that slides down behind the screen panel, allowing air flow through the entire door opening. Others use interchangeable glass and screen inserts. For homes with operable windows on opposite sides, a storm door enables powerful cross-ventilation that can reduce air conditioning usage during shoulder seasons.',
      },
      {
        heading: 'Protecting Your Investment',
        content: 'Your entry door represents a significant investment, particularly if you selected a premium wood or custom door. Storm doors shield entry doors from direct sun exposure that fades finishes and dries out wood. They block rain from hitting the door directly during storms, reducing moisture exposure. They take the daily wear of opening and closing, preserving your entry door for special occasions and first impressions. For Arlington homes with entry doors facing south or west, this protection becomes critical—unprotected doors in full Texas sun may require refinishing every few years while protected doors maintain their appearance for a decade or more. The storm door pays for itself in preserved entry door condition and extended service life.',
      },
    ],
    
    features: [
      'Full-view, high-view, and mid-view configurations',
      'Retractable screen systems',
      'Aluminum, steel, and composite frames',
      'Security deadbolts and continuous hinges',
      'Tempered and laminated safety glass',
      'Self-storing glass panels',
      'Multiple color and finish options',
      'Weather-resistant construction',
      'Easy installation on existing entry doors',
      'Manufacturer warranties included',
    ],
    
    brands: [
      {
        name: 'Andersen Storm Doors',
        description: 'Andersen storm doors feature their signature retractable screens, durable aluminum frames, and robust construction. Multiple style options complement Andersen entry doors perfectly. Available through their 3000 and 4000 series.',
      },
      {
        name: 'Pella Storm Doors',
        description: 'Pella storm doors offer retractable screens, multiple frame colors, and heavy-duty construction. Their Rolscreen retractable screen technology provides smooth operation and long life. Designed to pair beautifully with Pella entry doors.',
      },
      {
        name: 'JELD-WEN Storm Doors',
        description: 'JELD-WEN storm doors deliver reliable performance at competitive prices. Available in full-view, high-view, and mid-view configurations with various color options. Quality construction that protects your entry door investment.',
      },
    ],
    
    faq: [
      {
        question: 'Do I really need a storm door in Arlington, TX?',
        answer: 'Storm doors provide valuable benefits for Arlington, TX homes including entry door protection from sun and weather, energy efficiency improvements, ventilation options, and additional security. They are particularly worthwhile if you have an expensive entry door facing intense sun exposure or if you enjoy natural ventilation during spring and fall.',
      },
      {
        question: 'How long does storm door installation take?',
        answer: 'Professional storm door installation in Arlington, TX typically takes 1 to 2 hours for straightforward applications. More time may be needed if frame modifications are required or if working with non-standard door sizes. We complete most installations with minimal disruption to your day.',
      },
      {
        question: 'Can a storm door be installed on any entry door?',
        answer: 'Storm doors can be installed on most standard entry doors in Arlington, TX. The key requirements include sufficient clearance for the storm door to swing without hitting railings or columns, a flat mounting surface for the frame, and adequate space for the door thickness. We evaluate your specific situation during consultation.',
      },
      {
        question: 'Will a storm door fade or discolor in Texas sun?',
        answer: 'Quality storm doors from manufacturers like Andersen, Pella, and JELD-WEN feature finishes specifically designed to resist fading in intense sun like Arlington, TX experiences. Powder-coated and anodized aluminum finishes maintain their appearance for years. We recommend selecting doors with UV-resistant finishes for maximum longevity.',
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
