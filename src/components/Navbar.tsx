'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/data/content';
import { useModal } from '@/components/ModalContext';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openDonateModal } = useModal();

  return (
    <header className="sticky top-0 z-50 bg-forest-950/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-20">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo/rds-logo.webp"
            alt="Restoration Diversion Services"
            width={200}
            height={100}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'text-olive-400'
                    : 'text-sand-100/80 hover:text-sand-50'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => openDonateModal()}
            className="rounded-full bg-clay-500 hover:bg-clay-600 text-white text-sm font-semibold px-5 py-2.5 transition-colors cursor-pointer"
          >
            Donate
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-sand-50 p-2 cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <nav className="lg:hidden flex flex-col gap-1 px-5 pb-5 bg-forest-950">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setMenuOpen(false)}
                className={`py-2.5 text-base font-semibold border-b border-white/5 ${
                  isActive ? 'text-olive-400' : 'text-sand-100'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              openDonateModal();
            }}
            className="mt-3 text-center rounded-full bg-clay-500 text-white font-semibold px-5 py-2.5 cursor-pointer"
          >
            Donate
          </button>
        </nav>
      )}
    </header>
  );
}
