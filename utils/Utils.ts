import { continents as validContinents } from "@/public/staticData";

export const thousandSeparator = (num: number | string) => {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const isValidContinent = (continent: string) => {
  return validContinents.includes(continent.toLowerCase())
};