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
  metadataBase: new URL('https://homewindowreplacementarlington.com'),
  title: {
    default: 'Home Window Replacement Service of Arlington | Premium Window Installation',
    template: '%s | Home Window Replacement Arlington',
  },
  description: 'Arlington\'s trusted window replacement experts. We carry Andersen, Pella, JELD-WEN, and Marvin windows. Double-hung, casement, bay, bow, and specialty windows. Free estimates. Call 817-592-8870.',
  keywords: [
    'window replacement Arlington TX',
    'Andersen windows Arlington',
    'Pella windows installation',
    'JELD-WEN dealer Texas',
    'double hung windows Arlington',
    'casement windows Arlington TX',
    'bay windows installation',
    'bow windows Arlington',
    'window installation Arlington Texas',
    'energy efficient windows Arlington',
    'vinyl windows Arlington TX',
    'window contractor Arlington',
  ],
  authors: [{ name: 'Home Window Replacement Service of Arlington' }],
  creator: 'Home Window Replacement Service of Arlington',
  publisher: 'Home Window Replacement Service of Arlington',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Best Window Replacement in Arlington, TX',
    description: 'Premium window replacement services in Arlington, TX. We carry Andersen, Pella, JELD-WEN, and Marvin windows. Expert installation with lifetime warranty.',
    url: 'https://homewindowreplacementarlington.com',
    siteName: 'Home Window Replacement Arlington',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Window Replacement Service of Arlington - Premium Window Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Window Replacement Service of Arlington',
    description: 'Premium window replacement in Arlington, TX. Andersen, Pella & JELD-WEN authorized dealer.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://homewindowreplacementarlington.com',
  },
  verification: {
    google: 'verification-token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Arlington" />
        <meta name="geo.position" content="32.7357;-97.1081" />
        <meta name="ICBM" content="32.7357, -97.1081" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}


