import { ChevronDown, MoreHorizontal } from 'lucide-react';

const ProfileTabs = () => {
    return (
        <div className="bg-[#242526] w-full border-b border-[#3E4042]">
            <div className="max-w-[1100px] mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Tabs */}
                    <div className="flex items-center">
                        <button className="h-[60px] px-4 flex items-center justify-center text-[#0866FF] font-semibold text-[15px] border-b-[3px] border-[#0866FF] hover:bg-[#3A3B3C] hover:bg-opacity-50 transition-colors">
                            All
                        </button>
                        <button className="h-[60px] px-4 flex items-center justify-center text-[#A8ABAF] font-semibold text-[15px] rounded-md hover:bg-[#3A3B3C] transition-colors my-1">
                            About
                        </button>
                        <button className="h-[60px] px-4 flex items-center justify-center text-[#A8ABAF] font-semibold text-[15px] rounded-md hover:bg-[#3A3B3C] transition-colors my-1">
                            Photos
                        </button>
                        <button className="h-[60px] px-4 flex items-center justify-center text-[#A8ABAF] font-semibold text-[15px] rounded-md hover:bg-[#3A3B3C] transition-colors my-1">
                            Friends
                        </button>
                        <button className="h-[60px] px-4 flex items-center justify-center text-[#A8ABAF] font-semibold text-[15px] rounded-md hover:bg-[#3A3B3C] transition-colors my-1 hidden sm:flex">
                            Reels
                        </button>
                        <button className="h-[60px] px-4 flex items-center justify-center gap-1 text-[#A8ABAF] font-semibold text-[15px] rounded-md hover:bg-[#3A3B3C] transition-colors my-1">
                            More
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Right side dots button */}
                    <div className="py-2">
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
