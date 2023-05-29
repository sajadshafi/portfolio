import React from 'react';
import { InputProps } from '@/interfaces/types';
import useTheme from '@/store/ThemeContext';

const Input = ({
  name,
  placeholder,
  error,
  className,
  icon,
  reg,
  type,
  registerOptions,
}: InputProps) => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex border relative ${
        error
          ? ' border-colorDanger '
          : ' border-colorWhite dark:border-backgroundColor3 '
      }  items-center rounded-md`}>
      <span className="p-2 px-3 flex justify-center">{icon}</span>
      <input
        type={type}
        {...reg(name, registerOptions)}
        placeholder={error ? '* ' + error : placeholder}
        className={`${className} ${
          error
            ? 'placeholder:text-colorDanger placeholder:font-medium text-[13px]'
            : ' placeholder:text-sm'
        } ${theme}-input font-light font-secondary block w-full border-none hover:border-none focus:border-none p-2 px-4 dark:bg-transparent rounded-r-md autofill:bg-transparent shadow-lightInnerShadow placeholder:font-secondary dark:shadow-darkInnerShadow`}
        name={name}
      />
    </div>
  );
};

export const InputArea = ({
  name,
  placeholder,
  error,
  className,
  icon,
  reg,
  registerOptions,
}: InputProps) => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex border relative ${
        error
          ? ' border-colorDanger '
          : ' border-colorWhite dark:border-backgroundColor3 '
      } items-start rounded-md`}>
      <span className="p-2 px-3 flex justify-center">{icon}</span>
      <textarea
        {...reg(name, registerOptions)}
        placeholder={error ? '* ' + error : placeholder}
        className={`${className} ${
          error
            ? 'placeholder:text-colorDanger placeholder:font-medium text-[13px]'
            : ' placeholder:text-sm'
        } ${theme}-input font-light font-secondary block w-full border-none hover:border-none focus:border-none p-2 px-4 tracking-widest h-40 dark:bg-transparent rounded-r-md autofill:bg-transparent placeholder:font-secondary shadow-lightInnerShadow dark:shadow-darkInnerShadow`}
        name={name}
      />
    </div>
  );
};

export default Input;
