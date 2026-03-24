'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/o-mnie', label: 'O mnie' },
  { href: '/uslugi', label: 'Usługi' },
  { href: '/klienci', label: 'Klienci' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Nawigacja główna"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" aria-label="Strona główna — Ewelina Dyjak Konsultantka Kariery">
            <Image
              src="/gfx/ewelinadyjak_3_30wys.png"
              alt="Ewelina Dyjak — Konsultantka Kariery"
              width={221}
              height={30}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  pathname === link.href ? 'text-gold' : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/kontakt"
              className="bg-gold text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gold-dark transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Umów konsultację
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-beige transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="border-t border-warm pb-4 pt-2">
            <div className="flex flex-col space-y-1 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? 'text-gold bg-beige'
                      : 'text-gray-700 hover:text-gold hover:bg-beige'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="px-4 pt-2">
              <Link
                href="/kontakt"
                className="block text-center bg-gold text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gold-dark transition-colors duration-200"
              >
                Umów konsultację
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
