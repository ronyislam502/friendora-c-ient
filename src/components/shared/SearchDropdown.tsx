"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Search, ArrowLeft, Clock, X } from 'lucide-react';

const SearchDropdown = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        };

        if (isSearchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchOpen]);

    return (
        <div className="flex items-center" ref={dropdownRef}>
            {/* Default State - Always rendered to maintain layout space but hidden when open */}
            <>
                <div className={`cursor-pointer ${isSearchOpen ? 'opacity-0 pointer-events-none' : ''}`}>
                    <Image src="https://i.postimg.cc/bwZwvFBL/Chat-GPT-Image-Jun-19-2026-10-37-51-PM.png" alt="Website Logo" width={80} height={80} className="h-20 w-20 object-cover rounded-full" />
                </div>
                <div
                    className={`ml-2 hidden md:flex items-center bg-[#3A3B3C] rounded-full h-10 px-3 w-[240px] cursor-text transition-opacity ${isSearchOpen ? 'opacity-0 pointer-events-none' : ''}`}
                    onClick={() => setIsSearchOpen(true)}
                >
                    <Search className="text-[#B0B3B8] h-[18px] w-[18px]" strokeWidth={2.5} />
                    <input
                        type="text"
                        placeholder="Search Friendora"
                        className="bg-transparent border-none outline-none text-[#E4E6EB] ml-2 w-full placeholder-[#B0B3B8] text-[15px] pointer-events-none"
                        readOnly
                    />
                </div>
                {/* Mobile Search Icon */}
                <div
                    className={`md:hidden ml-2 h-10 w-10 bg-[#3A3B3C] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#4E4F50] transition-colors ${isSearchOpen ? 'opacity-0 pointer-events-none' : ''}`}
                    onClick={() => setIsSearchOpen(true)}
                >
                    <Search className="text-[#E4E6EB] h-[20px] w-[20px]" strokeWidth={2.5} />
                </div>
            </>

            {/* Expanded Search State (Overlay) */}
            {isSearchOpen && (
                <div className="fixed top-0 left-0 w-full md:w-[320px] bg-[#242526] shadow-[0_4px_12px_rgba(0,0,0,0.5)] border-b md:border-r border-[#3E4042] flex flex-col rounded-br-lg z-[60] pb-2 min-h-[400px]">
                    {/* Header: Back Button & Input */}
                    <div className="flex items-center px-4 h-14">
                        <div
                            className="h-10 w-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3A3B3C] transition-colors mr-2 shrink-0"
                            onClick={() => setIsSearchOpen(false)}
                        >
                            <ArrowLeft className="text-[#A8ABAF] h-[20px] w-[20px]" strokeWidth={2} />
                        </div>
                        <div className="flex-1 flex items-center bg-[#3A3B3C] rounded-full h-10 px-3">
                            <input
                                type="text"
                                placeholder="Search Facebook"
                                className="bg-transparent border-none outline-none text-[#E4E6EB] w-full placeholder-[#B0B3B8] text-[15px]"
                                autoFocus
                            />
                        </div>
                    </div>

                    {/* Search History Dropdown Menu (DaisyUI style) */}
                    <div className="flex-1 overflow-y-auto px-2">
                        <div className="flex items-center justify-between px-2 pt-2 pb-1">
                            <span className="text-[16px] font-semibold text-[#E4E6EB]">Recent</span>
                            <span className="text-[15px] text-[#0866FF] hover:bg-[#3A3B3C] px-2 py-1 rounded-md cursor-pointer transition-colors">Edit</span>
                        </div>
                        <ul className="menu w-full p-0 text-[#E4E6EB]">
                            <li>
                                <a className="flex items-center gap-3 p-2 hover:bg-[#3A3B3C] rounded-lg group">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#A8ABAF]" />
                                    </div>
                                    <span className="flex-1 font-semibold text-[15px]">rnr entertainment zone</span>
                                    <div className="w-8 h-8 rounded-full hover:bg-[#4E4F50] flex items-center justify-center transition-colors text-[#A8ABAF] hover:text-[#E4E6EB] invisible group-hover:visible md:visible">
                                        <X className="w-5 h-5" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3 p-2 hover:bg-[#3A3B3C] rounded-lg group">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#A8ABAF]" />
                                    </div>
                                    <span className="flex-1 font-semibold text-[15px]">portugal new kit</span>
                                    <div className="w-8 h-8 rounded-full hover:bg-[#4E4F50] flex items-center justify-center transition-colors text-[#A8ABAF] hover:text-[#E4E6EB] invisible group-hover:visible md:visible">
                                        <X className="w-5 h-5" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3 p-2 hover:bg-[#3A3B3C] rounded-lg group">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#A8ABAF]" />
                                    </div>
                                    <span className="flex-1 font-semibold text-[15px]">portugal match highlights</span>
                                    <div className="w-8 h-8 rounded-full hover:bg-[#4E4F50] flex items-center justify-center transition-colors text-[#A8ABAF] hover:text-[#E4E6EB] invisible group-hover:visible md:visible">
                                        <X className="w-5 h-5" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3 p-2 hover:bg-[#3A3B3C] rounded-lg group">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#A8ABAF]" />
                                    </div>
                                    <span className="flex-1 font-semibold text-[15px]">arg vs live match today</span>
                                    <div className="w-8 h-8 rounded-full hover:bg-[#4E4F50] flex items-center justify-center transition-colors text-[#A8ABAF] hover:text-[#E4E6EB] invisible group-hover:visible md:visible">
                                        <X className="w-5 h-5" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3 p-2 bg-[#3A3B3C] hover:bg-[#4E4F50] rounded-lg group">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#A8ABAF]" />
                                    </div>
                                    <span className="flex-1 font-semibold text-[15px]">bra vs live match today</span>
                                    <div className="w-8 h-8 rounded-full hover:bg-[#4E4F50] flex items-center justify-center transition-colors text-[#A8ABAF] hover:text-[#E4E6EB]">
                                        <X className="w-5 h-5" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3 p-2 hover:bg-[#3A3B3C] rounded-lg group items-start">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1">
                                        <Clock className="w-5 h-5 text-[#A8ABAF]" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center overflow-hidden">
                                        <span className="font-semibold text-[15px] truncate leading-tight">German School BD</span>
                                        <span className="font-semibold text-[15px] truncate leading-tight">জার্মান স্কুল বিডি</span>
                                        <span className="text-[13px] text-[#A8ABAF] truncate mt-0.5">Language School · 15K f...</span>
                                    </div>
                                    <img src="https://i.pravatar.cc/150?img=15" alt="German School" className="w-9 h-9 rounded-md object-cover mt-1" />
                                    <div className="w-8 h-8 rounded-full hover:bg-[#4E4F50] flex items-center justify-center transition-colors text-[#A8ABAF] hover:text-[#E4E6EB] mt-1 invisible group-hover:visible md:visible">
                                        <X className="w-5 h-5" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3 p-2 hover:bg-[#3A3B3C] rounded-lg group">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#A8ABAF]" />
                                    </div>
                                    <span className="flex-1 font-semibold text-[15px]">programming hero</span>
                                    <div className="w-8 h-8 rounded-full hover:bg-[#4E4F50] flex items-center justify-center transition-colors text-[#A8ABAF] hover:text-[#E4E6EB] invisible group-hover:visible md:visible">
                                        <X className="w-5 h-5" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3 p-2 hover:bg-[#3A3B3C] rounded-lg group">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#A8ABAF]" />
                                    </div>
                                    <span className="flex-1 font-semibold text-[15px]">netzwerk neu a1 book</span>
                                    <div className="w-8 h-8 rounded-full hover:bg-[#4E4F50] flex items-center justify-center transition-colors text-[#A8ABAF] hover:text-[#E4E6EB] invisible group-hover:visible md:visible">
                                        <X className="w-5 h-5" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchDropdown;
