'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HERO_SLIDES } from '@/data/content';

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-forest-950 text-sand-50 h-[640px] sm:h-[600px]">
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background image with Ken Burns on active */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover ${
                isActive ? 'kenburns' : ''
              }`}
            />
            {/* Dual gradient overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/80 to-forest-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent" />

            {/* Slide Content */}
            <div className="relative h-full mx-auto max-w-7xl px-5 sm:px-8 flex items-center">
              <div className="max-w-xl">
                <p className="uppercase tracking-[0.2em] text-olive-400 text-xs font-semibold mb-5">
                  {slide.eyebrow}
                </p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-6">
                  {slide.title}
                </h1>
                <p className="text-sand-100/85 text-lg leading-relaxed mb-9">
                  {slide.text}
                </p>
                <div className="flex flex-wrap gap-4">
                  {slide.primary.href ? (
                    <a
                      href={slide.primary.href}
                      className="rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold px-7 py-3.5 transition-colors"
                    >
                      {slide.primary.label}
                    </a>
                  ) : (
                    <Link
                      href={slide.primary.to || '/'}
                      className="rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold px-7 py-3.5 transition-colors"
                    >
                      {slide.primary.label}
                    </Link>
                  )}
                  <Link
                    href={slide.secondary.to}
                    className="rounded-full border border-sand-50/30 hover:border-sand-50/60 text-sand-50 font-semibold px-7 py-3.5 transition-colors"
                  >
                    {slide.secondary.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Prev Arrow */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() =>
          setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
        }
        className="absolute z-20 left-3 sm:left-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center text-white transition-colors cursor-pointer"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)}
        className="absolute z-20 right-3 sm:right-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center text-white transition-colors cursor-pointer"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              idx === current ? 'w-8 bg-olive-400' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
