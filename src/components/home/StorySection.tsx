"use client";
import { Plus, ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const stories = [
    { name: "Azmin Akanda", img: "https://i.pravatar.cc/150?img=41", avatar: "https://i.pravatar.cc/150?img=41" },
    { name: "Arin Urmi Afreen", img: "https://i.pravatar.cc/150?img=42", avatar: "https://i.pravatar.cc/150?img=42" },
    { name: "Tamanna Jahan", img: "https://i.pravatar.cc/150?img=43", avatar: "https://i.pravatar.cc/150?img=43" },
    { name: "Hadeer Elnajaar", img: "https://i.pravatar.cc/150?img=44", avatar: "https://i.pravatar.cc/150?img=44" },
    { name: "Atahar Ali Khan Jr.", img: "https://i.pravatar.cc/150?img=45", avatar: "https://i.pravatar.cc/150?img=45" },
    { name: "Humaira Tasnim Hiya", img: "https://i.pravatar.cc/150?img=46", avatar: "https://i.pravatar.cc/150?img=46" },
];

const StorySection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 350;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    // Initial check in case there are too few stories to scroll
    useEffect(() => {
        handleScroll();
    }, []);

    return (
        <div className="relative pt-2 pb-4 group/carousel">
            {/* Left Arrow */}
            {showLeftArrow && (
                <button 
                    onClick={() => scroll('left')}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#3E4042] hover:bg-[#4E4F50] rounded-full flex items-center justify-center shadow-lg transition-colors"
                >
                    <ChevronLeft className="w-6 h-6 text-[#A8ABAF]" />
                </button>
            )}

            <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-[8px] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x scroll-smooth"
            >
                {/* Create Story */}
                <div className="flex-shrink-0 w-[112px] md:w-[140px] h-[200px] md:h-[250px] rounded-xl bg-[#242526] overflow-hidden relative cursor-pointer group shadow-[0_1px_2px_rgba(0,0,0,0.2)] border border-[#3E4042] snap-start">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-[150px] md:h-[188px] object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute bottom-0 w-full h-[50px] md:h-[62px] flex flex-col items-center justify-end pb-2 md:pb-3">
                        <span className="text-[13px] font-semibold text-[#E4E6EB]">Create story</span>
                    </div>
                    <div className="absolute bottom-[30px] md:bottom-[42px] left-1/2 -translate-x-1/2 w-10 h-10 bg-[#0866FF] rounded-full flex items-center justify-center border-4 border-[#242526]">
                        <Plus className="w-6 h-6 text-white" strokeWidth={3} />
                    </div>
                </div>

                {/* Other Stories */}
                {stories.map((story, i) => (
                    <div key={i} className="flex-shrink-0 w-[112px] md:w-[140px] h-[200px] md:h-[250px] rounded-xl overflow-hidden relative cursor-pointer group shadow-[0_1px_2px_rgba(0,0,0,0.2)] border border-[#3E4042] snap-start">
                        <img src={story.img} alt={story.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
                        <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-[3px] border-[#0866FF] overflow-hidden z-10">
                            <img src={story.avatar} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 z-10">
                            <span className="text-[13px] font-semibold text-white leading-tight block text-shadow-sm drop-shadow-md">{story.name}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            {showRightArrow && (
                <button 
                    onClick={() => scroll('right')}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#3E4042] hover:bg-[#4E4F50] rounded-full flex items-center justify-center shadow-lg transition-colors opacity-100 md:opacity-0 group-hover/carousel:opacity-100"
                >
                    <ChevronRight className="w-6 h-6 text-[#A8ABAF]" />
                </button>
            )}
        </div>
    );
};

export default StorySection;
