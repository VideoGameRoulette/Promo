import { classNames } from "/utils";

export const fillIt = "w-full h-full";
export const mainContainer = classNames(fillIt, "xl:px-8 px-4 py-4 overflow-y-auto text-center text-gray-300");
export const innerContainer = classNames(fillIt, "rounded-lg p-4 flex flex-col lg:justify-center justify-start items-center");
export const secondaryContainer = "w-full h-auto flex sm:flex-row flex-col justify-center items-center gap-x-8 gap-y-4";
export const buttonStyle = "w-full border-2 border-white lg:p-8 md:p-6 sm:p-4 p-6 hover:bg-[rgba(0,255,255,0.5)] font-bold uppercase lg:text-lg md:text-xs sm:text-2xs last:sm:mb-0 last:mb-4";
export const h1Styles = "font-bold md:text-3xl sm:text-2xl text-xl";
export const paraStyles = "font-bold md:text-lg sm:text-base text-sm pb-4";