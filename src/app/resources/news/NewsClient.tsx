'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { ArrowRightIcon, MailIcon } from '@/components/Icons';
import { useModal } from '@/components/ModalContext';
import { NEWS_ARTICLES } from '@/data/content';

export function NewsClient() {
  const { openBlogModal } = useModal();

  const featured = NEWS_ARTICLES.find((a) => a.featured);
  const rest = NEWS_ARTICLES.filter((a) => !a.featured);

  return (
    <div>
      {/* 1. Hero */}
      <PageHeader
        eyebrow="News & Press"
        title="Stories that move communities"
        text="Read the latest coverage, task force reports, community updates, and media features about RDS and anti-trafficking work in Compton."
        img="/images/hero-news.jpg"
      />

      {/* 2. Featured Article */}
      {featured && (
        <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
              Featured Story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              In the spotlight
            </h2>
          </div>

          <div
            className="group grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-xl border border-forest-950/5 hover:shadow-2xl transition-all cursor-pointer"
            data-reveal="2"
            onClick={() => {
              if (featured.href) {
                window.open(featured.href, '_blank');
              } else {
                openBlogModal({
                  title: featured.title,
                  tag: featured.tag,
                  img: featured.img,
                  content: [featured.summary],
                });
              }
            }}
          >
            {/* Image */}
            <div className="aspect-[16/10] lg:aspect-auto overflow-hidden bg-sand-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Content */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block rounded-full bg-leaf-600/15 text-leaf-600 text-xs font-bold px-3 py-1">
                  {featured.tag}
                </span>
                <span className="text-xs text-forest-900/50">{featured.date}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-forest-950 mb-4 leading-snug">
                {featured.title}
              </h3>
              <p className="text-sm text-forest-900/75 leading-relaxed mb-6">
                {featured.summary}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-leaf-600 group-hover:text-forest-950 transition-colors">
                {featured.href ? 'Read on CityPride Magazine' : 'Read More'}{' '}
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </section>
      )}

      {/* 3. Press & Blog Grid */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
              All Articles
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              Community updates & coverage
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="2">
            {rest.map((article) => (
              <div
                key={article.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-forest-950/5 hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => {
                  if (article.href) {
                    window.open(article.href, '_blank');
                  } else {
                    openBlogModal({
                      title: article.title,
                      tag: article.tag,
                      img: article.img,
                      content: [article.summary],
                    });
                  }
                }}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden bg-sand-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block rounded-full bg-leaf-600/15 text-leaf-600 text-xs font-bold px-3 py-1">
                      {article.tag}
                    </span>
                    <span className="text-xs text-forest-900/50">{article.date}</span>
                  </div>
                  <h3 className="font-display text-lg text-forest-950 mb-2 leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-forest-900/75 leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-leaf-600 group-hover:text-forest-950 transition-colors">
                    Read More <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Media Contact CTA */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8 py-16">
        <div className="bg-forest-950 text-sand-50 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6" data-reveal="true">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-white/10 text-olive-400 flex items-center justify-center flex-shrink-0">
              <MailIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-xl text-white mb-1">
                Media & Press Inquiries
              </h3>
              <p className="text-sm text-sand-100/70">
                For interviews, press kits, or coverage requests, reach out to our communications team.
              </p>
            </div>
          </div>
          <a
            href="mailto:Dropin@restorationdiversion.org?subject=Media%20Inquiry"
            className="rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold px-8 py-3 text-sm transition-colors whitespace-nowrap"
          >
            Contact Press Team
          </a>
        </div>
      </section>
    </div>
  );
}
