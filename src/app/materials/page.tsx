import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import MaterialsSection from './MaterialsSection'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Window Materials Arlington TX | Premium Window Replacement Materials',
  description: 'Choose from premium window materials designed for Arlington TX climate. Vinyl, aluminum, fiberglass, fibrex, wood clad, and wood windows. Energy efficient, durable, and low maintenance options.',
  keywords: 'window materials Arlington TX, vinyl windows, aluminum windows, fiberglass windows, fibrex windows, wood clad windows, wood windows, premium materials'
}

export default function MaterialsIndex() {
  return (
    <>
      <Header />
      <main>
        <MaterialsSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}