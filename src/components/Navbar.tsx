'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, RESOURCE_NAV_ITEMS } from '@/data/content';
import { useModal } from '@/components/ModalContext';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();
  const { openDonateModal } = useModal();

  const isResourcesActive = pathname.startsWith('/resources');

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
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
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

          {/* Resources Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              type="button"
              className={`text-sm font-semibold tracking-wide transition-colors flex items-center gap-1 cursor-pointer ${
                isResourcesActive
                  ? 'text-olive-400'
                  : 'text-sand-100/80 hover:text-sand-50'
              }`}
            >
              Resources
              <svg
                className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all ${
                resourcesOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-1'
              }`}
            >
              <div className="bg-forest-900 border border-white/10 rounded-2xl shadow-2xl p-2 min-w-[200px]">
                {RESOURCE_NAV_ITEMS.map((sub) => {
                  const subActive = pathname === sub.to;
                  return (
                    <Link
                      key={sub.to}
                      href={sub.to}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        subActive
                          ? 'text-olive-400 bg-white/5'
                          : 'text-sand-100/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {sub.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

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

          {/* Mobile Resources Group */}
          <button
            type="button"
            onClick={() => setResourcesOpen((p) => !p)}
            className={`py-2.5 text-base font-semibold border-b border-white/5 flex items-center justify-between cursor-pointer ${
              isResourcesActive ? 'text-olive-400' : 'text-sand-100'
            }`}
          >
            Resources
            <svg
              className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {resourcesOpen && (
            <div className="pl-4 flex flex-col gap-1">
              {RESOURCE_NAV_ITEMS.map((sub) => {
                const subActive = pathname === sub.to;
                return (
                  <Link
                    key={sub.to}
                    href={sub.to}
                    onClick={() => setMenuOpen(false)}
                    className={`py-2 text-sm font-medium border-b border-white/5 ${
                      subActive ? 'text-olive-400' : 'text-sand-100/80'
                    }`}
                  >
                    {sub.label}
                  </Link>
                );
              })}
            </div>
          )}

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
