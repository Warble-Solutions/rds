export interface NavLink {
  to: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { to: '/', label: 'Home' },
  { to: '/program', label: 'Program' },
  { to: '/about', label: 'About Us' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: "/stories", label: "Survivors' Stories" },
  { to: '/donate', label: 'Donate' },
  { to: '/contact', label: 'Contact Us' },
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
    img: '/images/hero-dropin-center.jpg',
    eyebrow: 'Restore • Empower • Transform',
    title: 'From the Blade to a different future.',
    text: 'Located on Long Beach Boulevard in the heart of the Blade, RDS meets women where they are — providing safety, healing, sisterhood, and a pathway from crisis to independence.',
    primary: { label: 'Donate Now', href: '#donate' },
    secondary: { label: 'Explore Our Programs', to: '/program' },
  },
  {
    img: '/images/hero-empowerment.jpg',
    eyebrow: 'We Rise Together',
    title: 'From surviving to thriving.',
    text: 'Leaving trafficking is not the end of the journey — it is often the beginning. RDS walks alongside women through outreach, crisis intervention, stabilization, healing, education, employment, and independence.',
    primary: { label: 'Meet Our Team', to: '/about' },
    secondary: { label: 'Our Sisterhood', to: '/stories' },
  },
  {
    img: '/images/hero-sisterhood.jpg',
    eyebrow: 'One Sisterhood • One Purpose • One Heart',
    title: 'Trafficking creates isolation. RDS creates connection.',
    text: 'Through the RDS Sisterhood, women encourage one another, celebrate accomplishments, and reach back to support women who are newer to the journey. You are not alone.',
    primary: { label: 'Read Their Stories', to: '/stories' },
    secondary: { label: 'Upcoming Events', to: '/events' },
  },
];

export interface StatItem {
  value: string;
  label: string;
}

export const HOME_STATS: StatItem[] = [
  { value: '233+', label: 'Unduplicated survivors served' },
  { value: '905+', label: 'Total participant visits' },
  { value: '120', label: 'Walk-in visits per month' },
  { value: '28', label: 'Exits or rescues from trafficking' },
];

export const HOME_VALUES = [
  {
    title: 'Trauma-Informed',
    icon: 'heartHand',
    text: "Every interaction is grounded in empathy, safety, and respect for each woman's pace and choices.",
  },
  {
    title: 'Whole Woman',
    icon: 'homeHeart',
    text: 'We address the whole woman — not simply what happened to her. Housing, health, safety, and emotional wellness together.',
  },
  {
    title: 'Community-Driven',
    icon: 'compass',
    text: 'No one organization can meet every need of a survivor. RDS serves as a bridge, connecting each woman with a larger network.',
  },
  {
    title: 'Sisterhood',
    icon: 'users',
    text: 'We Rise Together. We Heal Together. We Win Together. Replacing isolation with connection, belonging, and encouragement.',
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
    tag: '208 N. Long Beach Blvd, Compton',
    icon: 'building',
    img: '/images/hero-dropin-center.jpg',
    img2: '/gallery/RDSMeeting10.JPG',
    text: 'Located on Long Beach Boulevard in the heart of the Blade, the RDS Drop-In Center is a safe, welcoming, trauma-informed, nonjudgmental space. A woman can walk through our doors into an environment created to offer safety, dignity, resources, and hope. A hygiene bag can become the beginning of a relationship — and that relationship can lead to housing, counseling, education, employment, and independence.',
    short: 'A safe refuge on Long Beach Boulevard where a first visit for food and rest can become the beginning of a whole new future.',
    points: [
      'Food, clothing, and hygiene supplies',
      'Safety tools and personal safety resources',
      'A quiet place to sit and someone willing to listen',
      'A judgment-free, trauma-informed space',
    ],
  },
  {
    title: 'Crisis Intervention & Case Management',
    tag: 'Individualized support',
    icon: 'heartShield',
    img: '/images/hero-case-management.jpg',
    img2: '/gallery/RDSMeeting14.JPG',
    text: 'RDS provides individualized support based upon each woman\'s needs and goals. We don\'t just ask, "What happened to you?" We help determine, "What do you need now, and where do you want to go next?" This includes exit assistance, safety planning, emergency housing, relocation, transportation, advocacy, and ongoing follow-up.',
    short: 'We help address tonight\'s crisis while working toward tomorrow\'s stability.',
    points: [
      'Human trafficking exit assistance',
      'Individualized case management & safety planning',
      'Emergency housing & relocation',
      'Resource navigation & public benefits advocacy',
    ],
  },
  {
    title: 'Mental Health & The Serenity Room',
    tag: 'Trauma-informed emotional support',
    icon: 'heartHand',
    img: '/images/hero-serenity-room.jpg',
    img2: '/gallery/RDSMeeting19.JPG',
    text: 'The Serenity Room is a private, peaceful space at the Drop-In Center where participants receive trauma-informed mental-health and emotional support in an environment where they have already developed trust. Trauma does not automatically end when exploitation ends — RDS is committed to addressing the whole woman.',
    short: 'A private, peaceful space for trauma-informed counseling where trust has already been built.',
    points: [
      'Onsite counseling in the Serenity Room',
      'Trauma-informed emotional support',
      'Behavioral-health provider connections',
      'Peer support and group sessions',
    ],
  },
  {
    title: 'Housing & Basic Needs',
    tag: 'From tonight\'s crisis to tomorrow\'s stability',
    icon: 'homeHeart',
    img: '/images/hero-housing-safety.jpg',
    img2: '/gallery/RDSMeeting20.JPG',
    text: 'RDS assists women experiencing immediate crisis with emergency hotel stays when a woman decides to leave trafficking — she never has to go back out again. We provide shelter connections, transitional housing, relocation assistance, and longer-term housing navigation.',
    short: 'Immediate hotel stays when a woman decides to leave. She never has to go back out again.',
    points: [
      'Emergency hotel assistance',
      'Safe shelter placement & relocation',
      'Transitional & longer-term housing navigation',
      'Ongoing case management support',
    ],
  },
  {
    title: 'Education & Employment',
    tag: 'Compton College partnership',
    icon: 'briefcase',
    img: '/images/hero-education.jpg',
    img2: '',
    text: 'RDS connects participants with colleges, GED resources, FAFSA navigation, and paid internship opportunities. Through our close relationship with Compton College, each woman receives one-on-one enrollment counseling, financial counseling, and student-support programs. Economic independence is also a form of safety.',
    short: 'GED prep, college enrollment through Compton College, job readiness, paid internships, and career pathways.',
    points: [
      'GED preparation & college enrollment',
      'FAFSA & financial aid navigation',
      'Job readiness, résumés & interview prep',
      'Paid internships & work experience',
    ],
  },
  {
    title: 'Street Outreach',
    tag: 'Meeting women where they are',
    icon: 'compass',
    img: '/images/hero-street-outreach.jpg',
    img2: '/gallery/RDSMeeting17.JPG',
    text: 'Not every woman experiencing exploitation is ready to walk into a service agency. RDS conducts outreach in high-risk areas, providing food, hygiene products, clothing, safety resources, trafficking information, and pathways into services. The message is: "When you\'re ready, there is somewhere you can go."',
    short: 'Outreach in high-risk areas with one message: when you\'re ready, there is somewhere you can go.',
    points: [
      'Outreach in high-risk areas along the Blade',
      'Food, hygiene products & safety resources',
      'Trafficking information & crisis resources',
      'Compton Human Trafficking Task Force leadership',
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
    title: 'More Than a Makeover: A Reflection of the Woman Within',
    tag: 'Press',
    img: '/gallery/RDSMeeting23.jpg',
    href: 'https://citypridemagazine.com/more-than-a-makeover-a-reflection-of-the-woman-within/',
  },
  {
    title: 'Compton Human Trafficking Task Force: Recognize, Respond, Restore',
    tag: 'Task Force',
    img: '/gallery/RDSMeeting12.jpg',
  },
  {
    title: 'The RDS Sisterhood: From Isolation to Connection',
    tag: 'Community',
    img: '/images/hero-sisterhood.jpg',
  },
];

export const PROGRAM_STATS: StatItem[] = [
  { value: '233+', label: 'Survivors served to date' },
  { value: '120', label: 'Walk-in visits per month' },
  { value: '28', label: 'Exits from trafficking' },
  { value: '0', label: 'Judgment at our door' },
];

export const ABOUT_STATS: StatItem[] = [
  { value: '17+', label: 'Years of continuous service' },
  { value: '905+', label: 'Total participant visits' },
  { value: '233+', label: 'Unduplicated survivors served' },
  { value: '40+', label: 'Community partners' },
];

export const ABOUT_VALUES = [
  {
    title: 'Trauma-Informed',
    icon: 'heartHand',
    text: "Every interaction is grounded in empathy, safety, and respect for each woman's pace and choices.",
  },
  {
    title: 'Whole Woman',
    icon: 'homeHeart',
    text: 'We address the whole woman — not simply what happened to her. Housing, health, safety, and emotional wellness together.',
  },
  {
    title: 'Community Partnership',
    icon: 'users',
    text: 'No one organization can meet every need. RDS serves as a bridge, connecting each woman with the larger community network.',
  },
  {
    title: 'From Surviving to Thriving',
    icon: 'plant',
    text: 'Our model follows the full continuum: Outreach → Crisis → Safety → Stabilization → Healing → Sisterhood → Education → Employment → Independence → Leadership.',
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
    role: 'Executive Director',
    img: '/gallery/RDSMeeting.JPG',
    bio: 'Leads the RDS mission and community partnerships, guiding the organization\'s strategy and vision for survivor empowerment with two decades of nonprofit leadership.',
  },
  {
    name: 'Deatra Handy, MPA',
    role: 'Program Director',
    img: '/gallery/RDSMeeting13.JPG',
    bio: 'Oversees every RDS program, personally mentors participants, and coordinates the continuum of services from crisis to independence.',
  },
  {
    name: 'Abel Prudhomme',
    role: 'CHTTF Chairperson & RDS Program Director',
    img: '/gallery/RDSMeeting15.JPG',
    bio: 'Chairs the Compton Human Trafficking Task Force and serves as RDS Program Director, uniting survivors, law enforcement, and community partners.',
  },
  {
    name: 'Keyla Brown',
    role: 'Lead Case Manager',
    img: '/gallery/RDSMeeting14.JPG',
    bio: 'Walks with each survivor one-on-one — from first intake to independent living, providing individualized case management and safety planning.',
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
  type: 'Recognize, Respond, Restore',
  date: 'July 23, 2026 · Sponsored by RDS',
  place: 'Compton, CA',
  text: 'The Compton Human Trafficking Task Force (CHTTF) convened on July 23, 2026, bringing together survivors, community organizations, service providers, law enforcement, advocates, and other partners committed to preventing human trafficking and supporting survivors. The meeting opened with a welcome from Pamela Bryant, Executive Director of RDS, followed by prayer led by Abel Prudhomme, CHTTF Chairperson and RDS Program Director. A highlight was Survivor Voices, featuring De\'Aija, who courageously shared their experiences, progress, and hope for the future. A central message: everyone has a critical piece of the puzzle — and without your piece, the picture is not complete. When we put all of our pieces together, the picture we are creating is beautiful: a survivor who is no longer simply surviving, but healing, restored, empowered, independent, and thriving. Together, every piece matters. Together, we complete the picture.',
  img: '/gallery/RDSMeeting9.jpg',
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
    text: 'RDS plays a leadership role in convening the CHTTF — bringing together survivors, service providers, law enforcement, and community leaders. Human trafficking is a community problem that requires a community response.',
  },
  {
    title: 'Survivor Voices',
    icon: 'heartHand',
    text: 'Survivors courageously share their experiences, progress, and hope for the future. Their voices remind everyone why this collaborative work matters.',
  },
  {
    title: 'Community Partnerships',
    icon: 'compass',
    text: 'No single organization can meet every need. When we put all of our pieces together, the picture we create is beautiful: a survivor who is healing, restored, empowered, and thriving.',
  },
];

export const PAST_EVENTS = [
  {
    title: 'Human Trafficking Awareness Walk',
    date: 'January 2026',
    tag: 'Awareness',
    img: '/gallery/RDSMeeting7.jpg',
  },
  {
    title: 'Holiday Drive for Drop-In Guests',
    date: 'December 2025',
    tag: 'Community Drive',
    img: '/gallery/RDSMeeting24.JPG',
  },
  {
    title: 'Community Resource Fair',
    date: 'October 2025',
    tag: 'Outreach',
    img: '/gallery/RDSMeeting28.JPG',
  },
  {
    title: 'Back-to-School Supply Distribution',
    date: 'August 2025',
    tag: 'Community Drive',
    img: '/gallery/RDSMeeting36.JPG',
  },
  {
    title: 'Survivor Leadership Retreat',
    date: 'June 2025',
    tag: 'Workshop',
    img: '/gallery/RDSMeeting30.JPG',
  },
  {
    title: 'Faith Community Partnership Breakfast',
    date: 'May 2025',
    tag: 'Partner Meeting',
    img: '/gallery/RDSMeeting42.JPG',
  },
  {
    title: 'Night Outreach on The Blade',
    date: 'April 2025',
    tag: 'Outreach',
    img: '/images/hero-street-outreach.jpg',
  },
  {
    title: 'Annual Fundraising Gala',
    date: 'March 2025',
    tag: 'Fundraiser',
    img: '/gallery/RDSMeeting47.JPG',
  },
];

export const EVENT_STATS: StatItem[] = [
  { value: '25', label: 'New participants enrolled (Summer 2026)' },
  { value: '120', label: 'Walk-in visits per month' },
  { value: '8', label: 'Emergency relocations (Summer 2026)' },
  { value: '13', label: 'CalVCB referrals (Summer 2026)' },
];

export const FEATURED_STORY = {
  name: "A Survivor's Journey",
  tag: 'From the Blade to a different future',
  img: '/images/hero-empowerment.jpg',
  quote: 'I\'ve been where you are. You can make it too.',
  text: 'She first walked into the Drop-In Center for a hot shower and a meal. She left with a case manager who never gave up on her. Over the following months, RDS helped her with emergency housing, safety planning, and enrollment at Compton College with one-on-one counseling and FAFSA support. Through the Sisterhood, she found women who understood. Today she reaches back — mentoring other survivors walking the same road. Her past does not determine her future.',
  milestones: [
    'Safe housing secured',
    'Enrolled at Compton College',
    'Financial empowerment & credit repair',
    'Now a peer mentor in the Sisterhood',
  ],
};

export const SURVIVOR_STORIES = [
  {
    id: '208-1',
    theme: 'Finding the door',
    icon: 'building',
    img: '/gallery/RDSMeeting5.JPG',
    quote: 'RDS has been a tremendous source of support throughout this journey.',
    text: "After years of feeling invisible, I found the Drop-In Center almost by accident. What I found there was a team that didn't ask me to explain myself before helping — just a hot meal, a safe seat, and people who listened. That first visit turned into case management, then counseling, then a job.",
  },
  {
    id: '208-3',
    theme: 'A future worth building',
    icon: 'plant',
    img: '/gallery/RDSMeeting6.JPG',
    quote: "The team at RDS has given me something I hadn't felt in years — hope.",
    text: "I entered the Survivor Diversion Program not really believing anything would change. Group sessions with people who understood — really understood — shifted something in me. My case manager helped me get my GED and find housing. I'm building a future instead of just surviving the day.",
  },
  {
    id: '208-4',
    theme: 'Safe at last',
    icon: 'heartHand',
    img: '/gallery/RDSMeeting21.JPG',
    quote: 'Today, I am blessed, happy, and safe, thanks to the unwavering support of the RDS team.',
    text: "Escaping wasn't one moment — it took several tries and a lot of fear. What made the difference was having somewhere to go that didn't feel like another system to survive. RDS helped me navigate legal paperwork, find temporary housing, and slowly rebuild trust in myself and in other people.",
  },
  {
    id: '208-5',
    theme: 'Standing on firmer ground',
    icon: 'briefcase',
    img: '/gallery/RDSMeeting25.JPG',
    quote: 'With their help, support, and resources, I am now standing on firmer ground.',
    text: 'I came to RDS with nothing but the clothes I was wearing. The supportive services program connected me to counseling, parenting resources, and eventually a path back to stable work. I still have hard days, but I have a foundation now — and a team that still checks in.',
  },
];

export const BEHIND_STORY_STEPS = [
  {
    icon: 'compass',
    title: 'Outreach on the Blade',
    text: 'Someone from RDS reaches a woman where she is — with food, hygiene supplies, safety resources, and the message: "When you\'re ready, there is somewhere you can go."',
  },
  {
    icon: 'building',
    title: 'The Drop-In Center',
    text: 'She walks through the doors into safety, dignity, and hope. A hygiene bag can become the beginning of a relationship.',
  },
  {
    icon: 'heartHand',
    title: 'Stabilization & the Serenity Room',
    text: 'Case management, housing, safety planning, and trauma-informed mental health support in a space where trust has already been built.',
  },
  {
    icon: 'users',
    title: 'Sisterhood & Independence',
    text: 'Education, employment, financial empowerment — and a Sisterhood that carries beyond our walls. She reaches back for another woman.',
  },
];

export const STORY_STATS: StatItem[] = [
  { value: 'Housing', label: 'Safe placement for survivors in crisis' },
  { value: 'Healing', label: 'Ongoing counseling & case management' },
  { value: 'Work', label: 'Job readiness and stable employment' },
  { value: 'Hope', label: 'A future defined by the survivor' },
];

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryAlbum {
  title: string;
  date: string;
  description: string;
  cover: string;
  images: GalleryImage[];
}

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    title: 'Compton Human Trafficking Task Force Meeting',
    date: 'July 23, 2026',
    description: 'The CHTTF convened bringing together survivors, community organizations, service providers, law enforcement, advocates, and partners committed to preventing human trafficking and supporting survivors. Sponsored by RDS.',
    cover: '/gallery/RDSMeeting.JPG',
    images: [
      { src: '/gallery/RDSMeeting.JPG', alt: 'CHTTF Meeting — Speaker at the podium' },
      { src: '/gallery/RDSMeeting2.JPG', alt: 'CHTTF Meeting — Community gathering' },
      { src: '/gallery/RDSMeeting3.jpg', alt: 'CHTTF Meeting — Task force partners' },
      { src: '/gallery/RDSMeeting5.JPG', alt: 'CHTTF Meeting — Collaboration session' },
      { src: '/gallery/RDSMeeting6.JPG', alt: 'CHTTF Meeting — Community engagement' },
      { src: '/gallery/RDSMeeting7.jpg', alt: 'CHTTF Meeting — Partner introductions' },
      { src: '/gallery/RDSMeeting8.JPG', alt: 'CHTTF Meeting — Attendee discussion' },
      { src: '/gallery/RDSMeeting9.jpg', alt: 'CHTTF Meeting — Group session' },
      { src: '/gallery/RDSMeeting10.JPG', alt: 'CHTTF Meeting — Resource sharing' },
      { src: '/gallery/RDSMeeting11.jpg', alt: 'CHTTF Meeting — Panel discussion' },
      { src: '/gallery/RDSMeeting12.jpg', alt: 'CHTTF Meeting — Community partners' },
      { src: '/gallery/RDSMeeting13.JPG', alt: 'CHTTF Meeting — Survivor voices' },
      { src: '/gallery/RDSMeeting14.JPG', alt: 'CHTTF Meeting — Advocacy session' },
      { src: '/gallery/RDSMeeting15.JPG', alt: 'CHTTF Meeting — Network building' },
      { src: '/gallery/RDSMeeting16.JPG', alt: 'CHTTF Meeting — Collaborative workspace' },
      { src: '/gallery/RDSMeeting17.JPG', alt: 'CHTTF Meeting — Participant engagement' },
      { src: '/gallery/RDSMeeting18.JPG', alt: 'CHTTF Meeting — Service providers' },
      { src: '/gallery/RDSMeeting19.JPG', alt: 'CHTTF Meeting — Community support' },
      { src: '/gallery/RDSMeeting20.JPG', alt: 'CHTTF Meeting — Partner presentations' },
      { src: '/gallery/RDSMeeting21.JPG', alt: 'CHTTF Meeting — Team collaboration' },
      { src: '/gallery/RDSMeeting22.JPG', alt: 'CHTTF Meeting — Resource coordination' },
      { src: '/gallery/RDSMeeting23.jpg', alt: 'CHTTF Meeting — Group photo' },
      { src: '/gallery/RDSMeeting24.JPG', alt: 'CHTTF Meeting — Leadership session' },
      { src: '/gallery/RDSMeeting25.JPG', alt: 'CHTTF Meeting — Awareness building' },
      { src: '/gallery/RDSMeeting26.jpg', alt: 'CHTTF Meeting — Community dialogue' },
      { src: '/gallery/RDSMeeting27.jpg', alt: 'CHTTF Meeting — Advocacy and support' },
      { src: '/gallery/RDSMeeting28.JPG', alt: 'CHTTF Meeting — Partner networking' },
      { src: '/gallery/RDSMeeting29.JPG', alt: 'CHTTF Meeting — Outreach discussion' },
      { src: '/gallery/RDSMeeting30.JPG', alt: 'CHTTF Meeting — Prevention strategies' },
      { src: '/gallery/RDSMeeting32.JPG', alt: 'CHTTF Meeting — Survivor empowerment' },
      { src: '/gallery/RDSMeeting33.JPG', alt: 'CHTTF Meeting — Faith community partners' },
      { src: '/gallery/RDSMeeting34.JPG', alt: 'CHTTF Meeting — Law enforcement collaboration' },
      { src: '/gallery/RDSMeeting35.JPG', alt: 'CHTTF Meeting — Mental health advocacy' },
      { src: '/gallery/RDSMeeting36.JPG', alt: 'CHTTF Meeting — Education partners' },
      { src: '/gallery/RDSMeeting37.JPG', alt: 'CHTTF Meeting — Workforce development' },
      { src: '/gallery/RDSMeeting38.jpg', alt: 'CHTTF Meeting — Housing resources' },
      { src: '/gallery/RDSMeeting39.JPG', alt: 'CHTTF Meeting — Safety planning' },
      { src: '/gallery/RDSMeeting40.JPG', alt: 'CHTTF Meeting — Community leaders' },
      { src: '/gallery/RDSMeeting41.JPG', alt: 'CHTTF Meeting — Shared vision' },
      { src: '/gallery/RDSMeeting42.JPG', alt: 'CHTTF Meeting — Closing remarks' },
      { src: '/gallery/RDSMeeting43.JPG', alt: 'CHTTF Meeting — Together we complete the picture' },
      { src: '/gallery/RDSMeeting44.jpg', alt: 'CHTTF Meeting — Collaborative commitment' },
      { src: '/gallery/RDSMeeting45.JPG', alt: 'CHTTF Meeting — United community' },
      { src: '/gallery/RDSMeeting46.JPG', alt: 'CHTTF Meeting — Every piece matters' },
      { src: '/gallery/RDSMeeting47.JPG', alt: 'CHTTF Meeting — Building connections' },
     ],
  },
];

/* ─────────────────────────────────────────────────────────────
   Donate Page Data
───────────────────────────────────────────────────────────── */

export const DONATE_IMPACT_STATS: StatItem[] = [
  { value: '$25', label: 'Provides a hot meal, hygiene kit, and safety resources for a drop-in guest' },
  { value: '$50', label: 'Covers emergency transit and immediate crisis response supplies' },
  { value: '$100', label: 'Funds one trauma-informed counseling session or case management visit' },
  { value: '$250', label: 'Sponsors one night of emergency hotel lodging for a survivor leaving the Blade' },
];

export const DONATE_TIERS = [
  {
    amount: 25,
    title: 'Welcome Kit',
    icon: 'heartHand',
    impact: 'Provides a hot meal, hygiene essentials, fresh clothing, and a warm welcome for a woman walking through our doors for the very first time.',
  },
  {
    amount: 50,
    title: 'Safety & Transit',
    icon: 'compass',
    impact: 'Covers emergency transportation, bus passes, and immediate safety resources so a woman can reach shelter or services without returning to risk.',
  },
  {
    amount: 100,
    title: 'Healing Session',
    icon: 'heartShield',
    impact: 'Funds one full session of trauma-informed counseling in the Serenity Room, or a full day of individualized case management support.',
  },
  {
    amount: 250,
    title: 'Emergency Lodging',
    icon: 'homeHeart',
    impact: 'Sponsors one night of safe emergency hotel lodging when a woman decides to leave trafficking — she never has to go back out again.',
  },
];

export const WAYS_TO_GIVE = [
  {
    title: 'One-Time Gift',
    icon: 'heartHand',
    text: 'Make an immediate impact. Every dollar reaches survivors directly through meals, shelter, counseling, and crisis response.',
  },
  {
    title: 'Monthly Sustainer',
    icon: 'plant',
    text: 'Become a recurring supporter. Monthly gifts provide the stable funding that lets RDS plan ahead and serve more women consistently.',
  },
  {
    title: 'Material Drives',
    icon: 'building',
    text: 'Donate clothing, hygiene products, school supplies, or gift cards. Our Drop-In Center needs are ongoing and always welcomed.',
  },
  {
    title: 'Corporate & Faith Sponsorship',
    icon: 'users',
    text: 'Partner with RDS as a business, church, or civic organization. Sponsor events, fund programs, or host awareness campaigns.',
  },
];

export const DONOR_TESTIMONIALS = [
  {
    quote: 'Knowing that my monthly donation helps keep the Drop-In Center doors open gives me a deep sense of purpose.',
    name: 'Community Supporter',
    role: 'Monthly Sustainer since 2023',
  },
  {
    quote: 'Our church partnered with RDS for a holiday drive and saw firsthand the dignity they bring to every woman who walks in.',
    name: 'Faith Community Partner',
    role: 'Annual Sponsor',
  },
  {
    quote: 'I give because RDS doesn\'t just offer services — they offer sisterhood. That changes everything.',
    name: 'Individual Donor',
    role: 'Recurring Donor',
  },
];

export const FUND_ALLOCATION = [
  { label: 'Drop-In Center Operations', percentage: 35, color: 'bg-leaf-600' },
  { label: 'Emergency Housing & Lodging', percentage: 25, color: 'bg-clay-500' },
  { label: 'Education & Employment', percentage: 20, color: 'bg-olive-500' },
  { label: 'Street Outreach & Task Force', percentage: 15, color: 'bg-forest-700' },
  { label: 'Administration & Governance', percentage: 5, color: 'bg-sand-400' },
];

/* ─────────────────────────────────────────────────────────────
   News & Press Data
───────────────────────────────────────────────────────────── */

export const NEWS_ARTICLES = [
  {
    title: 'More Than a Makeover: A Reflection of the Woman Within',
    tag: 'Press Feature',
    date: 'June 2026',
    img: '/gallery/RDSMeeting23.jpg',
    href: 'https://citypridemagazine.com/more-than-a-makeover-a-reflection-of-the-woman-within/',
    summary: 'CityPride Magazine spotlights the transformative power of self-care and identity at the RDS Drop-In Center — where a makeover can become the first step toward reclaiming who you are.',
    featured: true,
  },
  {
    title: 'CHTTF Convenes: Recognize, Respond, Restore',
    tag: 'Task Force',
    date: 'July 2026',
    img: '/gallery/RDSMeeting12.jpg',
    summary: 'The Compton Human Trafficking Task Force brought together survivors, law enforcement, and community partners to strengthen collaborative anti-trafficking response across the region.',
  },
  {
    title: 'RDS Sisterhood: Building Bonds Beyond the Program',
    tag: 'Community',
    date: 'May 2026',
    img: '/images/hero-sisterhood.jpg',
    summary: 'How the RDS Sisterhood is replacing isolation with connection, celebration, and peer mentorship for women at every stage of their journey.',
  },
  {
    title: 'Compton College Partnership Expands Enrollment Support',
    tag: 'Education',
    date: 'April 2026',
    img: '/images/hero-education.jpg',
    summary: 'RDS deepens its relationship with Compton College, offering one-on-one enrollment counseling, FAFSA navigation, and student-support services for survivors.',
  },
  {
    title: 'Night Outreach on The Blade: Meeting Women Where They Are',
    tag: 'Outreach',
    date: 'March 2026',
    img: '/images/hero-street-outreach.jpg',
    summary: 'A look into the RDS street outreach program — bringing food, hygiene products, safety resources, and a message of hope to high-risk areas along Long Beach Boulevard.',
  },
  {
    title: 'Holiday Resource Drive Serves 80+ Families',
    tag: 'Community',
    date: 'December 2025',
    img: '/gallery/RDSMeeting24.JPG',
    summary: 'RDS and community partners distributed clothing, hygiene kits, and holiday gifts to over 80 families connected to the Drop-In Center.',
  },
  {
    title: 'Recognizing the Signs: A Guide for Community Members',
    tag: 'Awareness',
    date: 'February 2026',
    img: '/gallery/RDSMeeting30.JPG',
    summary: 'Learn how to recognize the warning signs of human trafficking in your neighborhood, workplace, and community — and what to do if you suspect someone needs help.',
  },
  {
    title: 'Five Ways to Support Survivors Without Saying a Word',
    tag: 'Community',
    date: 'January 2026',
    img: '/gallery/RDSMeeting42.JPG',
    summary: 'Sometimes the most powerful support is quiet. Practical guidance on showing care, creating safety, and being present for survivors in everyday moments.',
  },
];

/* ─────────────────────────────────────────────────────────────
   Careers Data
───────────────────────────────────────────────────────────── */

export interface CareerOpening {
  title: string;
  type: string;
  location: string;
  description: string;
  qualifications: string[];
}

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    title: 'Case Manager',
    type: 'Full-Time',
    location: 'Compton, CA — Drop-In Center',
    description: 'Provide individualized case management, safety planning, housing navigation, and resource coordination for survivors of human trafficking.',
    qualifications: [
      'Bachelor\'s degree in Social Work, Psychology, or related field',
      'Experience with trauma-informed care and crisis intervention',
      'Bilingual (English/Spanish) preferred',
      'Valid CA driver\'s license',
    ],
  },
  {
    title: 'Street Outreach Coordinator',
    type: 'Full-Time',
    location: 'Compton / South LA',
    description: 'Lead outreach efforts in high-risk areas along the Blade, building trust with individuals experiencing exploitation and connecting them to services.',
    qualifications: [
      'Passion for community-based work and anti-trafficking advocacy',
      'Ability to work flexible hours, including evenings',
      'Strong interpersonal and de-escalation skills',
      'Lived experience valued and welcomed',
    ],
  },
  {
    title: 'Volunteer & Events Coordinator',
    type: 'Part-Time',
    location: 'Compton, CA — Drop-In Center',
    description: 'Recruit, train, and manage volunteers. Plan and coordinate community events, resource drives, and partnership activities.',
    qualifications: [
      'Event planning or volunteer coordination experience',
      'Strong organizational and communication skills',
      'Comfortable working with diverse populations',
      'Proficiency in Google Workspace and social media',
    ],
  },
  {
    title: 'Mental Health Counselor (Serenity Room)',
    type: 'Contract / Part-Time',
    location: 'Compton, CA — Drop-In Center',
    description: 'Provide onsite trauma-informed mental health counseling in the Serenity Room for survivors at various stages of their journey.',
    qualifications: [
      'Licensed MFT, LCSW, or LPCC in the State of California',
      'Experience with trauma, PTSD, and complex trauma populations',
      'Cultural humility and trauma-informed practice commitment',
      'Availability for minimum 10 hours per week onsite',
    ],
  },
];

export const INTERNSHIP_INFO = {
  title: 'Internships & Fellowships',
  description: 'RDS partners with universities, community colleges, and civic organizations to offer meaningful field placement experiences. Interns contribute to real programs — from case management support to outreach — while building professional skills in a trauma-informed environment.',
  areas: [
    'Social Work Field Placement (BSW / MSW)',
    'Public Health & Community Wellness',
    'Communications & Nonprofit Marketing',
    'Criminal Justice & Victim Advocacy',
  ],
};

/* ─────────────────────────────────────────────────────────────
   Resources Hub Data
───────────────────────────────────────────────────────────── */

export const RESOURCE_LINKS = [
  {
    title: 'Our Team & Leadership',
    href: '/resources/team',
    icon: 'users',
    text: 'Meet the dedicated staff behind every RDS program — from our Executive Director to the advocates on the frontline.',
  },
  {
    title: 'News & Press',
    href: '/resources/news',
    icon: 'book',
    text: 'Read the latest coverage, community updates, task force reports, and media features about our work.',
  },
  {
    title: 'Careers & Opportunities',
    href: '/resources/careers',
    icon: 'briefcase',
    text: 'Join the RDS team. Explore open positions, internships, and fellowship opportunities making a real difference.',
  },
];

export const RESOURCE_NAV_ITEMS = [
  { to: '/resources/team', label: 'Our Team' },
  { to: '/resources/news', label: 'News & Press' },
  { to: '/resources/careers', label: 'Careers' },
];
