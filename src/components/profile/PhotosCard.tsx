const photos = [
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

const PhotosCard = () => {
    return (
        <div className="bg-[#242526] rounded-xl w-full border border-[#3E4042] shadow-sm mb-4 overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between p-4 pb-3">
                <h2 className="text-[20px] font-bold text-[#E4E6EB] hover:underline cursor-pointer">Photos</h2>
                <button className="text-[15px] text-[#4599FF] hover:bg-[#3A3B3C] px-2 py-1.5 rounded-md transition-colors">
                    See all photos
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-[2px] rounded-b-xl overflow-hidden pb-1 px-1">
                {photos.map((photo, i) => (
                    <div key={i} className="w-full aspect-square relative cursor-pointer group">
                        <img 
                            src={photo} 
                            alt={`Photo ${i + 1}`} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotosCard;
