'use client';

import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import { FooterSocialSection } from './SocialSection';
import SlideSection from '@/components/animations/SlideSection';

const Footer = () => {
  return (
    <footer className="text-colorBodyWhite mt-16 px-6 md:px-10 xl:px-0 dark:text-colorGray lg:w-[90%] lg:mx-auto">
      <div className="py-20 w-full text-colorBodyWhite dark:text-colorLightn mt-8 gap-12 flex flex-col md:flex-row items-center md:justify-between border-t border-t-colorPrimary">
        <div className="flex items-center">
          <p className="uppercase mr-4 flex items-center">
            <span>Follow me on</span>
            <span className="text-colorPrimary ml-2 text-2xl">
              <HiArrowLongRight />
            </span>
          </p>
          <FooterSocialSection className="justify-center" />
        </div>
        <div className="flex justify-center md:justify-end">
          <p>
            &copy; 2023{' '}
            <span className="text-colorPrimary px-3 font-semibold">
              Sajad Shafi.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
