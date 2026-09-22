'use client';

import React from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { StatsBar } from '@/components/StatsBar';
import { FAQItem } from '@/components/FAQItem';
import {
  ABOUT_STATS,
  ABOUT_VALUES,
  TEAM_MEMBERS,
  PARTNERS,
  FAQS,
} from '@/data/content';
import { DynamicIcon, ArrowRightIcon } from '@/components/Icons';
import { useModal } from '@/components/ModalContext';

export function AboutClient() {
  const { openTeamModal, openContactModal } = useModal();

  return (
    <div>
      {/* 1. Header */}
      <PageHeader
        eyebrow="About Us"
        title="From exploitation to empowerment"
        text="RDS helps women move beyond immediate crisis toward safety, healing, stability, economic empowerment, independence, and leadership. Leaving trafficking is not the end of the journey — it is often the beginning."
        img="/images/hero-sisterhood.jpg"
      />

      {/* 2. Our Story */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
            Our Story
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-5 text-forest-950">
            Located on the Blade — meeting women where they are
          </h2>
          <p className="text-forest-900/80 leading-relaxed mb-4">
            The RDS Human Trafficking Drop-In Center is located on Long Beach Boulevard in Compton, along a corridor commonly known as &quot;The Blade.&quot; For women being trafficked or exploited along this corridor, life can feel like walking on a razor&apos;s edge. RDS intentionally placed its Drop-In Center within this community — we are not asking women to first find transportation across Los Angeles County before they can receive help.
          </p>
          <p className="text-forest-900/80 leading-relaxed mb-7">
            Our model recognizes that a survivor may leave exploitation and still need safe housing, counseling, food, clothing, transportation, education, employment, financial guidance, credit repair, healthcare, legal advocacy, safety resources, and healthy relationships. RDS works to surround each woman with the services and community necessary to rebuild her life.
          </p>
          <Link
            href="/program"
            className="inline-flex items-center gap-2 font-semibold text-leaf-600 hover:text-forest-800 transition-colors"
          >
            Explore our programs <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* 4-grid collage */}
        <div className="grid grid-cols-2 gap-4" data-reveal="2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/RDSMeeting11.jpg"
            alt=""
            className="rounded-2xl h-56 w-full object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/RDSMeeting13.JPG"
            alt=""
            className="rounded-2xl h-56 w-full object-cover mt-8"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/RDSMeeting23.jpg"
            alt=""
            className="rounded-2xl h-56 w-full object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/RDSMeeting26.jpg"
            alt=""
            className="rounded-2xl h-56 w-full object-cover mt-8"
          />
        </div>
      </section>

      {/* 3. Stats Bar */}
      <StatsBar stats={ABOUT_STATS} className="bg-forest-950 text-sand-50 py-16" />

      {/* 4. Our Values */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
              Our Values
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              What guides our work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_VALUES.map((val, idx) => (
              <div
                key={val.title}
                data-reveal={String(idx + 1)}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <span className="inline-flex h-12 w-12 rounded-xl bg-leaf-600/10 text-leaf-600 items-center justify-center mb-4">
                  <DynamicIcon name={val.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg mb-2 text-forest-950">
                  {val.title}
                </h3>
                <p className="text-sm text-forest-900/70 leading-relaxed">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
            Leadership
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
            The team behind RDS
          </h2>
          <p className="text-sm text-forest-900/60 mt-2">Click any profile to view background and biography</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={member.name}
              data-reveal={String(idx + 1)}
              onClick={() => openTeamModal(member)}
              className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-forest-950/5 cursor-pointer group"
            >
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg mb-5 ring-4 ring-leaf-600/15 group-hover:ring-leaf-600/40 transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-display text-xl text-forest-950">
                {member.name}
              </h3>
              <p className="text-sm text-leaf-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-sm text-forest-900/70 leading-relaxed line-clamp-3 mb-4">
                {member.bio}
              </p>
              <span className="text-xs font-bold text-leaf-600 group-hover:underline">
                View Full Bio →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Partners / Working Together */}
      <section className="bg-forest-950 text-sand-50 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <p className="uppercase tracking-[0.2em] text-olive-400 text-xs font-semibold mb-4" data-reveal="true">
            Working Together
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-10" data-reveal="true">
            Fighting trafficking on every level
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {PARTNERS.map((partner, idx) => (
              <div
                key={partner.name}
                data-reveal={String((idx % 3) + 1)}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-5 flex items-center gap-3 text-left hover:bg-white/10 transition-colors"
              >
                <span className="h-10 w-10 rounded-lg bg-olive-400/15 text-olive-400 flex items-center justify-center flex-shrink-0">
                  <DynamicIcon name={partner.icon} className="h-5 w-5" />
                </span>
                <span className="text-sand-100/90 text-sm font-medium">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => openContactModal('Partner Collaboration Inquiry')}
            className="rounded-full bg-olive-500 hover:bg-olive-400 text-forest-950 text-sm font-semibold px-8 py-3 transition-colors cursor-pointer"
          >
            Become an RDS Partner
          </button>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center mb-12" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
              FAQ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              Common questions
            </h2>
          </div>
          <div className="space-y-4" data-reveal="2">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
