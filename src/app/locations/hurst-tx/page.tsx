import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LocationHero from '@/components/location-hero'
import LocationContent from '@/components/location-content'
import WindowsSection from '@/components/windows-section'
import DoorsSection from '@/components/doors-section'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window & Door Replacement Hurst TX | Expert Window Services',
  description: 'Professional window and door replacement in Hurst, TX. Premium Andersen, Pella, JELD-WEN, Marvin windows. Serving all Hurst neighborhoods. Call 817-592-8870 for free estimate.',
  keywords: 'window and door replacement Hurst TX, Hurst windows, window installation Hurst, replacement windows Texas',
}

export default function HurstPage() {
  const content = {
    intro: 'Hurst stands as a cornerstone mid-cities community—a family-oriented city where neighborhood stability and small-town values thrive within the Dallas-Fort Worth metroplex. From established neighborhoods near Chisholm Park to homes throughout this tight-knit 9.8-square-mile city, Hurst properties reflect decades of careful homeownership. Our window and door replacement services support this tradition of property stewardship, delivering quality installations that improve comfort, reduce energy costs, and maintain home values through every Texas season.',
    
    whyUs: 'Hurst homeowners expect value that extends beyond low initial prices—they understand quality materials and expert installation cost less over time than cheap alternatives requiring premature replacement. We deliver this value through exclusive partnerships with Andersen, Pella, and JELD-WEN, manufacturers whose windows regularly provide 30+ years of service. Our installation teams treat your Hurst home respectfully, arriving on schedule, protecting floors and furnishings, completing work efficiently, and cleaning thoroughly before departing. Hurst residents often mention they chose us based on neighbor recommendations—testimony to our consistent quality across thousands of mid-cities installations.',
    
    services: 'Hurst\'s housing stock primarily comprises ranch-style and traditional homes built from the 1960s forward, creating common replacement needs we address expertly. We frequently upgrade original aluminum or basic vinyl windows to modern energy-efficient units delivering dramatic comfort improvements. We also serve Hurst\'s newer neighborhoods with contemporary window solutions matching current architectural trends. Our services include insurance claim assistance following hail damage (common in North Texas), phased replacement plans accommodating budget constraints, and comprehensive whole-house projects transforming home performance and appearance simultaneously.',
    
    neighborhoods: 'Our Hurst service area encompasses the entire city: the established neighborhoods around Midway Road, the family communities near Hurst Recreation Center, areas throughout north and south Hurst, developments around NRH2O and Hurst Conference Center. Hurst\'s compact size ensures quick response times and easy scheduling—we\'re always nearby when you need window services. Every Hurst neighborhood receives identical professional attention regardless of property size or project scope.',
    
    commitment: 'Hurst built its reputation as a great place to raise families and build lasting community connections. We share these values, treating every customer relationship as long-term rather than transactional. We communicate honestly about project details, timelines, and costs. We work safely and cleanly, important when families and pets are present. We stand firmly behind our installations, responding promptly when warranty service is needed. Hurst deserves window and door replacement services as reliable and trustworthy as the community itself, and delivering exactly that remains our constant commitment.',
  }

  return (
    <>
      <Header />
      <main>
        <LocationHero
          city="Hurst"
          state="TX"
          image="https://www.hursttx.gov/ImageRepository/Document?documentID=5432"
        />
        <LocationContent city="Hurst" content={content} />
        <WindowsSection />
        <DoorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

