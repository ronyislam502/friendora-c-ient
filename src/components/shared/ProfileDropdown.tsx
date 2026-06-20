"use client";

import { useState } from 'react';
import { 
    ChevronDown, RefreshCcw, Settings, HelpCircle, Moon, LogOut, ChevronRight, 
    ArrowUpRight, PieChart, MessageSquare, Users, ArrowLeft, Globe, Lock, List, 
    SlidersHorizontal, Heart, ShieldAlert, UserCheck, Mail, AlertCircle, 
    Type, Keyboard, Accessibility, ArrowDownLeft
} from 'lucide-react';

const ProfileDropdown = () => {
    const [menuLevel, setMenuLevel] = useState('main');

    return (
        <div className="dropdown dropdown-end ml-1">
            <div tabIndex={0} role="button" className="relative cursor-pointer group">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 overflow-hidden border border-[#3E4042]">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#3A3B3C] rounded-full h-[18px] w-[18px] flex items-center justify-center border-2 border-[#242526]">
                    <ChevronDown className="text-[#E4E6EB] h-[10px] w-[10px]" strokeWidth={4} />
                </div>
            </div>

            <div tabIndex={0} className="dropdown-content z-[1] p-4 shadow-xl bg-[#242526] rounded-xl w-[360px] top-12 border border-[#3E4042]">
                
                {menuLevel === 'main' && (
                    <>
                        {/* Profiles Card */}
                        <div className="bg-[#242526] rounded-xl border border-[#3E4042] shadow-[0_0_15px_rgba(0,0,0,0.3)] mb-2 pb-2">
                            <ul className="menu w-full p-2">
                                <li>
                                    <a className="flex items-center gap-3 p-2 hover:bg-[#3A3B3C] rounded-lg active:!bg-[#3A3B3C]">
                                        <div className="avatar">
                                            <div className="w-10 h-10 rounded-full border border-gray-600">
                                                <img src="https://i.pravatar.cc/150?img=11" alt="Profile" />
                                            </div>
                                        </div>
                                        <span className="font-semibold text-[16px] text-[#E4E6EB]">Rafsan Al Nahiyan Rony</span>
                                    </a>
                                </li>
                                <div className="divider my-0 h-[1px] bg-[#3E4042]"></div>
                                <li>
                                    <a className="flex items-center gap-3 p-2 hover:bg-[#3A3B3C] rounded-lg active:!bg-[#3A3B3C]">
                                        <div className="avatar relative">
                                            <div className="w-8 h-8 rounded-full border border-gray-600">
                                                <img src="https://i.pravatar.cc/150?img=12" alt="Page" />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 bg-[#242526] rounded-full p-[2px] border border-[#3E4042]">
                                                <RefreshCcw className="w-3 h-3 text-[#A8ABAF]" />
                                            </div>
                                        </div>
                                        <span className="font-medium text-[15px] text-[#E4E6EB]">RNR Entertainment Zone</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-3 p-2 hover:bg-[#3A3B3C] rounded-lg active:!bg-[#3A3B3C]">
                                        <div className="avatar relative">
                                            <div className="w-8 h-8 rounded-full border border-gray-600">
                                                <img src="https://i.pravatar.cc/150?img=13" alt="Page" />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 bg-[#242526] rounded-full p-[2px] border border-[#3E4042]">
                                                <RefreshCcw className="w-3 h-3 text-[#A8ABAF]" />
                                            </div>
                                        </div>
                                        <span className="font-medium text-[15px] text-[#E4E6EB]">RN Gamers</span>
                                    </a>
                                </li>
                                <li className="mt-1">
                                    <button className="btn btn-sm h-9 w-full bg-[#3A3B3C] border-none text-[#E4E6EB] hover:bg-[#4E4F50] rounded-lg normal-case font-medium text-[15px]">
                                        <Users className="w-[18px] h-[18px] mr-1" />
                                        See all profiles
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Actions Menu */}
                        <ul className="menu w-full p-0 text-[#E4E6EB] font-medium">
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <PieChart className="w-[22px] h-[22px] text-[#E4E6EB]" />
                                    </div>
                                    <span className="flex-1 text-[15px]">Meta Business Suite</span>
                                    <ArrowUpRight className="w-5 h-5 text-[#A8ABAF]" strokeWidth={2.5} />
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2 flex items-center gap-3"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => setMenuLevel('settings')}
                                >
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <Settings className="w-[22px] h-[22px] text-[#E4E6EB]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1 text-[15px]">Settings & privacy</span>
                                    <ChevronRight className="w-6 h-6 text-[#A8ABAF]" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2 flex items-center gap-3"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => setMenuLevel('help')}
                                >
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <HelpCircle className="w-[22px] h-[22px] text-[#E4E6EB]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1 text-[15px]">Help & support</span>
                                    <ChevronRight className="w-6 h-6 text-[#A8ABAF]" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2 flex items-center gap-3"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => setMenuLevel('display')}
                                >
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <Moon className="w-[22px] h-[22px] text-[#E4E6EB]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1 text-[15px]">Display & accessibility</span>
                                    <ChevronRight className="w-6 h-6 text-[#A8ABAF]" />
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <MessageSquare className="w-[22px] h-[22px] text-[#E4E6EB]" fill="currentColor" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <span className="text-[15px] leading-tight">Give feedback</span>
                                        <span className="text-[12px] text-[#A8ABAF] font-normal leading-tight">CTRL B</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <LogOut className="w-[22px] h-[22px] text-[#E4E6EB]" />
                                    </div>
                                    <span className="flex-1 text-[15px]">Log out</span>
                                </a>
                            </li>
                        </ul>

                        <div className="px-2 mt-3 text-[12px] text-[#A8ABAF] flex flex-wrap gap-x-1 leading-snug">
                            <span className="hover:underline cursor-pointer">Privacy</span> ·
                            <span className="hover:underline cursor-pointer">Terms</span> ·
                            <span className="hover:underline cursor-pointer">Advertising</span> ·
                            <span className="hover:underline cursor-pointer">Ad Choices ▷</span> ·
                            <span className="hover:underline cursor-pointer">Cookies</span> ·
                            <span className="hover:underline cursor-pointer">More</span>
                        </div>
                    </>
                )}

                {/* Settings Menu Panel */}
                {menuLevel === 'settings' && (
                    <div className="flex flex-col text-[#E4E6EB] pb-2">
                        {/* Submenu Header */}
                        <div className="flex items-center gap-3 mb-2 px-1">
                            <button 
                                className="w-9 h-9 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center transition-colors -ml-1"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => setMenuLevel('main')}
                            >
                                <ArrowLeft className="w-[22px] h-[22px] text-[#A8ABAF]" />
                            </button>
                            <h2 className="text-[22px] font-bold">Settings & privacy</h2>
                        </div>
                        
                        {/* Submenu Items */}
                        <ul className="menu w-full p-0 font-medium mt-1">
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <Settings className="w-[20px] h-[20px] text-[#E4E6EB]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Settings</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <Globe className="w-[20px] h-[20px] text-[#E4E6EB]" />
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Language</span>
                                    <ChevronRight className="w-5 h-5 text-[#A8ABAF]" />
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center relative">
                                        <Lock className="w-[18px] h-[18px] text-[#E4E6EB]" fill="currentColor" />
                                        <div className="absolute top-[6px] right-[6px] bg-[#3A3B3C] rounded-full p-[1px]">
                                            <Heart className="w-[8px] h-[8px] text-[#E4E6EB]" fill="currentColor" />
                                        </div>
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Privacy checkup</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <Lock className="w-[20px] h-[20px] text-[#E4E6EB]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Privacy Center</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <List className="w-[20px] h-[20px] text-[#E4E6EB]" strokeWidth={2.5} />
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Activity log</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <SlidersHorizontal className="w-[20px] h-[20px] text-[#E4E6EB]" strokeWidth={2.5} />
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Content preferences</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Help & Support Menu Panel */}
                {menuLevel === 'help' && (
                    <div className="flex flex-col text-[#E4E6EB] pb-2">
                        {/* Submenu Header */}
                        <div className="flex items-center gap-3 mb-2 px-1">
                            <button 
                                className="w-9 h-9 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center transition-colors -ml-1"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => setMenuLevel('main')}
                            >
                                <ArrowLeft className="w-[22px] h-[22px] text-[#A8ABAF]" />
                            </button>
                            <h2 className="text-[22px] font-bold">Help & support</h2>
                        </div>
                        
                        {/* Submenu Items */}
                        <ul className="menu w-full p-0 font-medium mt-1">
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <HelpCircle className="w-[20px] h-[20px] text-[#E4E6EB]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Help Center</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <ShieldAlert className="w-[20px] h-[20px] text-[#E4E6EB]" />
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Scam Protection Center</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <UserCheck className="w-[20px] h-[20px] text-[#E4E6EB]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Account Status</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <Mail className="w-[20px] h-[20px] text-[#E4E6EB]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Support Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <AlertCircle className="w-[20px] h-[20px] text-[#E4E6EB]" fill="currentColor" />
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Report a problem</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Display & Accessibility Menu Panel */}
                {menuLevel === 'display' && (
                    <div className="flex flex-col text-[#E4E6EB] pb-2">
                        {/* Submenu Header */}
                        <div className="flex items-center gap-3 mb-2 px-1">
                            <button 
                                className="w-9 h-9 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center transition-colors -ml-1"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => setMenuLevel('main')}
                            >
                                <ArrowLeft className="w-[22px] h-[22px] text-[#A8ABAF]" />
                            </button>
                            <h2 className="text-[22px] font-bold">Display & accessibility</h2>
                        </div>

                        {/* Dark mode */}
                        <div className="flex gap-3 px-1 mb-2 mt-2">
                            <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center flex-shrink-0">
                                <Moon className="w-[20px] h-[20px] text-[#E4E6EB]" fill="currentColor" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <span className="text-[15px] font-semibold text-[#E4E6EB]">Dark mode</span>
                                <span className="text-[13px] text-[#A8ABAF] leading-snug mt-0.5 pr-2">Adjust the appearance of Facebook to reduce glare and give your eyes a break.</span>
                                
                                <div className="mt-2 flex flex-col">
                                    <label className="cursor-pointer flex items-center justify-between hover:bg-[#3A3B3C] p-2 rounded-lg -mx-2 transition-colors">
                                        <span className="text-[15px] font-medium text-[#E4E6EB]">Off</span>
                                        <input type="radio" name="darkmode" className="radio radio-sm border-[#A8ABAF] checked:bg-[#0866FF]" />
                                    </label>
                                    <label className="cursor-pointer flex items-center justify-between hover:bg-[#3A3B3C] p-2 rounded-lg -mx-2 mt-1 transition-colors">
                                        <span className="text-[15px] font-medium text-[#E4E6EB]">On</span>
                                        <input type="radio" name="darkmode" className="radio radio-sm border-[#A8ABAF] checked:bg-[#0866FF]" defaultChecked />
                                    </label>
                                    <label className="cursor-pointer flex items-start justify-between hover:bg-[#3A3B3C] p-2 rounded-lg -mx-2 mt-1 transition-colors">
                                        <div className="flex flex-col pr-4">
                                            <span className="text-[15px] font-medium text-[#E4E6EB]">Automatic</span>
                                            <span className="text-[13px] text-[#A8ABAF] leading-tight mt-0.5">We'll automatically adjust the display based on your device's system settings.</span>
                                        </div>
                                        <input type="radio" name="darkmode" className="radio radio-sm border-[#A8ABAF] checked:bg-[#0866FF] mt-1 flex-shrink-0" />
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Compact mode */}
                        <div className="flex gap-3 px-1 mt-2 mb-2">
                            <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center flex-shrink-0 relative">
                                <span className="font-bold text-[14px]">A</span>
                                <ArrowUpRight className="absolute top-[6px] right-[4px] w-[10px] h-[10px]" strokeWidth={3} />
                                <ArrowDownLeft className="absolute bottom-[6px] left-[4px] w-[10px] h-[10px]" strokeWidth={3} />
                            </div>
                            <div className="flex flex-col flex-1">
                                <span className="text-[15px] font-semibold text-[#E4E6EB]">Compact mode</span>
                                <span className="text-[13px] text-[#A8ABAF] leading-snug mt-0.5 pr-2">Make your font size smaller so more content can fit on the screen.</span>
                                
                                <div className="mt-2 flex flex-col">
                                    <label className="cursor-pointer flex items-center justify-between hover:bg-[#3A3B3C] p-2 rounded-lg -mx-2 transition-colors">
                                        <span className="text-[15px] font-medium text-[#E4E6EB]">Off</span>
                                        <input type="radio" name="compactmode" className="radio radio-sm border-[#A8ABAF] checked:bg-[#0866FF]" defaultChecked />
                                    </label>
                                    <label className="cursor-pointer flex items-center justify-between hover:bg-[#3A3B3C] p-2 rounded-lg -mx-2 mt-1 transition-colors">
                                        <span className="text-[15px] font-medium text-[#E4E6EB]">On</span>
                                        <input type="radio" name="compactmode" className="radio radio-sm border-[#A8ABAF] checked:bg-[#0866FF]" />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <ul className="menu w-full p-0 font-medium mt-1">
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <Keyboard className="w-[20px] h-[20px] text-[#E4E6EB]" />
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Keyboard</span>
                                    <ChevronRight className="w-5 h-5 text-[#A8ABAF]" />
                                </a>
                            </li>
                            <li>
                                <a className="hover:bg-[#3A3B3C] active:!bg-[#3A3B3C] rounded-lg py-2.5 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#3A3B3C] flex items-center justify-center">
                                        <Accessibility className="w-[20px] h-[20px] text-[#E4E6EB]" />
                                    </div>
                                    <span className="flex-1 text-[15px] font-semibold">Accessibility settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileDropdown;
