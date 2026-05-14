import type { Metadata } from 'next';
import './globals.css';
import CyberEffects from './components/CyberEffects';

export const metadata: Metadata = {
  title: 'Shivam Mahajan | Data Analyst & BI Developer',
  description: 'Cyberpunk analytics portfolio for Shivam Mahajan — Python, SQL, Power BI, Streamlit, ML, and business intelligence projects.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><CyberEffects />{children}</body>
    </html>
  );
}
