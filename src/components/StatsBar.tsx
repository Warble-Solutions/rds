import React from 'react';
import { StatItem } from '@/data/content';

interface StatsBarProps {
  stats: StatItem[];
  className?: string;
  floating?: boolean;
}

export function StatsBar({
  stats,
  className = 'bg-forest-900 text-sand-50',
  floating = false,
}: StatsBarProps) {
  if (floating) {
    return (
      <section className="relative z-10 -mt-16 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-forest-950/5 py-10 px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div
              key={stat.label || stat.value}
              data-reveal={String(idx + 1)}
              className={`${idx < stats.length - 1 ? 'lg:border-r lg:border-forest-950/8' : ''}`}
            >
              <div className="font-display text-4xl sm:text-5xl text-forest-950 mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-forest-900/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={stat.label || stat.value} data-reveal={String(idx + 1)}>
            <div className="font-display text-3xl sm:text-4xl text-olive-400">
              {stat.value}
            </div>
            <div className="text-sm text-sand-100/70 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
