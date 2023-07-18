import { RegisterOptions, UseFormRegister } from 'react-hook-form';

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

export interface HeadingProps {
  title: string;
  subTitle: string;
  className?: string;
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

export interface AboutDetailOptions {
  text: string;
  icon: React.ReactNode;
}

export interface InputProps {
  name: 'name' | 'email_from' | 'subject' | 'message';
  placeholder: string;
  error?: string;
  className?: string;
  icon: React.ReactNode;
  type?: string;
  reg: UseFormRegister<ContactFormValues>;
  registerOptions: RegisterOptions;
}

export interface TooltipProps {
  text: string;
  className?: string;
  children: React.ReactNode;
}

export interface ContactFormValues {
  email_from: string;
  name: string;
  subject: string;
  message: string;
}

export interface SkillValue {
  heading: string;
  skills: string[];
}
