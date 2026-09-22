'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HeroCarousel } from '@/components/HeroCarousel';
import { StatsBar } from '@/components/StatsBar';
import {
  HOME_STATS,
  HOME_VALUES,
  PROGRAMS,
  TIMELINE,
  VOLUNTEER_AREAS,
  HOME_TESTIMONIALS,
  BLOG_ARTICLES,
} from '@/data/content';
import {
  DynamicIcon,
  TargetIcon,
  EyeIcon,
  ArrowRightIcon,
  PinIcon,
  MailIcon,
  PhoneIcon,
  BookIcon,
} from '@/components/Icons';

export default function HomePage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <div>
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Stats Bar */}
      <StatsBar stats={HOME_STATS} />

      {/* 3. Who We Are */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80"
          alt="Women supporting one another"
          className="rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1 h-96 w-full object-cover"
        />
        <div className="order-1 lg:order-2">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
            Who We Are
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-5 text-forest-950">
            A Compton nonprofit walking with survivors since 2009.
          </h2>
          <p className="text-forest-900/80 leading-relaxed mb-4">
            Restoration Diversion Services helps victims and survivors of human trafficking rebuild lives of dignity and resilience through trauma-informed, holistic care — connecting each person to housing, medical care, legal assistance, and counseling.
          </p>
          <p className="text-forest-900/80 leading-relaxed mb-7">
            With educational resources, practical tools, and compassionate guidance, we believe knowledge drives change — and every survivor can reclaim control of a fulfilling future.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-semibold text-leaf-600 hover:text-forest-800 transition-colors"
          >
            More about our story <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="bg-forest-950 text-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-9">
            <span className="inline-flex h-12 w-12 rounded-xl bg-olive-400/15 text-olive-400 items-center justify-center mb-6">
              <TargetIcon className="h-6 w-6" />
            </span>
            <p className="uppercase tracking-[0.2em] text-olive-400 text-xs font-semibold mb-3">
              Our Mission
            </p>
            <h3 className="font-display text-2xl mb-4">
              Empowering survivors on their path to freedom
            </h3>
            <p className="text-sand-100/80 leading-relaxed">
              To equip survivors of human trafficking with the resources, advocacy, and compassionate care they need to move from crisis to lasting self-sufficiency.
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-9">
            <span className="inline-flex h-12 w-12 rounded-xl bg-olive-400/15 text-olive-400 items-center justify-center mb-6">
              <EyeIcon className="h-6 w-6" />
            </span>
            <p className="uppercase tracking-[0.2em] text-olive-400 text-xs font-semibold mb-3">
              Our Vision
            </p>
            <h3 className="font-display text-2xl mb-4">
              A Compton where every survivor finds a way forward
            </h3>
            <p className="text-sand-100/80 leading-relaxed">
              A community where survivors are met with resources instead of judgment, where the path out of exploitation is visible, and independence is within everyone&apos;s reach.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Our Values */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
              Our Values
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              What guides our work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_VALUES.map((val, idx) => (
              <div
                key={val.title}
                data-reveal={String(idx + 1)}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <span className="inline-flex h-11 w-11 rounded-xl bg-leaf-600/10 text-leaf-600 items-center justify-center mb-4">
                  <DynamicIcon name={val.icon} className="h-5 w-5" />
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

      {/* 6. What We Do */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
              What We Do
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              Comprehensive support, every step of the way
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((prog, idx) => (
              <div
                key={prog.title}
                data-reveal={String((idx % 3) + 1)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group border border-forest-950/5"
              >
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prog.img}
                    alt=""
                    className="h-40 group-hover:scale-105 transition-transform duration-500 w-full object-cover"
                  />
                  <div className="absolute -bottom-6 left-5 h-12 w-12 rounded-xl bg-leaf-600 text-white flex items-center justify-center shadow-lg">
                    <DynamicIcon name={prog.icon} className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6 pt-9">
                  <h3 className="font-display text-lg mb-2 text-forest-950">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-forest-900/70 leading-relaxed">
                    {prog.short}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/program"
              className="inline-block rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold px-7 py-3.5 transition-colors"
            >
              See All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Our Journey / Timeline */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
              Our Journey
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              Growing our reach, year after year
            </h2>
          </div>
          <div className="space-y-6">
            {TIMELINE.map((step) => (
              <div
                key={step.year}
                data-reveal="true"
                className="flex gap-5 sm:gap-7 bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-leaf-600 text-white flex items-center justify-center">
                  <DynamicIcon name={step.icon} className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <div>
                  <span className="font-display text-xl sm:text-2xl text-leaf-600">
                    {step.year}
                  </span>
                  <h3 className="font-display text-lg mt-1 mb-1.5 text-forest-950">
                    {step.title}
                  </h3>
                  <p className="text-sm text-forest-900/70 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Volunteer / Get Involved */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
            Get Involved
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-5 text-forest-950">
            Become a volunteer
          </h2>
          <p className="text-forest-900/80 leading-relaxed mb-8 max-w-lg">
            RDS runs on community. Whether you have an afternoon or an ongoing weekly commitment, there&apos;s a place for you to help survivors move toward independence.
          </p>
          <div className="space-y-4 mb-8">
            {VOLUNTEER_AREAS.map((area) => (
              <div key={area.title} className="flex items-start gap-4">
                <span className="h-2.5 w-2.5 rounded-full bg-leaf-600 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-forest-950">{area.title}</h4>
                  <p className="text-sm text-forest-900/70">{area.text}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="mailto:Dropin@restorationdiversion.org?subject=Volunteer Interest"
            className="inline-block rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold px-7 py-3.5 transition-colors"
          >
            Apply to Volunteer
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=600&q=80"
            alt=""
            className="rounded-2xl h-72 w-full object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80"
            alt=""
            className="rounded-2xl h-72 w-full object-cover mt-10"
          />
        </div>
      </section>

      {/* 9. Success Stories Testimonial Slider */}
      <section className="relative bg-forest-950 text-sand-50 py-24 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=60"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <p className="uppercase tracking-[0.2em] text-olive-400 text-xs font-semibold mb-4">
            Success Stories
          </p>
          <svg
            className="mx-auto mb-6 h-10 w-10 text-olive-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 7c-2.8 0-5 2.2-5 5v5h5v-5H5c0-1.1.9-2 2-2V7zm10 0c-2.8 0-5 2.2-5 5v5h5v-5h-2c0-1.1.9-2 2-2V7z" />
          </svg>
          <p className="font-display text-2xl sm:text-3xl leading-snug mb-4 min-h-[5rem]">
            &ldquo;{HOME_TESTIMONIALS[testimonialIdx].quote}&rdquo;
          </p>
          <p className="text-sand-100/60 text-sm mb-8">
            — {HOME_TESTIMONIALS[testimonialIdx].id}
          </p>
          <div className="flex justify-center gap-2.5 mb-8">
            {HOME_TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTestimonialIdx(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === testimonialIdx
                    ? 'w-8 bg-olive-400'
                    : 'w-2.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          <Link
            href="/stories"
            className="inline-block rounded-full border border-sand-50/30 hover:border-sand-50/60 font-semibold px-7 py-3.5 transition-colors"
          >
            Read Survivors&apos; Stories
          </Link>
        </div>
      </section>

      {/* 10. From Our Blog */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
              From Our Blog
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              Stories, insights, and updates
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_ARTICLES.map((article, idx) => (
              <div
                key={article.title}
                data-reveal={String(idx + 1)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.img}
                  alt=""
                  className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-leaf-600 mb-3">
                    <BookIcon className="h-4 w-4" /> {article.tag}
                  </span>
                  <h3 className="font-display text-lg text-forest-950 leading-snug">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Donate Banner */}
      <section id="donate" className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="rounded-3xl bg-leaf-600 text-white px-8 sm:px-16 py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl mb-5">
            Every gift restores a life.
          </h2>
          <p className="max-w-xl mx-auto text-white/90 leading-relaxed mb-8">
            Your support funds shelter, counseling, legal aid, and job training for survivors rebuilding their lives in Compton and beyond.
          </p>
          <a
            href="https://www.paypal.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-white text-forest-950 font-semibold px-8 py-3.5 hover:bg-sand-100 transition-colors"
          >
            Donate via PayPal
          </a>
        </div>
      </section>

      {/* 12. Contact Us */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14">
          <div>
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
              Contact Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-5 text-forest-950">
              We&apos;re here, day or night
            </h2>
            <p className="text-forest-900/80 leading-relaxed mb-8 max-w-lg">
              Whether you need support, want to volunteer, or are looking to partner with RDS, reach out any time. Every message is handled with confidentiality and care.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="h-11 w-11 rounded-full bg-leaf-600/10 text-leaf-600 flex items-center justify-center">
                  <PinIcon className="h-5 w-5" />
                </span>
                <span className="text-forest-950/85">
                  Long Beach Boulevard, Compton, CA
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-11 w-11 rounded-full bg-leaf-600/10 text-leaf-600 flex items-center justify-center">
                  <MailIcon className="h-5 w-5" />
                </span>
                <a
                  href="mailto:Dropin@restorationdiversion.org"
                  className="text-forest-950/85 hover:underline"
                >
                  Dropin@restorationdiversion.org
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-11 w-11 rounded-full bg-leaf-600/10 text-leaf-600 flex items-center justify-center">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span className="text-forest-950/85">
                  (555) 208-0100 · 24/7 confidential line
                </span>
              </div>
            </div>
          </div>

          <form
            className="bg-white rounded-3xl p-8 shadow-sm space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Message received! We will be in touch shortly.');
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-forest-950 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-forest-950/15 px-4 py-2.5 outline-none focus:border-leaf-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-forest-950 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-forest-950/15 px-4 py-2.5 outline-none focus:border-leaf-600"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-forest-950 mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                required
                className="w-full rounded-xl border border-forest-950/15 px-4 py-2.5 outline-none focus:border-leaf-600"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold px-7 py-3.5 transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
