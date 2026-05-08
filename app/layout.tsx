import type { Metadata } from 'next';
import './globals.css';
import CyberEffects from './components/CyberEffects';

export const metadata: Metadata = {
  title: 'Shivam Mahajan | Data Analyst',
  description: 'Cyberpunk portfolio for Shivam Mahajan — Data Analyst and Digital Marketer.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><CyberEffects />{children}</body>
    </html>
  );
}
