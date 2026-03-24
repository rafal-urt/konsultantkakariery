import Link from 'next/link'
import { Phone, Mail, Facebook, Instagram } from 'lucide-react'

const footerLinks = [
  { href: '/o-mnie', label: 'O mnie' },
  { href: '/uslugi', label: 'Usługi' },
  { href: '/klienci', label: 'Klienci' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex flex-col mb-4">
              <span className="font-semibold italic text-2xl text-white leading-tight">
                Ewelina Dyjak
              </span>
              <span className="text-sm text-gold">Konsultantka Kariery</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Pomagam w świadomym zarządzaniu karierą, budowaniu pewności siebie
              i podejmowaniu trafnych decyzji zawodowych.
            </p>
          </div>

          {/* Współpracujmy */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">
              Współpracujmy
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+48603614521"
                  className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors duration-200 text-sm group"
                  aria-label="Zadzwoń do Eweliny Dyjak"
                >
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  <span>+48 603 614 521</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:doradztwo.coaching@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors duration-200 text-sm group"
                  aria-label="Napisz do Eweliny Dyjak"
                >
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  <span>doradztwo.coaching@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.facebook.com/ewelinadyjakkariera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors duration-200 text-sm"
                  aria-label="Facebook Eweliny Dyjak"
                >
                  <Facebook size={18} className="text-gold" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/konsultantka.kariery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors duration-200 text-sm"
                  aria-label="Instagram Eweliny Dyjak"
                >
                  <Instagram size={18} className="text-gold" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Przydatne linki */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">
              Przydatne linki
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2026 Ewelina Dyjak — Konsultantka Kariery. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-gray-600 text-xs">
            Lublin | Konsultacje online w całej Polsce
          </p>
        </div>
      </div>
    </footer>
  )
}
