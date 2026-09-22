'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { StatsBar } from '@/components/StatsBar';
import { PROGRAMS, PROGRAM_STATS } from '@/data/content';
import { DynamicIcon, ArrowRightIcon } from '@/components/Icons';
import { useModal } from '@/components/ModalContext';

export function ProgramClient() {
  const { openContactModal, openDonateModal } = useModal();

  return (
    <div>
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Our Program"
        title="A complete path from crisis to independence"
        text="Every survivor's journey is different. That's why RDS offers six interconnected programs — from an open door on the street to long-term stability."
        img="/images/hero-community-meeting.jpg"
      />

      {/* 2. Stats Bar */}
      <StatsBar stats={PROGRAM_STATS} />

      {/* 3. Detailed Alternating Programs */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 space-y-24">
        {PROGRAMS.map((prog, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div
              key={prog.title}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div
                className={`relative ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Main Program Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="rounded-3xl overflow-hidden shadow-xl h-80 w-full object-cover"
                />
                {/* Secondary Inset Image */}
                {prog.img2 && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={prog.img2}
                    alt=""
                    className="hidden sm:block absolute -bottom-8 -right-6 w-40 h-32 rounded-2xl overflow-hidden shadow-xl ring-4 ring-sand-50 object-cover"
                  />
                )}
                {/* Floating Icon */}
                <div className="absolute -top-6 left-6 h-14 w-14 rounded-2xl bg-leaf-600 text-white flex items-center justify-center shadow-xl">
                  <DynamicIcon name={prog.icon} className="h-7 w-7" />
                </div>
              </div>

              {/* Text & Points */}
              <div
                className={isReversed ? 'lg:order-1' : 'lg:order-2'}
              >
                <p className="text-leaf-600 text-xs font-semibold uppercase tracking-wider mb-2">
                  {prog.tag}
                </p>
                <h2 className="font-display text-3xl mb-4 text-forest-950">
                  {prog.title}
                </h2>
                <p className="text-forest-900/80 leading-relaxed mb-6">
                  {prog.text}
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {prog.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-forest-950/85"
                    >
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-leaf-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {point}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => openContactModal(`Inquiry about ${prog.title}`)}
                  className="text-xs font-bold text-leaf-600 hover:text-forest-950 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  Ask about {prog.title} →
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. Bottom CTA */}
      <section className="bg-forest-950 text-sand-50 py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl mb-5">
            Need help right now? Reach out any time.
          </h2>
          <p className="text-sand-100/85 leading-relaxed mb-8">
            Our Drop-In Center is open, and our team is ready to listen — free, confidential, no referral required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => openContactModal('Drop-In Center Support')}
              className="inline-flex items-center gap-2 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold px-8 py-3.5 transition-colors cursor-pointer shadow-md"
            >
              Contact the Drop-In Center <ArrowRightIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => openDonateModal()}
              className="inline-block rounded-full border border-sand-50/30 hover:border-sand-50/60 font-semibold px-8 py-3.5 transition-colors cursor-pointer"
            >
              Support Our Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
