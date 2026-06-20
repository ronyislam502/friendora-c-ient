"use client";
import { Home, MonitorPlay, Store, Users, Gamepad2, Grid3X3, MessageCircle, Bell } from 'lucide-react';
import SearchDropdown from './SearchDropdown';
import ProfileDropdown from './ProfileDropdown';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const isReels = pathname === '/reels';

    return (
        <nav className="fixed top-0 z-50 w-full h-14 bg-[#242526] border-b border-[#3E4042] flex items-center justify-between px-4">

            {/* Left Section */}
            <SearchDropdown />

            {/* Center Section */}
            <div className="hidden md:flex flex-1 justify-center max-w-[680px] h-full ml-10">
                <div className="flex w-full justify-between">

                    {/* Home Tab */}
                    <Link href="/" className="flex-1 flex items-center justify-center relative cursor-pointer group px-1">
                        <div className={`w-full h-12 flex items-center justify-center rounded-lg mt-1 transition-colors ${!isHome && 'hover:bg-[#3A3B3C]'}`}>
                            <Home className={isHome ? "h-7 w-7 text-[#0866FF]" : "h-[26px] w-[26px] text-[#B0B3B8]"} fill={isHome ? "currentColor" : "none"} strokeWidth={isHome ? 0 : 2} />
                        </div>
                        {isHome && <div className="absolute bottom-0 w-full h-[3px] bg-[#0866FF]"></div>}
                    </Link>

                    {/* Reels Tab */}
                    <Link href="/reels" className="flex-1 flex items-center justify-center relative cursor-pointer group px-1">
                        <div className={`w-full h-12 flex items-center justify-center rounded-lg mt-1 transition-colors ${!isReels && 'hover:bg-[#3A3B3C]'}`}>
                            <MonitorPlay className={isReels ? "h-[26px] w-[26px] text-[#0866FF]" : "h-[26px] w-[26px] text-[#B0B3B8]"} fill={isReels ? "currentColor" : "none"} strokeWidth={isReels ? 0 : 2} />
                        </div>
                        {isReels && <div className="absolute bottom-0 w-full h-[3px] bg-[#0866FF]"></div>}
                    </Link>

                    {/* Inactive Tabs */}
                    <div className="flex-1 flex items-center justify-center cursor-pointer group px-1">
                        <div className="w-full h-12 flex items-center justify-center rounded-lg hover:bg-[#3A3B3C] transition-colors mt-1">
                            <Store className="h-[26px] w-[26px] text-[#B0B3B8]" strokeWidth={2} />
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center cursor-pointer group px-1">
                        <div className="w-full h-12 flex items-center justify-center rounded-lg hover:bg-[#3A3B3C] transition-colors mt-1">
                            <Users className="h-[26px] w-[26px] text-[#B0B3B8]" strokeWidth={2} />
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center cursor-pointer group px-1">
                        <div className="w-full h-12 flex items-center justify-center rounded-lg hover:bg-[#3A3B3C] transition-colors mt-1">
                            <Gamepad2 className="h-[26px] w-[26px] text-[#B0B3B8]" strokeWidth={2} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-[#3A3B3C] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#4E4F50] transition-colors">
                    <Grid3X3 className="text-[#E4E6EB] h-5 w-5" strokeWidth={0} fill="currentColor" />
                </div>
                <div className="h-10 w-10 bg-[#3A3B3C] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#4E4F50] transition-colors relative">
                    <MessageCircle className="text-[#E4E6EB] h-[22px] w-[22px]" strokeWidth={0} fill="currentColor" />
                    <div className="absolute -top-[2px] -right-[2px] bg-[#E41E3F] text-white text-[12px] font-bold rounded-full h-[19px] min-w-[19px] flex items-center justify-center px-[4px] border-2 border-[#242526]">
                        2
                    </div>
                </div>
                <div className="h-10 w-10 bg-[#3A3B3C] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#4E4F50] transition-colors">
                    <Bell className="text-[#E4E6EB] h-[22px] w-[22px]" strokeWidth={0} fill="currentColor" />
                </div>

                {/* Profile Dropdown */}
                <ProfileDropdown />
            </div>

        </nav>
    );
};

export default Navbar;