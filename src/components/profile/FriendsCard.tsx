const friends = [
    { name: "Tanvir Islam", mutual: "1 mutual friend", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop" },
    { name: "زين زين", mutual: "7 mutual friends", img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=400&h=400&fit=crop" },
    { name: "Jannatul Bushra", mutual: "1 mutual friend", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
    { name: "Rafsan Hossain", mutual: "12 mutual friends", img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop" },
    { name: "Ahmed Rifat", mutual: "3 mutual friends", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop" },
    { name: "Sadia Afrin", mutual: "5 mutual friends", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
    { name: "Kamrul Islam", mutual: "2 mutual friends", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
    { name: "Nusrat Jahan", mutual: "9 mutual friends", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" },
    { name: "Fahim Rahman", mutual: "4 mutual friends", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
];

const FriendsCard = () => {
    return (
        <div className="bg-[#242526] rounded-xl p-4 w-full border border-[#3E4042] shadow-sm mb-4">
            {/* Header */}
            <div className="flex items-start justify-between mb-1">
                <div>
                    <h2 className="text-[20px] font-bold text-[#E4E6EB] hover:underline cursor-pointer">Friends</h2>
                    <span className="text-[15px] text-[#A8ABAF]">3,342 friends</span>
                </div>
                <button className="text-[15px] text-[#4599FF] hover:bg-[#3A3B3C] px-2 py-1.5 rounded-md transition-colors">
                    See all friends
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-1 md:gap-2 mt-4">
                {friends.map((friend, i) => (
                    <div key={i} className="flex flex-col cursor-pointer group">
                        <div className="w-full aspect-square rounded-lg overflow-hidden mb-2 relative">
                            <img 
                                src={friend.img} 
                                alt={friend.name} 
                                className="w-full h-full object-cover group-hover:brightness-95 transition-all"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <span className="text-[13px] font-semibold text-[#E4E6EB] leading-tight group-hover:underline line-clamp-2">
                            {friend.name}
                        </span>
                        <span className="text-[12px] text-[#A8ABAF] mt-0.5">
                            {friend.mutual}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriendsCard;
