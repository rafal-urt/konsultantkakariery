import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Clock, Search } from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog o zarządzaniu karierą | Ewelina Dyjak',
  description:
    'Artykuły o zarządzaniu karierą, zmianie pracy, budowaniu pewności siebie i świadomych decyzjach zawodowych. Porady konsultantki kariery Eweliny Dyjak.',
  openGraph: {
    title: 'Blog o zarządzaniu karierą | Ewelina Dyjak',
    description:
      'Praktyczne artykuły o zmianie pracy, pewności siebie i świadomym zarządzaniu karierą.',
    url: 'https://konsultantkakariery.pl/blog',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl/blog' },
}

const categories = [
  'Zmiana pracy',
  'Wypalenie zawodowe',
  'Pewność siebie',
  'Decyzje zawodowe',
  'CV i rekrutacja',
  'Przebranżowienie',
]

export default function BlogPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="max-w-2xl">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
            <p className="section-label">Blog</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Blog — zarządzanie karierą
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed">
              Praktyczne artykuły o świadomym zarządzaniu karierą, zmianie pracy
              i budowaniu pewności siebie. Pisane z doświadczenia, nie z teorii.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Posts grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <FadeInSection key={post.slug} delay={index * 0.1}>
                    <article>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group block bg-white border border-warm rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 h-full"
                      >
                        {post.image ? (
                          <div className="aspect-[16/9] relative overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        ) : (
                          <div className="bg-beige aspect-[16/9] flex items-center justify-center relative">
                            <span className="text-xs font-semibold uppercase tracking-widest text-gold/50">
                              {post.category}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-br from-warm/30 to-beige/60" />
                          </div>
                        )}

                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-gray-400">
                              <Clock size={12} />
                              {post.readingTime}
                            </span>
                          </div>

                          <time
                            dateTime={post.dateISO}
                            className="text-xs text-gray-400 block mb-3"
                          >
                            {post.date}
                          </time>

                          <h2 className="text-base font-semibold text-[#1A1A1A] mb-3 group-hover:text-gold transition-colors duration-200 leading-snug">
                            {post.title}
                          </h2>

                          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>

                          <span className="text-gold text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                            Czytaj więcej
                            <ArrowUpRight size={15} />
                          </span>
                        </div>
                      </Link>
                    </article>
                  </FadeInSection>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <FadeInSection direction="right" delay={0.2}>
              <aside className="space-y-8">
                {/* Search */}
                <div className="bg-beige rounded-2xl p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Szukaj
                  </h3>
                  <div className="relative">
                    <Search
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      aria-hidden="true"
                    />
                    <input
                      type="search"
                      placeholder="Szukaj artykułów..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-warm bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      aria-label="Wyszukaj artykuł"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-beige rounded-2xl p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Kategorie
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <button className="text-sm text-gray-600 hover:text-gold transition-colors duration-200 flex items-center gap-2 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent posts */}
                <div className="bg-beige rounded-2xl p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Ostatnie wpisy
                  </h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-sm text-gray-700 hover:text-gold transition-colors duration-200 leading-snug block"
                        >
                          {post.title}
                        </Link>
                        <time
                          dateTime={post.dateISO}
                          className="text-xs text-gray-400 mt-1 block"
                        >
                          {post.date}
                        </time>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-brand-blue rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-2">Gotowy/a na zmianę?</h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    Umów bezpłatną rozmowę wstępną i zacznij działać.
                  </p>
                  <Link
                    href="/kontakt"
                    className="block text-center bg-white text-gold py-3 rounded-full text-sm font-semibold hover:bg-cream transition-colors duration-200"
                  >
                    Umów się
                  </Link>
                </div>
              </aside>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  )
}
