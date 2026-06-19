import { MoreHorizontal, X, Globe, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

interface PostProps {
    author: string;
    avatar: string;
    time: string;
    location?: string;
    content: React.ReactNode;
    images?: string[];
}

const PostCard = ({ author, avatar, time, location, content, images }: PostProps) => {
    return (
        <div className="bg-[#242526] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.2)] border border-[#3E4042] mb-4">
            {/* Header */}
            <div className="flex items-start justify-between px-4 pt-3 pb-2">
                <div className="flex items-center gap-2">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full border border-[#3E4042] cursor-pointer hover:opacity-90">
                            <img src={avatar} alt={author} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#E4E6EB] text-[15px] font-semibold leading-tight hover:underline cursor-pointer block">
                            {author} {location && <span className="font-normal text-[#A8ABAF]">is in <span className="font-semibold text-[#E4E6EB]">{location}</span>.</span>}
                        </span>
                        <div className="flex items-center gap-1 text-[#A8ABAF] text-[13px] hover:underline cursor-pointer">
                            <span>{time}</span>
                            <span>·</span>
                            <Globe className="w-3 h-3" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-9 h-9 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center cursor-pointer transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-[#A8ABAF]" />
                    </div>
                    <div className="w-9 h-9 rounded-full hover:bg-[#3A3B3C] flex items-center justify-center cursor-pointer transition-colors">
                        <X className="w-5 h-5 text-[#A8ABAF]" />
                    </div>
                </div>
            </div>

            <div className="px-4 pb-2">
                <div className="text-[#E4E6EB] text-[15px] leading-snug">
                    {content}
                </div>
            </div>

            {/* Images Grid */}
            {images && images.length > 0 && (
                <div className={`grid gap-[2px] mt-2 ${images.length === 1 ? 'grid-cols-1' : images.length === 2 ? 'grid-cols-2' : images.length === 3 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                    {images.map((img, i) => (
                        <div key={i} className={`relative cursor-pointer hover:brightness-95 transition-all ${images.length === 3 && i === 0 ? 'col-span-2' : ''}`}>
                            <img src={img} alt="Post image" className={`w-full object-cover ${images.length === 1 ? 'max-h-[600px]' : 'h-[250px]'}`} />
                        </div>
                    ))}
                </div>
            )}

            {/* Engagement Stats */}
            <div className="px-4 py-2 flex items-center justify-between text-[#A8ABAF] text-[15px] border-b border-[#3E4042]">
                <div className="flex items-center gap-1 cursor-pointer">
                    <div className="w-5 h-5 bg-[#0866FF] rounded-full flex items-center justify-center border-2 border-[#242526] z-10">
                        <ThumbsUp className="w-3 h-3 text-white" fill="currentColor" />
                    </div>
                    <span className="hover:underline ml-1">12K</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="hover:underline cursor-pointer">452 comments</span>
                    <span className="hover:underline cursor-pointer">1.2K shares</span>
                </div>
            </div>

            {/* Actions */}
            <div className="px-4 py-1 flex items-center justify-between gap-1">
                <button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-[#3A3B3C] text-[#A8ABAF] font-semibold text-[15px] transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                    Like
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-[#3A3B3C] text-[#A8ABAF] font-semibold text-[15px] transition-colors">
                    <MessageSquare className="w-5 h-5" />
                    Comment
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg hover:bg-[#3A3B3C] text-[#A8ABAF] font-semibold text-[15px] transition-colors">
                    <Share2 className="w-5 h-5" />
                    Share
                </button>
            </div>
        </div>
    );
};

export default PostCard;
