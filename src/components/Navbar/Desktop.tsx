'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import routes from '@/utils/routes';
import ThemeSwitch from '../ThemeSwitch';
import useTheme from '@/store/ThemeContext';
import useYScroll from '@/hooks/useYScroll';

const DesktopNav = () => {
  const currentRoute = usePathname();
  const { theme } = useTheme();
  const { scrollProgressY } = useYScroll();

  return (
    <nav
      className={`lg:flex z-50 items-center hidden justify-between px-4 h-[122px]  ${
        scrollProgressY > 140 &&
        'h-[90px] animate-slideDown backdrop-blur-md dark:shadow-shadow1 bg-backgroundColor1 shadow-shadowNavLight dark:bg-bgGlassDark top-0 sticky'
      }`}>
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
                className={`uppercase transition-colors duration-400ms hover:text-colorPrimary dark:hover:text-colorPrimary font-semibold font-primary dark:font-medium dark:hover:font-semibold text-[13px] px-[10px] leading-lineHeightb1 py-[5px] block ${
                  currentRoute === route.to
                    ? 'text-colorPrimary'
                    : 'dark:text-colorLightn dark:font-semibold text-colorBodyWhite '
                }`}
                href={route.to}>
                {route.text}
              </Link>
            </li>
          ))}
        <div className="mx-4 flex justify-end">
          <Link
            className="hire hire-me-d"
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
