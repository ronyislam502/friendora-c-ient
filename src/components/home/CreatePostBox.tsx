"use client";
import { Video, Image as ImageIcon, Smile } from 'lucide-react';
import CreatePostModal from './CreatePostModal';

const CreatePostBox = () => {
    const openModal = () => {
        const modal = document.getElementById('create-post-modal') as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <>
            <div className="bg-[#242526] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.2)] border border-[#3E4042] p-3 mb-4">
                <div className="flex items-center gap-2">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full border border-[#3E4042] cursor-pointer hover:opacity-90 transition-opacity">
                            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" />
                        </div>
                    </div>
                    <div 
                        onClick={openModal}
                        className="flex-1 bg-[#3A3B3C] hover:bg-[#4E4F50] rounded-full h-10 flex items-center px-4 cursor-pointer transition-colors"
                    >
                        <span className="text-[#A8ABAF] text-[17px]">What's on your mind, Rafsan Al?</span>
                    </div>
                </div>
                
                {/* Horizontal Divider */}
                <div className="w-full h-[1px] bg-[#3E4042] my-3"></div>

                <div className="flex items-center justify-between px-2">
                    <div className="flex-1 flex items-center justify-center gap-2 hover:bg-[#3A3B3C] py-2 rounded-lg cursor-pointer transition-colors">
                        <Video className="w-6 h-6 text-[#E42645]" fill="currentColor" />
                        <span className="text-[#A8ABAF] font-semibold text-[15px]">Live video</span>
                    </div>
                    <div 
                        onClick={openModal}
                        className="flex-1 flex items-center justify-center gap-2 hover:bg-[#3A3B3C] py-2 rounded-lg cursor-pointer transition-colors"
                    >
                        <ImageIcon className="w-6 h-6 text-[#41B35D]" fill="currentColor" />
                        <span className="text-[#A8ABAF] font-semibold text-[15px]">Photo/video</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-2 hover:bg-[#3A3B3C] py-2 rounded-lg cursor-pointer transition-colors hidden sm:flex">
                        <Smile className="w-6 h-6 text-[#EAB026]" fill="currentColor" />
                        <span className="text-[#A8ABAF] font-semibold text-[15px]">Feeling/activity</span>
                    </div>
                </div>
            </div>

            {/* Mount the Modal */}
            <CreatePostModal />
        </>
    );
};

export default CreatePostBox;
