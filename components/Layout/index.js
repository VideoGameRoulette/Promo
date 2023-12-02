import React from 'react';
import Link from 'next/link';
import {
    CalendarIcon,
    ShoppingCartIcon,
    HomeIcon,
    MapIcon
} from '@heroicons/react/24/outline';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Main Content */}
            <main className="flex-1 p-4 md:mb-0 mb-8">
                {children}
            </main>
            {/* Bottom Navigation (visible on mobile) */}
            <nav className="bg-black p-4 text-white fixed flex justify-around bottom-0 left-0 right-0 md:hidden">
                <Link href="https://noreset.tv/" legacyBehavior>
                    <a className="mr-4"><HomeIcon className="w-6 h-6" /></a>
                </Link>
                <Link href="https://schedule.noreset.tv/" legacyBehavior>
                    <a><CalendarIcon className="w-6 h-6" /></a>
                </Link>
                <Link href="https://shop.noreset.tv/" legacyBehavior>
                    <a><ShoppingCartIcon className="w-6 h-6" /></a>
                </Link>
                <Link href="https://www.google.com/maps?ll=45.46212,-73.826931&z=15&t=m&hl=en&gl=CA&mapclient=embed&cid=7756246040806104090" legacyBehavior>
                    <a><MapIcon className="w-6 h-6" /></a>
                </Link>
            </nav>
        </div>
    );
};

export default Layout;