"use client";
import { Play, Clapperboard } from 'lucide-react';

const reels = [
    { name: "John Doe", views: "1.2M", img: "https://images.unsplash.com/photo-1516280440502-8698188af5de?w=300&h=533&fit=crop" },
    { name: "Jane Smith", views: "450K", img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=300&h=533&fit=crop" },
    { name: "Funny Pets", views: "2.1M", img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=300&h=533&fit=crop" },
    { name: "Tech Tips", views: "89K", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=533&fit=crop" },
    { name: "Cooking 101", views: "320K", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=533&fit=crop" },
];

const ReelsSection = () => {
    return (
        <div className="bg-[#242526] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.2)] border border-[#3E4042] mb-4 p-4 overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <Clapperboard className="w-6 h-6 text-[#E4E6EB]" />
                <h2 className="text-[20px] font-bold text-[#E4E6EB]">Reels and short videos</h2>
            </div>

            {/* Carousel */}
            <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {reels.map((reel, i) => (
                    <div 
                        key={i} 
                        className="relative w-[140px] h-[250px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
                    >
                        {/* Thumbnail */}
                        <img 
                            src={reel.img} 
                            alt={`Reel ${i}`} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                        {/* Views and Play Icon */}
                        <div className="absolute bottom-2 left-2 flex flex-col gap-1 z-10">
                            <div className="flex items-center gap-1 text-white text-[13px] font-semibold">
                                <Play className="w-3 h-3" fill="currentColor" />
                                {reel.views}
                            </div>
                            <span className="text-white text-[13px] font-semibold leading-tight line-clamp-2">
                                {reel.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* See More Button */}
            <button className="w-full mt-4 h-9 bg-[#3A3B3C] hover:bg-[#4E4F50] text-[#E4E6EB] font-semibold text-[15px] rounded-lg transition-colors">
                See more
            </button>
        </div>
    );
};

export default ReelsSection;
