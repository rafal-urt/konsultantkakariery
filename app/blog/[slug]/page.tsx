import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'
import { blogPosts, getBlogPost, getAllSlugs, type BlogPost } from '@/lib/blog-data'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Blog Eweliny Dyjak`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://konsultantkakariery.pl/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.dateISO,
      authors: ['Ewelina Dyjak'],
    },
    alternates: {
      canonical: `https://konsultantkakariery.pl/blog/${post.slug}`,
    },
  }
}

function renderContent(post: BlogPost) {
  return post.content.map((section, index) => {
    switch (section.type) {
      case 'h2':
        return (
          <h2
            key={index}
            className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 leading-snug"
          >
            {section.text}
          </h2>
        )
      case 'h3':
        return (
          <h3
            key={index}
            className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3"
          >
            {section.text}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className="text-gray-600 leading-relaxed mb-5 text-lg">
            {section.text}
          </p>
        )
      case 'list':
        return (
          <ul key={index} className="space-y-3 my-6 pl-0">
            {section.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <span className="text-gold font-bold mt-1 flex-shrink-0">→</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )
      default:
        return null
    }
  })
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const otherPosts = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    author: {
      '@type': 'Person',
      name: 'Ewelina Dyjak',
      url: 'https://konsultantkakariery.pl/o-mnie',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Konsultantka Kariery — Ewelina Dyjak',
      url: 'https://konsultantkakariery.pl',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://konsultantkakariery.pl/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== BREADCRUMB + HEADER ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          {/* Back */}
          <FadeInSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gold transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={16} />
              Wróć do bloga
            </Link>
          </FadeInSection>

          <FadeInSection delay={0.05}>
            <div className="max-w-3xl">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-xs font-semibold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-gray-400">
                  <Calendar size={14} />
                  <time dateTime={post.dateISO}>{post.date}</time>
                </span>
                <span className="flex items-center gap-1.5 text-sm text-gray-400">
                  <Clock size={14} />
                  {post.readingTime} czytania
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-gray-500 text-xl leading-relaxed">{post.excerpt}</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Article */}
            <article className="lg:col-span-2">
              {/* TODO: Zamień na prawdziwe zdjęcie główne artykułu */}
              <div className="bg-beige rounded-2xl aspect-[16/9] flex items-center justify-center mb-10 relative overflow-hidden">
                <span className="text-sm font-medium text-gray-400 relative z-10">
                  Zdjęcie do artykułu
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-warm/40 to-beige/60" />
              </div>

              <FadeInSection>
                <div className="prose-content">
                  {renderContent(post)}
                </div>
              </FadeInSection>

              {/* Author */}
              <FadeInSection delay={0.1}>
                <div className="border-t border-warm mt-12 pt-10 flex items-start gap-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/gfx/ewelina_9.jpg"
                      alt="Ewelina Dyjak"
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Ewelina Dyjak</p>
                    <p className="text-gold text-sm mb-2">Konsultantka Kariery</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Konsultantka kariery i coach z ponad 7-letnim doświadczeniem.
                      Pomagam w świadomej zmianie zawodowej, odkrywaniu mocnych stron
                      i budowaniu pewności siebie.
                    </p>
                    <Link
                      href="/o-mnie"
                      className="text-gold text-sm font-medium hover:underline mt-2 inline-block"
                    >
                      Więcej o mnie
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            </article>

            {/* Sidebar */}
            <FadeInSection direction="right" delay={0.2}>
              <aside className="space-y-8 lg:sticky lg:top-28">
                {/* CTA */}
                <div className="bg-brand-blue rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">
                    Chcesz porozmawiać o swojej karierze?
                  </h3>
                  <p className="text-white/80 text-sm mb-5 leading-relaxed">
                    Umów bezpłatną rozmowę wstępną — bez zobowiązań.
                  </p>
                  <Link
                    href="/kontakt"
                    className="block text-center bg-white text-gold py-3 rounded-full text-sm font-semibold hover:bg-cream transition-colors duration-200"
                  >
                    Umów się
                  </Link>
                </div>

                {/* Other posts */}
                {otherPosts.length > 0 && (
                  <div className="bg-beige rounded-2xl p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                      Inne artykuły
                    </h3>
                    <ul className="space-y-5">
                      {otherPosts.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/blog/${p.slug}`}
                            className="group block"
                          >
                            <span className="text-xs text-brand-blue font-medium block mb-1">
                              {p.category}
                            </span>
                            <p className="text-sm text-gray-700 group-hover:text-gold transition-colors leading-snug mb-1">
                              {p.title}
                            </p>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              Czytaj <ArrowUpRight size={12} />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* All posts */}
                <Link
                  href="/blog"
                  className="block text-center border border-warm rounded-2xl py-4 text-sm font-medium text-gray-600 hover:border-gold hover:text-gold transition-all duration-200"
                >
                  Wszystkie artykuły
                </Link>
              </aside>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  )
}
