import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ignaulin.com'),
  title: 'Rafael Ignaulin — Senior Data Engineer',
  description:
    'Senior Data Engineer delivering enterprise-scale data platforms from anywhere. Blog, portfolio, and links.',
  authors: [{ name: 'Rafael Ignaulin' }],
  creator: 'Rafael Ignaulin',
  openGraph: {
    siteName: 'Rafael Ignaulin',
    type: 'website',
    locale: 'en_US',
    url: 'https://ignaulin.com',
    title: 'Rafael Ignaulin — Senior Data Engineer',
    description:
      'Senior Data Engineer delivering enterprise-scale data platforms from anywhere. Blog, portfolio, and links.',
  },
  twitter: {
    card: 'summary',
    title: 'Rafael Ignaulin — Senior Data Engineer',
    description:
      'Senior Data Engineer delivering enterprise-scale data platforms from anywhere.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ignaulin.com',
  },
};

const jsonLD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rafael Ignaulin',
  jobTitle: 'Senior Data Engineer',
  url: 'https://ignaulin.com',
  sameAs: [
    'https://blog.ignaulin.com',
    'https://rafa.ignaulin.com',
    'https://linkedin.com/in/rafa-ignaulin',
    'https://github.com/rafaignaulin',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
