import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window Replacement Denton TX | Professional Installation',
  description: 'Expert window replacement in Denton, TX. Andersen, Pella & JELD-WEN authorized dealer. Serving all Denton areas. Free consultation: 214-444-4444.',
  keywords: 'window replacement Denton TX, Denton windows, window installation Denton, college town windows',
}

export default function DentonPage() {
  const content = {
    intro: 'Denton stands apart as the cultural and educational heart of North Texas—a vibrant college town where historic Victorian homes surround the courthouse square while modern developments spread outward serving UNT and TWU communities. From meticulously preserved downtown properties to family neighborhoods throughout the city, from student housing near campuses to executive homes in Robson Ranch, Denton\'s architectural diversity demands window replacement services matching its unique character. We deliver exactly that—solutions honoring historic integrity, serving practical rental needs, and providing premium upgrades for discerning homeowners.',
    
    whyUs: 'Denton\'s blend of historic preservation, college-town energy, and suburban growth creates unique window replacement challenges we navigate expertly. Historic properties often require custom solutions replicating period designs while meeting modern energy codes. Rental properties serving students need durable, cost-effective windows withstanding high turnover. Owner-occupied homes deserve premium installations delivering decades of service. As authorized dealers for Andersen, Pella, and JELD-WEN, we provide options spanning this entire spectrum. Our experience with Denton\'s preservation guidelines ensures historic projects receive necessary approvals while achieving your performance goals.',
    
    services: 'Denton\'s extraordinary architectural range—from ornate Victorians to mid-century modern, from contemporary custom homes to standard rental properties—requires comprehensive expertise we\'ve developed through decades of North Texas service. We excel at historic window restoration and replication, custom solutions for unique applications, rental property volume projects, and premium installations for executive homes. Our service scope includes emergency repairs following severe weather, insurance claim assistance, single-window replacements, room-by-room upgrades, and comprehensive whole-house transformations. Whether your Denton property needs period-appropriate restoration or practical rental upgrades, we bring appropriate solutions and expert installation.',
    
    neighborhoods: 'We serve throughout Denton\'s expansive 93-square-mile area: the historic downtown district and Victorian neighborhoods, the communities surrounding UNT and TWU campuses, the family neighborhoods throughout North and South Denton, the established areas near Denton High School, the master-planned communities like Robson Ranch, the growing developments in western Denton. Denton\'s geographic spread and population diversity present challenges we address through flexible scheduling, comprehensive product selection, and consistent quality regardless of project type or location.',
    
    commitment: 'Denton built its identity through preserving history while embracing progress—principles guiding our window replacement approach. We respect your property\'s architectural character whether it dates to 1880 or 2020. We provide solutions matching your specific needs rather than pushing one-size-fits-all recommendations. We communicate honestly about capabilities, limitations, and realistic expectations. We install windows correctly, knowing shortcuts create problems. We stand behind our work comprehensively. Denton deserves window replacement services reflecting the community\'s unique character and high standards, and meeting that expectation remains our constant commitment.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Denton"
          state="TX"
          image="https://www.cityofdenton.com/ImageRepository/Document?documentID=9234"
        />
        <LocationContent city="Denton" content={content} />
        <WindowsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

