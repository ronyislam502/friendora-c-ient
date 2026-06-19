import { Search, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

const RightSidebar = () => {
    return (
        <div className="w-[360px] hidden lg:flex flex-col h-[calc(100vh-56px)] sticky top-14 overflow-y-auto hover:scrollbar-thin scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-400 p-2 pt-4">
            {/* Friend Requests */}
            <div className="flex items-center justify-between px-2 mb-2">
                <span className="text-[17px] font-semibold text-[#A8ABAF]">Friend requests</span>
                <a href="#" className="text-[15px] text-[#0866FF] hover:bg-[#3A3B3C] px-2 py-1 rounded-md transition-colors">See all</a>
            </div>

            <div className="px-2 mb-4 hover:bg-[#3A3B3C] rounded-lg p-2 transition-colors cursor-pointer group">
                <div className="flex gap-3">
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-full border border-[#3E4042]">
                            <img src="https://i.pravatar.cc/150?img=33" alt="Friend" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <span className="font-semibold text-[15px] text-[#E4E6EB]">মোঃ মাসুদ ড্রাইভার</span>
                            <span className="text-[13px] text-[#A8ABAF]">2d</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                            <div className="avatar-group -space-x-2 rtl:space-x-reverse">
                                <div className="avatar border-none">
                                    <div className="w-4 h-4 rounded-full">
                                        <img src="https://i.pravatar.cc/150?img=11" />
                                    </div>
                                </div>
                            </div>
                            <span className="text-[13px] text-[#A8ABAF]">28 mutual friends</span>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <button className="btn btn-sm flex-1 bg-[#0866FF] hover:bg-[#1877F2] text-white border-none normal-case text-[15px] h-9">Confirm</button>
                            <button className="btn btn-sm flex-1 bg-[#3A3B3C] hover:bg-[#4E4F50] text-[#E4E6EB] border-none normal-case text-[15px] h-9">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider my-0 h-[1px] bg-[#3E4042] mx-2"></div>

            {/* Birthdays */}
            <div className="px-2 py-4">
                <span className="text-[17px] font-semibold text-[#A8ABAF] block mb-2">Birthdays</span>
                <div className="flex items-start gap-3 hover:bg-[#3A3B3C] p-2 rounded-lg cursor-pointer transition-colors">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tkwIRwXz6.png" className="w-8 h-8 rounded-md" alt="Gift" />
                    <div className="text-[15px] text-[#E4E6EB] leading-tight pt-1">
                        <span className="font-semibold text-white">Mohammad Yousuf</span> and <span className="font-semibold text-white">2 others</span> have birthdays today.
                    </div>
                </div>
            </div>

            <div className="divider my-0 h-[1px] bg-[#3E4042] mx-2"></div>

            {/* Contacts */}
            <div className="flex items-center justify-between px-2 py-2 mt-2">
                <span className="text-[17px] font-semibold text-[#A8ABAF]">Contacts</span>
                <div className="flex gap-1">
                    <div className="w-8 h-8 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center cursor-pointer transition-colors">
                        <Search className="w-4 h-4 text-[#A8ABAF]" />
                    </div>
                    <div className="w-8 h-8 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center cursor-pointer transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-[#A8ABAF]" />
                    </div>
                </div>
            </div>

            <ul className="menu w-full px-2 text-[#E4E6EB] font-medium text-[15px]">
                {/* Meta AI */}
                <li>
                    <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2 flex items-center gap-3">
                        <div className="relative">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tkwIRwXz6.png" className="w-9 h-9 rounded-full object-cover border border-[#3E4042]" alt="Meta AI" />
                            <div className="absolute bottom-0 right-0 w-[10px] h-[10px] bg-[#31A24C] rounded-full border-2 border-[#18191A]"></div>
                        </div>
                        <span className="flex-1">Meta AI</span>
                    </a>
                </li>
                {/* Contacts List */}
                {[
                    "রিয়াদুল ইসলাম শাকিল", "Anita Anni", "Ewr Prince Hridoy", "HB Sobuj", 
                    "Shukher Payra", "Azizul Hakim", "Asta Islam", "Asraful Islam", 
                    "M Mozammel Hoque", "MdHamdul Islam", "Afrin Akter"
                ].map((name, i) => (
                    <li key={i}>
                        <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2 flex items-center gap-3">
                            <div className="relative">
                                <img src={`https://i.pravatar.cc/150?img=${i + 40}`} className="w-9 h-9 rounded-full object-cover border border-[#3E4042]" alt={name} />
                                <div className="absolute bottom-0 right-0 w-[10px] h-[10px] bg-[#31A24C] rounded-full border-2 border-[#18191A]"></div>
                            </div>
                            <span className="flex-1">{name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RightSidebar;
