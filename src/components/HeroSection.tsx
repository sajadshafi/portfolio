import Image from 'next/image';
import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';

import TypingAnimation from './TypingAnimation';
import { IconLink } from './common/Button';
import Tooltip from './common/Tooltips';
import socialLinks from '@/utils/socialLinks';

const HeroSection = () => {
  return (
    <div className="flex md:items-center flex-col-reverse md:flex-row mx-4">
      <div className="my-8">
        <h1 className="text-[40px] py-4 px-2 sm:text-[45px] md:text-[50px] dark:text-colorWhite text-colorHeadingwv text-left font-primary font-bold leading-[60px]">
          Hi, I’m <span className="text-colorPrimary">Sajad Shafi</span>
          <br />
          <span
            className="header-caption"
            id="page-top">
            {/* type headline start */}
            <span className="cd-headline clip is-full-width text-4xl">
              <span className="text-colorPrimary">a {'  '}</span>
              {/* ROTATING TEXT */}
              <TypingAnimation
                textlist={[
                  'Software Engineer.',
                  'Professional Coder.',
                  'Developer.',
                ]}
              />
            </span>
            {/* type headline end */}
          </span>
        </h1>
        <p className="font-secondary mt-3 px-2 dark:text-colorLightn font-normal text-base text-colorBodyWhite">
          I am a software engineer by profession specialized in the development
          of innovative and effective software solutions. With over 2+ years of
          experience in the industry, I have gained a strong foundation in
          computer science principles and have honed my skills in a variety of
          programming languages, including C#, JavaScript and SQL and also
          worked with different frameworks including .NET Core, ReactJS, NextJS.
        </p>
        <div className="mt-12 mx-2">
          <p className="flex w-fit group font-semibold">
            <span className="mr-2">FIND ME</span>
            <span className="text-colorPrimary group-hover:translate-x-1 transition-transform duration-500 text-2xl">
              <HiArrowLongRight />
            </span>
          </p>
          <div className="flex mt-10 gap-7">
            {socialLinks.map(sm => (
              <Tooltip.Top
                text={sm.name}
                key={sm.name}
                position="top">
                <IconLink
                  classes="rounded-md text-2xl"
                  icon={sm.icon}
                  to={sm.to}
                />
              </Tooltip.Top>
            ))}
          </div>
        </div>
      </div>
      <div className="dark:bg-backgroundColor2 rounded-[10px] dark:shadow-shadow1 bg-backgroundColor1 shadow-shadowWhite3 p-4">
        <Image
          className="rounded-[10px] w-full h-full"
          src="/images/img-9.jpg"
          priority
          width={600}
          height={600}
          alt="Sajad shafi - software engineer"
        />
      </div>
    </div>
  );
};

export default HeroSection;
