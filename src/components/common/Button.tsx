import React from 'react';
import { ButtonProps } from '@/interfaces/types';

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
