import React from 'react';
import type { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Restoration Diversion Services',
  description:
    'Since 2009, Restoration Diversion Services has stood with survivors of human trafficking in Compton, CA — offering a trauma-informed, holistic path forward.',
};

export default function AboutPage() {
  return <AboutClient />;
}
