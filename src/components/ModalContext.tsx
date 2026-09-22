'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */

export interface BlogArticleData {
  title: string;
  tag: string;
  img: string;
  href?: string;
  author?: string;
  date?: string;
  content?: string[];
  keyPoints?: string[];
}

export interface EventData {
  title: string;
  date: string;
  time?: string;
  place?: string;
  type?: string;
  text?: string;
}

export interface PastEventData {
  title: string;
  date: string;
  tag: string;
  img: string;
  description?: string;
}

export interface TeamMemberData {
  name: string;
  role: string;
  img: string;
  bio: string;
}

export interface SurvivorStoryData {
  id: string;
  theme: string;
  quote: string;
  text: string;
  img: string;
  icon?: string;
}

interface ModalContextType {
  openDonateModal: (initialAmount?: number) => void;
  openVolunteerModal: (preferredArea?: string) => void;
  openRsvpModal: (event: EventData) => void;
  openBlogModal: (article: BlogArticleData) => void;
  openContactModal: (subject?: string) => void;
  openPastEventModal: (event: PastEventData) => void;
  openTeamModal: (member: TeamMemberData) => void;
  openStoryModal: (story: SurvivorStoryData) => void;
  closeAllModals: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return ctx;
}

/* ─────────────────────────────────────────────────────────────
   Provider & Modals Implementation
───────────────────────────────────────────────────────────── */

export function ModalProvider({ children }: { children: React.ReactNode }) {
  // Modal states
  const [donateOpen, setDonateOpen] = useState(false);
  const [donateAmount, setDonateAmount] = useState<number>(50);
  const [volunteerOpen, setVolunteerOpen] = useState(false);
  const [volunteerArea, setVolunteerArea] = useState<string>('');
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [rsvpEvent, setRsvpEvent] = useState<EventData | null>(null);
  const [blogOpen, setBlogOpen] = useState(false);
  const [blogArticle, setBlogArticle] = useState<BlogArticleData | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string>('');
  const [pastEventOpen, setPastEventOpen] = useState(false);
  const [pastEvent, setPastEvent] = useState<PastEventData | null>(null);
  const [teamOpen, setTeamOpen] = useState(false);
  const [teamMember, setTeamMember] = useState<TeamMemberData | null>(null);
  const [storyOpen, setStoryOpen] = useState(false);
  const [story, setStory] = useState<SurvivorStoryData | null>(null);

  // Close all
  const closeAllModals = useCallback(() => {
    setDonateOpen(false);
    setVolunteerOpen(false);
    setRsvpOpen(false);
    setBlogOpen(false);
    setContactOpen(false);
    setPastEventOpen(false);
    setTeamOpen(false);
    setStoryOpen(false);
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeAllModals]);

  // Lock scroll when any modal is open
  const isAnyOpen =
    donateOpen ||
    volunteerOpen ||
    rsvpOpen ||
    blogOpen ||
    contactOpen ||
    pastEventOpen ||
    teamOpen ||
    storyOpen;

  useEffect(() => {
    if (isAnyOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAnyOpen]);

  const openDonateModal = useCallback((initialAmount?: number) => {
    if (initialAmount) setDonateAmount(initialAmount);
    setDonateOpen(true);
  }, []);

  const openVolunteerModal = useCallback((area?: string) => {
    if (area) setVolunteerArea(area);
    setVolunteerOpen(true);
  }, []);

  const openRsvpModal = useCallback((ev: EventData) => {
    setRsvpEvent(ev);
    setRsvpOpen(true);
  }, []);

  const openBlogModal = useCallback((article: BlogArticleData) => {
    setBlogArticle(article);
    setBlogOpen(true);
  }, []);

  const openContactModal = useCallback((subj?: string) => {
    setContactSubject(subj || 'General Inquiry');
    setContactOpen(true);
  }, []);

  const openPastEventModal = useCallback((ev: PastEventData) => {
    setPastEvent(ev);
    setPastEventOpen(true);
  }, []);

  const openTeamModal = useCallback((member: TeamMemberData) => {
    setTeamMember(member);
    setTeamOpen(true);
  }, []);

  const openStoryModal = useCallback((st: SurvivorStoryData) => {
    setStory(st);
    setStoryOpen(true);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        openDonateModal,
        openVolunteerModal,
        openRsvpModal,
        openBlogModal,
        openContactModal,
        openPastEventModal,
        openTeamModal,
        openStoryModal,
        closeAllModals,
      }}
    >
      {children}

      {/* ────────────────── Donate Modal ────────────────── */}
      {donateOpen && (
        <DonateModalComponent
          defaultAmount={donateAmount}
          onClose={() => setDonateOpen(false)}
        />
      )}

      {/* ────────────────── Volunteer Modal ────────────────── */}
      {volunteerOpen && (
        <VolunteerModalComponent
          defaultArea={volunteerArea}
          onClose={() => setVolunteerOpen(false)}
        />
      )}

      {/* ────────────────── RSVP Modal ────────────────── */}
      {rsvpOpen && rsvpEvent && (
        <RsvpModalComponent
          event={rsvpEvent}
          onClose={() => setRsvpOpen(false)}
        />
      )}

      {/* ────────────────── Blog Modal ────────────────── */}
      {blogOpen && blogArticle && (
        <BlogModalComponent
          article={blogArticle}
          onClose={() => setBlogOpen(false)}
        />
      )}

      {/* ────────────────── Contact / Help Modal ────────────────── */}
      {contactOpen && (
        <ContactModalComponent
          defaultSubject={contactSubject}
          onClose={() => setContactOpen(false)}
        />
      )}

      {/* ────────────────── Past Event Modal ────────────────── */}
      {pastEventOpen && pastEvent && (
        <PastEventModalComponent
          event={pastEvent}
          onClose={() => setPastEventOpen(false)}
        />
      )}

      {/* ────────────────── Team Member Modal ────────────────── */}
      {teamOpen && teamMember && (
        <TeamModalComponent
          member={teamMember}
          onClose={() => setTeamOpen(false)}
        />
      )}

      {/* ────────────────── Survivor Story Modal ────────────────── */}
      {storyOpen && story && (
        <StoryModalComponent
          story={story}
          onClose={() => setStoryOpen(false)}
        />
      )}
    </ModalContext.Provider>
  );
}

/* ─────────────────────────────────────────────────────────────
   Modal Overlay Shell
───────────────────────────────────────────────────────────── */

function ModalShell({
  children,
  onClose,
  maxWidth = 'max-w-xl',
}: {
  children: React.ReactNode;
  onClose: () => void;
  maxWidth?: string;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-forest-950/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${maxWidth} bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-forest-950/10 animate-scaleUp`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 z-20 h-9 w-9 rounded-full bg-sand-100 hover:bg-sand-200 text-forest-950 flex items-center justify-center transition-colors cursor-pointer"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   1. Donate Modal Component
───────────────────────────────────────────────────────────── */

function DonateModalComponent({
  defaultAmount,
  onClose,
}: {
  defaultAmount: number;
  onClose: () => void;
}) {
  const [amount, setAmount] = useState<number>(defaultAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [fund, setFund] = useState<string>('Where Needed Most');
  const [step, setStep] = useState<'select' | 'details' | 'success'>('select');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');

  const tiers = [
    { value: 25, impact: 'Provides meals, hygiene essentials, and rest for a drop-in guest.' },
    { value: 50, impact: 'Covers emergency transit, hot meals, and immediate safety resources.' },
    { value: 100, impact: 'Funds trauma-informed counseling, case management, and court diversion.' },
    { value: 250, impact: 'Sponsors emergency hotel lodging and safe relocation away from the Blade.' },
  ];

  const selectedValue = customAmount ? parseFloat(customAmount) || 0 : amount;

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <ModalShell onClose={onClose} maxWidth="max-w-xl">
      {step === 'select' && (
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-10 w-10 rounded-xl bg-leaf-600/10 text-leaf-600 flex items-center justify-center font-bold text-lg">
              $
            </span>
            <div>
              <h3 className="font-display text-2xl text-forest-950">Support Restoration Diversion</h3>
              <p className="text-xs text-forest-900/60">501(c)(3) Nonprofit · All gifts are tax-deductible</p>
            </div>
          </div>

          {/* Frequency Toggle */}
          <div className="flex bg-sand-100 p-1 rounded-xl my-5 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setFrequency('one-time')}
              className={`flex-1 py-2 rounded-lg transition-all ${
                frequency === 'one-time' ? 'bg-white shadow text-forest-950' : 'text-forest-900/70 hover:text-forest-950'
              }`}
            >
              One-Time Gift
            </button>
            <button
              type="button"
              onClick={() => setFrequency('monthly')}
              className={`flex-1 py-2 rounded-lg transition-all ${
                frequency === 'monthly' ? 'bg-white shadow text-leaf-600' : 'text-forest-900/70 hover:text-forest-950'
              }`}
            >
              Monthly Sustainer ♥
            </button>
          </div>

          {/* Preset Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
            {tiers.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => {
                  setAmount(t.value);
                  setCustomAmount('');
                }}
                className={`py-3 px-2 rounded-xl text-center font-bold transition-all border ${
                  amount === t.value && !customAmount
                    ? 'bg-leaf-600 text-white border-leaf-600 shadow-md scale-102'
                    : 'bg-sand-50 hover:bg-sand-100 text-forest-950 border-forest-950/10'
                }`}
              >
                <div className="text-lg">${t.value}</div>
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-5">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-900/50 font-bold">$</span>
              <input
                type="number"
                min="5"
                placeholder="Or enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                }}
                className="w-full pl-8 pr-4 py-3 rounded-xl border border-forest-950/15 focus:border-leaf-600 outline-none text-sm"
              />
            </div>
          </div>

          {/* Impact Banner */}
          <div className="bg-sand-100/70 rounded-2xl p-4 mb-5 border border-forest-950/5">
            <p className="text-xs font-bold text-leaf-600 uppercase tracking-wider mb-1">Your Impact</p>
            <p className="text-sm text-forest-950/85">
              {tiers.find((t) => t.value === selectedValue)?.impact ||
                `Your gift of $${selectedValue || 0} provides immediate safety, sustenance, and hope for survivors in Compton.`}
            </p>
          </div>

          {/* Fund Designation */}
          <div className="mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider text-forest-900/70 mb-1.5">
              Direct My Gift To
            </label>
            <select
              value={fund}
              onChange={(e) => setFund(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm bg-white text-forest-950 outline-none focus:border-leaf-600"
            >
              <option value="Where Needed Most">Where Needed Most (Greatest Impact)</option>
              <option value="Drop-In Center Essentials">Drop-In Center Meals & Care Kits</option>
              <option value="Emergency Housing & Lodging">Emergency Hotel & Housing Relocation</option>
              <option value="Survivor Education & Career Fund">Compton College & Job Pathways</option>
            </select>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setStep('details')}
              className="w-full py-3.5 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold transition-colors shadow-md"
            >
              Continue to Give ${selectedValue || 50}
            </button>
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noreferrer"
              className="block w-full py-3 rounded-full border border-forest-950/15 hover:bg-sand-50 text-center font-semibold text-sm text-forest-950 transition-colors"
            >
              Or Donate Directly with PayPal
            </a>
          </div>
        </div>
      )}

      {step === 'details' && (
        <form onSubmit={handleComplete} className="p-6 sm:p-8">
          <button
            type="button"
            onClick={() => setStep('select')}
            className="text-xs font-semibold text-leaf-600 hover:underline mb-4 inline-flex items-center gap-1"
          >
            ← Change amount (${selectedValue} {frequency})
          </button>
          <h3 className="font-display text-2xl text-forest-950 mb-1">Donor Details</h3>
          <p className="text-sm text-forest-900/70 mb-5">
            Your receipt and tax acknowledgment letter will be sent here.
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-forest-950 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                placeholder="e.g. Jane Smith"
                className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-forest-950 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                placeholder="jane@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-forest-950 mb-1">Card Number</label>
                <input
                  type="text"
                  placeholder="•••• •••• •••• ••••"
                  defaultValue="4242 •••• •••• 4242"
                  className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600 bg-sand-50/50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-forest-950 mb-1">Exp / CVC</label>
                <input
                  type="text"
                  placeholder="MM/YY  CVC"
                  defaultValue="12/28  888"
                  className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600 bg-sand-50/50"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold transition-colors shadow-md"
          >
            Confirm ${selectedValue} {frequency === 'monthly' ? '/ month' : 'Gift'}
          </button>
        </form>
      )}

      {step === 'success' && (
        <div className="p-8 sm:p-10 text-center">
          <div className="h-16 w-16 rounded-full bg-leaf-600/10 text-leaf-600 mx-auto flex items-center justify-center mb-4">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl text-forest-950 mb-2">Thank You, {donorName || 'Generous Donor'}!</h3>
          <p className="text-sm text-forest-900/80 leading-relaxed max-w-md mx-auto mb-6">
            Your gift of <strong className="text-leaf-600">${selectedValue}</strong> designated to{' '}
            <strong>{fund}</strong> will make a direct difference in the lives of survivors walking through our doors on Long Beach Boulevard.
          </p>
          <div className="bg-sand-100 rounded-2xl p-4 text-xs text-forest-900/70 max-w-md mx-auto mb-6 text-left space-y-1">
            <p><strong>Receipt sent to:</strong> {donorEmail || 'your email'}</p>
            <p><strong>Organization:</strong> Restoration Diversion Services (RDS)</p>
            <p><strong>Location:</strong> 208 N. Long Beach Blvd, Compton, CA 90221</p>
            <p><strong>Tax Status:</strong> 501(c)(3) Exempt Organization</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold px-8 py-3 text-sm transition-colors"
          >
            Done
          </button>
        </div>
      )}
    </ModalShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. Volunteer Modal Component
───────────────────────────────────────────────────────────── */

function VolunteerModalComponent({
  defaultArea,
  onClose,
}: {
  defaultArea: string;
  onClose: () => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState(defaultArea || 'Drop-In Center Support');
  const [availability, setAvailability] = useState('Flexible');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ModalShell onClose={onClose} maxWidth="max-w-lg">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-10 w-10 rounded-xl bg-clay-500/10 text-clay-500 flex items-center justify-center font-bold text-lg">
              ♥
            </span>
            <div>
              <h3 className="font-display text-2xl text-forest-950">Become a Volunteer</h3>
              <p className="text-xs text-forest-900/60">Join the RDS community on the frontline in Compton</p>
            </div>
          </div>

          <p className="text-sm text-forest-900/80 my-4 leading-relaxed">
            Whether you can serve meals, mentor a survivor, or share professional skills, there is a place for your heart at RDS.
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-forest-950 mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-forest-950 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-forest-950 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(310) 000-0000"
                  className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-forest-950 mb-1">Area of Interest</label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm bg-white outline-none focus:border-leaf-600"
              >
                <option value="Drop-In Center Support">Drop-In Center Support (Meals & Hospitality)</option>
                <option value="Survivor Mentorship">Survivor Mentorship & Diversion Support</option>
                <option value="Skills & Employment Workshops">Skills, Résumé & Employment Workshops</option>
                <option value="Street Outreach">Street Outreach along the Blade</option>
                <option value="Event Planning & Resource Drives">Resource Drives & Community Events</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-forest-950 mb-1">Availability</label>
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm bg-white outline-none focus:border-leaf-600"
              >
                <option value="Flexible">Flexible / As Needed</option>
                <option value="Weekdays (Morning / Afternoon)">Weekdays (Morning / Afternoon)</option>
                <option value="Weekends">Weekends</option>
                <option value="Monthly Events">Monthly Events & Drives Only</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-forest-950 mb-1">A Little About Yourself (Optional)</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any relevant experience or what draws you to this work..."
                className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold transition-colors shadow-md cursor-pointer"
          >
            Submit Volunteer Application
          </button>
        </form>
      ) : (
        <div className="p-8 sm:p-10 text-center">
          <div className="h-16 w-16 rounded-full bg-leaf-600/10 text-leaf-600 mx-auto flex items-center justify-center mb-4">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl text-forest-950 mb-2">Thank You, {name}!</h3>
          <p className="text-sm text-forest-900/80 leading-relaxed mb-6">
            We received your volunteer application for <strong>{area}</strong>. Our volunteer coordinator will review your information and reach out at <strong>{email}</strong> within 1–2 business days.
          </p>
          <div className="bg-sand-100 rounded-2xl p-4 text-xs text-forest-900/70 mb-6 text-left">
            <p className="font-semibold text-forest-950 mb-1">Next Volunteer Orientation:</p>
            <p>Our upcoming new-volunteer onboarding covers trauma-informed care and guidelines at 208 N. Long Beach Blvd. We look forward to meeting you!</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold px-8 py-3 text-sm transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      )}
    </ModalShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. RSVP Modal Component
───────────────────────────────────────────────────────────── */

function RsvpModalComponent({
  event,
  onClose,
}: {
  event: EventData;
  onClose: () => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('1');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ModalShell onClose={onClose} maxWidth="max-w-lg">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-leaf-600/15 text-leaf-600 text-xs font-bold px-3 py-1 mb-2">
              Event RSVP
            </span>
            <h3 className="font-display text-2xl text-forest-950 leading-snug">{event.title}</h3>
            <div className="mt-2 text-xs text-forest-900/70 space-y-1">
              <p>📅 <strong>Date:</strong> {event.date} {event.time ? `· ${event.time}` : ''}</p>
              {event.place && <p>📍 <strong>Location:</strong> {event.place}</p>}
            </div>
          </div>

          <div className="space-y-3.5 mb-6">
            <div>
              <label className="block text-xs font-semibold text-forest-950 mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Marcus Miller"
                className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-forest-950 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="marcus@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-forest-950 mb-1">Phone (Optional)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(310) 000-0000"
                  className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-forest-950 mb-1">Number of Attendees</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm bg-white outline-none focus:border-leaf-600"
              >
                <option value="1">1 person (Just me)</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4+">4+ people (Group / Delegation)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold transition-colors shadow-md cursor-pointer"
          >
            Confirm RSVP
          </button>
        </form>
      ) : (
        <div className="p-8 sm:p-10 text-center">
          <div className="h-16 w-16 rounded-full bg-leaf-600/10 text-leaf-600 mx-auto flex items-center justify-center mb-4">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl text-forest-950 mb-2">RSVP Confirmed!</h3>
          <p className="text-sm text-forest-900/80 leading-relaxed mb-4">
            Thank you, <strong>{name}</strong>. Your spot is reserved for:
          </p>
          <div className="bg-sand-100 rounded-2xl p-4 text-xs text-forest-900/80 mb-6 text-left space-y-1">
            <p className="font-bold text-forest-950 text-sm">{event.title}</p>
            <p>📅 {event.date} {event.time ? `· ${event.time}` : ''}</p>
            {event.place && <p>📍 {event.place}</p>}
            <p>👥 <strong>Party size:</strong> {guests} attendee(s)</p>
          </div>
          <p className="text-xs text-forest-900/60 mb-6">
            A confirmation reminder will be sent to {email}. If you have any questions, email Dropin@restorationdiversion.org.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold px-8 py-3 text-sm transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      )}
    </ModalShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. Blog Modal Component
───────────────────────────────────────────────────────────── */

function BlogModalComponent({
  article,
  onClose,
}: {
  article: BlogArticleData;
  onClose: () => void;
}) {
  // Rich mock contents based on RDS narrative
  const fullContent = article.content || [
    `Restoration Diversion Services operates at the intersection of community trust and survivor empowerment. Located on Long Beach Boulevard in Compton, RDS provides a safe, stigma-free sanctuary where women can take their first steps away from commercial sexual exploitation.`,
    `A highlight of our work is centering Survivor Voices. When survivors speak, their experiences, progress, and vision remind every partner — from local advocates and law enforcement to faith leaders and educators — why collaborative work matters and what is possible when women are surrounded by resources, opportunities, and genuine sisterhood.`,
    `As our team always emphasizes: everyone holds a critical piece of the puzzle. Without every partner, the picture is not complete. Together, we are creating a beautiful reality — a survivor who is no longer simply surviving, but healing, restored, empowered, independent, and thriving.`,
  ];

  return (
    <ModalShell onClose={onClose} maxWidth="max-w-2xl">
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-forest-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.img}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
        <div className="absolute bottom-5 left-6 right-6 text-white">
          <span className="inline-block px-3 py-1 rounded-full bg-leaf-600 text-white text-xs font-bold mb-2">
            {article.tag}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl leading-snug">{article.title}</h2>
        </div>
      </div>

      <div className="p-6 sm:p-8 max-h-[55vh] overflow-y-auto">
        <div className="space-y-4 text-forest-900/85 leading-relaxed text-sm sm:text-base">
          {fullContent.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {article.href && (
          <div className="mt-6 pt-6 border-t border-forest-950/10 flex items-center justify-between">
            <span className="text-xs text-forest-900/60">Featured in City Pride Magazine</span>
            <a
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-600 hover:text-forest-950 transition-colors"
            >
              Read full article on City Pride ↗
            </a>
          </div>
        )}
      </div>
    </ModalShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. Contact / Help Modal Component
───────────────────────────────────────────────────────────── */

function ContactModalComponent({
  defaultSubject,
  onClose,
}: {
  defaultSubject: string;
  onClose: () => void;
}) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ModalShell onClose={onClose} maxWidth="max-w-lg">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-10 w-10 rounded-xl bg-forest-950 text-olive-400 flex items-center justify-center font-bold text-lg">
              ☎
            </span>
            <div>
              <h3 className="font-display text-2xl text-forest-950">Reach Out Confidentially</h3>
              <p className="text-xs text-forest-900/60">Free · 100% Confidential · No Referral Needed</p>
            </div>
          </div>

          <div className="bg-sand-100/90 rounded-2xl p-4 my-4 flex items-center justify-between border border-forest-950/5">
            <div>
              <p className="text-xs font-bold text-forest-950">24/7 Confidential Helpline</p>
              <p className="text-base font-display text-leaf-600 font-bold">(310) 639-1695</p>
            </div>
            <a
              href="tel:3106391695"
              className="px-4 py-2 rounded-full bg-forest-950 text-white text-xs font-semibold hover:bg-forest-900"
            >
              Call Now
            </a>
          </div>

          <p className="text-xs text-forest-900/70 mb-4">
            If you prefer to send a discreet message, leave your info below. We never share your details.
          </p>

          <div className="space-y-3.5 mb-6">
            <div>
              <label className="block text-xs font-semibold text-forest-950 mb-1">Your Name (or preferred alias)</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-forest-950 mb-1">How can we contact you safely? (Email or Phone)</label>
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Email or phone number"
                className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-forest-950 mb-1">Subject / Reason for contacting</label>
              <input
                type="text"
                defaultValue={defaultSubject}
                className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600 bg-sand-50"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-forest-950 mb-1">Confidential Message</label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can RDS assist you or your family?"
                className="w-full px-4 py-2.5 rounded-xl border border-forest-950/15 text-sm outline-none focus:border-leaf-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold transition-colors shadow-md cursor-pointer"
          >
            Send Confidential Message
          </button>
        </form>
      ) : (
        <div className="p-8 sm:p-10 text-center">
          <div className="h-16 w-16 rounded-full bg-leaf-600/10 text-leaf-600 mx-auto flex items-center justify-center mb-4">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl text-forest-950 mb-2">Message Received Confidentially</h3>
          <p className="text-sm text-forest-900/80 leading-relaxed mb-6">
            Thank you, {name}. Your message has been safely received by our care team. We will respond through your designated contact channel with utmost discretion.
          </p>
          <div className="bg-sand-100 rounded-2xl p-4 text-xs text-forest-900/70 mb-6 text-left space-y-1">
            <p><strong>Emergency:</strong> If you are in immediate physical danger, call 911 or the 24/7 hotline at (310) 639-1695.</p>
            <p><strong>In Person:</strong> 208 N. Long Beach Blvd, Compton, CA 90221</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold px-8 py-3 text-sm transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      )}
    </ModalShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. Past Event Modal Component
───────────────────────────────────────────────────────────── */

function PastEventModalComponent({
  event,
  onClose,
}: {
  event: PastEventData;
  onClose: () => void;
}) {
  return (
    <ModalShell onClose={onClose} maxWidth="max-w-xl">
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-forest-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
        <div className="absolute bottom-5 left-6 right-6 text-white">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-2 backdrop-blur">
            {event.tag} · {event.date}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl leading-snug">{event.title}</h2>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-forest-900/80 leading-relaxed text-sm sm:text-base mb-6">
          {event.description ||
            `RDS brought together community members, survivors, advocates, and neighborhood leaders for this milestone gathering. Through community awareness, shared resources, and direct outreach, moments like this reinforce our united commitment to ending human trafficking along Long Beach Boulevard.`}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold text-sm transition-colors cursor-pointer"
        >
          Close
        </button>
      </div>
    </ModalShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   7. Team Member Bio Modal Component
───────────────────────────────────────────────────────────── */

function TeamModalComponent({
  member,
  onClose,
}: {
  member: TeamMemberData;
  onClose: () => void;
}) {
  return (
    <ModalShell onClose={onClose} maxWidth="max-w-md">
      <div className="p-6 sm:p-8 text-center">
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg mb-4 ring-4 ring-leaf-600/20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-display text-2xl text-forest-950 mb-1">{member.name}</h3>
        <p className="text-sm font-semibold text-leaf-600 mb-4">{member.role}</p>
        <p className="text-sm text-forest-900/80 leading-relaxed mb-6 text-left">
          {member.bio}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold text-sm transition-colors cursor-pointer"
        >
          Close
        </button>
      </div>
    </ModalShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   8. Survivor Story Reflection Modal Component
───────────────────────────────────────────────────────────── */

function StoryModalComponent({
  story,
  onClose,
}: {
  story: SurvivorStoryData;
  onClose: () => void;
}) {
  return (
    <ModalShell onClose={onClose} maxWidth="max-w-lg">
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-leaf-600/20 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={story.img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-leaf-600 font-bold">
              Survivor Voice · {story.id}
            </span>
            <h3 className="font-display text-2xl text-forest-950 leading-snug">{story.theme}</h3>
          </div>
        </div>

        <blockquote className="italic font-display text-xl text-forest-950 border-l-4 border-leaf-600 pl-4 my-5 leading-snug">
          &ldquo;{story.quote}&rdquo;
        </blockquote>

        <p className="text-forest-900/80 text-sm sm:text-base leading-relaxed mb-6">
          {story.text}
        </p>

        <p className="text-xs text-forest-900/50 italic mb-6">
          * Survivor name and identifying details changed to protect safety and dignity. Shared with consent.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-semibold text-sm transition-colors cursor-pointer"
        >
          Close Story
        </button>
      </div>
    </ModalShell>
  );
}
