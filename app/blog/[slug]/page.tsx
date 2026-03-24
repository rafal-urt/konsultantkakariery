import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'
import Breadcrumbs from '@/components/Breadcrumbs'
import { blogPosts, getBlogPost, getAllSlugs, type BlogPost, type BlogSection } from '@/lib/blog-data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
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
      images: post.image ? [{ url: `https://konsultantkakariery.pl${post.image}` }] : [],
    },
    alternates: {
      canonical: `https://konsultantkakariery.pl/blog/${post.slug}`,
    },
  }
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e')
    .replace(/ł/g, 'l').replace(/ń/g, 'n').replace(/ó/g, 'o')
    .replace(/ś/g, 's').replace(/ź/g, 'z').replace(/ż/g, 'z')
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case 'h2':
      return (
        <h2
          key={index}
          id={slugifyHeading(section.text ?? '')}
          className="text-2xl font-bold text-[#1A1A1A] mt-12 mb-5 leading-snug scroll-mt-28"
        >
          {section.text}
        </h2>
      )
    case 'h3':
      return (
        <h3
          key={index}
          className="text-xl font-semibold text-[#1A1A1A] mt-8 mb-3 leading-snug"
        >
          {section.text}
        </h3>
      )
    case 'paragraph':
      return (
        <p key={index} className="text-gray-600 leading-[1.85] mb-6 text-[1.05rem]">
          {section.text}
        </p>
      )
    case 'list':
      return (
        <ul key={index} className="space-y-3 my-7 pl-0">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600">
              <span className="text-gold font-bold mt-[3px] flex-shrink-0 text-base">→</span>
              <span className="leading-relaxed text-[1.05rem]">{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote
          key={index}
          className="relative my-10 pl-8 border-l-4 border-gold"
        >
          <p className="text-xl font-medium text-[#1A1A1A] leading-relaxed italic">
            &ldquo;{section.text}&rdquo;
          </p>
        </blockquote>
      )
    case 'callout':
      return (
        <div
          key={index}
          className="bg-beige border border-warm rounded-2xl p-6 my-8"
        >
          {section.title && (
            <p className="text-xs font-bold uppercase tracking-wider text-gold mb-2">
              {section.title}
            </p>
          )}
          <p className="text-gray-700 leading-relaxed text-[1.02rem]">{section.text}</p>
        </div>
      )
    default:
      return null
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)
  const tocItems = post.content
    .filter((s) => s.type === 'h2' && s.text)
    .map((s) => ({ text: s.text!, id: slugifyHeading(s.text!) }))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    image: post.image ? `https://konsultantkakariery.pl${post.image}` : undefined,
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

      {/* ===== HERO ===== */}
      <section className="bg-beige section-padding pb-0">
        <div className="container-width">
          <FadeInSection>
            <Breadcrumbs
              items={[
                { label: 'Blog', href: '/blog' },
                { label: post.title },
              ]}
            />
          </FadeInSection>

          <FadeInSection delay={0.05}>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-gray-400">
                  <Calendar size={13} />
                  <time dateTime={post.dateISO}>{post.date}</time>
                </span>
                <span className="flex items-center gap-1.5 text-sm text-gray-400">
                  <Clock size={13} />
                  {post.readingTime} czytania
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1A1A1A] leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Author mini */}
              <div className="flex items-center gap-3 pb-10 border-b border-warm">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/gfx/ewelina_7.jpg"
                    alt="Ewelina Dyjak"
                    fill
                    className="object-cover object-top"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A] leading-none mb-0.5">
                    Ewelina Dyjak
                  </p>
                  <p className="text-xs text-gray-400">Konsultantka Kariery</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== HERO IMAGE ===== */}
      {post.image && (
        <div className="bg-beige pb-12">
          <div className="container-width">
            <FadeInSection delay={0.1}>
              <div className="max-w-3xl rounded-2xl overflow-hidden aspect-[16/9] relative shadow-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 768px"
                  priority
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      )}

      {/* ===== CONTENT ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">

            {/* Article */}
            <article>
              <FadeInSection>
                <div>
                  {post.content.map((section, index) => renderSection(section, index))}
                </div>
              </FadeInSection>

              {/* Author bio */}
              <FadeInSection delay={0.1}>
                <div className="border-t border-warm mt-14 pt-10">
                  <div className="bg-beige rounded-2xl p-7 flex items-start gap-6">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image
                        src="/gfx/ewelina_7.jpg"
                        alt="Ewelina Dyjak"
                        fill
                        className="object-cover object-top"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-[#1A1A1A] text-lg mb-0.5">
                        Ewelina Dyjak
                      </p>
                      <p className="text-gold text-sm font-medium mb-3">
                        Konsultantka Kariery & Coach
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        Konsultantka kariery z ponad 7-letnim doświadczeniem i ponad 1000 godzinami sesji indywidualnych. Pomagam w świadomej zmianie zawodowej, odkrywaniu mocnych stron i budowaniu pewności siebie — online w całej Polsce i stacjonarnie w Lublinie.
                      </p>
                      <Link
                        href="/o-mnie"
                        className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:underline"
                      >
                        Poznaj mnie bliżej
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* Related posts */}
              {otherPosts.length > 0 && (
                <FadeInSection delay={0.15}>
                  <div className="mt-14">
                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">
                      Inne artykuły, które mogą Cię zainteresować
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      {otherPosts.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/blog/${p.slug}`}
                          className="group block bg-beige rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                        >
                          {p.image && (
                            <div className="aspect-[16/9] relative overflow-hidden">
                              <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, 33vw"
                              />
                            </div>
                          )}
                          <div className="p-4">
                            <span className="text-xs font-medium text-gold block mb-2">
                              {p.category}
                            </span>
                            <p className="text-sm font-semibold text-[#1A1A1A] leading-snug group-hover:text-gold transition-colors duration-200 mb-2">
                              {p.title}
                            </p>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              Czytaj <ArrowRight size={11} />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeInSection>
              )}
            </article>

            {/* Sidebar */}
            <FadeInSection direction="right" delay={0.2}>
              <aside className="space-y-6 lg:sticky lg:top-28">

                {/* CTA */}
                <div className="bg-brand-blue rounded-2xl p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                    Bezpłatna konsultacja
                  </p>
                  <h3 className="font-bold text-lg leading-snug mb-3">
                    Chcesz porozmawiać o swojej karierze?
                  </h3>
                  <p className="text-white/75 text-sm mb-5 leading-relaxed">
                    30 minut, bezpłatnie, bez zobowiązań. Sprawdź, jak mogę Ci pomóc.
                  </p>
                  <Link
                    href="/kontakt"
                    className="block text-center bg-white text-gold py-3 rounded-full text-sm font-bold hover:bg-cream transition-colors duration-200"
                  >
                    Umów się
                  </Link>
                </div>

                {/* Table of Contents */}
                {tocItems.length > 0 && (
                  <div className="bg-beige rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen size={14} className="text-gray-400" />
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Spis treści
                      </h3>
                    </div>
                    <nav>
                      <ol className="space-y-2">
                        {tocItems.map((item, i) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="flex items-start gap-2.5 text-sm text-gray-600 hover:text-gold transition-colors duration-200 group"
                            >
                              <span className="text-gold/50 font-semibold text-xs mt-0.5 flex-shrink-0 group-hover:text-gold transition-colors">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="leading-snug">{item.text}</span>
                            </a>
                          </li>
                        ))}
                      </ol>
                    </nav>
                  </div>
                )}

                {/* Other posts */}
                {otherPosts.slice(0, 2).length > 0 && (
                  <div className="bg-beige rounded-2xl p-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                      Inne artykuły
                    </h3>
                    <ul className="space-y-5">
                      {otherPosts.slice(0, 2).map((p) => (
                        <li key={p.slug}>
                          <Link href={`/blog/${p.slug}`} className="group block">
                            <span className="text-xs text-gold font-medium block mb-1">
                              {p.category}
                            </span>
                            <p className="text-sm text-gray-700 group-hover:text-gold transition-colors leading-snug mb-1">
                              {p.title}
                            </p>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Clock size={11} />
                              {p.readingTime} czytania
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  href="/blog"
                  className="block text-center border border-warm rounded-2xl py-4 text-sm font-medium text-gray-500 hover:border-gold hover:text-gold transition-all duration-200"
                >
                  Wszystkie artykuły →
                </Link>
              </aside>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  )
}
