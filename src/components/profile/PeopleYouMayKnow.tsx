import { X, UserPlus, ChevronRight } from 'lucide-react';

export default function PeopleYouMayKnow() {
    const people = [
        { name: "Hamzeh AL Nsour", mutual: 2, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
        { name: "Dr-Hala Mashaal", mutual: 2, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" },
        { name: "Elena Molchanova", mutual: 1, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" },
        { name: "Adel Cars", mutual: 1, image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=400&fit=crop" }, 
        { name: "النقيب طارق نبيل", mutual: 0, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
        { name: "Huzaifa Sheikh", mutual: 1, image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=400&fit=crop" },
        { name: "Ahmed", mutual: 11, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    ];

    return (
        <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-4 bg-[#242526]">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-[17px] font-bold text-[#E4E6EB]">People You May Know</h2>
                <button className="text-[#4599FF] hover:bg-[#3A3B3C] px-2 py-1 rounded-md transition-colors text-[15px] font-semibold">See all</button>
            </div>

            <div className="relative group">
                <div className="flex gap-2 overflow-x-auto snap-x scrollbar-hide pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {people.map((person, i) => (
                        <div key={i} className="min-w-[190px] w-[190px] bg-[#242526] border border-[#3E4042] rounded-xl overflow-hidden flex-shrink-0 snap-start relative shadow-sm">
                            {/* X button */}
                            <button className="absolute top-2 right-2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors z-10">
                                <X className="w-5 h-5 text-[#E4E6EB]" />
                            </button>

                            {/* Image */}
                            <div className="w-full aspect-square relative">
                                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors"></div>
                            </div>

                            {/* Content */}
                            <div className="p-3">
                                <h3 className="font-semibold text-[#E4E6EB] text-[15px] truncate">{person.name}</h3>
                                {person.mutual > 0 ? (
                                    <div className="flex items-center gap-1.5 mt-1 mb-3 text-[#A8ABAF] text-[13px]">
                                        <div className="flex -space-x-1 flex-shrink-0">
                                            <img src={`https://i.pravatar.cc/150?img=${i+10}`} className="w-4 h-4 rounded-full border border-[#242526]" alt="" />
                                            {person.mutual > 1 && <img src={`https://i.pravatar.cc/150?img=${i+20}`} className="w-4 h-4 rounded-full border border-[#242526]" alt="" />}
                                        </div>
                                        <span className="truncate">{person.mutual} mutual friend{person.mutual > 1 ? 's' : ''}</span>
                                    </div>
                                ) : (
                                    <div className="h-6 mb-3"></div>
                                )}

                                <button className="w-full bg-[#263951] hover:bg-[#344D6D] text-[#4599FF] py-1.5 rounded-md flex items-center justify-center gap-1.5 font-semibold text-[15px] transition-colors">
                                    <UserPlus className="w-4 h-4" />
                                    Add friend
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#3A3B3C] border border-[#3E4042] hover:bg-[#4E4F50] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hidden md:flex">
                    <ChevronRight className="w-6 h-6 text-[#E4E6EB]" />
                </button>
            </div>
        </div>
    );
}
