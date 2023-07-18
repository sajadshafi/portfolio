'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/store/ThemeContext';
import '../styles/globals.scss';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import fonts from '@/utils/fontConfig';
import PageLoader from '@/components/PageLoader';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setLoading(false);
    };

    // Check if the page has finished loading
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleComplete);
    }

    return () => {
      window.removeEventListener('load', handleComplete);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        {loading ? (
          <PageLoader classes="fixed top-0 right-0 left-0 bottom-0" />
        ) : (
          <ThemeProvider>
            <div
              className={`${fonts.poppins.variable} relative ${fonts.montserrat.variable}`}>
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
