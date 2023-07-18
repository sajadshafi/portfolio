'use client';

import React, { useCallback, useEffect } from 'react';
import { ThemeContextOptions, ThemeType } from '../interfaces/types';

const ThemeContext = React.createContext<ThemeContextOptions>({
  theme: '',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<ThemeType>('light');

  const SwitchTheme = useCallback(() => {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme as ThemeType);
    else setTheme('light');
  }, []);

  const contextValue: ThemeContextOptions = React.useMemo<ThemeContextOptions>(
    () => ({
      theme,
      toggleTheme: SwitchTheme,
    }),
    [theme, SwitchTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`${theme} ${theme}-body`}>{children}</div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return React.useContext(ThemeContext);
};

export default useTheme;
