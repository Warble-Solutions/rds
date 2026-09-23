import React from 'react';
import type { Metadata } from 'next';
import { CareersClient } from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers & Opportunities | Restoration Diversion Services',
  description:
    'Join the RDS team. Explore open positions, internships, and fellowship opportunities making a real difference in anti-trafficking work in Compton, CA.',
};

export default function CareersPage() {
  return <CareersClient />;
}
