"use client";

import { useState } from 'react';
import { Eye } from 'lucide-react';

export default function ReelsPage() {
    const [activeTab, setActiveTab] = useState('Your Reels');

    const reels = [
        { views: "506", thumbnail: "https://images.unsplash.com/photo-1516048015502-06b85688537a?w=400&h=700&fit=crop" },
        { views: "1K", thumbnail: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=700&fit=crop" },
        { views: "905", thumbnail: "https://images.unsplash.com/photo-1555169062-013468b47731?w=400&h=700&fit=crop" },
        { views: "909", thumbnail: "https://images.unsplash.com/photo-1524143878510-ce42fb928230?w=400&h=700&fit=crop" },
        { views: "846", thumbnail: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=400&h=700&fit=crop" },
        { views: "302", thumbnail: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=700&fit=crop" },
        { views: "121", thumbnail: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=700&fit=crop" },
        { views: "774", thumbnail: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=700&fit=crop" },
        { views: "650", thumbnail: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=400&h=700&fit=crop" },
        { views: "2K", thumbnail: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=700&fit=crop" },
        { views: "1.2K", thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=700&fit=crop" },
        { views: "899", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=700&fit=crop" },
        { views: "500", thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=700&fit=crop" },
        { views: "4.5K", thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=700&fit=crop" },
    ];

    const savedReels = [
        ...reels.slice(5),
        ...reels.slice(0, 5)
    ];

    return (
        <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-4">
            <div className="bg-base-100 rounded-xl shadow-sm p-4 min-h-[400px]">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between mb-2 gap-4">
                    <h2 className="text-xl font-bold">Reels</h2>
                    <button className="text-primary font-semibold text-[15px] hover:underline">
                        Create reel
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex items-center border-b border-base-300 mb-4">
                    <div role="tablist" className="tabs tabs-bordered">
                        <a 
                            role="tab" 
                            className={`tab font-semibold px-4 pb-2 ${activeTab === 'Your Reels' ? 'tab-active text-primary border-primary' : 'text-base-content/70 border-transparent hover:bg-base-200'}`}
                            onClick={() => setActiveTab('Your Reels')}
                        >
                            Your Reels
                        </a>
                        <a 
                            role="tab" 
                            className={`tab font-semibold px-4 pb-2 ${activeTab === 'Saved reels' ? 'tab-active text-primary border-primary' : 'text-base-content/70 border-transparent hover:bg-base-200'}`}
                            onClick={() => setActiveTab('Saved reels')}
                        >
                            Saved reels
                        </a>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2">
                    {(activeTab === 'Your Reels' ? reels : savedReels).map((reel, i) => (
                        <div key={i} className="relative aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer bg-base-300 border border-base-300/50">
                            <img 
                                src={reel.thumbnail} 
                                alt={`Reel ${i+1}`} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-95 group-hover:opacity-100" 
                            />
                            {/* Bottom Gradient overlay to ensure text is readable */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none z-0"></div>
                            
                            {/* Eye Icon & View Count */}
                            <div className="absolute bottom-2 left-2 flex items-center text-white font-semibold text-sm drop-shadow-md z-10">
                                <Eye className="w-[18px] h-[18px] mr-1 drop-shadow-md" strokeWidth={2.5} />
                                {reel.views}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
