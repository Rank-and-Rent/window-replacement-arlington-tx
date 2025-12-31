import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactSection from '@/components/contact-section'

export const metadata = {
  title: 'Contact Us | Home Window Replacement of Arlington, TX',
  description: 'Contact us for a free window and door installation consultation in Arlington, TX. Call 817-592-8870 or submit our online form for a detailed estimate.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
