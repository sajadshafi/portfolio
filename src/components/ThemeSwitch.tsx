import React from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import useTheme from '@/store/ThemeContext';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label
      htmlFor="toggle"
      className="label">
      <div className={`toggle ${theme}-toggle`}>
        <input
          id="toggle"
          onChange={toggleTheme}
          checked={theme === 'dark'}
          className="toggle-state"
          type="checkbox"
          name="check"
          defaultValue="check"
        />
        <div
          className={`indicator border border-colorLight dark:border-colorTertiary relative text-right dark:text-left text-[23px] flex justify-center items-center text-colorPrimary ${theme}-indicator dark:bg-backgroundColor2`}>
          {theme === 'dark' ? <MdDarkMode /> : <MdLightMode />}
        </div>
      </div>
    </label>

    // <label
    //   htmlFor="theme"
    //   className="theme cursor-pointer">
    //   <span className="theme__toggle-wrap mx-0 cursor-pointer">
    //     <input
    //       id="theme"
    //       className="theme__toggle bg-back cursor-pointer dark:shadow-shadow1 dark:bg-gradient-primary shadow-shadowWhite3"
    //       type="checkbox"
    //       checked={theme === 'dark'}
    //       onChange={toggleTheme}
    //       role="switch"
    //       name="theme"
    //       defaultValue="dark"
    //     />
    //     {/* <span className="theme__fill" /> */}
    //     <span className="theme__icon">
    //       <span className="theme__icon-part" />
    //       <span className="theme__icon-part" />
    //       <span className="theme__icon-part" />
    //       <span className="theme__icon-part" />
    //       <span className="theme__icon-part" />
    //       <span className="theme__icon-part" />
    //       <span className="theme__icon-part" />
    //       <span className="theme__icon-part" />
    //       <span className="theme__icon-part" />
    //     </span>
    //   </span>
    // </label>
    // <div className="checkbox-wrapper-5 flex">
    //   <div className="check">
    //     <input
    //       type="checkbox"
    //       checked={theme === 'dark'}
    //       id="check-5"
    //       onChange={toggleTheme}
    //     />
    //     {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    //     <label htmlFor="check-5" />
    //   </div>
    // </div>
  );
};

export default ThemeSwitch;
