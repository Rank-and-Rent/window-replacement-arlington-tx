import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import DoorsSection from '@/components/doors-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window & Door Replacement Grapevine TX | Premium Installation Services',
  description: 'Expert window and door replacement in Grapevine, TX. Authorized Andersen, Pella, JELD-WEN, Marvin dealer. Serving all Grapevine areas. Free estimate: 817-592-8870.',
  keywords: 'window and door replacement Grapevine TX, Grapevine windows, window installation Grapevine, historic window restoration',
}

export default function GrapevinePage() {
  const content = {
    intro: 'Grapevine seamlessly blends historic Texas charm with contemporary sophistication—a unique community where preserved 1890s architecture along Main Street contrasts with modern developments surrounding Grapevine Lake. From meticulously maintained Victorian homes in the historic district to contemporary estates in Silver Lake and newer subdivisions throughout the city, Grapevine properties demand window solutions matching their distinctive character. Our replacement services honor this architectural diversity, delivering installations appropriate for every Grapevine home style and vintage.',
    
    whyUs: 'Grapevine homeowners appreciate authenticity and quality—values reflected in the city\'s commitment to historic preservation and its reputation as a premier destination. We match these standards through careful attention to architectural appropriateness. Historic home projects often require custom windows replicating original designs while incorporating modern energy efficiency. Contemporary homes benefit from our full range of premium options from Andersen, Pella, and JELD-WEN. We work with Grapevine\'s historic preservation guidelines when applicable, ensuring replacement windows receive necessary approvals while meeting your performance goals. Our consultation process considers aesthetic impact equally with energy efficiency—both matter in Grapevine.',
    
    services: 'Grapevine\'s extraordinary architectural range—from ornate Victorians to mid-century modern, from lakefront contemporaries to traditional subdivisions—requires comprehensive expertise we\'ve developed over decades. We excel at historic window restoration and replication, custom solutions for unique applications, energy upgrades that preserve period appearance, and contemporary installations for newer developments. Our service scope includes intricate projects demanding specialized skills and straightforward replacements completed efficiently. Whether your Grapevine home dates to 1890 or 2020, we bring appropriate solutions and expert installation.',
    
    neighborhoods: 'We serve throughout Grapevine\'s diverse landscape: the historic downtown district with its preserved Victorian homes, the established neighborhoods near Meadowmere Park, the lakefront communities around Grapevine Lake, the master-planned developments in Silver Lake and western Grapevine, the growing areas near DFW Airport. Grapevine\'s geographic diversity presents logistical challenges we navigate expertly, ensuring residents city-wide receive prompt, professional service regardless of property location.',
    
    commitment: 'Grapevine\'s identity centers on maintaining high standards—in historic preservation, community development, and quality of life. We embrace identical principles in window and door replacement. Our work respects your home\'s architectural integrity while improving its performance. Our communication reflects Grapevine\'s culture of professionalism and courtesy. Our warranties provide genuine protection, backed by our commitment and manufacturers\' reputations. Whether your project involves replicating windows for a century-old Victorian or installing contemporary units in a new lakefront home, you receive the same meticulous attention to detail and commitment to excellence Grapevine demands.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Grapevine"
          state="TX"
          image="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_768,q_75,w_1024/v1/clients/grapevine/Main_Street_Grapevine_hero_3819d2e1-c5d5-4cf5-9b5e-ae2f0d2f8b15.jpg"
        />
        <LocationContent city="Grapevine" content={content} />
        <WindowsSection />
        <DoorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

