'use client';

import React from 'react';
import { RiContactsFill } from 'react-icons/ri';
import SlideSection from '@/components/animations/SlideSection';
import ContactDetails from '@/components/pages/home/ContactDetails';
import ContactForm from '@/components/pages/contact/ContactForm';

const Contact = () => {
  return (
    <main className="flex text-colorBodyWhite dark:text-colorGray min-h-screen flex-col items-center justify-between mt-6 md:mt-10 lg:w-[90%] xl:w-[93%] 2xl:w-[90%] lg:mx-auto lg:mt-4">
      <div className="px-6 sm:px-10 w-full">
        <div className="w-full">
          <div className="my-5 gap-4 grid lg:gap-7 grid-cols-1 lg:grid-cols-2 xl:grid-cols-5">
            <ContactDetails isContact />
            <SlideSection className="mt-6 shadow-shadowWhite3 dark:shadow-shadow1 w-full justify-center p-8 grid grid-cols-1 gap-2 bg-backgroundColor1 dark:bg-backgroundColor2 rounded-[10px] xl:col-span-3">
              <div className="p-[10px] h-fit mx-auto rounded-full inline-block bg-colorPrimary bg-opacity-20">
                <span className="w-[50px] h-[50px] flex items-center justify-center bg-colorPrimary rounded-full text-2xl text-colorWhite">
                  <RiContactsFill />
                </span>
              </div>
              <div className="font-secondary mt-3 px-2 lg:px-0 dark:text-colorLightn text-base leading-lineHeightb2 font-normal text-center text-colorBodyWhite sm:pr-8">
                <ContactForm />
              </div>
            </SlideSection>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
