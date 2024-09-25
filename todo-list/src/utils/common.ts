import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const reverseArray = <T>(array: T[]): T[] => {
  return array.slice().reverse();
};