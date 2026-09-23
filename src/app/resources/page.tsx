import React from 'react';
import type { Metadata } from 'next';
import { ResourcesClient } from './ResourcesClient';

export const metadata: Metadata = {
  title: 'Resources | Restoration Diversion Services',
  description:
    'Explore RDS resources — meet our leadership team, read the latest news and press coverage, and discover career opportunities in anti-trafficking work.',
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
