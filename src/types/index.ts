import { dictionary } from "../locales.ts";

export type UserRole = 'user' | 'manager';

export type RequestStatus = 'new' | 'in progress' | 'done';

export type ThemeType = "light" | "dark";

export type LanguageSelection = "ua" | "en";

export interface UserRequest {
  id: string;       
  title: string;   
  description: string;
  status: RequestStatus;
  createdAt: string;
  isArhived: string;
}