import Header from '@/components/header'
import Footer from '@/components/footer'
import DoorsSection from '@/components/doors-section'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata = {
  title: 'Door Installation Services Arlington TX | Entry & Patio Doors',
  description: 'Professional door installation in Arlington, TX. Entry doors, patio doors, French doors, sliding glass doors. Andersen, Pella, JELD-WEN, Marvin. Free estimates.',
}

export default function DoorsIndexPage() {
  return (
    <>
      <Header />
      <main>
        <DoorsSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
