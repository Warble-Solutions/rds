import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const strokeBase = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function RdsLogo({ className = 'h-14 w-auto', variant = 'full' }: { className?: string; variant?: 'full' | 'simple' }) {
  const person = (x: number, pathD: string) => (
    <g transform={`translate(${x},0)`} key={x}>
      <path d="M-16 78 Q-16 40 0 40 Q16 40 16 78 L14 100 L-14 100 Z" fill="#1c1c1c" />
      <circle cx="0" cy="18" r="17" fill="#f2c9a0" />
      <path d={pathD} fill="#161616" />
      <rect x="-15" y="70" width="30" height="34" rx="6" fill="#161616" />
      <text x="0" y="90" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4d7c3f" fontFamily="Inter, sans-serif">
        RDS
      </text>
    </g>
  );

  return (
    <svg viewBox="0 0 400 230" className={className} role="img" aria-label="Restoration Diversion Services logo">
      {variant === 'full' && <rect x="0" y="0" width="400" height="230" fill="#6b9b1f" opacity="0" />}
      <g transform="translate(70,0) scale(0.85)">
        <path d="M100 130 C100 90 110 60 100 20 C95 5 105 -5 100 -14" stroke="#161616" strokeWidth="10" fill="none" strokeLinecap="round" />
        <ellipse cx="100" cy="-20" rx="95" ry="70" fill="#161616" />
        <ellipse cx="40" cy="10" rx="55" ry="40" fill="#161616" />
        <ellipse cx="165" cy="15" rx="55" ry="40" fill="#161616" />
        <ellipse cx="100" cy="55" rx="70" ry="35" fill="#161616" />
      </g>
      <g transform="translate(30,132)">
        {person(0, 'M-17 5 Q-17 -18 0 -18 Q17 -18 17 5 L17 22 Q10 8 0 12 Q-10 8 -17 22 Z')}
        {person(76, 'M-17 2 Q-17 -20 0 -20 Q17 -20 17 2 L17 8 Q0 -2 -17 8 Z')}
        {person(152, 'M-19 6 Q-24 -22 0 -24 Q24 -22 19 6 L20 30 Q10 10 0 16 Q-10 10 -20 30 Z')}
        {person(228, 'M-17 4 Q-17 -19 0 -19 Q17 -19 17 4 L17 16 Q0 6 -17 16 Z')}
        {person(304, 'M-18 8 Q-22 -20 0 -22 Q22 -20 18 8 L19 26 Q9 10 0 14 Q-9 10 -19 26 Z')}
      </g>
    </svg>
  );
}

export function HomeHeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <path d="M12 3v18M7 21h10" />
      <path d="M5 7l7-3 7 3" />
      <path d="M3 7h4l-2 5a2.5 2.5 0 01-2 0z" />
      <path d="M17 7h4l-2 5a2.5 2.5 0 01-2 0z" />
    </svg>
  );
}

export function HeartShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <path d="M12 20s-7-4.4-9.5-9C.7 7.4 2.5 4 6 4c2 0 3.4 1 4.5 2.5C11.6 5 13 4 15 4c3.5 0 5.3 3.4 3.5 7-2.5 4.6-9.5 9-9.5 9z" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <path d="M4 21V9l8-6 8 6v12" />
      <path d="M9 21v-7h6v7" />
      <path d="M4 21h16" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17.5" cy="8.5" r="2.6" />
      <path d="M15.5 14.2c2.7.4 4.8 2.7 5 5.8" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M3 13h18" />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-4 2 2-6z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <path d="M5 4h4l1.5 4.5-2 1.5a12 12 0 006 6l1.5-2L20 15v4a2 2 0 01-2 2C10.8 21 3 13.2 3 6a2 2 0 012-2z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <path d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function FlagIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <path d="M5 21V4" />
      <path d="M5 5c2-1.5 4-1.5 6 0s4 1.5 6 0v9c-2 1.5-4 1.5-6 0s-4-1.5-6 0z" />
    </svg>
  );
}

export function PlantIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <path d="M12 22v-9" />
      <path d="M12 13c0-3.5-2.5-6-6-6 0 3.5 2.5 6 6 6z" />
      <path d="M12 10c0-3 2-5.5 5-5.5 0 3-2 5.5-5 5.5z" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function HeartHandIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <path d="M3 13h4l3 2h5a1.5 1.5 0 000-3h-3l-3-1H4" />
      <path d="M3 12v6" />
      <path d="M14 8s-2-1.5-2-3.2C12 3.3 13.1 2 14.5 2c.8 0 1.5.4 1.9 1 .4-.6 1.1-1 1.9-1C19.9 2 21 3.3 21 4.8 21 6.5 19 8 17 9.2z" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...strokeBase} {...props}>
      <path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5z" />
      <path d="M4 20.5V5.5" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case 'building':
      return <BuildingIcon className={className} />;
    case 'users':
      return <UsersIcon className={className} />;
    case 'heartShield':
      return <HeartShieldIcon className={className} />;
    case 'briefcase':
      return <BriefcaseIcon className={className} />;
    case 'scale':
      return <ScaleIcon className={className} />;
    case 'compass':
      return <CompassIcon className={className} />;
    case 'flag':
      return <FlagIcon className={className} />;
    case 'plant':
      return <PlantIcon className={className} />;
    case 'target':
      return <TargetIcon className={className} />;
    case 'eye':
      return <EyeIcon className={className} />;
    case 'heartHand':
      return <HeartHandIcon className={className} />;
    case 'homeHeart':
      return <HomeHeartIcon className={className} />;
    case 'book':
      return <BookIcon className={className} />;
    default:
      return <HeartHandIcon className={className} />;
  }
}
