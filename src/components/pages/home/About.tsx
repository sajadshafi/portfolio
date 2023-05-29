'use client';

import React from 'react';
import Image from 'next/image';
import Heading from '@/components/headings/Heading';
import SlideSection from '@/components/animations/SlideSection';
import ContactDetails from './ContactDetails';

const About = () => {
  return (
    <>
      <Heading
        title="About Me"
        subTitle="An &nbsp;introduction"
        className="lg:items-start lg:w-1/2 lg:pl-2"
      />
      <div className="my-5 gap-4 grid lg:gap-7 grid-cols-1 lg:grid-cols-2 xl:grid-cols-5">
        <ContactDetails />
        <SlideSection className="mt-6 shadow-shadowWhite3 dark:shadow-shadow1 w-full justify-center p-8 grid grid-cols-1 gap-2 bg-backgroundColor1 dark:bg-backgroundColor2 rounded-[10px] xl:col-span-3">
          <div className="p-[10px] rounded-full inline-block bg-colorPrimary mb-6 mx-auto bg-opacity-20">
            <Image
              className="rounded-full bg-backgroundColor1 dark:bg-backgroundColor2 shadow-md"
              src="/images/img-3.png"
              width={200}
              height={200}
              alt="Sajad Shafi - Software engineer, Web developer, UI/UX Designer"
            />
          </div>

          <p className="font-secondary px-2 lg:px-0 dark:text-colorLightn text-base leading-lineHeightb2 font-normal text-center text-colorBodyWhite sm:pr-8">
            I am a software engineer by profession specialized in the
            development of innovative and effective software solutions. With
            over 2+ years of experience in the industry, I have gained a strong
            foundation in computer science principles and have honed my skills
            in a variety of programming languages, including C#, JavaScript and
            SQL and also worked with different frameworks including .NET Core,
            ReactJS, NextJS.
          </p>
        </SlideSection>
      </div>
    </>
  );
};

export default About;
