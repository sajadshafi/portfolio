import { IconType } from 'react-icons/lib';

export interface ButtonProps {
  text?: string;
  classes?: string;
  onClick: () => void;
  icon?: React.ReactNode;
}
export interface LinkProps {
  text?: string;
  classes?: string;
  to: string;
  icon?: React.ReactNode;
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

export interface SocialMediaLinkOptions {
  to: string;
  name: string;
  icon: React.ReactNode;
}
