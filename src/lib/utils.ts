import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, time);
  });
}
export type FeaturesType = {
  TicTacToe: boolean;
  TabTest: boolean;
  RandomColor: boolean;
  QrCode: boolean;
  Accordion: boolean;
};

const features: FeaturesType = {
  TicTacToe: true,
  TabTest: true,
  RandomColor: true,
  QrCode: true,
  Accordion: true,
};

export function dummyFeaturesApi(): Promise<FeaturesType> {
  return new Promise((resolve, reject) => {
    if (features) setTimeout(() => resolve(features), 500);
    else reject("some error occur while ");
  });
}
