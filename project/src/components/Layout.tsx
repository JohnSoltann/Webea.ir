import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8D7F1] to-white" dir="rtl">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}