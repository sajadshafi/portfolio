'use client';

import React, { useCallback, useEffect } from 'react';
import { ThemeContextOptions, ThemeType } from '../interfaces/types';

const ThemeContext = React.createContext<ThemeContextOptions>({
  theme: '',
  toggleTheme: () => {},
});

export const ThemeProvider = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes: string;
}) => {
  const [theme, setTheme] = React.useState<ThemeType>('dark');

  const SwitchTheme = useCallback(() => {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme as ThemeType);
    else setTheme('dark');
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
      <body className={`${theme} ${classes} bg-backgroundColor2`}>
        {children}
      </body>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return React.useContext(ThemeContext);
};

export default useTheme;
