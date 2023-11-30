import { NoReset4 } from "components/Images";

const buttonStyle = "w-full border-2 border-white p-8 hover:bg-[rgba(0,255,255,0.5)] font-bold uppercase lg:text-lg md:text-base text-sm";
const h1Styles = "font-bold md:text-3xl text-2xl";
const paraStyles = "font-bold md:text-lg text-base pb-4";

export default function HomeEn() {
  return (
    <div className="w-full h-full xl:px-8 px-4 py-4 overflow-y-auto border-y-black border-b-2">
      <div className="w-full h-full rounded-lg p-4 flex flex-col justify-center items-center">
        <NoReset4 />
        <h1 className={h1Styles}>@Doubletree by Hilton Pointe-Claire</h1>
        <p className={paraStyles}>6700 Trans-Canada Hwy, Pointe-Claire, Quebec H9R 1C2</p>
        <p className={paraStyles}>February 9th to 11th 2024</p>
        <div className='w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-x-8 gap-y-4'>
          <button className={buttonStyle}>Why You Should Come?</button>
          <button className={buttonStyle}>Buy Tickets</button>
          <button className={buttonStyle}>Book Hotel</button>
        </div>
      </div>
    </div>
  )
}
