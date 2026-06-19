import { SlidersHorizontal, Settings, List, Grid } from 'lucide-react';

const PostsHeader = () => {
    return (
        <div className="bg-[#242526] rounded-xl w-full border border-[#3E4042] shadow-sm mt-1 overflow-hidden">
            {/* Top row */}
            <div className="p-4 flex items-center justify-between">
                <h2 className="text-[20px] font-bold text-[#E4E6EB]">Posts</h2>
                <div className="flex gap-2">
                    <button className="btn btn-sm h-[36px] border-none bg-[#3A3B3C] hover:bg-[#4E4F50] text-[#E4E6EB] font-semibold text-[15px] px-3 normal-case rounded-md">
                        <SlidersHorizontal className="w-4 h-4" />
                        Filters
                    </button>
                    <button className="btn btn-sm h-[36px] border-none bg-[#3A3B3C] hover:bg-[#4E4F50] text-[#E4E6EB] font-semibold text-[15px] px-3 normal-case rounded-md">
                        <Settings className="w-4 h-4" />
                        Manage posts
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#3E4042]"></div>

            {/* Bottom row - Tabs */}
            <div className="w-full flex">
                <div role="tablist" className="tabs w-full h-[48px]">
                    <a role="tab" className="tab h-full flex-1 text-[#0866FF] border-b-[3px] border-[#0866FF] font-semibold text-[15px] gap-2 hover:bg-[#3A3B3C] hover:bg-opacity-50 transition-colors rounded-bl-xl !bg-transparent">
                        <List className="w-5 h-5" />
                        List view
                    </a>
                    <a role="tab" className="tab h-full flex-1 text-[#A8ABAF] border-b-[3px] border-transparent font-semibold text-[15px] gap-2 hover:bg-[#3A3B3C] hover:bg-opacity-50 transition-colors rounded-br-xl !bg-transparent">
                        <Grid className="w-5 h-5" />
                        Grid view
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PostsHeader;
