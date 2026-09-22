import React from 'react';
import { StatItem } from '@/data/content';

interface StatsBarProps {
  stats: StatItem[];
  className?: string;
}

export function StatsBar({ stats, className = 'bg-forest-900 text-sand-50' }: StatsBarProps) {
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
