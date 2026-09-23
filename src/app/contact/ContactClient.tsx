'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { PinIcon, MailIcon, PhoneIcon, ArrowRightIcon } from '@/components/Icons';
import { FAQItem } from '@/components/FAQItem';
import { useModal } from '@/components/ModalContext';

const CONTACT_FAQS = [
  {
    q: 'Do I need an appointment or referral to visit the Drop-In Center?',
    a: 'No appointment or referral is ever required. Our doors at 208 N. Long Beach Blvd are open for walk-ins Monday through Friday, 9:00 AM to 5:00 PM. Come as you are, whenever you are ready.',
  },
  {
    q: 'Is my visit and conversation truly confidential?',
    a: 'Yes, 100%. RDS operates with strict trauma-informed privacy and confidentiality protocols. We protect your safety, your identity, and your personal story at all times.',
  },
  {
    q: 'What should I do if I am in immediate danger after hours?',
    a: 'Call our 24/7 confidential helpline at (310) 639-1695 right away. If you are in immediate life-threatening physical danger, call 911 or visit the nearest safe public facility.',
  },
  {
    q: 'How can service providers, attorneys, or courts refer a participant?',
    a: 'Agencies and legal advocates can connect with our Program Directors by calling (310) 639-1695 or emailing Dropin@restorationdiversion.org for court-mandated diversion or voluntary supportive intake.',
  },
];

export function ContactClient() {
  const { openDonateModal, openVolunteerModal } = useModal();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Immediate Survivor Support',
    contactMethod: 'Discreet / Any',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* 1. Header */}
      <PageHeader
        eyebrow="Contact Us"
        title="We're here for you — day or night"
        text="Whether you need emergency shelter, want to visit our Drop-In Center, volunteer your time, or collaborate as a community partner, every conversation is handled with care and 100% confidentiality."
        img="/images/hero-community-meeting.jpg"
      />

      {/* 2. Emergency 24/7 Helpline Banner */}
      <section className="bg-clay-600 text-white py-6 pb-12 sm:pb-16 px-5 sm:px-8 border-b border-white/10 relative z-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="hidden sm:flex h-12 w-12 rounded-full bg-white/20 items-center justify-center flex-shrink-0">
              <PhoneIcon className="h-6 w-6 text-white" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-sand-100">
                24/7 Confidential Crisis Line
              </p>
              <h2 className="font-display text-xl sm:text-2xl font-bold">
                In crisis or need emergency help right now?
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:3106391695"
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-sand-100 text-forest-950 font-bold px-7 py-3 transition-colors text-base shadow-lg"
            >
              <PhoneIcon className="h-5 w-5 text-clay-600" />
              (310) 639-1695
            </a>
            <span className="text-xs text-white/80 hidden lg:inline">
              Free · Confidential · 24/7
            </span>
          </div>
        </div>
      </section>

      {/* 3. Three Contact Channels Cards */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 -mt-8 sm:-mt-12 relative z-20 pb-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: 24/7 Phone */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-forest-950/5 hover:-translate-y-1 transition-all">
            <div className="h-14 w-14 rounded-2xl bg-leaf-600/10 text-leaf-600 flex items-center justify-center mb-6">
              <PhoneIcon className="h-7 w-7" />
            </div>
            <p className="text-xs font-bold text-leaf-600 uppercase tracking-wider mb-1">
              Call or Text Anytime
            </p>
            <h3 className="font-display text-2xl text-forest-950 mb-2">
              24/7 Helpline
            </h3>
            <p className="text-sm text-forest-900/75 leading-relaxed mb-6">
              Immediate crisis response, confidential shelter navigation, and emergency support.
            </p>
            <a
              href="tel:3106391695"
              className="font-display text-xl font-bold text-forest-950 hover:text-leaf-600 transition-colors block"
            >
              (310) 639-1695
            </a>
            <span className="text-xs text-forest-900/50 mt-1 block">
              Toll-free confidential response
            </span>
          </div>

          {/* Card 2: Drop-In Center */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-forest-950/5 hover:-translate-y-1 transition-all">
            <div className="h-14 w-14 rounded-2xl bg-olive-400/15 text-olive-600 flex items-center justify-center mb-6">
              <PinIcon className="h-7 w-7" />
            </div>
            <p className="text-xs font-bold text-olive-600 uppercase tracking-wider mb-1">
              Visit In Person
            </p>
            <h3 className="font-display text-2xl text-forest-950 mb-2">
              Drop-In Center
            </h3>
            <p className="text-sm text-forest-900/75 leading-relaxed mb-6">
              208 N. Long Beach Blvd, Compton, CA 90221. Safe walk-in refuge, hot meals, and clothing.
            </p>
            <p className="font-semibold text-sm text-forest-950">
              Mon – Fri: 9:00 AM – 5:00 PM
            </p>
            <span className="text-xs text-forest-900/50 mt-1 block">
              No referral or appointment needed
            </span>
          </div>

          {/* Card 3: Email & Direct */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-forest-950/5 hover:-translate-y-1 transition-all">
            <div className="h-14 w-14 rounded-2xl bg-clay-500/10 text-clay-600 flex items-center justify-center mb-6">
              <MailIcon className="h-7 w-7" />
            </div>
            <p className="text-xs font-bold text-clay-600 uppercase tracking-wider mb-1">
              General &amp; Programs
            </p>
            <h3 className="font-display text-2xl text-forest-950 mb-2">
              Send an Email
            </h3>
            <p className="text-sm text-forest-900/75 leading-relaxed mb-6">
              For general questions, court diversion records, partnerships, or media inquiries.
            </p>
            <a
              href="mailto:Dropin@restorationdiversion.org"
              className="font-semibold text-forest-950 hover:text-leaf-600 transition-colors text-sm break-all block"
            >
              Dropin@restorationdiversion.org
            </a>
            <span className="text-xs text-forest-900/50 mt-1 block">
              Responded within 1 business day
            </span>
          </div>
        </div>
      </section>

      {/* 4. Contact Form & Context Section */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          {/* Left Column: Context & Quick Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-8" data-reveal="true">
            <div>
              <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
                Send a Message
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-5">
                Every conversation begins with respect and privacy.
              </h2>
              <p className="text-forest-900/80 leading-relaxed mb-4">
                Whether you are reaching out for yourself, on behalf of a loved one, or representing a partnering organization, our staff handles every contact with trauma-informed sensitivity.
              </p>
              <p className="text-forest-900/80 leading-relaxed">
                If you prefer not to share certain contact details, feel free to share whatever you are comfortable with. Your safety is our primary focus.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="bg-sand-100 rounded-3xl p-6 sm:p-8 space-y-4 border border-forest-950/5">
              <h3 className="font-display text-lg text-forest-950">
                Looking for another way to connect?
              </h3>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => openVolunteerModal()}
                  className="w-full py-3 px-5 rounded-2xl bg-white hover:bg-forest-950 hover:text-white text-forest-950 text-sm font-semibold transition-all shadow-sm flex items-center justify-between cursor-pointer group"
                >
                  <span>Apply to Volunteer at the Center</span>
                  <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={() => openDonateModal()}
                  className="w-full py-3 px-5 rounded-2xl bg-white hover:bg-forest-950 hover:text-white text-forest-950 text-sm font-semibold transition-all shadow-sm flex items-center justify-between cursor-pointer group"
                >
                  <span>Make a Tax-Deductible Donation</span>
                  <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider font-semibold text-forest-900/60 mb-3">
                Follow RDS on Social Media
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/rdsdropin_208"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-sand-100 hover:bg-sand-200 text-forest-950 text-xs font-semibold px-4 py-2 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                  @rdsdropin_208
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-sand-100 hover:bg-sand-200 text-forest-950 text-xs font-semibold px-4 py-2 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.6-.1-1.4-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4V11H7.5v3h2.7v7z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7" data-reveal="2">
            {formSubmitted ? (
              <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-lg border border-forest-950/5 text-center flex flex-col items-center justify-center animate-fadeIn">
                <div className="h-16 w-16 rounded-full bg-leaf-600/10 text-leaf-600 flex items-center justify-center mb-5">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-forest-950 mb-3">
                  Message Sent Confidentially
                </h3>
                <p className="text-forest-900/80 leading-relaxed text-sm sm:text-base max-w-md mb-6">
                  Thank you, <strong>{formData.name || 'Friend'}</strong>. Your message regarding <em>{formData.topic}</em> has been safely received. An RDS advocate will reach out via your preferred method ({formData.contactMethod}).
                </p>
                <div className="bg-sand-100 rounded-2xl p-5 text-xs text-forest-900/80 text-left w-full max-w-md mb-6 space-y-1.5 border border-forest-950/5">
                  <p><strong>Immediate emergency:</strong> Call our 24/7 hotline at (310) 639-1695</p>
                  <p><strong>In Person:</strong> 208 N. Long Beach Blvd, Compton, CA 90221</p>
                  <p><strong>Drop-In Hours:</strong> Monday – Friday, 9:00 AM – 5:00 PM</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      topic: 'Immediate Survivor Support',
                      contactMethod: 'Discreet / Any',
                      message: '',
                    });
                  }}
                  className="rounded-full bg-forest-950 hover:bg-forest-900 text-white text-xs font-semibold px-7 py-3 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-forest-950/5 space-y-5"
              >
                <div className="border-b border-forest-950/10 pb-4 mb-2">
                  <h3 className="font-display text-2xl text-forest-950">
                    Confidential Inquiry Form
                  </h3>
                  <p className="text-xs text-forest-900/60 mt-1">
                    All inquiries are private and protected.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-forest-950 mb-1.5">
                      Your Name or Alias *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maria or Anonymous"
                      className="w-full rounded-xl border border-forest-950/15 px-4 py-2.5 text-sm outline-none focus:border-leaf-600 bg-sand-50/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-forest-950 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-forest-950/15 px-4 py-2.5 text-sm outline-none focus:border-leaf-600 bg-sand-50/30"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-forest-950 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(310) 000-0000"
                      className="w-full rounded-xl border border-forest-950/15 px-4 py-2.5 text-sm outline-none focus:border-leaf-600 bg-sand-50/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-forest-950 mb-1.5">
                      Topic / Reason for Contact
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full rounded-xl border border-forest-950/15 px-4 py-2.5 text-sm bg-white outline-none focus:border-leaf-600"
                    >
                      <option value="Immediate Survivor Support">Immediate Survivor Support / Safety</option>
                      <option value="Drop-In Center Services">Drop-In Center Walk-In Services</option>
                      <option value="Court Diversion Referral">Court Diversion / Legal Referral</option>
                      <option value="Volunteer / Mentorship">Volunteer &amp; Mentorship</option>
                      <option value="Partner / Agency Collaboration">Agency &amp; Partner Collaboration</option>
                      <option value="Donation / Resource Drives">Donations &amp; Material Support</option>
                      <option value="General Inquiry">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-950 mb-1.5">
                    Preferred Way to Respond
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Discreet / Any', 'Email', 'Phone Call', 'Text Message'].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: method })}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                          formData.contactMethod === method
                            ? 'bg-leaf-600 text-white border-leaf-600 shadow'
                            : 'bg-sand-50 text-forest-900/70 border-forest-950/10 hover:border-leaf-600'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-950 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can Restoration Diversion Services support you?"
                    className="w-full rounded-xl border border-forest-950/15 px-4 py-3 text-sm outline-none focus:border-leaf-600 bg-sand-50/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold text-sm transition-colors cursor-pointer shadow-md"
                >
                  Send Confidential Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. Location & Drop-In Center Walk-In Details */}
      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
              Visit Our Center
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
              Located on Long Beach Boulevard
            </h2>
            <p className="text-sm text-forest-900/70 mt-3">
              Intentionally situated along &quot;The Blade&quot; in Compton so women never have to navigate an unfamiliar system before receiving care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Map / Directions Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-forest-950/5 flex flex-col justify-between" data-reveal="true">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-10 w-10 rounded-xl bg-leaf-600/10 text-leaf-600 flex items-center justify-center flex-shrink-0">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-forest-950">
                      RDS Drop-In Center
                    </h3>
                    <p className="text-xs text-forest-900/60">Compton, California</p>
                  </div>
                </div>

                <div className="space-y-3.5 text-sm text-forest-900/80 mb-6 leading-relaxed">
                  <p>
                    <strong className="text-forest-950">Address:</strong> 208 N. Long Beach Blvd, Compton, CA 90221
                  </p>
                  <p>
                    <strong className="text-forest-950">Hours of Operation:</strong> Monday through Friday, 9:00 AM – 5:00 PM
                  </p>
                  <p>
                    <strong className="text-forest-950">Public Transit:</strong> Walking distance from Metro A Line (Compton Station). Served directly by Long Beach Transit Route 51 &amp; Metro Local bus lines.
                  </p>
                  <p>
                    <strong className="text-forest-950">Accessibility:</strong> Fully wheelchair accessible. Street parking and transit access available.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-forest-950/10 flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=208+N+Long+Beach+Blvd,+Compton,+CA+90221"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-forest-950 hover:bg-forest-900 text-white text-xs font-semibold px-6 py-3 transition-colors"
                >
                  <PinIcon className="h-4 w-4" /> Open in Google Maps ↗
                </a>
                <a
                  href="tel:3106391695"
                  className="inline-flex items-center gap-2 rounded-full border border-forest-950/20 hover:bg-sand-50 text-forest-950 text-xs font-semibold px-6 py-3 transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" /> Call for Directions
                </a>
              </div>
            </div>

            {/* Drop-In Center Amenities */}
            <div className="bg-forest-950 text-sand-50 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between" data-reveal="2">
              <div>
                <p className="uppercase tracking-[0.2em] text-olive-400 text-xs font-semibold mb-3">
                  Walk-In Amenities
                </p>
                <h3 className="font-display text-2xl sm:text-3xl text-white mb-4">
                  What you will find when you walk in
                </h3>
                <p className="text-sand-100/75 text-sm leading-relaxed mb-6">
                  Every survivor who walks through our doors is welcomed with warmth and dignity. No questions asked.
                </p>

                <div className="grid sm:grid-cols-2 gap-3.5 mb-8">
                  {[
                    'Hot, nutritious meals & snacks',
                    'Fresh clothing & shoes closet',
                    'Private shower & hygiene supplies',
                    'Safe Haven rest & quiet room',
                    'Emergency hotel & lodging placement',
                    'Confidential trauma counselors',
                    'Computer, phone & internet access',
                    'Compton College enrollment support',
                  ].map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2.5 text-xs text-sand-100/90">
                      <span className="h-2 w-2 rounded-full bg-olive-400 flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-sand-100/70">
                <span className="font-semibold text-olive-400 block mb-1">
                  &ldquo;I Am My Sister&apos;s Keeper&rdquo;
                </span>
                We believe community and sisterhood are the most powerful forces for healing and transformation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-20">
        <div className="text-center mb-12" data-reveal="true">
          <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
            Questions &amp; Answers
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4" data-reveal="2">
          {CONTACT_FAQS.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </div>
  );
}
