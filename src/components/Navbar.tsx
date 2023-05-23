'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Montserrat } from 'next/font/google';
// import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import routes from '@/utils/routes';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  fallback: ['Helvatica', 'Verdana'],
  display: 'swap',
});

const Navbar = () => {
  const currentRoute = usePathname();
  return (
    <div>
      <nav
        // initial={{ y: -50, opacity: 0.5 }}
        // animate={{
        //   y: 0,
        //   opacity: 1,
        //   transition: { duration: 0.5, delay: 0.2 },
        // }}
        className="md:flex animate-slideDown items-center hidden justify-between px-4 h-[122px]">
        <Image
          className=""
          src="/images/logo-light-200.png"
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
                  className={`uppercase transition-colors duration-400ms hover:text-colorWhite hover:font-medium text-[13px] px-[10px] leading-lineHeightb1 ${
                    montserrat.className
                  } py-[5px] block ${
                    currentRoute === route.to
                      ? 'text-colorWhite font-medium'
                      : 'text-colorLightn'
                  }`}
                  href={route.to}>
                  {route.text}
                </Link>
              </li>
            ))}
          <div className="mx-4 flex justify-end">
            <a
              className="rn-btn bg-gradient-primary shadow-shadow1 rounded-primary text-colorPrimary leading-5 text-[13px] py-[17px] px-[19px]"
              target="_blank"
              rel="noreferrer"
              href="https://themeforest.net/checkout/from_item/33188244?license=regular">
              <span>HIRE ME</span>
            </a>
          </div>
        </ul>
      </nav>
      <nav className="flex md:hidden mt-20">
        <ul>
          {routes &&
            routes.map(route => (
              <li key={route.to}>
                <Link href={route.to}>{route.text}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
