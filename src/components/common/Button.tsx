import React from 'react';
import Link from 'next/link';
import { ButtonProps, LinkProps } from '@/interfaces/types';
import ArrowRightIcon from '../icons/ArrowRightIcon';

const ButtonPrimary = ({ text, onClick, classes, icon }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-colorPrimary p-2 shadow-shadowWhite3 dark:bg-gradient-primary hover:bg-gradientRedHover dark:hover:bg-gradientRedHover dark:shadow-neoLarge hover:text-colorSecondary transition-all duration-300 ${classes}`}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};

export default ButtonPrimary;

export const IconLink = ({ to, classes, icon, text }: LinkProps) => {
  return (
    <Link
      href={to}
      target="_blank"
      className={`text-colorPrimary links-desktop p-3 shadow-shadowWhite3 hover:bg-gradientRedHover dark:hover:bg-gradientRedHover dark:shadow-shadow1 hover:text-colorSecondary flex items-center transition-all duration-300 ${classes}`}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </Link>
  );
};

export const VisitButton = ({ to, classes, text }: LinkProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={`text-colorPrimary px-2 shadow-shadowWhite3 hover:bg-gradientRedHover dark:hover:bg-gradientRedHover dark:shadow-shadow1 hover:text-colorSecondary vtransition-all duration-300 ml-auto group mt-4 mr-3 pr-7 tracking-wider py-2 rounded-md font-Secondary flex items-center text-sm ${classes}`}
      href={to}>
      <span className="mr-2 font-semibold">{text}</span>
      <span className="group-hover:translate-x-2 transition-transform duration-300">
        <ArrowRightIcon />
      </span>
    </a>
  );
};
