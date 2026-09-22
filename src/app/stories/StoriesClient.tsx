'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { StatsBar } from '@/components/StatsBar';
import {
  STORY_STATS,
  FEATURED_STORY,
  SURVIVOR_STORIES,
  BEHIND_STORY_STEPS,
} from '@/data/content';
import { DynamicIcon, ArrowRightIcon } from '@/components/Icons';
import { useModal } from '@/components/ModalContext';

export function StoriesClient() {
  const { openContactModal, openDonateModal, openStoryModal } = useModal();

  return (
    <div>
      {/* 1. Header */}
      <PageHeader
        eyebrow="Survivors' Stories"
        title="Voices of resilience"
        text="Every survivor's story is their own. Shared with permission and care, these reflections honor the courage it takes to walk toward freedom — names and identifying details have been changed to protect privacy."
        img="/images/hero-empowerment.jpg"
      />

      {/* 2. Stats Bar */}
      <StatsBar stats={STORY_STATS} />

      {/* 3. Featured Story */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <p
          className="uppercase tracking-[0.15em] text-leaf-600 text-xs font-semibold mb-6"
          data-reveal="true"
        >
          Featured Story
        </p>
        <div
          className="grid lg:grid-cols-2 gap-12 items-stretch"
          data-reveal="true"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FEATURED_STORY.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <p className="text-olive-400 text-xs font-semibold uppercase tracking-wider mb-1">
                {FEATURED_STORY.tag}
              </p>
              <h2 className="font-display text-3xl text-white">
                {FEATURED_STORY.name}
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <svg
              className="h-9 w-9 text-leaf-600 mb-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 7c-2.8 0-5 2.2-5 5v5h5v-5H5c0-1.1.9-2 2-2V7zm10 0c-2.8 0-5 2.2-5 5v5h5v-5h-2c0-1.1.9-2 2-2V7z" />
            </svg>
            <p className="font-display text-2xl sm:text-3xl text-forest-950 leading-snug italic mb-6">
              &ldquo;{FEATURED_STORY.quote}&rdquo;
            </p>
            <p className="text-forest-900/80 leading-relaxed mb-7">
              {FEATURED_STORY.text}
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {FEATURED_STORY.milestones.map((milestone) => (
                <div
                  key={milestone}
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
                  {milestone}
                </div>
              ))}
            </div>
            <div>
              <button
                type="button"
                onClick={() =>
                  openStoryModal({
                    id: 'Program Graduate',
                    theme: "A Survivor's Journey: From the Blade to Freedom",
                    quote: FEATURED_STORY.quote,
                    text: FEATURED_STORY.text,
                    img: FEATURED_STORY.img,
                  })
                }
                className="text-sm font-semibold text-leaf-600 hover:text-forest-950 inline-flex items-center gap-1 cursor-pointer"
              >
                Read Full Reflection →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. More Voices */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
              More Voices
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              Journeys in their own words
            </h2>
            <p className="text-sm text-forest-900/60 mt-2">Click any story to open the reflection reader</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SURVIVOR_STORIES.map((story, idx) => (
              <div
                key={story.id}
                data-reveal={String((idx % 2) + 1)}
                onClick={() => openStoryModal(story)}
                className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all border-t-4 border-leaf-600 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-leaf-600/20 flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={story.img}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <p className="font-display text-lg text-forest-950 leading-none">
                        {story.theme}
                      </p>
                      <span className="text-xs uppercase tracking-wider text-leaf-600 font-semibold">
                        Survivor · {story.id}
                      </span>
                    </div>
                    <span className="ml-auto h-10 w-10 rounded-xl bg-leaf-600/10 text-leaf-600 flex items-center justify-center flex-shrink-0">
                      <DynamicIcon name={story.icon} className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="font-display text-lg text-forest-950 leading-snug italic mb-3">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <p className="text-sm text-forest-900/75 leading-relaxed line-clamp-3 mb-4">
                    {story.text}
                  </p>
                </div>
                <span className="text-xs font-bold text-leaf-600 group-hover:text-forest-950 transition-colors inline-flex items-center gap-1">
                  Read Full Reflection →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Behind Every Story */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-4">
            Behind Every Story
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
            The path we walk together
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEHIND_STORY_STEPS.map((step, idx) => (
            <div
              key={step.title}
              data-reveal={String(idx + 1)}
              className="relative bg-sand-100 rounded-2xl p-7"
            >
              <span className="absolute top-5 right-6 font-display text-4xl text-leaf-600/15">
                {idx + 1}
              </span>
              <span className="inline-flex h-12 w-12 rounded-xl bg-leaf-600 text-white items-center justify-center mb-4">
                <DynamicIcon name={step.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg mb-2 text-forest-950">
                {step.title}
              </h3>
              <p className="text-sm text-forest-900/70 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Composite Disclaimer */}
      <section className="mx-auto max-w-3xl px-5 sm:px-8 pb-16 text-center">
        <p
          className="text-sm text-forest-900/60 leading-relaxed italic"
          data-reveal="true"
        >
          These reflections are composites shared with survivor consent. Names, images, and details have been changed to protect identity while honoring each journey truthfully.
        </p>
      </section>

      {/* 7. Bottom CTA */}
      <section className="relative bg-forest-950 text-sand-50 py-20 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-sisterhood.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl mb-5">
            Your story could be next.
          </h2>
          <p className="text-sand-100/85 leading-relaxed mb-8">
            If you or someone you know needs support, RDS is here — confidentially, without judgment, whenever you&apos;re ready.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => openContactModal('Confidential Survivor Help Request')}
              className="inline-flex items-center gap-2 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold px-8 py-3.5 transition-colors cursor-pointer shadow-md"
            >
              Reach Out Confidentially <ArrowRightIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => openDonateModal()}
              className="inline-block rounded-full border border-sand-50/30 hover:border-sand-50/60 font-semibold px-8 py-3.5 transition-colors cursor-pointer"
            >
              Support Survivors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
