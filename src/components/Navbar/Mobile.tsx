'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { IoHandLeft } from 'react-icons/io5';

import routes from '@/utils/routes';
import ThemeSwitch from '../ThemeSwitch';
import useTheme from '@/store/ThemeContext';
import CloseIcon from '../icons/CloseIcon';

const overlayVariant: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const navbarVariant: Variants = {
  hidden: { opacity: 0, x: -200, transition: { duration: 0.5 } },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const MobileNav = () => {
  const currentRoute = usePathname();
  const { theme } = useTheme();
  const [showMobileNav, setShowMobileNav] = useState<boolean>(true);

  useEffect(() => {
    if (showMobileNav) {
      document.documentElement.setAttribute('class', ' overflow-y-hidden');
    } else {
      document.documentElement.removeAttribute('class');
    }
    return () => {
      document.documentElement.removeAttribute('class');
    };
  }, [showMobileNav]);

  const closeModelOnOverlayClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.getAttribute('id') === 'overlay')
      setShowMobileNav(false);
  };

  return (
    <div className="animate-slideDown lg:hidden font-primary">
      <div className="flex items-center p-4 justify-between">
        <Image
          className="w-[120px] h-auto"
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
        <div className="flex">
          <div className="flex items-center mr-5">
            <ThemeSwitch />
          </div>
          <button
            onClick={() => setShowMobileNav(prev => !prev)}
            className="text-colorPrimary text-3xl">
            <FiMenu />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showMobileNav && (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              id="overlay"
              variants={overlayVariant}
              onClick={closeModelOnOverlayClick}
              className="absolute w-full z-40 top-0 left-0 right-0 bottom-0 bg-colorTertiary bg-opacity-70 h-screen"
            />
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navbarVariant}
              className={`flex z-50 top-0 left-0 bottom-0 absolute mobile-navbar px-10 py-7 ${
                theme === 'dark'
                  ? 'dark:bg-backgroundColor3 '
                  : 'bg-gradientBoxw '
              }  flex-col overflow-y-scroll w-[375px] h-screen bg`}>
              <div className="flex items-center pb-7 justify-between">
                <Image
                  className="h-[65px] w-auto"
                  priority
                  src={
                    theme === 'dark'
                      ? '/images/logo-image-light-200.png'
                      : '/images/logo-image-dark-200.png'
                  }
                  width={140}
                  height={70}
                  alt="Sajad Shafi - Professional Software Engineer"
                />
                <button
                  onClick={() => setShowMobileNav(false)}
                  className="text-colorPrimary p-2 rounded-full shadow-shadowWhite3 hover:bg-gradientRedHover dark:shadow-shadow1 hover:text-colorSecondary transition-all duration-300">
                  <CloseIcon />
                </button>
              </div>
              <ul className="pt-5 border-t border-t-colorTertiary dark:border-t-colorLight border-opacity-20">
                {routes &&
                  routes.map(route => (
                    <li
                      key={route.to}
                      className="py-1 my-2">
                      <Link
                        className={`nav-link ${
                          currentRoute === route.to
                            ? 'text-colorPrimary'
                            : 'dark:text-colorLightn text-colorBodyWhite '
                        } py-[6px] px-1`}
                        href={route.to}>
                        {route.text}
                      </Link>
                    </li>
                  ))}
                <div className="mt-10 mb-5 flex">
                  <Link
                    className="neo-button group"
                    href="/">
                    <span className="text-xl group-hover:scale-125 wave mr-3">
                      <IoHandLeft />
                    </span>
                    <span>HIRE ME</span>
                  </Link>
                </div>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;