import React from 'react';
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'About Us | Restoration Diversion Services',
  description:
    'Since 2009, Restoration Diversion Services has stood with survivors of human trafficking in Compton, CA — offering a trauma-informed, holistic path forward.',
};

export default function AboutPage() {
  return (
    <div>
      {/* 1. Header */}
      <PageHeader
        eyebrow="About Us"
        title="Rebuilding lives of dignity and resilience"
        text="Since 2009, Restoration Diversion Services has stood with survivors of human trafficking in Compton, CA — offering a trauma-informed, holistic path forward."
        img="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. Our Story */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
            Our Story
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-5 text-forest-950">
            Founded on the belief that everyone deserves a way out
          </h2>
          <p className="text-forest-900/80 leading-relaxed mb-4">
            RDS was established to meet survivors of sex trafficking exactly where they are — often on the street, in crisis, and without resources. What began as a small act of outreach has grown into a full continuum of care: our Drop-In Center, the Survivor Diversion Program, wraparound supportive services, and emergency housing partnerships.
          </p>
          <p className="text-forest-900/80 leading-relaxed mb-7">
            Our skilled case managers provide personalized, one-on-one support — connecting each survivor to housing, medical care, legal assistance, and counseling, while navigating the Compton District Attorney&apos;s Office and California Victim Compensation Board on their behalf.
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
            src="https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&w=600&q=80"
            alt=""
            className="rounded-2xl h-56 w-full object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
            alt=""
            className="rounded-2xl h-56 w-full object-cover mt-8"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80"
            alt=""
            className="rounded-2xl h-56 w-full object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80"
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
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={member.name}
              data-reveal={String(idx + 1)}
              className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-forest-950/5"
            >
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg mb-5 ring-4 ring-leaf-600/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-xl text-forest-950">
                {member.name}
              </h3>
              <p className="text-sm text-leaf-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-sm text-forest-900/70 leading-relaxed">
                {member.bio}
              </p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
