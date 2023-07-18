'use client';

import React from 'react';
import Image from 'next/image';
import { HiArrowLongRight } from 'react-icons/hi2';

import slideAnimations from '../../animations/Slide';
import SocialSection from '@/components/SocialSection';

const HeroSection = () => {
  return (
    <div className="flex lg:grid lg:grid-cols-5 md:items-center flex-col-reverse lg:flex-row mx-4 lg:mx-0 lg:items-center xl:w-full xl:grid-cols-2">
      <slideAnimations.SlideUp className="lg:col-span-3 xl:col-span-1 my-8 sm:mx-4 lg:mx-0 sm:my-10 md:mt-6 md:mb-14 xl:pl-6">
        <h1 className="text-[40px] py-4 px-2 sm:text-[45px] md:text-[60px] lg:text-[50px] dark:text-colorWhite text-colorHeadingwv text-left font-primary font-bold leading-[60px]">
          Hi, I’m <span className="text-colorPrimary">Sajad Shafi</span>
          <br />
          <span
            className="header-caption"
            id="page-top">
            <span className="cd-headline clip is-full-width text-4xl md:text-5xl lg:text-[40px]">
              <span className="text-colorPrimary">a {'  '}</span>
              <span>Software Engineer.</span>
            </span>
          </span>
        </h1>
        <p className="font-secondary mt-3 px-2 lg:px-0 dark:text-colorLightn font-normal text-base text-colorBodyWhite sm:pr-8">
          Mastering the Art of Software Alchemy: Turning Ideas into Exceptional
          Digital Realities.
        </p>
        <div className="mt-12 mx-2">
          <p className="flex w-fit group font-semibold">
            <span className="mr-2">FIND ME</span>
            <span className="text-colorPrimary group-hover:translate-x-1 transition-transform duration-500 text-2xl">
              <HiArrowLongRight />
            </span>
          </p>
          <SocialSection className="mt-10" />
        </div>
      </slideAnimations.SlideUp>
      <slideAnimations.SlideUp className="lg:col-span-2 xl:col-span-1 dark:bg-backgroundColor2 rounded-[10px] dark:shadow-shadow1 bg-backgroundColor1 shadow-shadowWhite3 p-4 sm:p-6 mx-3 sm:mx-4 xl:flex xl:justify-center xl:mx-0 xl:ml-auto xl:mr-[2rem] lg:mt-6 xl:w-[500px] 2xl:w-[500px]">
        <Image
          className="rounded-[10px] w-full h-full"
          src="/images/img-9.jpg"
          width={600}
          height={600}
          alt="Sajad shafi - software engineer"
        />
      </slideAnimations.SlideUp>
    </div>
  );
};

export default HeroSection;
