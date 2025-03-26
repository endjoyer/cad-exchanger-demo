import { Inter } from 'next/font/google';
import Box from '@mui/material/Box';
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CAD Exchanger - 3D Solutions',
  description:
    'CAD Exchanger offers visualization and conversion solutions for 3D data used by industry leaders worldwide including Apple, Tesla, Amazon, and NASA',
  metadataBase: new URL('https://cad-exchanger-demo.vercel.app'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'CAD',
    '3D visualization',
    '3D conversion',
    'CAD software',
    'engineering software',
  ],
  authors: [{ name: 'CAD Exchanger Team' }],
  openGraph: {
    title: 'CAD Exchanger - 3D Solutions',
    description: 'Visualization and conversion solutions for 3D data',
    url: 'https://cad-exchanger-demo.vercel.app',
    siteName: 'CAD Exchanger',
    images: ['/images/og-image.svg'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAD Exchanger - 3D Solutions',
    description: 'Visualization and conversion solutions for 3D data',
    images: ['/images/og-image.svg'],
    creator: '@cadexchanger',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1976d2" />
      </head>
      <body className={inter.className}>
        <ThemeRegistry>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
