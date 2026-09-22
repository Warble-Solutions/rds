import React from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  text: string;
  img: string;
}

export function PageHeader({ eyebrow, title, text, img }: PageHeaderProps) {
  return (
    <section className="relative h-[420px] sm:h-[460px] overflow-hidden bg-forest-950 text-sand-50 flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/40" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <p className="uppercase tracking-[0.2em] text-olive-400 text-xs font-semibold mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl mb-6">{title}</h1>
        <p className="text-sand-100/85 text-lg leading-relaxed">{text}</p>
      </div>
    </section>
  );
}
