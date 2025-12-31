import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Home Window Replacement Service of Arlington | Premium Window Installation',
  description: 'Arlington\'s trusted window replacement experts. We install Andersen, Pella, and JELD-WEN windows. Double-hung, casement, bay, bow, and specialty windows. Free estimates. Call 817-592-8870.',
  keywords: 'window replacement Arlington TX, Andersen windows Arlington, Pella windows installation, JELD-WEN dealer Texas, double hung windows, casement windows, bay windows, bow windows, window installation Arlington',
  openGraph: {
    title: 'Home Window Replacement Service of Arlington',
    description: 'Premium window replacement services in Arlington, TX. Authorized dealer for Andersen, Pella, and JELD-WEN windows.',
    url: 'https://homewindowreplacementarlington.com',
    siteName: 'Home Window Replacement Arlington',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://homewindowreplacementarlington.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}


