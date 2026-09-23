'use client';

import React from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { DynamicIcon, ArrowRightIcon, PhoneIcon, PinIcon, MailIcon } from '@/components/Icons';
import { useModal } from '@/components/ModalContext';
import { RESOURCE_LINKS } from '@/data/content';

export function ResourcesClient() {
  const { openDonateModal, openVolunteerModal } = useModal();

  return (
    <div>
      {/* 1. Hero */}
      <PageHeader
        eyebrow="Resources & Community"
        title="Everything you need in one place"
        text="From our leadership team and career opportunities to the latest news and community resources — find what you are looking for."
        img="/images/hero-resources.jpg"
      />

      {/* 2. Hub Cards */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
            Explore
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
            Resources & Information
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8" data-reveal="2">
          {RESOURCE_LINKS.map((res) => (
            <Link
              key={res.href}
              href={res.href}
              className="group bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-forest-950/5 hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="h-16 w-16 rounded-2xl bg-leaf-600/10 text-leaf-600 flex items-center justify-center mb-6 group-hover:bg-leaf-600 group-hover:text-white transition-colors">
                <DynamicIcon name={res.icon} className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl text-forest-950 mb-3">{res.title}</h3>
              <p className="text-sm text-forest-900/75 leading-relaxed mb-6 flex-1">
                {res.text}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-leaf-600 group-hover:text-forest-950 transition-colors">
                Explore <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Quick Links & Emergency Info */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
              Quick Access
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              Helpful links & contacts
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal="2">
            {/* Card 1: 24/7 Hotline */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-forest-950/5">
              <div className="h-12 w-12 rounded-2xl bg-clay-500/10 text-clay-600 flex items-center justify-center mb-5">
                <PhoneIcon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg text-forest-950 mb-2">24/7 Crisis Line</h3>
              <a
                href="tel:3106391695"
                className="font-display text-xl font-bold text-forest-950 hover:text-leaf-600 transition-colors block mb-1"
              >
                (310) 639-1695
              </a>
              <p className="text-xs text-forest-900/50">Free · Confidential · Always available</p>
            </div>

            {/* Card 2: Drop-In Center */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-forest-950/5">
              <div className="h-12 w-12 rounded-2xl bg-olive-400/15 text-olive-600 flex items-center justify-center mb-5">
                <PinIcon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg text-forest-950 mb-2">Drop-In Center</h3>
              <p className="text-sm text-forest-900/80 mb-1">
                208 N. Long Beach Blvd, Compton, CA 90221
              </p>
              <p className="text-xs text-forest-900/50">Mon – Fri · 9 AM – 5 PM · Walk-in</p>
            </div>

            {/* Card 3: Email */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-forest-950/5">
              <div className="h-12 w-12 rounded-2xl bg-leaf-600/10 text-leaf-600 flex items-center justify-center mb-5">
                <MailIcon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg text-forest-950 mb-2">Email Us</h3>
              <a
                href="mailto:Dropin@restorationdiversion.org"
                className="text-sm font-semibold text-forest-950 hover:text-leaf-600 transition-colors break-all block mb-1"
              >
                Dropin@restorationdiversion.org
              </a>
              <p className="text-xs text-forest-900/50">Responded within 1 business day</p>
            </div>

            {/* Card 4: Get Involved */}
            <div className="bg-forest-950 text-sand-50 rounded-3xl p-8 shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-white/10 text-olive-400 flex items-center justify-center mb-5">
                <DynamicIcon name="heartHand" className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg text-white mb-3">Get Involved</h3>
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => openDonateModal()}
                  className="w-full py-2.5 px-4 rounded-xl bg-clay-500 hover:bg-clay-600 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Donate Now
                </button>
                <button
                  type="button"
                  onClick={() => openVolunteerModal()}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Become a Volunteer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ Quick Link */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8 py-16">
        <div className="bg-sand-50 rounded-3xl p-8 sm:p-10 border border-forest-950/5 flex flex-col md:flex-row items-center justify-between gap-6" data-reveal="true">
          <div>
            <h3 className="font-display text-2xl text-forest-950 mb-2">
              Have a question?
            </h3>
            <p className="text-sm text-forest-900/70">
              Visit our Contact page for FAQs, inquiry forms, and directions to the Drop-In Center.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold px-8 py-3 text-sm transition-colors whitespace-nowrap flex items-center gap-2"
          >
            Contact Us <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
