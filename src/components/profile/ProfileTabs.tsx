"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, MoreHorizontal } from 'lucide-react';

const ProfileTabs = () => {
    const pathname = usePathname();

    // Helper to determine if a tab is active
    const isActive = (path: string) => {
        if (path === '/member/profile' && pathname === '/member/profile') return true;
        if (path !== '/member/profile' && pathname.startsWith(path)) return true;
        return false;
    };

    const tabClass = (path: string) => `h-[60px] px-4 flex items-center justify-center font-semibold text-[15px] transition-colors ${
        isActive(path) 
            ? 'text-[#0866FF] border-b-[3px] border-[#0866FF] hover:bg-[#3A3B3C] hover:bg-opacity-50' 
            : 'text-[#A8ABAF] rounded-md hover:bg-[#3A3B3C] my-1 border-b-[3px] border-transparent'
    }`;

    return (
        <div className="bg-[#242526] w-full border-b border-[#3E4042]">
            <div className="max-w-[1100px] mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Tabs */}
                    <div className="flex items-center overflow-x-auto">
                        <Link href="/member/profile" className={tabClass('/member/profile')}>
                            All
                        </Link>
                        <Link href="/member/profile/about" className={tabClass('/member/profile/about')}>
                            About
                        </Link>
                        <Link href="/member/profile/photos" className={tabClass('/member/profile/photos')}>
                            Photos
                        </Link>
                        <Link href="/member/profile/friends" className={tabClass('/member/profile/friends')}>
                            Friends
                        </Link>
                        <Link href="/member/profile/reels" className={`${tabClass('/member/profile/reels')} hidden sm:flex`}>
                            Reels
                        </Link>
                        <button className="h-[60px] px-4 flex items-center justify-center gap-1 text-[#A8ABAF] font-semibold text-[15px] rounded-md hover:bg-[#3A3B3C] transition-colors my-1">
                            More
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Right side dots button */}
                    <div className="py-2 flex-shrink-0 ml-2">
                        <button className="w-12 h-9 bg-[#3A3B3C] hover:bg-[#4E4F50] rounded-md flex items-center justify-center transition-colors">
                            <MoreHorizontal className="w-5 h-5 text-[#E4E6EB]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileTabs;
