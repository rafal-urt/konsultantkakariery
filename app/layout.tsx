import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileFloatingCTA from '@/components/MobileFloatingCTA'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Konsultantka Kariery — Ewelina Dyjak | Doradztwo zawodowe',
    template: '%s | Ewelina Dyjak',
  },
  description:
    'Pomagam w świadomym zarządzaniu karierą, budowaniu pewności siebie i podejmowaniu trafnych decyzji zawodowych. Konsultacje kariery online i w Lublinie.',
  keywords: [
    'konsultantka kariery',
    'doradztwo zawodowe',
    'coaching kariery',
    'zmiana pracy',
    'przebranżowienie',
    'pewność siebie w karierze',
    'Lublin',
    'Ewelina Dyjak',
  ],
  authors: [{ name: 'Ewelina Dyjak' }],
  creator: 'Ewelina Dyjak',
  metadataBase: new URL('https://konsultantkakariery.pl'),
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://konsultantkakariery.pl',
    siteName: 'Konsultantka Kariery — Ewelina Dyjak',
    title: 'Konsultantka Kariery — Ewelina Dyjak | Doradztwo zawodowe',
    description:
      'Pomagam w świadomym zarządzaniu karierą, budowaniu pewności siebie i podejmowaniu trafnych decyzji zawodowych.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://konsultantkakariery.pl',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ewelina Dyjak — Konsultantka Kariery',
  description: 'Konsultacje kariery, coaching zawodowy, doradztwo w zmianie pracy',
  url: 'https://konsultantkakariery.pl',
  telephone: '+48603614521',
  email: 'doradztwo.coaching@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lublin',
    addressCountry: 'PL',
  },
  sameAs: [
    'https://www.facebook.com/ewelinadyjakkariera',
    'https://www.instagram.com/konsultantka.kariery/',
  ],
  areaServed: 'PL',
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-17:00',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-[#1A1A1A] antialiased">
        <Navbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
        <MobileFloatingCTA />
      </body>
    </html>
  )
}
