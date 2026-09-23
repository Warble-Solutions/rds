import React from 'react';
import type { Metadata } from 'next';
import { TeamClient } from './TeamClient';

export const metadata: Metadata = {
  title: 'Our Team | Restoration Diversion Services',
  description:
    'Meet the dedicated staff behind every RDS program — from our Executive Director to the advocates on the frontline serving survivors in Compton.',
};

export default function TeamPage() {
  return <TeamClient />;
}
