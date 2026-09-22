import React from 'react';
import type { Metadata } from 'next';
import { StoriesClient } from './StoriesClient';

export const metadata: Metadata = {
  title: "Survivors' Stories | Restoration Diversion Services",
  description:
    'Read reflections and journeys of courage, healing, and freedom from survivors supported by Restoration Diversion Services in Compton, CA.',
};

export default function StoriesPage() {
  return <StoriesClient />;
}
