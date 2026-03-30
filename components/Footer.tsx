import Link from 'next/link'
import { Phone, Mail, Facebook, Instagram, MapPin, ArrowRight } from 'lucide-react'

const serviceLinks = [
  { href: '/uslugi/konsultacje-kariery', label: 'Konsultacje kariery' },
  { href: '/uslugi/wroc-pewniejsza', label: 'Wróć Pewniejsza' },
  { href: '/uslugi/skuteczne-cv', label: 'Twoje skuteczne CV' },
  { href: '/uslugi', label: 'Wszystkie usługi →' },
]

const navLinks = [
  { href: '/o-mnie', label: 'O mnie' },
  { href: '/klienci', label: 'Opinie klientów' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-blue">

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="Strona główna">
              <span className="font-semibold italic text-2xl text-white leading-tight block">
                Ewelina Dyjak
              </span>
              {/* white/70 = 4.70:1 ✓ WCAG AA */}
              <span className="text-white/70 text-sm tracking-wide">Konsultantka Kariery</span>
            </Link>

            {/* white/80 = 5.24:1 ✓ */}
            <p className="text-white/80 text-sm leading-relaxed mb-7 max-w-xs">
              Uczę, jak świadomie zarządzać karierą — bez presji i przypadkowych decyzji.
              Lublin i online w całej Polsce.
            </p>

            {/* Social icons — white on white/15 pill */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/ewelinadyjakkariera"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Eweliny Dyjak"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors duration-200"
              >
                <Facebook size={16} className="text-white" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/konsultantka.kariery/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Eweliny Dyjak"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors duration-200"
              >
                <Instagram size={16} className="text-white" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* ── Col 2: Usługi ── */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Usługi
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 hover:text-white text-sm transition-colors duration-200 leading-snug block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Nawigacja ── */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Nawigacja
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 hover:text-white text-sm transition-colors duration-200 leading-snug block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Kontakt ── */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Kontakt
            </h3>

            <ul className="space-y-4 mb-7">
              <li>
                <a
                  href="tel:+48603614521"
                  aria-label="Zadzwoń do Eweliny Dyjak"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/15 group-hover:bg-white/25 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <Phone size={14} className="text-white" aria-hidden="true" />
                  </span>
                  <span>+48 603 614 521</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:doradztwo.coaching@gmail.com"
                  aria-label="Napisz do Eweliny Dyjak"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/15 group-hover:bg-white/25 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <Mail size={14} className="text-white" aria-hidden="true" />
                  </span>
                  <span>doradztwo.coaching@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-white" aria-hidden="true" />
                </span>
                <span>Lublin · online w całej Polsce</span>
              </li>
            </ul>

            {/* CTA — white bg + brand-blue text = 6.34:1 ✓ */}
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-brand-blue px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors duration-200 shadow-sm"
            >
              Umów konsultację
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* white/50 = 3.67:1 — acceptable for fine-print legal */}
          <p className="text-white/50 text-xs text-center sm:text-left">
            © 2026 Ewelina Dyjak — Konsultantka Kariery. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-white/40 text-xs">
            Projekt i wykonanie: rafal.urta.pl
          </p>
        </div>
      </div>

    </footer>
  )
}
