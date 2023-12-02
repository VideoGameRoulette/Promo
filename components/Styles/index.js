import { classNames } from "/utils";

export const Styles = {
    main: "md:p-0 pt-8 min-h-screen flex md:items-center items-start justify-center",
    center: "text-center",
    logo: "w-full h-auto md:mb-4 mb-2 mx-auto",
    header: "text-purple-400 lg:text-4xl md:text-2xl sm:text-xl text-lg font-bold",
    para: "text-gray-300 lg:text-3xl md:text-xl sm:text-lg text-base mb-2",
    paraLast: "text-purple-300 lg:text-3xl md:text-xl sm:text-lg text-base mb-4 font-bold",
    btns: "flex md:flex-row flex-col justify-center gap-2",
    btn1: "bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md",
    btn2: "bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md",
    btn3: "bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md",
}

export const fillIt = "w-full h-full";
export const mainContainer = classNames(fillIt, "xl:px-8 px-4 py-4 overflow-y-auto text-center text-gray-300");
export const innerContainer = classNames(fillIt, "rounded-lg p-4 flex flex-col lg:justify-center justify-start items-center");
export const secondaryContainer = "w-full h-auto flex sm:flex-row flex-col justify-center items-center gap-x-8 gap-y-4";
export const buttonStyle = "w-full border-2 border-white lg:p-8 md:p-6 sm:p-4 p-6 hover:bg-[rgba(0,255,255,0.5)] font-bold uppercase lg:text-lg md:text-xs sm:text-2xs last:sm:mb-0 last:mb-4";
export const h1Styles = "font-bold md:text-3xl sm:text-2xl text-xl";
export const paraStyles = "font-bold md:text-lg sm:text-base text-sm pb-4";