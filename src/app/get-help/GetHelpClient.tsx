'use client';

import React from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { DynamicIcon, ArrowRightIcon, PhoneIcon, PinIcon, MailIcon } from '@/components/Icons';

export function GetHelpClient() {
  return (
    <div>
      {/* 1. Hero — urgent, empathetic tone */}
      <PageHeader
        eyebrow="You Are Not Alone"
        title="Help is here. Right now."
        text="Whether you are experiencing trafficking, supporting someone who is, or just need a safe place to go — RDS is here for you. Everything is free, confidential, and judgment-free."
        img="/images/hero-get-help.jpg"
      />

      {/* 2. Emergency Banner */}
      <section className="bg-clay-500 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 animate-pulse">
              <PhoneIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                24/7 Confidential Helpline
              </p>
              <a
                href="tel:3106391695"
                className="font-display text-2xl sm:text-3xl font-bold hover:text-white/90 transition-colors"
              >
                (310) 639-1695
              </a>
            </div>
          </div>
          <div className="text-center sm:text-right text-sm text-white/80">
            <p>Free · Confidential · No ID required</p>
            <p>If you are in immediate danger, call <strong>911</strong></p>
          </div>
        </div>
      </section>

      {/* 3. Three Pathways */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
            How Can We Help?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
            Choose the path that fits your situation
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8" data-reveal="2">
          {/* Pathway 1: I need help */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-forest-950/5 flex flex-col">
            <div className="h-16 w-16 rounded-2xl bg-clay-500/10 text-clay-600 flex items-center justify-center mb-6">
              <DynamicIcon name="heartShield" className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl text-forest-950 mb-3">
              I need help
            </h3>
            <p className="text-sm text-forest-900/75 leading-relaxed mb-6 flex-1">
              If you are being trafficked, exploited, or are in an unsafe situation — you do not have to figure this out alone. RDS can provide immediate safety, food, clothing, a place to rest, and a team that will not judge you.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Walk into the Drop-In Center — no appointment needed',
                'Call our 24/7 helpline: (310) 639-1695',
                'Everything is free and confidential',
                'No ID, no paperwork, no questions you are not ready for',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-forest-900/80">
                  <span className="h-2 w-2 rounded-full bg-clay-500 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="tel:3106391695"
              className="rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold px-7 py-3 text-sm transition-colors text-center"
            >
              Call Now
            </a>
          </div>

          {/* Pathway 2: I know someone who needs help */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-forest-950/5 flex flex-col">
            <div className="h-16 w-16 rounded-2xl bg-leaf-600/10 text-leaf-600 flex items-center justify-center mb-6">
              <DynamicIcon name="users" className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl text-forest-950 mb-3">
              Someone I know needs help
            </h3>
            <p className="text-sm text-forest-900/75 leading-relaxed mb-6 flex-1">
              If you suspect someone is being trafficked or exploited — a friend, family member, neighbor, or stranger — your concern matters. You don&apos;t need to be certain. RDS can guide you.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Call us to talk through what you are seeing',
                'We can help you approach the situation safely',
                'We will never force contact with the person',
                'Your identity can remain anonymous',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-forest-900/80">
                  <span className="h-2 w-2 rounded-full bg-leaf-600 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="tel:3106391695"
              className="rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold px-7 py-3 text-sm transition-colors text-center"
            >
              Call for Guidance
            </a>
          </div>

          {/* Pathway 3: I want to report */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-forest-950/5 flex flex-col">
            <div className="h-16 w-16 rounded-2xl bg-olive-400/15 text-olive-600 flex items-center justify-center mb-6">
              <DynamicIcon name="scale" className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl text-forest-950 mb-3">
              I want to report trafficking
            </h3>
            <p className="text-sm text-forest-900/75 leading-relaxed mb-6 flex-1">
              If you believe trafficking is happening in your community, you can report it. You do not need proof — your tip could save a life.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'National Human Trafficking Hotline: 1-888-373-7888',
                'Text "HELP" to 233733 (BeFree)',
                'Local law enforcement: call 911',
                'RDS helpline: (310) 639-1695',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-forest-900/80">
                  <span className="h-2 w-2 rounded-full bg-olive-500 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="tel:18883737888"
              className="rounded-full border border-forest-950/20 hover:bg-sand-100 text-forest-950 font-semibold px-7 py-3 text-sm transition-colors text-center"
            >
              Call National Hotline
            </a>
          </div>
        </div>
      </section>

      {/* 4. What to Expect at the Drop-In Center */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div data-reveal="true">
              <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
                What to Expect
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-5">
                When you walk through our doors
              </h2>
              <p className="text-forest-900/80 leading-relaxed mb-6">
                The RDS Drop-In Center is not a shelter — it&apos;s a safe space. There is no intake form to fill out, no ID to show, and no questions you&apos;re not ready to answer. You can come as you are.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: 'A warm welcome',
                    text: 'You will be greeted by a staff member or volunteer who understands what you may be going through. No judgment, no pressure.',
                  },
                  {
                    title: 'Food, rest, and basic needs',
                    text: 'Hot meals, clean clothing, hygiene products, a shower, and a quiet place to sit. Whatever you need right now.',
                  },
                  {
                    title: 'Someone to listen',
                    text: 'If you want to talk, our team is here. If you just want to sit quietly, that is perfectly okay too.',
                  },
                  {
                    title: 'Resources when you are ready',
                    text: 'Case management, housing help, counseling, legal advocacy, education — all available when you decide you want them. On your timeline.',
                  },
                ].map((step) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <span className="h-3 w-3 rounded-full bg-leaf-600 mt-1.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-base text-forest-950 mb-0.5">{step.title}</h3>
                      <p className="text-sm text-forest-900/70 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-forest-950/5" data-reveal="2">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-leaf-600/10 text-leaf-600 flex items-center justify-center">
                  <PinIcon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-forest-950">Drop-In Center</h3>
                  <p className="text-xs text-forest-900/50">Walk-in · No appointment needed</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-sm text-forest-900/80">
                  <PinIcon className="h-4 w-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-forest-950">208 N. Long Beach Blvd</p>
                    <p>Compton, CA 90221</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-forest-900/80">
                  <PhoneIcon className="h-4 w-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="tel:3106391695" className="font-semibold text-forest-950 hover:text-leaf-600 transition-colors">
                      (310) 639-1695
                    </a>
                    <p>24/7 · Free · Confidential</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-forest-900/80">
                  <MailIcon className="h-4 w-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="mailto:Dropin@restorationdiversion.org" className="font-semibold text-forest-950 hover:text-leaf-600 transition-colors">
                      Dropin@restorationdiversion.org
                    </a>
                    <p>Responded within 1 business day</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-forest-900/80">
                  <DynamicIcon name="building" className="h-4 w-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-forest-950">Hours</p>
                    <p>Mon – Fri · 9:00 AM – 5:00 PM</p>
                    <p className="text-xs text-forest-900/50">Helpline available 24/7</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=208+N+Long+Beach+Blvd+Compton+CA+90221"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold px-7 py-3 text-sm transition-colors flex items-center justify-center gap-2"
              >
                <PinIcon className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Warning Signs */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
            Know the Signs
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-4">
            How to recognize human trafficking
          </h2>
          <p className="text-forest-900/70 text-sm leading-relaxed">
            Trafficking can happen anywhere — in homes, businesses, neighborhoods. Here are warning signs that someone may need help.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="2">
          {[
            {
              title: 'Controlled movement',
              text: 'The person is not free to come and go, is always accompanied, or appears to be monitored.',
              icon: 'compass',
            },
            {
              title: 'Signs of abuse or neglect',
              text: 'Visible injuries, malnourishment, exhaustion, or poor hygiene — especially when the person seems fearful.',
              icon: 'heartShield',
            },
            {
              title: 'Fear and avoidance',
              text: 'The person avoids eye contact, seems anxious around others, or is reluctant to speak for themselves.',
              icon: 'heartHand',
            },
            {
              title: 'No access to personal documents',
              text: 'Someone else controls their ID, phone, or money. They may not know their own address.',
              icon: 'scale',
            },
            {
              title: 'Working unusual hours or conditions',
              text: 'The person works excessively, is not paid fairly, or appears to live at their workplace.',
              icon: 'briefcase',
            },
            {
              title: 'Scripted or rehearsed responses',
              text: 'Answers to questions seem memorized or coached, especially when someone else is nearby.',
              icon: 'book',
            },
          ].map((sign) => (
            <div
              key={sign.title}
              className="bg-sand-50 rounded-2xl p-6 border border-forest-950/5"
            >
              <div className="h-10 w-10 rounded-xl bg-clay-500/10 text-clay-600 flex items-center justify-center mb-4">
                <DynamicIcon name={sign.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base text-forest-950 mb-2">{sign.title}</h3>
              <p className="text-sm text-forest-900/70 leading-relaxed">{sign.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center" data-reveal="3">
          <p className="text-sm text-forest-900/60 mb-3">
            If you see these signs, trust your instinct. You do not need proof to call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:3106391695"
              className="rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold px-8 py-3 text-sm transition-colors"
            >
              Call RDS: (310) 639-1695
            </a>
            <a
              href="tel:18883737888"
              className="rounded-full border border-forest-950/20 hover:bg-sand-100 text-forest-950 font-semibold px-8 py-3 text-sm transition-colors"
            >
              National Hotline: 1-888-373-7888
            </a>
          </div>
        </div>
      </section>

      {/* 6. Safety Planning Tips */}
      <section className="bg-forest-950 text-sand-50 py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-olive-400 text-xs font-semibold mb-4">
            Your Safety Matters
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-6">
            Safety tips if you are being monitored
          </h2>
          <p className="text-sand-100/75 leading-relaxed mb-8 text-sm">
            If someone is monitoring your phone or computer activity, please be careful when reaching out. Here are some steps to protect yourself:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Use a safe device',
                text: 'If your phone is being monitored, use a friend\'s phone, a library computer, or a public device to contact us.',
              },
              {
                title: 'Clear your browsing history',
                text: 'After visiting this page, clear your browser history and close all tabs. Use private/incognito browsing mode.',
              },
              {
                title: 'Call from a safe place',
                text: 'If you can call, find a moment when you are alone — a restroom, a walk outside, or during an errand.',
              },
              {
                title: 'Text instead of calling',
                text: 'Text "HELP" to 233733 (BeFree) if calling is not safe. You can also text the National Hotline.',
              },
              {
                title: 'Memorize key numbers',
                text: 'Remember: RDS (310) 639-1695 and National Hotline 1-888-373-7888. Delete call logs after reaching out.',
              },
              {
                title: 'Tell someone you trust',
                text: 'If there is one person you trust — a coworker, neighbor, teacher, nurse — let them know you need help.',
              },
            ].map((tip) => (
              <div key={tip.title} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <h3 className="font-display text-sm text-olive-400 mb-1">{tip.title}</h3>
                <p className="text-xs text-sand-100/70 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Additional Hotlines */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
            Additional Resources
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
            Other helplines and organizations
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5" data-reveal="2">
          {[
            {
              name: 'National Human Trafficking Hotline',
              phone: '1-888-373-7888',
              text: 'Text "HELP" to 233733',
              href: 'tel:18883737888',
            },
            {
              name: 'National Domestic Violence Hotline',
              phone: '1-800-799-7233',
              text: 'TTY: 1-800-787-3224',
              href: 'tel:18007997233',
            },
            {
              name: 'RAINN Sexual Assault Hotline',
              phone: '1-800-656-4673',
              text: 'Online chat: rainn.org',
              href: 'tel:18006564673',
            },
            {
              name: 'Crisis Text Line',
              phone: 'Text HOME to 741741',
              text: 'Free 24/7 crisis counseling via text',
              href: 'sms:741741?body=HOME',
            },
          ].map((hotline) => (
            <a
              key={hotline.name}
              href={hotline.href}
              className="flex items-center gap-5 bg-sand-50 rounded-2xl p-6 border border-forest-950/5 hover:shadow-lg hover:-translate-y-0.5 transition-all group"
            >
              <div className="h-12 w-12 rounded-2xl bg-clay-500/10 text-clay-600 flex items-center justify-center flex-shrink-0 group-hover:bg-clay-500 group-hover:text-white transition-colors">
                <PhoneIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base text-forest-950 mb-0.5">{hotline.name}</h3>
                <p className="font-bold text-sm text-forest-950">{hotline.phone}</p>
                <p className="text-xs text-forest-900/50">{hotline.text}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="bg-sand-100 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center" data-reveal="true">
          <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-4">
            You deserve safety, healing, and a future you choose.
          </h2>
          <p className="text-forest-900/70 leading-relaxed text-sm sm:text-base mb-8">
            It does not matter how you got here. What matters is that you are here now. RDS will meet you exactly where you are — with dignity, patience, and real help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:3106391695"
              className="rounded-full bg-clay-500 hover:bg-clay-600 text-white font-bold px-10 py-4 text-base transition-colors shadow-lg"
            >
              Call (310) 639-1695
            </a>
            <Link
              href="/program"
              className="rounded-full border border-forest-950/20 hover:bg-white text-forest-950 font-semibold px-8 py-4 text-sm transition-colors flex items-center gap-2"
            >
              Explore Our Programs <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
