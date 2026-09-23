import React from 'react';
import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Restoration Diversion Services | Compton, CA',
  description:
    'Get in touch with Restoration Diversion Services. 24/7 confidential helpline: (310) 639-1695. Drop-In Center located at 208 N. Long Beach Blvd, Compton, CA 90221.',
};

export default function ContactPage() {
  return <ContactClient />;
}
