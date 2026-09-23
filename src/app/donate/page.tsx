import React from 'react';
import type { Metadata } from 'next';
import { DonateClient } from './DonateClient';

export const metadata: Metadata = {
  title: 'Donate | Restoration Diversion Services',
  description:
    'Your tax-deductible gift directly funds meals, shelter, counseling, and a pathway to independence for survivors of human trafficking in Compton, CA.',
};

export default function DonatePage() {
  return <DonateClient />;
}
