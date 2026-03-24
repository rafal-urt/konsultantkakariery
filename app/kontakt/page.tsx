import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import FadeInSection from '@/components/FadeInSection'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Kontakt — Umów konsultację | Ewelina Dyjak',
  description:
    'Skontaktuj się z Eweliną Dyjak — konsultantką kariery. Umów konsultację online lub zadzwoń. Lublin i cała Polska.',
  openGraph: {
    title: 'Kontakt — Umów konsultację | Ewelina Dyjak',
    description:
      'Skontaktuj się z Eweliną Dyjak. Umów pierwszą bezpłatną rozmowę i zacznij świadome zarządzanie swoją karierą.',
    url: 'https://konsultantkakariery.pl/kontakt',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl/kontakt' },
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'doradztwo.coaching@gmail.com',
    href: 'mailto:doradztwo.coaching@gmail.com',
    ariaLabel: 'Napisz email',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '+48 603 614 521',
    href: 'tel:+48603614521',
    ariaLabel: 'Zadzwoń',
  },
  {
    icon: MapPin,
    label: 'Lokalizacja',
    value: 'Lublin | Online — cała Polska',
    href: undefined,
    ariaLabel: undefined,
  },
  {
    icon: Clock,
    label: 'Godziny pracy',
    value: 'Poniedziałek – Piątek, 9:00–17:00',
    href: undefined,
    ariaLabel: undefined,
  },
]

export default function KontaktPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="max-w-2xl">
            <Breadcrumbs items={[{ label: 'Kontakt', href: '/kontakt' }]} />
            <p className="section-label">Kontakt</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Porozmawiajmy
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed">
              Masz pytania? Chcesz umówić konsultację lub dowiedzieć się więcej
              o mojej ofercie? Napisz lub zadzwoń — chętnie odpowiem.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== KONTAKT + FORMULARZ ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: Contact info */}
            <FadeInSection direction="left">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/gfx/ewelina_9.jpg"
                      alt="Ewelina Dyjak — Konsultantka Kariery"
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                      priority
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1A1A1A]">
                    Dane kontaktowe
                  </h2>
                </div>

                <ul className="space-y-6 mb-10">
                  {contactDetails.map((item, index) => {
                    const Icon = item.icon
                    const inner = (
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon size={20} className="text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          <p className="text-gray-700 font-medium">{item.value}</p>
                        </div>
                      </div>
                    )

                    return (
                      <li key={index}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="block hover:text-gold transition-colors duration-200"
                            aria-label={item.ariaLabel}
                          >
                            {inner}
                          </a>
                        ) : (
                          inner
                        )}
                      </li>
                    )
                  })}
                </ul>

                {/* Social */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Znajdź mnie w social media
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.facebook.com/ewelinadyjakkariera"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 bg-beige text-gray-600 hover:text-gold hover:bg-gold/10 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium"
                      aria-label="Facebook Eweliny Dyjak"
                    >
                      <Facebook size={18} />
                      <span>Facebook</span>
                    </a>
                    <a
                      href="https://www.instagram.com/konsultantka.kariery/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 bg-beige text-gray-600 hover:text-gold hover:bg-gold/10 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium"
                      aria-label="Instagram Eweliny Dyjak"
                    >
                      <Instagram size={18} />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>

                {/* Note */}
                <div className="mt-10 p-6 bg-beige rounded-2xl">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-[#1A1A1A]">Bezpłatna rozmowa wstępna</strong>
                    <br />
                    Jeśli nie jesteś pewna/pewny, od czego zacząć — umów się na
                    bezpłatną rozmowę wstępną. To 20–30 minut, podczas których
                    przyjrzymy się Twojej sytuacji i ustalimy, co możemy razem zrobić.
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Right: Form */}
            <FadeInSection direction="right" delay={0.1}>
              <div className="bg-white rounded-2xl border border-warm shadow-sm p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                  Wyślij wiadomość
                </h2>
                <p className="text-gray-400 text-sm mb-8">
                  Odpowiem w ciągu 24 godzin w dni robocze.
                </p>
                <ContactForm />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  )
}
