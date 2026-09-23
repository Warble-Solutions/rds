'use client';

import React from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { ArrowRightIcon } from '@/components/Icons';
import { useModal } from '@/components/ModalContext';
import { TEAM_MEMBERS, PARTNERS, ABOUT_VALUES } from '@/data/content';
import { DynamicIcon } from '@/components/Icons';

export function TeamClient() {
  const { openTeamModal, openVolunteerModal } = useModal();

  return (
    <div>
      {/* 1. Hero */}
      <PageHeader
        eyebrow="Our Team"
        title="The people behind the mission"
        text="Meet the advocates, leaders, and community builders who dedicate their lives to standing with survivors of human trafficking in Compton."
        img="/images/hero-team.jpg"
      />

      {/* 2. Leadership Grid */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
            Leadership
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-4">
            Our leadership team
          </h2>
          <p className="text-forest-900/70 text-sm leading-relaxed">
            Every leader at RDS brings lived experience, professional expertise, and a deep personal commitment to the mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" data-reveal="2">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-forest-950/5 hover:-translate-y-1 transition-all cursor-pointer"
              onClick={() =>
                openTeamModal({
                  name: member.name,
                  role: member.role,
                  img: member.img,
                  bio: member.bio,
                })
              }
            >
              {/* Photo */}
              <div className="aspect-[4/3] overflow-hidden bg-sand-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Info */}
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-xl text-forest-950 mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-leaf-600 uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-forest-900/75 leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-leaf-600 group-hover:text-forest-950 transition-colors">
                  Read Full Bio <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Values */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
              Our Values
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              What guides everything we do
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal="2">
            {ABOUT_VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-3xl p-8 shadow-sm border border-forest-950/5"
              >
                <div className="h-12 w-12 rounded-2xl bg-leaf-600/10 text-leaf-600 flex items-center justify-center mb-5">
                  <DynamicIcon name={value.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg text-forest-950 mb-2">{value.title}</h3>
                <p className="text-sm text-forest-900/75 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Community Partners */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
            Our Partners
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-4">
            Community collaborators
          </h2>
          <p className="text-forest-900/70 text-sm leading-relaxed">
            No one organization can meet every need. RDS serves as a bridge, connecting survivors with a larger network of partners and allies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-reveal="2">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-4 bg-sand-50 rounded-2xl p-5 border border-forest-950/5"
            >
              <div className="h-10 w-10 rounded-xl bg-olive-400/15 text-olive-600 flex items-center justify-center flex-shrink-0">
                <DynamicIcon name={partner.icon} className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-forest-950">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Board Section */}
      <section className="bg-forest-950 py-20 text-center">
        <div className="mx-auto max-w-3xl px-5 sm:px-8" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-olive-400 text-xs font-semibold mb-4">
            Governance
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-5">
            Board of Directors
          </h2>
          <p className="text-sand-100/75 leading-relaxed text-sm sm:text-base mb-8">
            RDS is governed by a volunteer Board of Directors who provide strategic oversight, fiduciary stewardship, and community accountability. Board members bring expertise in law, social work, education, faith leadership, and public policy.
          </p>
          <p className="text-sand-100/50 text-xs">
            For board inquiries, contact us at Dropin@restorationdiversion.org
          </p>
        </div>
      </section>

      {/* 6. Join Us CTA */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8 py-16">
        <div className="bg-sand-50 rounded-3xl p-8 sm:p-10 border border-forest-950/5 flex flex-col md:flex-row items-center justify-between gap-6" data-reveal="true">
          <div>
            <h3 className="font-display text-2xl text-forest-950 mb-2">
              Want to join our team?
            </h3>
            <p className="text-sm text-forest-900/70">
              Explore open positions, internships, and volunteer opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/resources/careers"
              className="rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold px-7 py-3 text-sm transition-colors whitespace-nowrap flex items-center gap-2"
            >
              View Careers <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => openVolunteerModal()}
              className="rounded-full border border-forest-950/20 hover:bg-sand-100 text-forest-950 font-semibold px-7 py-3 text-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
