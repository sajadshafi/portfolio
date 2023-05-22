import React from 'react';
import { ButtonProps } from '@/interfaces/types';

const Button = ({ text, onClick, classes }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${classes} bg-backgroundColor2`}>
      {text}
    </button>
  );
};

export default Button;
