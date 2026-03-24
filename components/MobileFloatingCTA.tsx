'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileFloatingCTA() {
  const pathname = usePathname()

  // Hide on kontakt page (form is already visible)
  if (pathname === '/kontakt') return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-gradient-to-t from-white via-white/90 to-transparent px-4 pb-4 pt-8">
        <Link
          href="/kontakt"
          className="block w-full text-center bg-gold text-white py-4 rounded-full font-semibold text-sm shadow-lg hover:bg-gold-dark transition-all duration-200"
        >
          Umów konsultację
        </Link>
      </div>
    </div>
  )
}
