import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://shivam-old-money-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Shivam Mahajan | Analytics Engineer Portfolio',
    template: '%s | Shivam Mahajan',
  },
  description:
    'Old-money executive analytics portfolio showcasing SQL, Python, BI dashboards, product analytics, ML experimentation, and boardroom-ready data products.',
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
      'Recruiter-ready analytics portfolio styled like a premium old-money boardroom intelligence suite across streaming, retail, and operations case studies.',
    url: siteUrl,
    siteName: 'SM Analytics Boardroom',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivam Mahajan | Analytics Engineer Portfolio',
    description: 'Old-money executive data analytics portfolio for BI, analytics engineering, and product analytics roles.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#160d07',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
