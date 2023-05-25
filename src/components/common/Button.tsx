import React from 'react';
import Link from 'next/link';
import { ButtonProps, LinkProps } from '@/interfaces/types';

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
      className={`text-colorPrimary p-3 shadow-shadowWhite3 dark:bg-gradient-secondary hover:bg-gradientRedHover dark:hover:bg-gradientRedHover dark:shadow-shadow1 hover:text-colorSecondary flex items-center flex-col transition-all duration-300 ${classes}`}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </Link>
  );
};
