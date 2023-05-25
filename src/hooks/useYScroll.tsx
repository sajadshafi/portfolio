import React, { useState } from 'react';

const useYScroll = () => {
  // #region State Variables
  const [scrollProgressY, setScrollProgressY] = useState<number>(0);
  // #endregion
  // #region Functions and Handlers
  const changeNavbar = () => {
    const { scrollY } = window;
    setScrollProgressY(scrollY);
  };
  // #endregion

  // #region Effect
  React.useEffect(() => {
    const options = { passive: true }; // options must match add/remove event
    document.addEventListener('scroll', changeNavbar, options);
  }, []);
  // #endregion

  return { scrollProgressY };
};

export default useYScroll;
