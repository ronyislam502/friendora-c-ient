"use client";

import { useState } from 'react';
import { MoreHorizontal, Search } from 'lucide-react';

export default function FriendsPage() {
    const [activeTab, setActiveTab] = useState('Friends');

    const friends = [
        { name: "Md Shafiqul Islam Shuvo", mutual: null, image: null }, 
        { name: "JAMIA TAHZEEB UI ISLAM", mutual: "174 mutual friends", image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=400&fit=crop" },
        { name: "Muhammad Mahadi Hasan", mutual: "37 mutual friends", image: "https://images.unsplash.com/photo-1555169062-013468b47731?w=400&h=400&fit=crop" },
        { name: "Hms Hms", mutual: "182 mutual friends", image: "https://images.unsplash.com/photo-1524143878510-ce42fb928230?w=400&h=400&fit=crop" },
        { name: "Al Amin Akanda Labin", mutual: "136 mutual friends", image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=400&h=400&fit=crop" },
        { name: "Md Al Mamun Nova", mutual: "80 mutual friends", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=400&fit=crop" },
        { name: "Al Amin Hossen Goni", mutual: "42 mutual friends", image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=400&fit=crop" },
        { name: "Asraful Islam", mutual: "24 mutual friends", image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=400&fit=crop" },
        { name: "Iqbal Hossan", mutual: "92 mutual friends", image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=400&h=400&fit=crop" },
        { name: "Abu Talha Badsha", mutual: "54 mutual friends", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop" },
    ];

    const tabs = ["Friends", "Recently Added", "Birthdays", "Current city", "Hometown", "Followers", "Following"];

    return (
        <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-4">
            <div className="bg-base-100 rounded-xl shadow-sm p-4 min-h-[400px]">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                    <h2 className="text-xl font-bold">Friends</h2>
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-base-content/50" />
                            </div>
                            <input 
                                type="text" 
                                placeholder="Search" 
                                className="input input-sm input-bordered bg-base-300 w-full max-w-xs pl-9 rounded-full border-none focus:outline-none focus:ring-0" 
                            />
                        </div>
                        <button className="text-primary font-semibold text-sm hover:underline">Friend requests</button>
                        <button className="text-primary font-semibold text-sm hover:underline">Find Friends</button>
                        <button className="btn btn-circle btn-sm btn-neutral">
                            <MoreHorizontal className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center border-b border-base-300 mb-4 overflow-x-auto">
                    <div role="tablist" className="tabs tabs-bordered w-full flex-nowrap whitespace-nowrap">
                        {tabs.map((tab) => (
                            <a 
                                key={tab}
                                role="tab" 
                                className={`tab font-semibold px-4 pb-2 ${activeTab === tab ? 'tab-active text-primary border-primary' : 'text-base-content/70 border-transparent hover:bg-base-200 rounded-lg'}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    {friends.map((friend, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-xl hover:bg-base-200/50 transition-colors cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-xl overflow-hidden bg-base-300 flex-shrink-0 border border-base-300/50">
                                    {friend.image ? (
                                        <img src={friend.image} alt={friend.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-base-300 text-base-content/40">
                                            <svg className="w-16 h-16 mt-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[16px] leading-tight">{friend.name}</h3>
                                    {friend.mutual && (
                                        <p className="text-[13px] text-base-content/60 mt-1">{friend.mutual}</p>
                                    )}
                                </div>
                            </div>
                            <button className="btn btn-ghost btn-circle btn-sm mr-2">
                                <MoreHorizontal className="w-5 h-5 text-base-content/60" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
