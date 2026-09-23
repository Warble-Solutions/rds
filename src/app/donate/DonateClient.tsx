'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { StatsBar } from '@/components/StatsBar';
import { DynamicIcon, ArrowRightIcon } from '@/components/Icons';
import { useModal } from '@/components/ModalContext';
import {
  DONATE_IMPACT_STATS,
  DONATE_TIERS,
  WAYS_TO_GIVE,
  DONOR_TESTIMONIALS,
  FUND_ALLOCATION,
  HOME_STATS,
} from '@/data/content';

export function DonateClient() {
  const { openDonateModal, openVolunteerModal } = useModal();

  return (
    <div>
      {/* 1. Hero */}
      <PageHeader
        eyebrow="Support the Mission"
        title="Give hope. Change a life."
        text="Every dollar you donate goes directly toward meals, shelter, counseling, education, and a pathway to independence for survivors of human trafficking in Compton."
        img="/images/hero-donate.jpg"
      />

      {/* 2. Impact Stats */}
      <StatsBar stats={HOME_STATS} />

      {/* 3. Donation Tiers */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
            Your Dollars at Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-4">
            See the impact of every gift
          </h2>
          <p className="text-forest-900/70 text-sm leading-relaxed">
            RDS is a 501(c)(3) nonprofit. Every contribution is tax-deductible and reaches survivors directly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal="2">
          {DONATE_TIERS.map((tier) => (
            <div
              key={tier.amount}
              className="bg-white rounded-3xl p-8 shadow-lg border border-forest-950/5 hover:-translate-y-1 transition-all group cursor-pointer"
              onClick={() => openDonateModal(tier.amount)}
            >
              <div className="h-14 w-14 rounded-2xl bg-leaf-600/10 text-leaf-600 flex items-center justify-center mb-5">
                <DynamicIcon name={tier.icon} className="h-7 w-7" />
              </div>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-display text-3xl text-forest-950">${tier.amount}</span>
              </div>
              <h3 className="font-display text-lg text-forest-950 mb-3">{tier.title}</h3>
              <p className="text-sm text-forest-900/75 leading-relaxed mb-5">
                {tier.impact}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-leaf-600 group-hover:text-forest-950 transition-colors">
                Give ${tier.amount} <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          ))}
        </div>

        {/* Custom Amount CTA */}
        <div className="mt-10 text-center" data-reveal="3">
          <button
            type="button"
            onClick={() => openDonateModal()}
            className="rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold px-10 py-4 text-base transition-colors shadow-lg cursor-pointer"
          >
            Give a Custom Amount
          </button>
          <p className="text-xs text-forest-900/50 mt-3">
            Or donate directly via{' '}
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-forest-950 transition-colors"
            >
              PayPal
            </a>
          </p>
        </div>
      </section>

      {/* 4. Ways to Give */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
              Many Ways to Help
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              Choose how you want to give
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal="2">
            {WAYS_TO_GIVE.map((way) => (
              <div
                key={way.title}
                className="bg-white rounded-3xl p-8 shadow-sm border border-forest-950/5 hover:shadow-lg transition-all"
              >
                <div className="h-12 w-12 rounded-2xl bg-olive-400/15 text-olive-600 flex items-center justify-center mb-5">
                  <DynamicIcon name={way.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-forest-950 mb-3">{way.title}</h3>
                <p className="text-sm text-forest-900/75 leading-relaxed">
                  {way.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Where Your Gift Goes */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
              Transparency
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-5">
              Where your gift goes
            </h2>
            <p className="text-forest-900/80 leading-relaxed mb-8">
              RDS is committed to responsible stewardship. The vast majority of every dollar goes directly to programs and services that reach survivors — not overhead.
            </p>

            {/* Fund allocation bars */}
            <div className="space-y-4">
              {FUND_ALLOCATION.map((fund) => (
                <div key={fund.label}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="font-semibold text-forest-950">{fund.label}</span>
                    <span className="text-forest-900/60 font-bold">{fund.percentage}%</span>
                  </div>
                  <div className="h-3 bg-sand-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${fund.color} transition-all duration-1000`}
                      style={{ width: `${fund.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact numbers */}
          <div className="bg-forest-950 text-sand-50 rounded-3xl p-8 sm:p-10 shadow-lg" data-reveal="2">
            <p className="uppercase tracking-[0.2em] text-olive-400 text-xs font-semibold mb-3">
              By the Numbers
            </p>
            <h3 className="font-display text-2xl sm:text-3xl text-white mb-6">
              Your generosity at work
            </h3>
            <div className="space-y-5">
              {DONATE_IMPACT_STATS.map((stat) => (
                <div key={stat.value} className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-0">
                  <span className="font-display text-2xl text-olive-400 font-bold flex-shrink-0 w-16">
                    {stat.value}
                  </span>
                  <p className="text-sm text-sand-100/80 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Donor Testimonials */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
              From Our Donors
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              Why they give
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6" data-reveal="2">
            {DONOR_TESTIMONIALS.map((donor) => (
              <div
                key={donor.name}
                className="bg-white rounded-3xl p-8 shadow-sm border border-forest-950/5"
              >
                <svg className="h-8 w-8 text-leaf-600/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 7H7a4 4 0 00-4 4v1h4v5H3v-6a6 6 0 016-6h2v2zm10 0h-4a4 4 0 00-4 4v1h4v5h-4v-6a6 6 0 016-6h2v2z" />
                </svg>
                <p className="text-forest-900/85 leading-relaxed mb-5 italic text-sm">
                  &ldquo;{donor.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-forest-950 text-sm">{donor.name}</p>
                  <p className="text-xs text-forest-900/50">{donor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Big CTA Section */}
      <section className="bg-forest-950 py-20 text-center">
        <div className="mx-auto max-w-3xl px-5 sm:px-8" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-olive-400 text-xs font-semibold mb-4">
            Ready to Make a Difference?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-5">
            Every gift changes a life.
          </h2>
          <p className="text-sand-100/75 leading-relaxed mb-8 text-sm sm:text-base">
            Whether it&apos;s $25 for a welcome kit or $250 for emergency lodging, your generosity reaches a woman at her most vulnerable moment and says: <em>you are not alone.</em>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openDonateModal()}
              className="rounded-full bg-clay-500 hover:bg-clay-600 text-white font-bold px-10 py-4 text-base transition-colors shadow-lg cursor-pointer"
            >
              Donate Now
            </button>
            <button
              type="button"
              onClick={() => openVolunteerModal()}
              className="rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 text-sm transition-colors cursor-pointer"
            >
              Volunteer Your Time
            </button>
          </div>
        </div>
      </section>

      {/* 8. Tax Info */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8 py-16">
        <div className="bg-sand-50 rounded-3xl p-8 sm:p-10 border border-forest-950/5" data-reveal="true">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-2">
                Tax-Deductible Giving
              </p>
              <h3 className="font-display text-xl text-forest-950 mb-3">
                Restoration Diversion Services is a 501(c)(3) nonprofit organization.
              </h3>
              <p className="text-sm text-forest-900/75 leading-relaxed">
                All monetary donations are tax-deductible to the extent allowed by law. You will receive an email receipt and a year-end tax acknowledgment letter for your records.
              </p>
            </div>
            <div className="space-y-3 text-sm text-forest-900/80">
              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-leaf-600 mt-1.5 flex-shrink-0" />
                <span><strong className="text-forest-950">Organization:</strong> Restoration Diversion Services (RDS)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-leaf-600 mt-1.5 flex-shrink-0" />
                <span><strong className="text-forest-950">Address:</strong> 208 N. Long Beach Blvd, Compton, CA 90221</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-leaf-600 mt-1.5 flex-shrink-0" />
                <span><strong className="text-forest-950">Phone:</strong> (310) 639-1695</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-leaf-600 mt-1.5 flex-shrink-0" />
                <span><strong className="text-forest-950">Email:</strong> Dropin@restorationdiversion.org</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-leaf-600 mt-1.5 flex-shrink-0" />
                <span><strong className="text-forest-950">Checks:</strong> Make payable to &quot;Restoration Diversion Services&quot; and mail to our address above.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
