"use client";

import { useState } from 'react';
import { Camera, MapPin, GraduationCap, Pen, Megaphone, ChevronDown, ChevronUp, MonitorPlay, LayoutDashboard } from 'lucide-react';
import PeopleYouMayKnow from './PeopleYouMayKnow';

const ProfileHeader = () => {
    const [showSuggestions, setShowSuggestions] = useState(false);

    return (
        <div className="bg-[#242526] w-full border-b border-[#3E4042]">
            {/* Cover Photo Area */}
            <div className="w-full max-w-[1100px] mx-auto">
                <div className="relative w-full h-[350px] md:h-[400px] lg:h-[460px] rounded-b-xl overflow-hidden group">
                    {/* Placeholder Cover Photo */}
                    <img 
                        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                        alt="Cover Photo" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Edit Cover Photo Button */}
                    <div className="absolute bottom-4 right-4 z-10">
                        <button className="flex items-center gap-2 bg-white hover:bg-gray-200 text-black px-3 py-1.5 rounded-md font-semibold text-[15px] transition-colors shadow-sm">
                            <Camera className="w-4 h-4" />
                            <span className="hidden sm:inline">Edit cover photo</span>
                        </button>
                    </div>
                    {/* Subtle gradient overlay at bottom for better button visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </div>

                {/* Profile Details Area */}
                <div className="px-4 md:px-8 pb-4 relative">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        
                        {/* Avatar & User Info */}
                        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-4 -mt-[84px] md:-mt-[40px] z-10 relative">
                            {/* Avatar */}
                            <div className="relative">
                                <img 
                                    src="https://i.pravatar.cc/150?img=11" 
                                    alt="Profile Avatar" 
                                    className="w-[168px] h-[168px] rounded-full border-4 border-[#242526] object-cover bg-[#242526]"
                                />
                                <button className="absolute bottom-2 right-2 w-9 h-9 bg-[#3A3B3C] hover:bg-[#4E4F50] rounded-full border border-[#242526] flex items-center justify-center transition-colors">
                                    <Camera className="w-5 h-5 text-[#E4E6EB]" />
                                </button>
                            </div>

                            {/* Name & Bio */}
                            <div className="flex flex-col items-center md:items-start mt-2 md:mt-[48px] text-[#E4E6EB]">
                                <h1 className="text-[32px] font-bold leading-tight">Rafsan Al Nahiyan Rony</h1>
                                <span className="text-[15px] font-semibold text-[#A8ABAF] mt-1 hover:underline cursor-pointer">
                                    3.5K followers <span className="font-normal">•</span> 1.1K following
                                </span>
                                <span className="text-[15px] mt-1">Full Stack Web Developer</span>
                                
                                {/* Details tags */}
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-1 text-[13px] text-[#E4E6EB]">
                                    <div className="flex items-center gap-1.5 font-semibold">
                                        <MonitorPlay className="w-4 h-4 text-[#A8ABAF]" />
                                        Digital creator
                                    </div>
                                    <div className="flex items-center gap-1.5 font-semibold">
                                        <MapPin className="w-4 h-4 text-[#A8ABAF]" />
                                        Dhaka
                                    </div>
                                    <div className="flex items-center gap-1.5 font-semibold hover:underline cursor-pointer">
                                        <GraduationCap className="w-4 h-4 text-[#A8ABAF]" />
                                        Asian University of Bangladesh - AUB
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-center md:justify-end gap-2 pb-2">
                            <button className="flex items-center gap-1.5 bg-[#0866FF] hover:bg-[#1877F2] text-white px-3 py-1.5 rounded-md font-semibold text-[15px] transition-colors">
                                <LayoutDashboard className="w-4 h-4" />
                                Dashboard
                            </button>
                            <button className="flex items-center gap-1.5 bg-[#3A3B3C] hover:bg-[#4E4F50] text-[#E4E6EB] px-3 py-1.5 rounded-md font-semibold text-[15px] transition-colors">
                                <Pen className="w-4 h-4" />
                                Edit
                            </button>
                            <button className="flex items-center gap-1.5 bg-[#3A3B3C] hover:bg-[#4E4F50] text-[#E4E6EB] px-3 py-1.5 rounded-md font-semibold text-[15px] transition-colors">
                                <Megaphone className="w-4 h-4" />
                                Advertise
                            </button>
                            <button 
                                onClick={() => setShowSuggestions(!showSuggestions)}
                                className={`flex items-center justify-center w-9 h-[36px] rounded-md transition-colors ${showSuggestions ? 'bg-[#263951] text-[#4599FF] hover:bg-[#344D6D]' : 'bg-[#3A3B3C] hover:bg-[#4E4F50] text-[#E4E6EB]'}`}
                            >
                                {showSuggestions ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* People You May Know Section */}
                {showSuggestions && (
                    <div className="w-full border-t border-[#3E4042]">
                        <PeopleYouMayKnow />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileHeader;
