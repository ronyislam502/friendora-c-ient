"use client";
import { X, Globe, ChevronDown, Smile, Image as ImageIcon, UserPlus, MapPin, Phone, MoreHorizontal } from 'lucide-react';

const CreatePostModal = () => {
    return (
        <dialog id="create-post-modal" className="modal">
            <div className="modal-box bg-[#242526] text-[#E4E6EB] p-0 w-[500px] max-w-[90vw] rounded-xl border border-[#3E4042] shadow-2xl relative overflow-visible">
                {/* Header */}
                <div className="flex items-center justify-center p-4 border-b border-[#3E4042] relative">
                    <h3 className="font-bold text-[20px]">Create post</h3>
                    <form method="dialog">
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#3A3B3C] hover:bg-[#4E4F50] rounded-full flex items-center justify-center transition-colors">
                            <X className="w-5 h-5 text-[#A8ABAF]" />
                        </button>
                    </form>
                </div>

                {/* User Info */}
                <div className="p-4 flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                        <span className="font-semibold text-[15px] block leading-tight">Rafsan Al Nahiyan Rony</span>
                        <button className="flex items-center gap-1 mt-1 bg-[#3A3B3C] hover:bg-[#4E4F50] px-2 py-0.5 rounded-md transition-colors">
                            <Globe className="w-3 h-3 text-[#E4E6EB]" />
                            <span className="text-[13px] font-semibold text-[#E4E6EB]">Public</span>
                            <ChevronDown className="w-4 h-4 text-[#E4E6EB]" />
                        </button>
                    </div>
                </div>

                {/* Textarea */}
                <div className="px-4">
                    <textarea 
                        className="w-full bg-transparent border-none outline-none resize-none text-[24px] placeholder-[#A8ABAF] min-h-[120px]"
                        placeholder="What's on your mind, Rafsan Al?"
                    ></textarea>
                </div>

                {/* Decoration Row (Aa and Emoji) */}
                <div className="px-4 pb-4 flex items-center justify-between">
                    <button className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-yellow-400 to-teal-400 flex items-center justify-center cursor-pointer shadow-sm border-2 border-white">
                        <span className="text-white font-bold text-lg drop-shadow-md">Aa</span>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center cursor-pointer">
                        <Smile className="w-6 h-6 text-[#A8ABAF]" />
                    </button>
                </div>

                {/* Add to your post */}
                <div className="mx-4 mb-4 p-3 border border-[#3E4042] rounded-lg flex items-center justify-between shadow-sm">
                    <span className="font-semibold text-[15px]">Add to your post</span>
                    <div className="flex items-center gap-2">
                        <button className="w-9 h-9 hover:bg-[#3A3B3C] rounded-full flex items-center justify-center transition-colors">
                            <ImageIcon className="w-6 h-6 text-[#41B35D]" fill="currentColor" />
                        </button>
                        <button className="w-9 h-9 hover:bg-[#3A3B3C] rounded-full flex items-center justify-center transition-colors">
                            <UserPlus className="w-6 h-6 text-[#1877F2]" fill="currentColor" />
                        </button>
                        <button className="w-9 h-9 hover:bg-[#3A3B3C] rounded-full flex items-center justify-center transition-colors">
                            <Smile className="w-6 h-6 text-[#F7B928]" fill="currentColor" />
                        </button>
                        <button className="w-9 h-9 hover:bg-[#3A3B3C] rounded-full flex items-center justify-center transition-colors">
                            <MapPin className="w-6 h-6 text-[#F5533D]" fill="currentColor" />
                        </button>
                        <button className="w-9 h-9 hover:bg-[#3A3B3C] rounded-full flex items-center justify-center transition-colors">
                            <Phone className="w-6 h-6 text-[#1877F2]" fill="currentColor" />
                        </button>
                        <button className="w-9 h-9 hover:bg-[#3A3B3C] rounded-full flex items-center justify-center transition-colors">
                            <MoreHorizontal className="w-5 h-5 text-[#A8ABAF]" />
                        </button>
                    </div>
                </div>

                {/* Footer Button */}
                <div className="p-4 pt-0">
                    <button className="w-full bg-[#3A3B3C] text-[#A8ABAF] font-semibold text-[15px] py-2 rounded-lg cursor-not-allowed">
                        Next
                    </button>
                </div>
            </div>
            {/* Modal Backdrop for clicking outside to close */}
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default CreatePostModal;
