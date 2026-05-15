import type { Metadata, Viewport } from 'next';
import './globals.css';
import CyberEffects from './components/CyberEffects';

const siteUrl = 'https://shivam-cyberpunk-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Shivam Mahajan | Analytics Engineer Portfolio',
    template: '%s | Shivam Mahajan',
  },
  description:
    'Premium analytics engineering portfolio showcasing SQL, Python, BI dashboards, product analytics, ML experimentation, and executive-ready data products.',
  keywords: [
    'Shivam Mahajan',
    'Analytics Engineer',
    'Data Analyst',
    'Business Intelligence',
    'SQL Portfolio',
    'Python Analytics',
    'Power BI',
    'Product Analytics',
    'Next.js Portfolio',
  ],
  authors: [{ name: 'Shivam Mahajan' }],
  creator: 'Shivam Mahajan',
  openGraph: {
    title: 'Shivam Mahajan | Analytics Engineer Portfolio',
    description:
      'Recruiter-ready analytics portfolio built like a premium SaaS intelligence suite across streaming, retail, and operations case studies.',
    url: siteUrl,
    siteName: 'SM Analytics Command Center',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivam Mahajan | Analytics Engineer Portfolio',
    description: 'Premium data analytics portfolio for BI, analytics engineering, and product analytics roles.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#020617',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CyberEffects />
        {children}
      </body>
    </html>
  );
}
