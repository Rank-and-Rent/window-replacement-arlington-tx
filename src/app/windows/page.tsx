import Header from '@/components/header'
import Footer from '@/components/footer'
import WindowsSection from '@/components/windows-section'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata = {
  title: 'Window Installation Services Arlington TX | All Window Types',
  description: 'Professional window installation in Arlington, TX. Double-hung, casement, bay, bow, and all window styles. Andersen, Pella, JELD-WEN, Marvin. Free estimates.',
}

export default function WindowsIndexPage() {
  return (
    <>
      <Header />
      <main>
        <WindowsSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
