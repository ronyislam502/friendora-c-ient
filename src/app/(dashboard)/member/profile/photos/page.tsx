"use client";

import { useState } from 'react';
import { MoreHorizontal, Search, Pencil, Plus } from 'lucide-react';

export default function PhotosPage() {
    const [activeTab, setActiveTab] = useState('Photos of you');

    const rawPhotos = [
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1555169062-013468b47731?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1524143878510-ce42fb928230?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    ];

    const rawPhotosOfYou = [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=400&fit=crop",
    ];

    // Double the array to have 18 items to fill the grid nicely
    const yourPhotos = [...rawPhotos, ...rawPhotos];
    const photosOfYou = [...rawPhotosOfYou, ...rawPhotosOfYou];

    const albums = [
        { title: "Profile pictures", items: 58, image: rawPhotos[0] },
        { title: "Cover photos", items: 28, image: rawPhotos[1] },
        { title: "Featured Photos", items: 3, image: rawPhotos[2] },
    ];

    return (
        <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-4">
            <div className="bg-base-100 rounded-xl shadow-sm p-4 min-h-[400px]">
                <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                    <h2 className="text-xl font-bold">Photos</h2>
                    <div className="flex items-center gap-2">
                        <button className="btn btn-ghost btn-sm text-primary font-semibold">
                            Add photos/video
                        </button>
                        <button className="btn btn-circle btn-sm btn-neutral">
                            <MoreHorizontal className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between border-b border-base-300 mb-4">
                    <div role="tablist" className="tabs tabs-bordered">
                        <a 
                            role="tab" 
                            className={`tab font-semibold ${activeTab === 'Your photos' ? 'tab-active text-primary border-primary' : 'text-base-content/70'}`}
                            onClick={() => setActiveTab('Your photos')}
                        >
                            Your photos
                        </a>
                        <a 
                            role="tab" 
                            className={`tab font-semibold ${activeTab === 'Photos of you' ? 'tab-active text-primary border-primary' : 'text-base-content/70'}`}
                            onClick={() => setActiveTab('Photos of you')}
                        >
                            Photos of you
                        </a>
                        <a 
                            role="tab" 
                            className={`tab font-semibold ${activeTab === 'Albums' ? 'tab-active text-primary border-primary' : 'text-base-content/70'}`}
                            onClick={() => setActiveTab('Albums')}
                        >
                            Albums
                        </a>
                    </div>
                    <div className="flex-shrink-0 ml-4 mb-1">
                        <button className="btn btn-ghost btn-sm btn-circle text-primary">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {activeTab === 'Your photos' || activeTab === 'Photos of you' ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                        {(activeTab === 'Photos of you' ? photosOfYou : yourPhotos).map((photo, i) => (
                            <div key={i} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer bg-base-300 border border-base-300/50">
                                <img 
                                    src={photo} 
                                    alt={`Photo ${i+1}`} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                />
                                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
                                    <Pencil className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {/* Create Album Card */}
                        <div className="group cursor-pointer">
                            <div className="aspect-square rounded-xl bg-base-300 border border-base-300/50 flex items-center justify-center group-hover:bg-base-200 transition-colors mb-2">
                                <Plus className="w-12 h-12 text-base-content/50" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-semibold text-[15px] px-1 truncate">Create album</h3>
                        </div>

                        {/* Existing Albums */}
                        {albums.map((album, i) => (
                            <div key={i} className="group cursor-pointer relative">
                                <div className="aspect-square rounded-xl overflow-hidden bg-base-300 mb-2 relative border border-base-300/50">
                                    <img 
                                        src={album.image} 
                                        alt={album.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                    />
                                    <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
                                        <MoreHorizontal className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div className="px-1">
                                    <h3 className="font-semibold text-[15px] truncate">{album.title}</h3>
                                    <p className="text-[13px] text-base-content/70">{album.items} Items</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
