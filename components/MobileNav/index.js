import {
    CloudArrowUpIcon,
    InformationCircleIcon,
    ShoppingCartIcon
} from '@heroicons/react/24/outline';

const MobileNav = () => {
    return (
        <footer className="xl:hidden grid grid-cols-4 col-span-1 row-span-1 bg-gray-800 gap-4 px-4">
            <div className="flex justify-center items-center">
                <div className="sm:w-8 sm:h-8 w-6 h-6">
                    <InformationCircleIcon />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="sm:w-8 sm:h-8 w-6 h-6">
                    <CloudArrowUpIcon />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="sm:w-8 sm:h-8 w-6 h-6">
                    <CloudArrowUpIcon />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="sm:w-8 sm:h-8 w-6 h-6">
                    <ShoppingCartIcon />
                </div>
            </div>
        </footer>
    );
};

export default MobileNav;