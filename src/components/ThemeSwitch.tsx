import React from 'react';
import useTheme from '@/store/ThemeContext';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label
      htmlFor="theme"
      className="theme cursor-pointer">
      <span className="theme__toggle-wrap mx-0 cursor-pointer">
        <input
          id="theme"
          className="theme__toggle cursor-pointer"
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          role="switch"
          name="theme"
          defaultValue="dark"
        />
        {/* <span className="theme__fill" /> */}
        <span className="theme__icon">
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
        </span>
      </span>
    </label>
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
