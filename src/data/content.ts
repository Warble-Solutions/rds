export interface NavLink {
  to: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { to: '/', label: 'Home' },
  { to: '/program', label: 'Program' },
  { to: '/about', label: 'About Us' },
  { to: '/events', label: 'Events' },
  { to: '/stories', label: "Survivors' Stories" },
];

export interface HeroSlide {
  img: string;
  eyebrow: string;
  title: string;
  text: string;
  primary: { label: string; href?: string; to?: string };
  secondary: { label: string; to: string };
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    img: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
    eyebrow: "I Am My Sister's Keeper",
    title: 'Find safety, support, and a new beginning.',
    text: 'Restoration Diversion Services walks alongside survivors of human trafficking in Compton, CA — with shelter, counseling, legal aid, and a community that believes in their freedom.',
    primary: { label: 'Donate Now', href: '#donate' },
    secondary: { label: 'Explore Our Programs', to: '/program' },
  },
  {
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
    eyebrow: 'Since 2009',
    title: 'A trauma-informed path from crisis to independence.',
    text: 'From our Drop-In Center to the Survivor Diversion Program, every service we offer meets survivors exactly where they are — with dignity, patience, and real resources.',
    primary: { label: 'Meet Our Team', to: '/about' },
    secondary: { label: 'See Our Story', to: '/about' },
  },
  {
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80',
    eyebrow: 'Voices of Resilience',
    title: 'Every survivor has a story worth hearing.',
    text: 'Read first-hand reflections from survivors who found stability, healing, and a renewed sense of hope through RDS.',
    primary: { label: 'Read Their Stories', to: '/stories' },
    secondary: { label: 'Upcoming Events', to: '/events' },
  },
];

export interface StatItem {
  value: string;
  label: string;
}

export const HOME_STATS: StatItem[] = [
  { value: '2009', label: 'Serving Compton since' },
  { value: '6', label: 'Core support programs' },
  { value: '24/7', label: 'Confidential drop-in access' },
  { value: '100+', label: 'Survivors supported yearly' },
];

export const HOME_VALUES = [
  {
    title: 'Trauma-Informed',
    icon: 'heartHand',
    text: "Every interaction is grounded in empathy, safety, and respect for each survivor's pace.",
  },
  {
    title: 'Holistic Care',
    icon: 'homeHeart',
    text: 'We treat the whole person — housing, health, legal standing, and wellbeing together.',
  },
  {
    title: 'Community Partnership',
    icon: 'compass',
    text: 'We work alongside law enforcement, faith groups, colleges, and local businesses.',
  },
  {
    title: 'Dignity First',
    icon: 'heartHand',
    text: 'Survivors are not defined by their trauma — we help them rebuild lives of purpose.',
  },
];

export interface ProgramItem {
  title: string;
  tag: string;
  icon: string;
  img: string;
  img2?: string;
  text: string;
  short: string;
  points: string[];
}

export const PROGRAMS: ProgramItem[] = [
  {
    title: 'Drop-In Center',
    tag: 'The Blade, Compton',
    icon: 'building',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80',
    img2: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80',
    text: 'Located on Long Beach Boulevard, our Drop-In Center is the heart of RDS — a safe refuge for survivors navigating "The Blade." Anyone can walk in for a warm or cold drink, a snack, a hot shower, clean clothes, or simply a place to rest without judgment.',
    short: 'A safe refuge on Long Beach Boulevard offering rest, showers, warm meals, and a moment of peace for survivors in the community.',
    points: [
      'Rest, restrooms, and showers',
      'Warm meals and snacks',
      'Hygiene and safety supplies',
      'A judgment-free, trauma-informed space',
    ],
  },
  {
    title: 'Survivor Diversion Program',
    tag: 'Formerly the Prostitution Diversion Program',
    icon: 'users',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
    img2: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    text: 'SDP is a court- and non-court-ordered pathway for individuals arrested on trafficking-related charges. Through our "Ending The Game" curriculum, participants join group sessions over 1 to 18 weeks focused on mentoring, education, and building a self-sufficient future.',
    short: 'A court- and non-court-ordered path away from exploitation, built on mentorship, education, and self-sufficiency.',
    points: [
      '1–18 week structured curriculum',
      '"Ending The Game" group sessions',
      'Mentorship from survivor-informed staff',
      'A record of exiting exploitation for good',
    ],
  },
  {
    title: 'Supportive Services',
    tag: 'For SDP participants & the community',
    icon: 'heartShield',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    img2: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
    text: 'Open to SDP participants, drop-in clients, and community referrals, our supportive services meet survivors wherever they are in their healing — mentally, physically, and practically.',
    short: 'Counseling, job readiness, GED prep, parenting support, and housing referrals for lasting stability.',
    points: [
      'Mental health & substance abuse counseling',
      'Job readiness & GED preparation',
      'Anger management & domestic violence support',
      'Parenting assistance & computer access',
      'Housing referrals & STI workshops',
    ],
  },
  {
    title: 'Temporary Assistance',
    tag: 'Multi-county housing partnerships',
    icon: 'briefcase',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    img2: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
    text: 'When survivors need shelter immediately, RDS coordinates with sheltering programs across multiple counties to place individuals in safe, transitional housing while a longer-term plan takes shape.',
    short: 'Emergency and transitional housing partnerships across multiple counties for survivors who need shelter now.',
    points: [
      'Emergency housing placement',
      'Coordination across county lines',
      'Bridge to long-term housing solutions',
      'Ongoing case management support',
    ],
  },
  {
    title: 'Legal Advocacy',
    tag: 'Compton D.A. & Victim Compensation Board',
    icon: 'scale',
    img: "data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'1000'%20height%3D'667'%20viewBox%3D'0%200%201000%20667'%3E%0A%20%20%20%20%20%20%3Cdefs%3E%3ClinearGradient%20id%3D'g'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'1'%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D'0'%20stop-color%3D'%231f4429'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%2316301f'%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D'1000'%20height%3D'667'%20fill%3D'url(%23g)'%2F%3E%0A%20%20%20%20%20%20%3Cg%20fill%3D'none'%20stroke%3D'%238fae4a'%20stroke-width%3D'7'%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%20transform%3D'translate(500%20130)'%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D'M0%200%20v300'%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D'M-70%20300%20h140'%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D'M-95%20320%20q95%20-40%20190%200'%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D'0'%20cy%3D'-8'%20r%3D'12'%20fill%3D'%238fae4a'%20stroke%3D'none'%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D'M-180%2030%20h360'%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D'M-180%2030%20l-55%20120%20M-180%2030%20l55%20120%20M-235%20150%20a55%2040%200%200%200%20110%200'%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D'M180%2030%20l-55%20120%20M180%2030%20l55%20120%20M125%20150%20a55%2040%200%200%200%20110%200'%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fsvg%3E",
    img2: '',
    text: 'Our team helps survivors navigate the legal system — from clearing trafficking-related charges to filing for victim compensation — with a case manager by their side at every hearing.',
    short: "Navigating charges, records, and victim compensation claims alongside the Compton D.A.'s office.",
    points: [
      'Record & charge navigation support',
      'California Victim Compensation Board filings',
      'Court accompaniment',
      'Protective order assistance',
    ],
  },
  {
    title: 'Community Outreach & Awareness',
    tag: 'Prevention & partnership',
    icon: 'compass',
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80',
    img2: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80',
    text: 'RDS trains local businesses, schools, and faith communities to recognize the signs of trafficking, while running street outreach to connect survivors with our services before crisis hits.',
    short: 'Training, street outreach, and partnerships that help our community spot and prevent trafficking early.',
    points: [
      'Trafficking-awareness trainings',
      'Street & night outreach teams',
      'School & faith-community partnerships',
      'Anti-trafficking task force participation',
    ],
  },
];

export const TIMELINE = [
  {
    year: '2009',
    title: 'RDS is founded',
    text: 'A small outreach effort begins on Long Beach Boulevard, meeting survivors where they are.',
    icon: 'flag',
  },
  {
    year: '2013',
    title: 'Drop-In Center opens',
    text: 'A dedicated physical space offers daily refuge, meals, and hygiene resources.',
    icon: 'building',
  },
  {
    year: '2017',
    title: 'Survivor Diversion Program launches',
    text: 'Court partnerships create a real alternative to prosecution — mentorship instead of punishment.',
    icon: 'scale',
  },
  {
    year: '2022',
    title: 'Regional housing network expands',
    text: 'Multi-county partnerships bring emergency and transitional housing within reach.',
    icon: 'plant',
  },
  {
    year: 'Today',
    title: 'A full continuum of care',
    text: 'From crisis to independence, RDS walks with survivors at every stage of their journey.',
    icon: 'compass',
  },
];

export const VOLUNTEER_AREAS = [
  {
    title: 'Drop-In Center Support',
    text: 'Greet guests, serve meals, and help keep the Center running day to day.',
  },
  {
    title: 'Mentorship',
    text: 'Walk alongside a survivor through the Diversion Program as a consistent, caring presence.',
  },
  {
    title: 'Skills & Workshops',
    text: 'Lead a resume, job-readiness, or life-skills session for our Supportive Services program.',
  },
];

export const HOME_TESTIMONIALS = [
  {
    quote: "The team at RDS has given me something I hadn't felt in years — hope.",
    id: 'Survivor, Program Graduate',
  },
  {
    quote: 'RDS has been a tremendous source of support throughout this journey.',
    id: 'Survivor, Drop-In Center',
  },
  {
    quote: 'With their help, support, and resources, I am now standing on firmer ground.',
    id: 'Survivor, Supportive Services',
  },
];

export const BLOG_ARTICLES = [
  {
    title: 'Recognizing the Signs: A Guide for Community Members',
    tag: 'Awareness',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Inside "Ending The Game": What Our Diversion Curriculum Teaches',
    tag: 'Programs',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Five Ways to Support Survivors Without Saying a Word',
    tag: 'Community',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80',
  },
];

export const PROGRAM_STATS: StatItem[] = [
  { value: '6', label: 'Interconnected programs' },
  { value: '1–18', label: 'Week diversion curriculum' },
  { value: '3+', label: 'Counties in housing network' },
  { value: '0', label: 'Judgment at our door' },
];

export const ABOUT_STATS: StatItem[] = [
  { value: '15+', label: 'Years of continuous service' },
  { value: '1,000+', label: 'Drop-in visits every year' },
  { value: '85%', label: 'Diversion program completion' },
  { value: '40+', label: 'Community partners' },
];

export const ABOUT_VALUES = [
  {
    title: 'Trauma-Informed',
    icon: 'heartHand',
    text: "Every interaction is grounded in empathy, safety, and respect for each survivor's pace and choices.",
  },
  {
    title: 'Holistic Care',
    icon: 'homeHeart',
    text: 'We treat the whole person — housing, health, legal standing, and emotional wellbeing together.',
  },
  {
    title: 'Community Partnership',
    icon: 'users',
    text: 'We work alongside law enforcement, faith groups, colleges, and businesses to close gaps in care.',
  },
  {
    title: 'Dignity First',
    icon: 'plant',
    text: 'Survivors are not defined by their trauma. We help them rebuild lives of purpose and resilience.',
  },
];

export interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Pamela A. Bryant',
    role: 'Board President',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Guides RDS strategy and community partnerships with two decades of nonprofit leadership.',
  },
  {
    name: 'Deatra Handy',
    role: 'Program Director',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Oversees every RDS program and personally mentors participants through the Diversion Program.',
  },
  {
    name: 'Keyla Brown',
    role: 'Lead Case Manager',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Walks with each survivor one-on-one — from first intake to independent living.',
  },
];

export const PARTNERS = [
  { name: "Compton District Attorney's Office", icon: 'scale' },
  { name: 'California Victim Compensation Board', icon: 'scale' },
  { name: 'Compton College', icon: 'compass' },
  { name: 'Local law enforcement agencies', icon: 'users' },
  { name: 'Faith-based organizations', icon: 'heartHand' },
  { name: 'Regional shelters & housing partners', icon: 'homeHeart' },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQS: FAQItem[] = [
  {
    q: 'Who can access RDS services?',
    a: 'Anyone impacted by human trafficking — whether arriving through a court referral, walking into the Drop-In Center, or reaching out on behalf of a loved one. Every service is confidential and free of charge.',
  },
  {
    q: 'Do I need a referral to visit the Drop-In Center?',
    a: 'No. The Drop-In Center is a walk-in safe space. Come as you are, whenever you need rest, a shower, a meal, or someone to talk to.',
  },
  {
    q: 'What is the Survivor Diversion Program?',
    a: 'A court- and non-court-ordered pathway for individuals arrested on trafficking-related charges. Over 1–18 weeks of group sessions, participants work through the "Ending The Game" curriculum with mentorship toward self-sufficiency.',
  },
  {
    q: 'How can I support RDS?',
    a: 'Donate, volunteer at the Drop-In Center, mentor a program participant, or partner with us as a business or faith community. Every form of support directly reaches survivors.',
  },
];

export const FEATURED_EVENT = {
  title: 'Compton Human Trafficking Task Force Meeting',
  type: 'Collaborative Community Meeting',
  date: 'Third Thursday · Monthly',
  place: 'Compton City Hall, Compton, CA',
  text: 'Join us as community organizations, law enforcement, and service providers unite to collaborate, share updates, and strengthen our collective response to human trafficking in Compton. Bring resource materials, program updates, or informational flyers to share.',
  img: 'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=1000&q=80',
};

export const UPCOMING_EVENTS = [
  {
    day: '18',
    mon: 'JUL',
    title: 'Survivor Empowerment Workshop',
    time: '10:00 AM – 1:00 PM',
    place: 'RDS Drop-In Center',
    type: 'Workshop',
    icon: 'heartHand',
    text: 'A guided session on financial literacy, self-advocacy, and goal-setting for program participants and drop-in guests.',
  },
  {
    day: '25',
    mon: 'JUL',
    title: 'Community Awareness Night',
    time: '6:00 PM – 8:00 PM',
    place: 'Compton Community Center',
    type: 'Awareness',
    icon: 'compass',
    text: 'An open evening for neighbors to learn the signs of trafficking, meet our team, and discover how to get involved.',
  },
  {
    day: '08',
    mon: 'AUG',
    title: 'Back-to-School Resource Drive',
    time: 'All day',
    place: 'RDS Drop-In Center',
    type: 'Community Drive',
    icon: 'briefcase',
    text: 'Collecting backpacks, supplies, and hygiene kits for survivors and their children ahead of the new school year.',
  },
  {
    day: '21',
    mon: 'AUG',
    title: 'Volunteer Orientation & Training',
    time: '5:30 PM – 7:00 PM',
    place: 'Virtual + In-Person',
    type: 'Training',
    icon: 'users',
    text: 'New-volunteer onboarding covering trauma-informed care, confidentiality, and how to support at the Drop-In Center.',
  },
  {
    day: '12',
    mon: 'SEP',
    title: 'Partner Roundtable: Housing First',
    time: '9:00 AM – 11:00 AM',
    place: 'Compton College',
    type: 'Partner Meeting',
    icon: 'book',
    text: 'Regional shelters and housing partners gather to coordinate emergency placement pathways for survivors.',
  },
];

export const WAYS_WE_GATHER = [
  {
    title: 'Task Force Meetings',
    icon: 'users',
    text: 'Recurring gatherings uniting law enforcement, advocates, and service providers around a shared response to trafficking.',
  },
  {
    title: 'Community Engagement',
    icon: 'compass',
    text: 'Outreach events and awareness nights that connect neighbors with RDS resources and education.',
  },
  {
    title: 'Partner Collaborations',
    icon: 'heartHand',
    text: 'Joint initiatives with local organizations, shelters, colleges, and businesses working toward the same mission.',
  },
];

export const PAST_EVENTS = [
  {
    title: 'Human Trafficking Awareness Walk',
    date: 'January 2026',
    tag: 'Awareness',
    img: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Holiday Drive for Drop-In Guests',
    date: 'December 2025',
    tag: 'Community Drive',
    img: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Community Resource Fair',
    date: 'October 2025',
    tag: 'Outreach',
    img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Back-to-School Supply Distribution',
    date: 'August 2025',
    tag: 'Community Drive',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Survivor Leadership Retreat',
    date: 'June 2025',
    tag: 'Workshop',
    img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Faith Community Partnership Breakfast',
    date: 'May 2025',
    tag: 'Partner Meeting',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Night Outreach on The Blade',
    date: 'April 2025',
    tag: 'Outreach',
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Annual Fundraising Gala',
    date: 'March 2025',
    tag: 'Fundraiser',
    img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=700&q=80',
  },
];

export const EVENT_STATS: StatItem[] = [
  { value: '30+', label: 'Community events each year' },
  { value: '40+', label: 'Partner organizations' },
  { value: '1,200+', label: 'Neighbors reached in 2025' },
  { value: '12', label: 'Task force meetings annually' },
];

export const FEATURED_STORY = {
  name: "Maria's Story",
  tag: "From The Blade to a bachelor's degree",
  img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80',
  quote: 'For the first time, someone saw me as a person with a future — not a case, not a charge, just me.',
  text: 'Maria first walked into the Drop-In Center for a hot shower and a meal. She left with a case manager who never gave up on her. Over eighteen months, RDS helped her clear trafficking-related charges, find transitional housing, and enroll at Compton College. Today she is months from her degree — and mentors other survivors walking the same road.',
  milestones: [
    'Safe housing secured',
    'Charges cleared with legal advocacy',
    'Enrolled in college',
    'Now a peer mentor',
  ],
};

export const SURVIVOR_STORIES = [
  {
    id: '208-1',
    theme: 'Finding the door',
    icon: 'building',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    quote: 'RDS has been a tremendous source of support throughout this journey.',
    text: "After years of feeling invisible, I found the Drop-In Center almost by accident. What I found there was a team that didn't ask me to explain myself before helping — just a hot meal, a safe seat, and people who listened. That first visit turned into case management, then counseling, then a job.",
  },
  {
    id: '208-3',
    theme: 'A future worth building',
    icon: 'plant',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    quote: "The team at RDS has given me something I hadn't felt in years — hope.",
    text: "I entered the Survivor Diversion Program not really believing anything would change. Group sessions with people who understood — really understood — shifted something in me. My case manager helped me get my GED and find housing. I'm building a future instead of just surviving the day.",
  },
  {
    id: '208-4',
    theme: 'Safe at last',
    icon: 'heartHand',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    quote: 'Today, I am blessed, happy, and safe, thanks to the unwavering support of the RDS team.',
    text: "Escaping wasn't one moment — it took several tries and a lot of fear. What made the difference was having somewhere to go that didn't feel like another system to survive. RDS helped me navigate legal paperwork, find temporary housing, and slowly rebuild trust in myself and in other people.",
  },
  {
    id: '208-5',
    theme: 'Standing on firmer ground',
    icon: 'briefcase',
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80',
    quote: 'With their help, support, and resources, I am now standing on firmer ground.',
    text: 'I came to RDS with nothing but the clothes I was wearing. The supportive services program connected me to counseling, parenting resources, and eventually a path back to stable work. I still have hard days, but I have a foundation now — and a team that still checks in.',
  },
];

export const BEHIND_STORY_STEPS = [
  {
    icon: 'heartHand',
    title: 'First Contact',
    text: 'A survivor reaches out or walks into the Drop-In Center — no referral, no judgment.',
  },
  {
    icon: 'scale',
    title: 'Advocacy & Safety',
    text: 'We address immediate needs: shelter, legal navigation, and a dedicated case manager.',
  },
  {
    icon: 'plant',
    title: 'Rebuilding',
    text: 'Counseling, job readiness, GED prep, and housing move each person toward stability.',
  },
  {
    icon: 'briefcase',
    title: 'Independence',
    text: 'Survivors step into lasting, self-directed lives — many return to mentor others.',
  },
];

export const STORY_STATS: StatItem[] = [
  { value: 'Housing', label: 'Safe placement for survivors in crisis' },
  { value: 'Healing', label: 'Ongoing counseling & case management' },
  { value: 'Work', label: 'Job readiness and stable employment' },
  { value: 'Hope', label: 'A future defined by the survivor' },
];
