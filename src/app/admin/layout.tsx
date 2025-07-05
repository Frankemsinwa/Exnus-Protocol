
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Admin - EXNUS PROTOCOL',
  description: 'Admin dashboard for EXNUS PROTOCOL.',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
