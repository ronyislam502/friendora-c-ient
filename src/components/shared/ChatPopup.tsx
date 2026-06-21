"use client";

import { Phone, Video, Minus, X, ChevronDown, Mic, Image as ImageIcon, Smile, ThumbsUp, PhoneMissed, PhoneCall } from 'lucide-react';
import { useState } from 'react';

interface ChatPopupProps {
    chat: any;
    onClose: () => void;
}

const ChatPopup = ({ chat, onClose }: ChatPopupProps) => {
    return (
        <div className="fixed bottom-0 right-4 sm:right-24 w-[330px] bg-[#242526] rounded-t-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-[#3E4042] flex flex-col z-[100] h-[450px]">
            {/* Header */}
            <div className="flex items-center justify-between px-2 py-2 border-b border-[#3E4042] cursor-pointer hover:bg-[#3A3B3C] transition-colors rounded-t-lg group">
                <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-8 h-8 rounded-full overflow-hidden relative flex-shrink-0">
                        <img src={chat?.avatar || "https://i.pravatar.cc/150?img=12"} alt="Avatar" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#242526] rounded-full"></div>
                    </div>
                    <span className="text-[#E4E6EB] text-[15px] font-semibold truncate hover:underline">
                        {chat?.author || "রিদাউল ইসলাম শাকিল"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#A8ABAF] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                    <Phone className="w-[18px] h-[18px] text-[#A64CFF] hover:text-[#C58FFF] transition-colors cursor-pointer" fill="currentColor" />
                    <Video className="w-[20px] h-[20px] text-[#A64CFF] hover:text-[#C58FFF] transition-colors cursor-pointer" fill="currentColor" />
                    <Minus className="w-[20px] h-[20px] text-[#A64CFF] hover:text-[#C58FFF] transition-colors cursor-pointer" strokeWidth={3} />
                    <X onClick={(e) => { e.stopPropagation(); onClose(); }} className="w-[20px] h-[20px] text-[#A64CFF] hover:text-[#C58FFF] transition-colors cursor-pointer" strokeWidth={3} />
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-[#4E4F50] scrollbar-track-transparent">
                {chat?.message && chat.message.toLowerCase().includes("audio call") ? (
                    <>
                        <div className="self-center bg-[#3A3B3C] rounded-2xl w-[220px] p-3 flex flex-col mt-2">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-[#4E4F50] flex items-center justify-center flex-shrink-0">
                                    <PhoneMissed className="w-5 h-5 text-white" fill="currentColor" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#E4E6EB] text-[15px] font-semibold">Audio call</span>
                                    <span className="text-[#A8ABAF] text-[13px]">{chat?.time || "1 min"}</span>
                                </div>
                            </div>
                            <button className="w-full bg-[#4E4F50] hover:bg-[#5C5D5E] text-[#E4E6EB] font-semibold py-1.5 rounded-lg transition-colors text-[14px]">
                                Call again
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Dynamic Timestamp */}
                        <div className="flex justify-center mt-2">
                            <span className="text-[#A8ABAF] text-[12px] font-medium">{chat?.time || "Just now"}</span>
                        </div>
                        
                        {/* Dynamic Message Bubble */}
                        <div className={`flex items-end gap-2 ${chat?.message?.startsWith("You:") ? "justify-end" : "justify-start"}`}>
                            {(!chat?.message?.startsWith("You:")) && (
                                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mb-1">
                                    <img src={chat?.avatar || "https://i.pravatar.cc/150"} alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                            )}
                            
                            <div className={`px-4 py-2 rounded-2xl max-w-[70%] text-[15px] ${chat?.message?.startsWith("You:") ? "bg-[#0866FF] text-white" : "bg-[#3A3B3C] text-[#E4E6EB]"}`}>
                                {chat?.message ? chat.message.replace("You: ", "") : chat?.isThumb ? "👍" : "Hello!"}
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Missing History Banner Area */}
            <div className="bg-[#0866FF] px-2 py-2">
                <div className="bg-[#3A3B3C] rounded-lg px-3 py-2 flex items-center justify-center text-[13px]">
                    <span className="text-[#A8ABAF]">Messages are missing. <span className="text-[#2D88FF] hover:underline cursor-pointer font-semibold">Restore now</span></span>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-2 flex items-center gap-2 border-t border-[#3E4042]">
                {/* Left Icons */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                    <Mic className="w-5 h-5 text-[#0866FF] cursor-pointer hover:bg-[#3A3B3C] rounded-full transition-colors" fill="currentColor" strokeWidth={0} />
                    <ImageIcon className="w-5 h-5 text-[#0866FF] cursor-pointer hover:bg-[#3A3B3C] rounded-full transition-colors" fill="currentColor" strokeWidth={0} />
                    <div className="w-5 h-5 text-[#0866FF] cursor-pointer hover:bg-[#3A3B3C] rounded-full transition-colors flex items-center justify-center relative font-bold" style={{ fontSize: '12px', lineHeight: 1 }}>
                        <Smile className="w-5 h-5 text-[#0866FF]" fill="currentColor" strokeWidth={0} />
                    </div>
                    <div className="w-5 h-5 bg-[#0866FF] text-[#242526] rounded-[4px] cursor-pointer hover:bg-[#1877F2] transition-colors flex items-center justify-center font-extrabold text-[10px]">
                        GIF
                    </div>
                </div>

                {/* Input Field */}
                <div className="flex-1 bg-[#3A3B3C] rounded-full flex items-center px-3 py-1.5 relative">
                    <input 
                        type="text" 
                        placeholder="Aa" 
                        className="bg-transparent border-none outline-none text-[#E4E6EB] text-[15px] placeholder-[#A8ABAF] w-full pr-6" 
                    />
                    <Smile className="w-5 h-5 text-[#0866FF] absolute right-2 cursor-pointer" fill="currentColor" strokeWidth={0} />
                </div>

                {/* Right Icon */}
                <ThumbsUp className="w-5 h-5 text-[#0866FF] flex-shrink-0 cursor-pointer" fill="currentColor" strokeWidth={0} />
            </div>
        </div>
    );
};

export default ChatPopup;
