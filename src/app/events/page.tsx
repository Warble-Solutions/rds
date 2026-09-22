import React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { StatsBar } from '@/components/StatsBar';
import {
  EVENT_STATS,
  FEATURED_EVENT,
  UPCOMING_EVENTS,
  WAYS_WE_GATHER,
  PAST_EVENTS,
} from '@/data/content';
import { DynamicIcon, PinIcon, MailIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Community Events | Restoration Diversion Services',
  description:
    'Join Restoration Diversion Services for task force meetings, survivor empowerment workshops, resource drives, and community awareness nights in Compton, CA.',
};

export default function EventsPage() {
  return (
    <div>
      {/* 1. Header */}
      <PageHeader
        eyebrow="Events"
        title="Community, action, and awareness"
        text="RDS brings people together — task forces, partners, and neighbors — to build a stronger, more coordinated fight against human trafficking."
        img="https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. Stats Bar */}
      <StatsBar stats={EVENT_STATS} />

      {/* 3. Featured Event */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <p
          className="uppercase tracking-[0.15em] text-leaf-600 text-xs font-semibold mb-4"
          data-reveal="true"
        >
          Featured Event
        </p>
        <div
          className="grid lg:grid-cols-2 gap-12 items-center bg-sand-100 rounded-3xl p-6 sm:p-10"
          data-reveal="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FEATURED_EVENT.img}
            alt={FEATURED_EVENT.title}
            className="rounded-2xl overflow-hidden shadow-lg h-80 w-full object-cover"
          />
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block rounded-full bg-leaf-600 text-white text-xs font-semibold px-4 py-1.5">
                {FEATURED_EVENT.type}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-900/60">
                <PinIcon className="h-4 w-4" /> {FEATURED_EVENT.place}
              </span>
            </div>
            <p className="text-clay-600 font-semibold text-sm mb-2">
              {FEATURED_EVENT.date}
            </p>
            <h2 className="font-display text-3xl mb-4 text-forest-950">
              {FEATURED_EVENT.title}
            </h2>
            <p className="text-forest-900/80 leading-relaxed mb-7">
              {FEATURED_EVENT.text}
            </p>
            <a
              href="mailto:Dropin@restorationdiversion.org?subject=Task Force Meeting RSVP"
              className="inline-flex items-center gap-2 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold px-7 py-3.5 transition-colors"
            >
              <MailIcon className="h-4 w-4" /> RSVP via Email
            </a>
          </div>
        </div>
      </section>

      {/* 4. Upcoming Events */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
              Mark Your Calendar
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              Upcoming events
            </h2>
          </div>
          <div className="space-y-4">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.title}
                data-reveal="true"
                className="group bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row gap-5 sm:items-center"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-forest-950 text-white flex flex-col items-center justify-center">
                  <span className="font-display text-2xl leading-none">
                    {event.day}
                  </span>
                  <span className="text-[10px] tracking-widest text-olive-400 mt-1">
                    {event.mon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-leaf-600 bg-leaf-600/10 rounded-full px-3 py-1">
                      <DynamicIcon name={event.icon} className="h-3.5 w-3.5" />
                      {event.type}
                    </span>
                    <span className="text-xs text-forest-900/50">
                      {event.time} · {event.place}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-forest-950">
                    {event.title}
                  </h3>
                  <p className="text-sm text-forest-900/70 leading-relaxed mt-1">
                    {event.text}
                  </p>
                </div>
                <a
                  href="mailto:Dropin@restorationdiversion.org"
                  className="flex-shrink-0 self-start sm:self-center rounded-full border border-forest-950/15 hover:border-leaf-600 hover:text-leaf-600 text-forest-950 text-sm font-semibold px-5 py-2.5 transition-colors"
                >
                  RSVP
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Ways We Gather */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
            What to Expect
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
            Ways we gather
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {WAYS_WE_GATHER.map((way, idx) => (
            <div
              key={way.title}
              data-reveal={String(idx + 1)}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-forest-950/5"
            >
              <span className="inline-flex h-12 w-12 rounded-xl bg-leaf-600/10 text-leaf-600 items-center justify-center mb-4">
                <DynamicIcon name={way.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg mb-3 text-forest-950">
                {way.title}
              </h3>
              <p className="text-sm text-forest-900/70 leading-relaxed">
                {way.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Past Events Highlights */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
              Looking Back
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              Past events &amp; highlights
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAST_EVENTS.map((item, idx) => (
              <div
                key={item.title}
                data-reveal={String((idx % 4) + 1)}
                className="group rounded-2xl overflow-hidden relative shadow-sm hover:shadow-lg transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/30 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 text-forest-950 text-[10px] font-bold px-3 py-1">
                  {item.tag}
                </span>
                <div className="absolute bottom-0 p-5">
                  <p className="text-olive-400 text-xs font-semibold mb-1">
                    {item.date}
                  </p>
                  <h3 className="font-display text-white text-lg leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Event Collaboration CTA */}
      <section className="bg-leaf-600 text-white py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl mb-5">Have an event to share?</h2>
          <p className="text-white/90 leading-relaxed mb-8">
            If your organization is planning a collaboration around anti-trafficking work in Compton, we&apos;d love to hear from you.
          </p>
          <a
            href="mailto:Dropin@restorationdiversion.org"
            className="inline-block rounded-full bg-white text-forest-950 font-semibold px-8 py-3.5 hover:bg-sand-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
