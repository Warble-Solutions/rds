'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PinIcon, MailIcon, PhoneIcon } from './Icons';
import { NAV_LINKS } from '@/data/content';
import { useModal } from '@/components/ModalContext';

export function Footer() {
  const { openDonateModal } = useModal();
  const [subscribed, setSubscribed] = useState(false);
  const [subEmail, setSubEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-forest-950 text-sand-50 border-t border-white/10 mt-auto">
      {/* Newsletter Banner */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl text-sand-50 mb-1">
              Stay connected to the mission
            </h2>
            <p className="text-sm text-sand-100/70">
              Monthly updates on events, programs, and ways to help — no spam, ever.
            </p>
          </div>
          {subscribed ? (
            <div className="flex items-center gap-2.5 bg-leaf-600/20 text-olive-400 border border-leaf-600/40 px-6 py-3 rounded-full text-sm font-semibold animate-fadeIn">
              <svg className="h-5 w-5 text-olive-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Thank you! You are subscribed to RDS updates.</span>
            </div>
          ) : (
            <form
              className="flex w-full lg:w-auto gap-3"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                className="flex-1 lg:w-80 rounded-full bg-white/10 border border-white/15 px-5 py-3 text-sm text-sand-50 placeholder:text-sand-100/50 outline-none focus:border-olive-400"
              />
              <button
                type="submit"
                className="rounded-full bg-clay-500 hover:bg-clay-600 text-white text-sm font-semibold px-6 py-3 transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 4-column Links Grid */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: About & Socials */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo/rds-logo.webp"
              alt="Restoration Diversion Services"
              width={160}
              height={80}
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-sand-100/70 leading-relaxed mb-5">
            Restoration Diversion Services — helping survivors of human trafficking in Compton, CA find safety, support, and a new beginning since 2009.
          </p>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.6-.1-1.4-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4V11H7.5v3h2.7v7z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/rdsdropin_208"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Explore */}
        <div>
          <h3 className="font-display text-base mb-4 text-olive-400">Explore</h3>
          <ul className="space-y-2.5 text-sm text-sand-100/80">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link href={link.to} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Get Help */}
        <div>
          <h3 className="font-display text-base mb-4 text-olive-400">Get Help</h3>
          <ul className="space-y-3.5 text-sm text-sand-100/80">
            <li className="flex items-start gap-2.5">
              <PinIcon className="h-4 w-4 mt-0.5 text-olive-400 flex-shrink-0" />
              <span>Drop-In Center · 208 N. Long Beach Blvd, Compton, CA 90221</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MailIcon className="h-4 w-4 mt-0.5 text-olive-400 flex-shrink-0" />
              <a href="mailto:Dropin@restorationdiversion.org" className="hover:underline">
                Dropin@restorationdiversion.org
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <PhoneIcon className="h-4 w-4 mt-0.5 text-olive-400 flex-shrink-0" />
              <span>(310) 639-1695 · 24/7 confidential</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Make a Difference */}
        <div>
          <h3 className="font-display text-base mb-4 text-olive-400">Make a Difference</h3>
          <p className="text-sm text-sand-100/70 mb-4 leading-relaxed">
            Your gift funds shelter, counseling, legal aid, and job training for survivors.
          </p>
          <button
            type="button"
            onClick={() => openDonateModal()}
            className="inline-block rounded-full bg-clay-500 hover:bg-clay-600 text-white text-sm font-semibold px-6 py-3 transition-colors cursor-pointer"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-sand-100/50">
        © {new Date().getFullYear()} Restoration Diversion Services. All rights reserved. · I Am My Sister&apos;s Keeper
      </div>
    </footer>
  );
}
