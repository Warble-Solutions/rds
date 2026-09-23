import React from 'react';
import type { Metadata } from 'next';
import { NewsClient } from './NewsClient';

export const metadata: Metadata = {
  title: 'News & Press | Restoration Diversion Services',
  description:
    'Read the latest news, press coverage, community updates, and task force reports about RDS and anti-trafficking work in Compton, CA.',
};

export default function NewsPage() {
  return <NewsClient />;
}
