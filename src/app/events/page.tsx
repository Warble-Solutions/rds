import React from 'react';
import type { Metadata } from 'next';
import { EventsClient } from './EventsClient';

export const metadata: Metadata = {
  title: 'Community Events | Restoration Diversion Services',
  description:
    'Join Restoration Diversion Services for task force meetings, survivor empowerment workshops, resource drives, and community awareness nights in Compton, CA.',
};

export default function EventsPage() {
  return <EventsClient />;
}
