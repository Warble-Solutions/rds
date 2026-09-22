'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  q: string;
  a: string;
}

export function FAQItem({ q, a }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-forest-950/10 rounded-2xl bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <span className="font-semibold text-forest-950">{q}</span>
        <span
          className={`flex-shrink-0 h-8 w-8 rounded-full bg-leaf-600/10 text-leaf-600 flex items-center justify-center transition-transform ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="px-6 pb-6 text-forest-900/75 leading-relaxed text-sm">
          {a}
        </p>
      )}
    </div>
  );
}
