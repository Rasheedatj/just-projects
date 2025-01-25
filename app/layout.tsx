import React from 'react';
import '@/app/_styles/globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { Halant } from 'next/font/google';

const halant = Halant({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const metadata = {
  title: {
    title: `%s | Just projects`,
    default: 'Just Projects',
  },
  description: 'A free entry-level tech training program',
};

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang='en'>
      <body
        className={`${halant.className} bg-neutral-50 text-neutral-600 flex flex-col min-h-screen`}
      >
        <Header />
        <main className='flex-1 px-16 py-5'>
          <div className='max-w-7xl mx-auto '>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
