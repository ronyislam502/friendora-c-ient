import { MoreHorizontal, Search, Pencil } from 'lucide-react';

export default function PhotosPage() {
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

    // Double the array to have 18 items to fill the grid nicely
    const photos = [...rawPhotos, ...rawPhotos];

    return (
        <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-4">
            <div className="bg-base-100 rounded-xl shadow-sm p-4">
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
                        <a role="tab" className="tab tab-active text-primary border-primary font-semibold">Your photos</a>
                        <a role="tab" className="tab font-semibold">Photos of you</a>
                        <a role="tab" className="tab font-semibold">Albums</a>
                    </div>
                    <div className="flex-shrink-0 ml-4 mb-1">
                        <button className="btn btn-ghost btn-sm btn-circle text-primary">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                    {photos.map((photo, i) => (
                        <div key={i} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer bg-base-300 border border-base-300/50">
                            <img 
                                src={photo} 
                                alt={`Photo ${i+1}`} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                            {/* Edit Pencil Icon overlay - visible on hover like FB */}
                            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Pencil className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
