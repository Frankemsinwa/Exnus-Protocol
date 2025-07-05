
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Admin - EXNUS',
  description: 'Admin dashboard for EXNUS.',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
