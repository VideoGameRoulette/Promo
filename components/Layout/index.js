import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    CalendarIcon,
    ShoppingCartIcon,
    HomeIcon,
    MapIcon
} from '@heroicons/react/24/outline';
import { classNames } from 'utils';

const Layout = ({ children }) => {
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Set initial screen size
        handleResize();

        // Attach event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className="px-4 min-h-screen flex flex-col">
            {/* Main Content */}
            <main className={classNames(
                screenSize.height <= 520 ? "mt-16 mb-24" : "md:mt-0 mt-16",
                "flex-1"
            )}>
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