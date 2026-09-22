import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Restoration Diversion Services',
  description:
    'Photos from RDS task force meetings, community events, and survivor empowerment activities in Compton, CA.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
