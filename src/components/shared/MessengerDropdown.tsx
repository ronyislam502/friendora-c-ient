"use client";

import { MessageCircle, MoreHorizontal, Maximize2, SquarePen, Search, BellOff, ThumbsUp } from 'lucide-react';

const MESSENGER_DATA = [
    {
        id: 1,
        author: "Azizul Hakim",
        avatar: "https://i.pravatar.cc/150?img=11",
        message: "Azizul missed your audio call.",
        time: "1h",
        isUnread: false,
    },
    {
        id: 2,
        author: "রিদাউল ইসলাম শাকিল",
        avatar: "https://i.pravatar.cc/150?img=12",
        message: "The audio call ended.",
        time: "2h",
        isUnread: false,
    },
    {
        id: 3,
        author: "MD Maruf Ahmed",
        avatar: "https://i.pravatar.cc/150?img=13",
        message: "You: bol",
        time: "2h",
        isUnread: false,
    },
    {
        id: 4,
        author: "Md. Shahjalal",
        avatar: "https://i.pravatar.cc/150?img=14",
        message: "কি অবস্থা ভাই",
        time: "9h",
        actionText: "Reply?",
        isUnread: false,
    },
    {
        id: 5,
        author: "Asraful Islam",
        avatar: "https://i.pravatar.cc/150?img=15",
        isThumb: true,
        time: "9h",
        isUnread: true,
    },
    {
        id: 6,
        author: "আমরাও এশিয়ান",
        avatar: "https://i.pravatar.cc/150?img=16",
        message: "Hossain sent an attachment.",
        time: "17h",
        isMuted: true,
        isUnread: true,
    },
    {
        id: 7,
        author: "Ng Noor Islam",
        avatar: "https://i.pravatar.cc/150?img=17",
        message: "Ng sent an attachment.",
        time: "21h",
        isUnread: true,
    },
    {
        id: 8,
        author: "🍁tEaChEr hOmE❤️❤️",
        avatar: "https://i.pravatar.cc/150?img=18",
        message: "Rahat sent an attachment.",
        time: "22h",
        isUnread: true,
    },
    {
        id: 9,
        author: "Md Najir",
        avatar: "https://i.pravatar.cc/150?img=19",
        message: "😍",
        time: "3d",
        isUnread: false,
    },
    {
        id: 10,
        author: "M Mozammel Hoque",
        avatar: "https://i.pravatar.cc/150?img=20",
        message: "Thanks for the info!",
        time: "4d",
        isUnread: false,
    }
];

interface MessengerDropdownProps {
    onChatSelect?: (chat: any) => void;
}

import { useState } from 'react';
import ChatPopup from './ChatPopup';

const MessengerDropdown = () => {
    const [activeChat, setActiveChat] = useState<any>(null);

    return (
        <>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="h-10 w-10 bg-[#3A3B3C] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#4E4F50] transition-colors relative">
                <MessageCircle className="text-[#E4E6EB] h-[22px] w-[22px]" strokeWidth={0} fill="currentColor" />
                <div className="absolute -top-[2px] -right-[2px] bg-[#E41E3F] text-white text-[12px] font-bold rounded-full h-[19px] min-w-[19px] flex items-center justify-center px-[4px] border-2 border-[#242526]">
                    4
                </div>
            </div>

            <div tabIndex={0} className="dropdown-content z-[1] shadow-xl bg-[#242526] rounded-xl w-[360px] top-12 border border-[#3E4042] overflow-hidden pt-3 flex flex-col max-h-[85vh]">
                
                {/* Header */}
                <div className="flex items-center justify-between px-4 pb-3">
                    <h2 className="text-[24px] font-bold text-[#E4E6EB]">Chats</h2>
                    <div className="flex items-center gap-1">
                        <div className="w-8 h-8 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center cursor-pointer transition-colors">
                            <MoreHorizontal className="text-[#A8ABAF] w-5 h-5" />
                        </div>
                        <div className="w-8 h-8 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center cursor-pointer transition-colors">
                            <Maximize2 className="text-[#A8ABAF] w-4 h-4" />
                        </div>
                        <div className="w-8 h-8 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center cursor-pointer transition-colors">
                            <SquarePen className="text-[#A8ABAF] w-[18px] h-[18px]" />
                        </div>
                    </div>
                </div>

                {/* Search */}
                <div className="px-4 pb-3">
                    <div className="bg-[#3A3B3C] rounded-full flex items-center px-3 py-2 cursor-text relative group">
                        <Search className="text-[#A8ABAF] w-4 h-4 mr-2" />
                        <input type="text" placeholder="Search Messenger" className="bg-transparent border-none outline-none text-[#E4E6EB] text-[15px] placeholder-[#A8ABAF] w-full" />
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 px-4 pb-3 mt-1">
                    <button className="bg-[#2D88FF] bg-opacity-20 text-[#2D88FF] px-3 py-1.5 rounded-full font-semibold text-[14px]">All</button>
                    <button className="hover:bg-[#3A3B3C] text-[#E4E6EB] px-3 py-1.5 rounded-full font-semibold text-[14px] transition-colors">Unread</button>
                    <button className="hover:bg-[#3A3B3C] text-[#E4E6EB] px-3 py-1.5 rounded-full font-semibold text-[14px] transition-colors">Groups</button>
                    <button className="hover:bg-[#3A3B3C] text-[#E4E6EB] px-3 py-1.5 rounded-full font-semibold text-[14px] transition-colors">Communities</button>
                </div>

                {/* Restore History Banner */}
                <div className="px-4 pb-2">
                    <div className="bg-[#3A3B3C] rounded-lg px-4 py-3 flex items-center text-[14px]">
                        <span className="text-[#E4E6EB]">Missing chat history. <span className="text-[#2D88FF] hover:underline cursor-pointer">Restore now</span></span>
                    </div>
                </div>

                {/* Chats List */}
                <div className="overflow-y-auto flex-1 mt-1 pb-1 scrollbar-thin scrollbar-thumb-[#4E4F50] scrollbar-track-transparent">
                    {MESSENGER_DATA.map((chat) => (
                        <div 
                            key={chat.id} 
                            onClick={() => {
                                setActiveChat(chat);
                                setTimeout(() => {
                                    (document.activeElement as HTMLElement)?.blur();
                                }, 0);
                            }}
                            onMouseDown={(e) => e.preventDefault()}
                            className="flex items-center gap-3 px-2 py-2 hover:bg-[#3A3B3C] cursor-pointer rounded-lg mx-2 transition-colors relative group"
                        >
                            
                            {/* Avatar */}
                            <div className="relative flex-shrink-0">
                                <div className="w-14 h-14 rounded-full overflow-hidden">
                                    <img src={chat.avatar} alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex flex-col flex-1 overflow-hidden pr-2">
                                <span className={`text-[15px] truncate font-semibold text-[#E4E6EB]`}>
                                    {chat.author}
                                </span>
                                
                                <div className={`flex items-center text-[14px] mt-[1px] ${chat.isUnread ? 'font-bold text-[#E4E6EB]' : 'font-normal text-[#A8ABAF]'} truncate gap-1`}>
                                    {chat.isThumb ? (
                                        <div className="flex items-center gap-1 truncate">
                                            <ThumbsUp className="w-[14px] h-[14px] text-[#2D88FF]" fill="#2D88FF" strokeWidth={0} />
                                            <span className="mb-1 text-[12px] opacity-70">·</span>
                                            <span>{chat.time}</span>
                                        </div>
                                    ) : (
                                        <div className="truncate flex items-center gap-1">
                                            <span className="truncate">{chat.message}</span>
                                            <span className="mb-1 text-[12px] opacity-70">·</span>
                                            <span className="flex-shrink-0">{chat.time}</span>
                                            {chat.actionText && (
                                                <>
                                                    <span className="mb-1 text-[12px] opacity-70">·</span>
                                                    <span className="text-[#0866FF] hover:underline cursor-pointer">{chat.actionText}</span>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Icons (Muted & Unread) */}
                            <div className="flex items-center gap-2 flex-shrink-0 pr-2">
                                {chat.isMuted && (
                                    <BellOff className="w-4 h-4 text-[#A8ABAF] fill-[#A8ABAF]" />
                                )}
                                {chat.isUnread && (
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#2D88FF]"></div>
                                )}
                            </div>

                            {/* 'More' Options Hover Button */}
                            <div className="absolute top-1/2 -translate-y-1/2 right-6 w-8 h-8 rounded-full bg-[#242526] border border-[#3E4042] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#3A3B3C] shadow-md z-10 hidden sm:flex">
                                <MoreHorizontal className="w-5 h-5 text-[#A8ABAF]" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="border-t border-[#3E4042] py-3 mt-1 flex justify-center hover:bg-[#3A3B3C] cursor-pointer transition-colors">
                    <span className="text-[#2D88FF] text-[15px] font-semibold">See all in Messenger</span>
                </div>
            </div>
        </div>
        
        {/* Render the Chat Popup anchored to the bottom of the screen */}
        {activeChat && (
            <ChatPopup chat={activeChat} onClose={() => setActiveChat(null)} />
        )}
        </>
    );
};

export default MessengerDropdown;
