import React from 'react';
import { InputProps } from '@/interfaces/types';

const Input = ({ name, placeholder, error, className, icon }: InputProps) => {
  return (
    <div>
      {icon}
      <input
        placeholder={placeholder}
        className={`${className}`}
        name={name}
      />
      <span>{error}</span>
    </div>
  );
};

export default Input;
