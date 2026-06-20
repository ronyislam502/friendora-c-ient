"use client";
import {
    Users, LayoutDashboard, MonitorPlay, History,
    Bookmark, ChevronDown, ChevronUp, Megaphone, BarChart2, Gift, Calendar, Clock, Gamepad2, Store, MessageCircle, MessageSquare
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const LeftSidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-[360px] hidden xl:flex flex-shrink-0">
            <div className="w-[360px] flex flex-col h-[calc(100vh-56px)] fixed top-14 left-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-2 pb-6">
                <ul className="menu w-full p-0 m-0 text-[#E4E6EB] font-medium text-[15px]">
                    {/* Profile Link */}
                    <li>
                        <Link href="/member/profile" className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                            <img src="https://i.pravatar.cc/150?img=11" className="w-9 h-9 rounded-full object-cover" alt="Profile" />
                            <span className="flex-1">Rafsan Al Nahiyan Rony</span>
                        </Link>
                    </li>

                    {/* Meta AI */}
                    <li>
                        <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tkwIRwXz6.png" className="w-9 h-9 rounded-full" alt="Meta AI" />
                            <span className="flex-1">Meta AI</span>
                        </a>
                    </li>

                    {/* Friends */}
                    <li>
                        <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" className="w-9 h-9" alt="Friends" />
                            <span className="flex-1">Friends</span>
                        </a>
                    </li>

                    {/* Dashboard */}
                    <li>
                        <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png" className="w-9 h-9" alt="Dashboard" />
                            <span className="flex-1">Dashboard</span>
                        </a>
                    </li>

                    {/* Reels */}
                    <li>
                        <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/npi-A7s1VdK.png" className="w-9 h-9" alt="Reels" />
                            <span className="flex-1">Reels</span>
                        </a>
                    </li>

                    {/* Memories */}
                    <li>
                        <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png" className="w-9 h-9" alt="Memories" />
                            <span className="flex-1">Memories</span>
                        </a>
                    </li>

                    {/* Saved */}
                    <li>
                        <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" className="w-9 h-9" alt="Saved" />
                            <span className="flex-1">Saved</span>
                        </a>
                    </li>

                    {/* Expanded Items */}
                    {isExpanded && (
                        <>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                                    <div className="w-9 h-9 flex items-center justify-center">
                                        <Megaphone className="w-7 h-7 text-[#2D88FF]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1">Ad Center</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                                    <div className="w-9 h-9 flex items-center justify-center">
                                        <BarChart2 className="w-7 h-7 text-[#2D88FF]" />
                                    </div>
                                    <span className="flex-1">Ads Manager</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                                    <div className="w-9 h-9 flex items-center justify-center">
                                        <Gift className="w-7 h-7 text-[#F5C33B]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1">Birthdays</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                                    <div className="w-9 h-9 flex items-center justify-center">
                                        <Calendar className="w-7 h-7 text-[#F02849]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1">Events</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                                    <div className="w-9 h-9 flex items-center justify-center">
                                        <Clock className="w-7 h-7 text-[#2D88FF]" />
                                    </div>
                                    <span className="flex-1">Feeds</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                                    <div className="w-9 h-9 flex items-center justify-center">
                                        <Gamepad2 className="w-7 h-7 text-[#2D88FF]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1">Gaming Video</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                                    <div className="w-9 h-9 flex items-center justify-center">
                                        <Users className="w-7 h-7 text-[#2D88FF]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1">Groups</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                                    <div className="w-9 h-9 flex items-center justify-center">
                                        <Store className="w-7 h-7 text-[#2D88FF]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1">Marketplace</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                                    <div className="w-9 h-9 flex items-center justify-center">
                                        <MessageCircle className="w-7 h-7 text-[#B04CFF]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1">Messenger</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                                    <div className="w-9 h-9 flex items-center justify-center">
                                        <MessageSquare className="w-7 h-7 text-[#10D2C8]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1">Messenger Kids</span>
                                </a>
                            </li>
                        </>
                    )}

                    {/* Toggle Button */}
                    <li>
                        <a
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3 cursor-pointer"
                        >
                            <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                {isExpanded ? (
                                    <ChevronUp className="w-5 h-5 text-[#E4E6EB]" strokeWidth={2.5} />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-[#E4E6EB]" strokeWidth={2.5} />
                                )}
                            </div>
                            <span className="flex-1">{isExpanded ? 'See less' : 'See more'}</span>
                        </a>
                    </li>
                </ul>

                <div className="divider my-2 h-[1px] bg-[#3E4042] mx-4"></div>

                {/* Shortcuts Section */}
                <div className="px-2 py-1">
                    <div className="flex items-center justify-between group cursor-pointer px-2">
                        <span className="text-[17px] font-semibold text-[#A8ABAF] hover:text-[#E4E6EB] transition-colors">Your shortcuts</span>
                        <a href="#" className="text-[15px] text-[#4599FF] hover:bg-[#3A3B3C] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Edit</a>
                    </div>
                </div>

                <ul className="menu w-full p-0 m-0 text-[#E4E6EB] font-medium text-[15px]">
                    <li>
                        <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                            <img src="https://i.pravatar.cc/150?img=12" className="w-9 h-9 rounded-full object-cover" alt="Group" />
                            <span className="flex-1 truncate">Bangla Today News</span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                            <img src="https://i.pravatar.cc/150?img=13" className="w-9 h-9 rounded-full object-cover" alt="Page" />
                            <span className="flex-1 truncate">Liven Overseas Ltd</span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                            <img src="https://i.pravatar.cc/150?img=14" className="w-9 h-9 rounded-full object-cover" alt="Group" />
                            <span className="flex-1 truncate">Liven Tech</span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                            <img src="https://i.pravatar.cc/150?img=15" className="w-9 h-9 rounded-full object-cover" alt="Page" />
                            <span className="flex-1 truncate">RN Gamers</span>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg p-2 flex items-center gap-3">
                            <img src="https://i.pravatar.cc/150?img=16" className="w-9 h-9 rounded-full object-cover" alt="Page" />
                            <span className="flex-1 truncate">RNR Entertainment Zone</span>
                        </a>
                    </li>
                </ul>

                <div className="mt-auto px-4 pt-4 text-[13px] text-[#A8ABAF] flex flex-wrap gap-x-1 leading-snug">
                    <span className="hover:underline cursor-pointer">Privacy</span> ·
                    <span className="hover:underline cursor-pointer">Terms</span> ·
                    <span className="hover:underline cursor-pointer">Advertising</span> ·
                    <span className="hover:underline cursor-pointer">Ad Choices ▷</span> ·
                    <span className="hover:underline cursor-pointer">Cookies</span> ·
                    <span className="hover:underline cursor-pointer">More</span> ·
                    <span>Meta © 2026</span>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
