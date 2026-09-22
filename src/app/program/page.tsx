import React from 'react';
import type { Metadata } from 'next';
import { ProgramClient } from './ProgramClient';

export const metadata: Metadata = {
  title: 'Our Programs | Restoration Diversion Services',
  description:
    'Explore the six interconnected support programs at Restoration Diversion Services — from drop-in crisis refuge to court diversion, housing, and legal advocacy.',
};

export default function ProgramPage() {
  return <ProgramClient />;
}
