import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface Props {
  items: BreadcrumbItem[]
  baseUrl?: string
}

export default function Breadcrumbs({ items, baseUrl = 'https://konsultantkakariery.pl' }: Props) {
  const all = [{ label: 'Strona główna', href: '/' }, ...items]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
          {all.map((item, i) => {
            const isLast = i === all.length - 1
            return (
              <li key={i} className="flex items-center gap-1 min-w-0">
                {i === 0 ? (
                  <Link
                    href="/"
                    className="flex items-center gap-1 hover:text-gold transition-colors duration-200 flex-shrink-0"
                    aria-label="Strona główna"
                  >
                    <Home size={13} />
                    <span className="sr-only">Strona główna</span>
                  </Link>
                ) : isLast ? (
                  <span
                    className="text-gray-500 truncate max-w-[200px] sm:max-w-xs"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href!}
                    className="hover:text-gold transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight size={13} className="flex-shrink-0 text-gray-300" />
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
