export interface ButtonProps {
  text: string;
  classes: string;
  onClick: () => void;
}

export interface ThemeContextOptions {
  theme: ThemeType;
  toggleTheme: () => void;
}

export type ThemeType = 'dark' | 'light' | '';

export interface RouteValue {
  to: string;
  text: string;
  icon?: React.ReactNode;
}
