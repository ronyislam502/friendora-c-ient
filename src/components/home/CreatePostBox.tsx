import { Video, Image as ImageIcon, Smile } from 'lucide-react';

const CreatePostBox = () => {
    return (
        <div className="bg-[#242526] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.2)] border border-[#3E4042] p-3 mb-4">
            <div className="flex items-center gap-2">
                <div className="avatar">
                    <div className="w-10 h-10 rounded-full border border-[#3E4042] cursor-pointer hover:opacity-90 transition-opacity">
                        <img src="https://i.pravatar.cc/150?img=11" alt="Profile" />
                    </div>
                </div>
                <div className="flex-1 bg-[#3A3B3C] hover:bg-[#4E4F50] rounded-full h-10 flex items-center px-4 cursor-pointer transition-colors">
                    <span className="text-[#A8ABAF] text-[17px]">What's on your mind, Rafsan Al?</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-10 h-10 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center cursor-pointer transition-colors">
                        <Video className="w-6 h-6 text-[#E42645]" fill="currentColor" />
                    </div>
                    <div className="w-10 h-10 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center cursor-pointer transition-colors">
                        <ImageIcon className="w-6 h-6 text-[#41B35D]" fill="currentColor" />
                    </div>
                    <div className="w-10 h-10 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center cursor-pointer transition-colors">
                        <Smile className="w-6 h-6 text-[#EAB026]" fill="currentColor" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostBox;
