'use client';

import React from 'react';
import slideAnimations from '@/components/animations/Slide';

interface Props {
  children: React.ReactNode;
  heading: string;
  // eslint-disable-next-line react/require-default-props
  icon?: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  classNames?: string;
}

const ResumeCard = ({ children, heading, icon, classNames }: Props) => {
  return (
    <slideAnimations.SlideUp
      className={`rounded-[10px] p-6 font-secondary dark:text-colorLightn text-colorBodyWhite bg-backgroundColor1 dark:bg-backgroundColor2 shadow-shadowWhite3 dark:shadow-shadow1 my-7 flex ${classNames} flex-col gap-5 pb-8`}>
      <div className="flex items-center align-start">
        {icon && (
          <div className="p-4 flex">
            <span className="w-[50px] h-[50px] text-2xl text-colorWhite">
              {icon}
            </span>
          </div>
        )}
        <h1 className="border-l-4 pl-3 uppercase font-bold border-l-colorPrimary">
          {heading}
        </h1>
      </div>
      <div>{children}</div>
    </slideAnimations.SlideUp>
  );
};

export default ResumeCard;
