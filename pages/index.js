import Link from 'next/link';
import { NoReset4 } from "components/Images";

export default function Home() {
    return (
        <div className="p-4 min-h-screen flex items-center justify-center">
            <div className="text-center">
                <NoReset4 className="w-96 h-16 mb-4 mx-auto" />
                <h1 className="text-gray-400 text-2xl font-bold">Doubletree by Hilton Pointe-Claire</h1>
                <p className="text-gray-300 mb-2">6700 Trans-Canada Hwy, Pointe-Claire, Quebec H9R 1C2</p>
                <p className="text-gray-300 mb-4">February 9th to 11th, 2024</p>
                <div className="flex sm:flex-row flex-col justify-center gap-2">
                    <Link href="https://noreset.tv/events/guides/activities" legacyBehavior>
                        <a className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Why You Should Come?</a>
                    </Link>
                    <Link href="https://noreset.fundkyapp.com/en/noreset4/ticket-purchase/choose" legacyBehavior>
                        <a className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">Buy Tickets</a>
                    </Link>
                    <Link href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=YULANDT&groupCode=CDTCN2&arrivaldate=2024-02-08&departuredate=2024-02-12&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" legacyBehavior>
                        <a className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md">Book Hotel</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
