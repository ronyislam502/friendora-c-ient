"use client";

import React, { useState, useRef, useEffect, WheelEvent } from 'react';
import { Volume2, VolumeX, MoreHorizontal, ThumbsUp, MessageCircle, Share, Bookmark, ChevronUp, ChevronDown } from 'lucide-react';

const REELS_DATA = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    author: {
        name: i === 0 ? "BALA QUEEN" : `User ${i + 1}`,
        avatar: `https://i.pravatar.cc/150?img=${(i % 50) + 1}`,
        isVerified: i === 0,
    },
    audio: i === 0 ? "BALA QUEEN - Original audio" : `Original audio - User ${i + 1}`,
    caption: i === 0 ? "ERTUGRUL BEY 🤩 NEEDS REPOST 😍" : `This is an amazing reel #${i + 1}! Wait for it... 😂 #viral #trending`,
    likes: i === 0 ? "5.5K" : `${Math.floor(Math.random() * 100)}K`,
    comments: i === 0 ? "1.2K" : `${Math.floor(Math.random() * 10)}K`,
    shares: i === 0 ? 23 : Math.floor(Math.random() * 500),
    saves: i === 0 ? 81 : Math.floor(Math.random() * 200),
    // Standard placeholder video loop
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
}));

export default function ReelsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        // Handle play/pause logic based on current index
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === currentIndex) {
                    video.currentTime = 0;
                    video.play().catch(e => console.log("Autoplay prevented:", e));
                } else {
                    video.pause();
                }
            }
        });
    }, [currentIndex]);

    const handleNext = () => {
        if (currentIndex < REELS_DATA.length - 1) setCurrentIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    };

    const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
        if (isScrolling) return;

        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 800); // Throttling to prevent multiple skips

        if (e.deltaY > 50) {
            handleNext();
        } else if (e.deltaY < -50) {
            handlePrev();
        }
    };

    return (
        <div
            className="w-full mt-12 h-[calc(100vh-56px)] bg-[#18191A] flex justify-center items-center relative overflow-hidden"
            onWheel={handleWheel}
        >
            {/* Right Side Navigation Arrows (Desktop) */}
            <div className="absolute right-4 md:right-12 lg:right-24 flex flex-col gap-4 z-10 hidden sm:flex">
                <button
                    onClick={handlePrev}
                    className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#242526] hover:bg-[#3A3B3C] border border-[#3E4042] transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex === 0}
                >
                    <ChevronUp className="w-8 h-8 text-[#E4E6EB]" />
                </button>
                <button
                    onClick={handleNext}
                    className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#242526] hover:bg-[#3A3B3C] border border-[#3E4042] transition-colors ${currentIndex === REELS_DATA.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex === REELS_DATA.length - 1}
                >
                    <ChevronDown className="w-8 h-8 text-[#E4E6EB]" />
                </button>
            </div>

            {/* Reel Viewer Container */}
            <div className="w-full h-full sm:h-[95%] sm:max-w-[450px] relative overflow-hidden sm:rounded-[12px] shadow-[0_0_15px_rgba(0,0,0,0.4)] bg-black">

                {/* Scrollable track for smooth sliding between reels */}
                <div
                    ref={containerRef}
                    className="w-full h-full transition-transform duration-500 ease-in-out flex flex-col"
                    style={{ transform: `translateY(-${currentIndex * 100}%)` }}
                >
                    {REELS_DATA.map((reel, index) => (
                        <div key={reel.id} className="w-full h-full flex-shrink-0 relative group">

                            {/* Video Player */}
                            <video
                                ref={el => { videoRefs.current[index] = el; }}
                                src={reel.videoUrl}
                                className="w-full h-full object-cover"
                                loop
                                muted={isMuted}
                                playsInline
                                onClick={() => setIsMuted(!isMuted)}
                            />

                            {/* Dark Gradient Overlay for readability of text */}
                            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>

                            {/* Top-Left Volume Toggle */}
                            <button
                                onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                                className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition z-10"
                            >
                                {isMuted ? <VolumeX className="w-[18px] h-[18px] text-white" strokeWidth={2.5} /> : <Volume2 className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />}
                            </button>

                            {/* Right Side Interaction Buttons */}
                            <div className="absolute bottom-10 right-3 flex flex-col items-center gap-5 z-10">
                                <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition">
                                    <ThumbsUp className="w-7 h-7 text-white" strokeWidth={2} />
                                    <span className="text-white text-[13px] font-semibold drop-shadow-md">{reel.likes}</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition">
                                    <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
                                    <span className="text-white text-[13px] font-semibold drop-shadow-md">{reel.comments}</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition">
                                    <Share className="w-7 h-7 text-white" strokeWidth={2} />
                                    <span className="text-white text-[13px] font-semibold drop-shadow-md">{reel.shares}</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition">
                                    <Bookmark className="w-7 h-7 text-white" strokeWidth={2} />
                                    <span className="text-white text-[13px] font-semibold drop-shadow-md">{reel.saves}</span>
                                </div>
                                <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition mt-1">
                                    <MoreHorizontal className="w-7 h-7 text-white" strokeWidth={2} />
                                </div>
                            </div>

                            {/* Bottom Left Author & Info */}
                            <div className="absolute bottom-6 left-4 right-16 z-10 flex flex-col gap-2">
                                <div className="flex items-start gap-3">
                                    <div className="avatar mt-0.5">
                                        <div className="w-10 h-10 rounded-full cursor-pointer border border-white/20">
                                            <img src={reel.author.avatar} alt="Author" className="rounded-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-1 text-white text-[15px] font-bold drop-shadow-md">
                                            <span className="cursor-pointer hover:underline">{reel.author.name}</span>
                                            {reel.author.isVerified && (
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] text-white">
                                                    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M16.707,9.707l-5.5,5.5 c-0.391,0.391-1.023,0.391-1.414,0l-2.5-2.5c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l1.793,1.793l4.793-4.793 c0.391-0.391,1.023-0.391,1.414,0S17.098,9.316,16.707,9.707z" />
                                                </svg>
                                            )}
                                            <span className="font-normal mx-0.5 text-white/90">-</span>
                                            <span className="text-white hover:text-gray-300 font-bold transition cursor-pointer">Follow</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-white/90 text-[13px] drop-shadow-md mt-0.5">
                                            <span className="text-[10px]">🎵</span>
                                            <span className="hover:underline cursor-pointer truncate max-w-[200px]">{reel.audio}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col pr-2 mt-1">
                                    <p className="text-white text-[14px] drop-shadow-md leading-snug">
                                        {reel.caption}
                                    </p>
                                    <span className="text-white/90 text-[14px] font-semibold cursor-pointer hover:underline mt-0.5">... See more</span>
                                </div>
                            </div>

                            {/* Minimal Bottom Progress Bar */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20 z-20">
                                <div className="h-full bg-white/60 w-1/4 rounded-r-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
