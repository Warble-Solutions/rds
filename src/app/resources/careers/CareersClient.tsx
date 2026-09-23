'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { DynamicIcon, ArrowRightIcon, MailIcon } from '@/components/Icons';
import { useModal } from '@/components/ModalContext';
import { CAREER_OPENINGS, INTERNSHIP_INFO, ABOUT_VALUES } from '@/data/content';

export function CareersClient() {
  const { openVolunteerModal } = useModal();
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  return (
    <div>
      {/* 1. Hero */}
      <PageHeader
        eyebrow="Careers & Opportunities"
        title="Work that matters every single day"
        text="Join a team where your skills, empathy, and commitment make a direct impact on the lives of survivors of human trafficking in Compton."
        img="/images/hero-careers.jpg"
      />

      {/* 2. Why Work at RDS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
              Why RDS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-5">
              More than a job — a calling
            </h2>
            <p className="text-forest-900/80 leading-relaxed mb-4">
              At RDS, every team member is part of something larger. We believe in meeting women where they are — with empathy, respect, and the resources they need to build a new life.
            </p>
            <p className="text-forest-900/80 leading-relaxed mb-6">
              Our staff culture is rooted in the same values we extend to every woman who walks through our doors: trauma-informed care, whole-person wellness, community partnership, and the belief that every woman deserves a future defined by her own choices.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Trauma-informed workplace culture',
                'Professional development & training',
                'Meaningful community impact',
                'Collaborative, mission-driven team',
                'Flexible scheduling available',
                'Lived experience valued',
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-2.5 text-sm text-forest-900/80">
                  <span className="h-2 w-2 rounded-full bg-leaf-600 flex-shrink-0" />
                  {perk}
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-2 gap-4" data-reveal="2">
            {ABOUT_VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-sand-50 rounded-2xl p-5 border border-forest-950/5"
              >
                <div className="h-10 w-10 rounded-xl bg-leaf-600/10 text-leaf-600 flex items-center justify-center mb-3">
                  <DynamicIcon name={value.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display text-sm text-forest-950 mb-1">{value.title}</h3>
                <p className="text-xs text-forest-900/60 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Open Positions */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
              Open Positions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-4">
              Current opportunities
            </h2>
            <p className="text-forest-900/70 text-sm leading-relaxed">
              We are looking for passionate, compassionate individuals to join us on the frontline.
            </p>
          </div>

          <div className="space-y-4" data-reveal="2">
            {CAREER_OPENINGS.map((job) => {
              const isExpanded = expandedJob === job.title;
              return (
                <div
                  key={job.title}
                  className="bg-white rounded-3xl shadow-sm border border-forest-950/5 overflow-hidden transition-all"
                >
                  {/* Header */}
                  <button
                    type="button"
                    onClick={() => setExpandedJob(isExpanded ? null : job.title)}
                    className="w-full p-6 sm:p-8 flex items-start justify-between gap-4 text-left cursor-pointer"
                  >
                    <div>
                      <h3 className="font-display text-xl text-forest-950 mb-1">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="inline-block rounded-full bg-leaf-600/15 text-leaf-600 font-bold px-3 py-1">
                          {job.type}
                        </span>
                        <span className="text-forest-900/50">{job.location}</span>
                      </div>
                    </div>
                    <svg
                      className={`h-5 w-5 text-forest-900/40 flex-shrink-0 mt-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-8 animate-fadeIn">
                      <div className="border-t border-forest-950/10 pt-6">
                        <p className="text-sm text-forest-900/80 leading-relaxed mb-5">
                          {job.description}
                        </p>
                        <p className="text-xs font-bold text-forest-950 uppercase tracking-wider mb-3">
                          Qualifications
                        </p>
                        <ul className="space-y-2 mb-6">
                          {job.qualifications.map((qual) => (
                            <li key={qual} className="flex items-start gap-2.5 text-sm text-forest-900/75">
                              <span className="h-2 w-2 rounded-full bg-leaf-600 mt-1.5 flex-shrink-0" />
                              {qual}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={`mailto:Dropin@restorationdiversion.org?subject=Application%20—%20${encodeURIComponent(job.title)}`}
                          className="inline-flex items-center gap-2 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold px-7 py-3 text-sm transition-colors"
                        >
                          <MailIcon className="h-4 w-4" /> Apply via Email
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Internships & Fellowships */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
              Students & Early Career
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-5">
              {INTERNSHIP_INFO.title}
            </h2>
            <p className="text-forest-900/80 leading-relaxed mb-6">
              {INTERNSHIP_INFO.description}
            </p>
            <a
              href="mailto:Dropin@restorationdiversion.org?subject=Internship%20Inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold px-7 py-3 text-sm transition-colors"
            >
              <MailIcon className="h-4 w-4" /> Inquire About Internships
            </a>
          </div>

          <div className="space-y-4" data-reveal="2">
            {INTERNSHIP_INFO.areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-4 bg-sand-50 rounded-2xl p-5 border border-forest-950/5"
              >
                <div className="h-10 w-10 rounded-xl bg-olive-400/15 text-olive-600 flex items-center justify-center flex-shrink-0">
                  <DynamicIcon name="briefcase" className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-forest-950">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Volunteer CTA */}
      <section className="bg-forest-950 py-20 text-center">
        <div className="mx-auto max-w-3xl px-5 sm:px-8" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-olive-400 text-xs font-semibold mb-4">
            Not Ready for a Full Role?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-5">
            Volunteer your time and skills
          </h2>
          <p className="text-sand-100/75 leading-relaxed text-sm sm:text-base mb-8">
            From serving meals at the Drop-In Center to mentoring a survivor through the Diversion Program, every volunteer makes a lasting difference.
          </p>
          <button
            type="button"
            onClick={() => openVolunteerModal()}
            className="rounded-full bg-clay-500 hover:bg-clay-600 text-white font-bold px-10 py-4 text-base transition-colors shadow-lg cursor-pointer"
          >
            Apply to Volunteer
          </button>
        </div>
      </section>
    </div>
  );
}
