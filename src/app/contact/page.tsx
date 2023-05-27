'use client';

import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import ContactDetails from '@/components/pages/home/ContactDetails';
import SlideSection from '@/components/animations/SlideSection';

const Contact = () => {
  return (
    <main className="flex text-colorBodyWhite dark:text-colorGray min-h-screen flex-col items-center justify-between mt-6 md:mt-10 lg:w-[90%] xl:w-[93%] 2xl:w-[90%] lg:mx-auto lg:mt-4">
      <div className="my-5 grid lg:gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-5">
        <ContactDetails />
        <SlideSection className="mt-6 shadow-shadowWhite3 dark:shadow-shadow1 w-full justify-center p-8 grid grid-cols-1 gap-2 bg-backgroundColor1 dark:bg-backgroundColor2 rounded-[10px] xl:col-span-3">
          <div className="p-[10px] mx-auto rounded-full inline-block bg-colorPrimary  bg-opacity-20">
            <span className="w-[40px] h-[40px] mx-auto flex items-center justify-center bg-colorPrimary rounded-full text-colorWhite">
              <RiMailSendLine />
            </span>
          </div>
        </SlideSection>
      </div>
    </main>
  );
};

export default Contact;
