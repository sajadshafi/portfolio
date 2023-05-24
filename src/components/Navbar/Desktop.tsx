'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';

import routes from '@/utils/routes';
import ThemeSwitch from '../ThemeSwitch';
import useTheme from '@/store/ThemeContext';

const montserrat = localFont({
  src: '../../../public/fonts/Montserrat/Montserrat-VariableFont_wght.ttf',
});

const DesktopNav = () => {
  const currentRoute = usePathname();
  const { theme } = useTheme();

  return (
    <nav className="lg:flex animate-slideDown items-center hidden justify-between px-4 h-[122px]">
      <Image
        className="w-[140px] h-auto"
        priority
        src={
          theme === 'dark'
            ? '/images/logo-light-200.png'
            : '/images/logo-dark-200.png'
        }
        width={140}
        height={70}
        alt="Sajad Shafi - Professional Software Engineer"
      />
      <ul className="flex items-center">
        {routes &&
          routes.map(route => (
            <li
              key={route.to}
              className="mx-[10px] my-[5px] ">
              <Link
                className={`uppercase transition-colors duration-400ms hover:text-colorPrimary dark:hover:text-colorWhite font-semibold dark:font-medium text-[13px] px-[10px] leading-lineHeightb1 ${
                  montserrat.className
                } py-[5px] block ${
                  currentRoute === route.to
                    ? 'text-colorPrimary'
                    : 'dark:text-colorLightn text-colorBodyWhite '
                }`}
                href={route.to}>
                {route.text}
              </Link>
            </li>
          ))}
        <div className="mx-4 flex justify-end">
          <Link
            className={`bg-gradientBoxw dark:hover:bg-gradient-secondary shadow-shadowWhite3 rounded-primary text-colorPrimary leading-5 text-[14px] py-[17px] px-[19px] dark:bg-gradient-primary dark:hover:shadow-shadow1 hover:bg-gradientRedHover font-medium hover:text-colorWhite dark:hover:text-colorSubtitle dark:shadow-shadow1 hover:-translate-y-1 transition-all duration-400ms w-full text-center flex justify-center items-center ${montserrat.className}`}
            href="/">
            <span>HIRE ME</span>
          </Link>
        </div>
        <div className="flex items-center ml-5">
          <ThemeSwitch />
        </div>
      </ul>
    </nav>
  );
};

export default DesktopNav;
