import Header from '@/components/header'
import Footer from '@/components/footer'
import WindowsSection from '@/components/windows-section'
import MaterialsSection from '@/components/materials-section'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata = {
  title: 'Window Types & Materials | Arlington TX Window Replacement',
  description: 'Explore all window types and materials available in Arlington, TX. Double-hung, casement, sliding, vinyl, aluminum, Fibrex, fiberglass, wood clad, and wood windows. Everything priced including installation.',
  keywords: 'window types Arlington TX, window materials, window styles, vinyl windows, aluminum windows, Fibrex windows, fiberglass windows, wood clad windows, wood windows',
}

export default function WindowsIndexPage() {
  return (
    <>
      <Header />
      <main>
        <WindowsSection />
        <MaterialsSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
