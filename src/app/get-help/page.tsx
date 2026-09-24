import React from 'react';
import type { Metadata } from 'next';
import { GetHelpClient } from './GetHelpClient';

export const metadata: Metadata = {
  title: 'Get Help | Restoration Diversion Services',
  description:
    'If you or someone you know is experiencing human trafficking, RDS is here. Call our 24/7 helpline, visit the Drop-In Center, or reach out confidentially. You are not alone.',
};

export default function GetHelpPage() {
  return <GetHelpClient />;
}
